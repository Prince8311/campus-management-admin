import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { StudentInformationWrapper } from "../../../Styles/AcademicStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const StudentInformationPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [academicLevels, setAcademicLevels] = useState([]);
    const [selectedAcademicLevel, setSelectedAcademicLevel] = useState({});
    const [isAcademicLevelLoading, setIsAcademicLevelLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [students, setStudents] = useState([]);
    const [isInitialStudentsLoading, setIsInitialStudentsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');

    const redirectAddStudentScreen = () => {
        navigate("/admin/academics/add-student");
    }

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

    const fetchStudents = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialStudentsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStudents, {
                params: {
                    levelId: selectedAcademicLevel?.id,
                    page: pageNumber,
                }
            });
            if (response?.data.status === 200) {
                console.log("students", response);
                setStudents(response?.data.students);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialStudentsLoading(false);
        }
    };

    useEffect(() => {
        if (selectedAcademicLevel?.id) {
            fetchStudents(true, page);
        }
    }, [selectedAcademicLevel, page]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    return (
        <>
            <StudentInformationWrapper>
                <div className="page_head">
                    <h2>Student Directory</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Student name..." />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Select Class</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                    <div className="add_btn">
                        <button onClick={redirectAddStudentScreen}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Student</p>
                        </button>
                    </div>
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
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Contact No.</th>
                                <th>Enrollment Status</th>
                                <th>App Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialStudentsLoading ? (
                                    Array.from({ length: 2 }).map((_, i) => (
                                        <tr key={i}>
                                            <td>
                                                <div className="left_table_sec">
                                                    <SkeletonLoader width="30px" height="30px" />
                                                </div>
                                                <div className="right_table_sec">
                                                    <SkeletonLoader width="100%" height="15px" />
                                                    <SkeletonLoader width="150px" height="12px" margin="5px 0 0 0" />
                                                </div>
                                            </td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" />
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px 0 6px" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : students.length > 0 ? (
                                    students.map((student, i) =>
                                        <tr key={i}>
                                            <td>
                                                <div className="left_table_sec">
                                                    <h5>{getInitials(student.name)}</h5>
                                                </div>
                                                <div className="right_table_sec">
                                                    <h6>{student.name}</h6>
                                                    <p>{student.enrollment_id}</p>
                                                </div>
                                            </td>
                                            <td>{student.class} - {student.section}</td>
                                            <td>{student.contact_no}</td>
                                            <td>
                                                <p className={student.status ? 'active' : ''}>{student.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <p className="active">Joined</p>
                                            </td>
                                            <td>
                                                <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No students available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </StudentInformationWrapper>
        </>
    );
}

export default StudentInformationPage;