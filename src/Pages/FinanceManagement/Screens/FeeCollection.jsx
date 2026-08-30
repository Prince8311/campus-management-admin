import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FeeCollectionModal from "../../../Components/Modals/FinanceManagement/FeeCollect";
import { FeeCollectionWrapper } from "../../../Styles/FinanceStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";

const FeeCollectionPage = () => {
    const api = getApiEndpoints();
    const [academicLevels, setAcademicLevels] = useState([]);
    const [selectedAcademicLevel, setSelectedAcademicLevel] = useState({});
    const [isAcademicLevelLoading, setIsAcademicLevelLoading] = useState(false);
    const [isOpenFeeCollectModal, setIsOpenFeeCollectModal] = useState(false);
    const [isFeeCollectionInitiallyLoading, setIsFeeCollectionInitiallyLoading] = useState(false);
    const [feeCollectionData, setFeeCollectionData] = useState([]);
    const [expandedClassItem, setExpandedClassItem] = useState(null);
    const [activeClassSection, setActiveClassSection] = useState(null);
    const [feeCollectionStudents, setFeeCollectionStudents] = useState([]);
    const [isFeeCollectionStudentsLoading, setIsFeeCollectionStudentsLoading] = useState(false);
    const [studentPage, setStudentPage] = useState(1);
    const [studentTotalCount, setStudentTotalCount] = useState(0);
    const studentRequestIdRef = useRef(0);

    const fetchFeeCollectionStudents = async (className, sectionName, pageNumber = 1) => {
        const requestId = ++studentRequestIdRef.current;
        setIsFeeCollectionStudentsLoading(true);

        try {
            const response = await axiosInstance.get(api.fetchFeeCollectionStudentList, {
                params: {
                    class: className,
                    section: sectionName,
                    page: pageNumber,
                }
            });

            if (response?.data.status === 200 && requestId === studentRequestIdRef.current) {
                setFeeCollectionStudents(response?.data?.students || []);
                setStudentTotalCount(response?.data?.totalCount || 0);
            }
        } catch (error) {
            if (requestId === studentRequestIdRef.current) {
                toast.error(error.response?.data.message || error.message);
                setFeeCollectionStudents([]);
                setStudentTotalCount(0);
            }
        } finally {
            if (requestId === studentRequestIdRef.current) {
                setIsFeeCollectionStudentsLoading(false);
            }
        }
    };

    const toggleClassItem = (itemKey, className, sectionName) => {
        if (expandedClassItem === itemKey) {
            studentRequestIdRef.current += 1;
            setExpandedClassItem(null);
            setActiveClassSection(null);
            setIsFeeCollectionStudentsLoading(false);
            return;
        }

        setExpandedClassItem(itemKey);
        setActiveClassSection({ className, sectionName });
        setFeeCollectionStudents([]);
        setStudentTotalCount(0);
        setStudentPage(1);
        fetchFeeCollectionStudents(className, sectionName, 1);
    };

    const handleStudentPageChange = (newPage) => {
        if (!activeClassSection) return;

        setStudentPage(newPage);
        fetchFeeCollectionStudents(
            activeClassSection.className,
            activeClassSection.sectionName,
            newPage
        );
    };

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const fetchAcademicLevels = async () => {
        setIsAcademicLevelLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchAcademicLevels);
            if (response?.data.status === 200) {
                const levels = response?.data.levels || [];
                setAcademicLevels(levels);
                if (levels.length > 0 && !selectedAcademicLevel?.id) {
                    setSelectedAcademicLevel(levels[0]);
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsAcademicLevelLoading(false);
        }
    }

    useEffect(() => {
        fetchAcademicLevels();
    }, []);

    const fetchFeeCollectionData = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsFeeCollectionInitiallyLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchFeeCollectionList, {
                params: {
                    levelId: selectedAcademicLevel?.id,
                }
            });
            if (response?.data.status === 200) {
                setFeeCollectionData(response?.data?.classes || []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFeeCollectionInitiallyLoading(false);
        }
    }

    useEffect(() => {
        if (selectedAcademicLevel?.id) {
            studentRequestIdRef.current += 1;
            setExpandedClassItem(null);
            setActiveClassSection(null);
            setFeeCollectionStudents([]);
            setStudentTotalCount(0);
            setStudentPage(1);
            setIsFeeCollectionStudentsLoading(false);
            fetchFeeCollectionData(true);
        }
    }, [selectedAcademicLevel]);

    const handleopenFeeCollectModal = () => {
        setIsOpenFeeCollectModal(true);
    }

    return (
        <>
            <FeeCollectionWrapper>
                <div className="page_head">
                    <h2>Fees Status</h2>
                </div>
                <div className="tab_sec">
                    {
                        isAcademicLevelLoading ? (
                            <div className="tab_inner" style={{ borderBottom: 'none' }}>
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={0}
                                    className="mySwiper"
                                >
                                    {
                                        Array.from({ length: 6 }).map((_, i) => (
                                            <SwiperSlide key={i}><SkeletonLoader width="88px" height="100%" margin="0 15px 0 0" /></SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        ) : academicLevels.length > 0 && (
                            <div className="tab_inner">
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={0}
                                    className="mySwiper"
                                >
                                    {
                                        academicLevels.map((level, i) =>
                                            <SwiperSlide key={i}>
                                                <li
                                                    className={level.id === selectedAcademicLevel.id ? 'active' : ''}
                                                    onClick={() => setSelectedAcademicLevel(level)}
                                                >
                                                    {level.level_name}
                                                </li>
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                        )
                    }
                </div>
                <div className="class_levels">
                    {
                        isFeeCollectionInitiallyLoading ? (
                            <div className="class_level_box">
                                <div className="box_head">
                                    <SkeletonLoader width="100px" height="20px" />
                                </div>
                                <div className="box_items">
                                    {
                                        Array.from({ length: 5 }).map((_, i) => (
                                            <SkeletonLoader key={i} width="100%" height="70px" margin="0 0 15px 0" />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : feeCollectionData.length > 0 ? (
                            feeCollectionData.map((classData, index) =>
                                <div className="class_level_box" key={index}>
                                    <div className="box_head">
                                        <span>Class - {classData.class}</span>
                                    </div>
                                    <div className="box_items">
                                        {
                                            classData.sections.map((section, idx) => {
                                                const itemKey = `${selectedAcademicLevel.id}-${classData.id ?? classData.class}-${section.id ?? section.section}-${index}-${idx}`;
                                                const isExpanded = expandedClassItem === itemKey;

                                                return (
                                                <div className={`class_item ${isExpanded ? 'active' : ''}`} key={itemKey}>
                                                    <div
                                                        className={`top_part ${isExpanded ? 'active' : ''}`}
                                                        onClick={() => toggleClassItem(itemKey, classData.class, section.section)}
                                                        onKeyDown={(event) => {
                                                            if (event.key === 'Enter' || event.key === ' ') {
                                                                event.preventDefault();
                                                                toggleClassItem(itemKey, classData.class, section.section);
                                                            }
                                                        }}
                                                        role="button"
                                                        tabIndex={0}
                                                        aria-expanded={isExpanded}
                                                        aria-controls={`class-details-${index}-${idx}`}
                                                    >
                                                        <div className="left_info">
                                                            <li>
                                                                <p>Class</p>
                                                                <span>{classData.class} - {section.section}</span>
                                                            </li>
                                                        </div>
                                                        <div className="right_info">
                                                            <li>
                                                                <p>
                                                                    Total Applied
                                                                    <label>
                                                                        <i className="fa-solid fa-circle-info"></i>
                                                                        <a>The displayed amount is exclued discount</a>
                                                                    </label>
                                                                </p>
                                                                <span className="applied"><b>₹</b>{section.total_applied}</span>
                                                            </li>
                                                            <li>
                                                                <p>Total Discount</p>
                                                                <span className="discount"><b>₹</b>0.00</span>
                                                            </li>
                                                            <li>
                                                                <p>Total Paid</p>
                                                                <span className="paid"><b>₹</b>{section.total_paid}</span>
                                                            </li>
                                                            <li>
                                                                <p>Total Due</p>
                                                                <span className="due"><b>₹</b>{section.total_due}</span>
                                                            </li>
                                                        </div>
                                                        <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                                    </div>
                                                    <div
                                                        className={`bottom_part ${isExpanded ? 'active' : ''}`}
                                                        id={`class-details-${index}-${idx}`}
                                                        aria-hidden={!isExpanded}
                                                    >
                                                        <div className="bottom_inner">
                                                            <div className="filter_search_sec">
                                                                <div className="search_sec">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                    <input type="text" placeholder="Search by Mobile Number" />
                                                                </div>
                                                                <div className="filter_sec">
                                                                    <div className="filter_btn">
                                                                        <p>All Students</p>
                                                                        <i className="fa-solid fa-angle-down"></i>
                                                                    </div>
                                                                    <div className="filter_dropdown"></div>
                                                                </div>
                                                            </div>
                                                            <div className="table_sec">
                                                                <table>
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Student Name</th>
                                                                            <th>Contact No.</th>
                                                                            <th>Total Paid</th>
                                                                            <th>Total Due</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {
                                                                            isFeeCollectionStudentsLoading ? (
                                                                                Array.from({ length: 3 }).map((_, studentIndex) => (
                                                                                    <tr key={studentIndex}>
                                                                                        <td><SkeletonLoader width="100%" height="30px" /></td>
                                                                                        <td><SkeletonLoader width="100%" height="13px" /></td>
                                                                                        <td><SkeletonLoader width="100%" height="13px" /></td>
                                                                                        <td><SkeletonLoader width="100%" height="13px" /></td>
                                                                                        <td><SkeletonLoader width="100%" height="28px" /></td>
                                                                                    </tr>
                                                                                ))
                                                                            ) : feeCollectionStudents.length > 0 ? (
                                                                                feeCollectionStudents.map((student) => (
                                                                                    <tr key={student.student_id}>
                                                                                        <td>
                                                                                            <div className="left_table_sec">
                                                                                                <h5>{getInitials(student.student_name)}</h5>
                                                                                            </div>
                                                                                            <div className="right_table_sec">
                                                                                                <h6>{student.student_name}</h6>
                                                                                                <p>#{student.enrollment_id}</p>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td>{student.contact_no || '-'}</td>
                                                                                        <td>
                                                                                            <p><b>₹</b>{student.paid_amount}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <p><b>₹</b>{student.due_amount}</p>
                                                                                        </td>
                                                                                        <td>
                                                                                            <a className="collect_btn" onClick={handleopenFeeCollectModal}>Collect Now</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            ) : (
                                                                                <tr>
                                                                                    <td className="student_empty_message">No students available.</td>
                                                                                </tr>
                                                                            )
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            {
                                                                studentTotalCount > 10 && (
                                                                    <Pagination
                                                                        currentPage={studentPage}
                                                                        totalItems={studentTotalCount}
                                                                        itemsPerPage={10}
                                                                        onPageChange={handleStudentPageChange}
                                                                    />
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="empty_messege">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No Data available.</p>
                            </div>
                        )
                    }
                </div>

                <FeeCollectionModal
                    isOpenFeeCollectModal={isOpenFeeCollectModal}
                    setIsOpenFeeCollectModal={setIsOpenFeeCollectModal}
                />
            </FeeCollectionWrapper>
        </>
    );
}

export default FeeCollectionPage;
