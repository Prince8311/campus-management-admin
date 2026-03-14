import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CreateAcademicLabelModal from "../../../Components/Modals/Academics/CreateAcademicLabel";
import { ClassroomsWrapper } from "../../../Styles/AcademicStyle";
import CreateClassModal from "../../../Components/Modals/Academics/CreateClass";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const ClassroomPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isCreateAcademicLabelOpen, setIsCreateAcademicLabelOpen] = useState(false);
    const [isCreateClassOpen, setIsCreateClassOpen] = useState(false);
    const [isInitialLevelsLoading, setIsInitialLevelsLoading] = useState(false);
    const [academicLevels, setAcademicLevels] = useState([]);
    const [selectedAcademicLevel, setSelectedAcademicLevel] = useState({});
    const [isInitialClassesLoading, setIsInitialClassesLoading] = useState(false);
    const [academicClasses, setAcademicClasses] = useState([]);

    const handleOpenCreateAcademicLabel = () => {
        setIsCreateAcademicLabelOpen(true);
    };

    const handleOpenCreateClass = () => {
        setIsCreateClassOpen(true);
    };

    const fetchAcademicLevels = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialLevelsLoading(true);
        }
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
            setAcademicLevels([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialLevelsLoading(false);
        }
    }

    useEffect(() => {
        fetchAcademicLevels(true);
    }, []);

    const fetchClasses = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialClassesLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchClasses, {
                params: { levelId: selectedAcademicLevel.id }
            });
            if (response?.data.status === 200) {
                setAcademicClasses(response?.data.classes);
                console.log("classes", response);
            }
        } catch (error) {
            setAcademicClasses([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialClassesLoading(false);
        }
    }

    useEffect(() => {
        if (selectedAcademicLevel?.id) {
            fetchClasses(true);
        }
    }, [selectedAcademicLevel]);

    const handleRedirectionClassroomDetailsPage = () => {
        navigate("/admin/academics/classroom-details");
    }

    return (
        <>
            <ClassroomsWrapper>
                <div className="page_head">
                    <h2>Classroom Setup</h2>
                    <div className="btns_sec">
                        <button className="academic" onClick={handleOpenCreateAcademicLabel}><i className="fa-solid fa-plus"></i>Add Academic level</button>
                        <button className="add_class" onClick={handleOpenCreateClass}><i className="fa-solid fa-plus"></i>Add Class</button>
                    </div>
                </div>
                {
                    isInitialLevelsLoading ? (
                        <>
                            <div className="tab_sec i">
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
                            </div>
                            <div className="class_levels">
                                {
                                    Array.from({ length: 2 }).map((_, i) => (
                                        <div key={i} className="sec_item">
                                            <SkeletonLoader width="100%" height="250px" margin="0 0 16px 0" />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ) : academicLevels.length > 0 ? (
                        <>
                            <div className="tab_sec dhgdhdt">
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
                            </div>
                            <div className="class_levels">
                                {
                                    isInitialClassesLoading ? (
                                        Array.from({ length: 2 }).map((_, i) => (
                                            <div key={i} className="sec_item">
                                                <SkeletonLoader width="100%" height="250px" margin="0 0 16px 0" />
                                            </div>
                                        ))
                                    ) : academicClasses.length > 0 ? (
                                        academicClasses.map((academicClass, index) =>
                                            <div className="class_level_box" key={index}>
                                                <div className="box_head">
                                                    <span>Class - {academicClass.class}</span>
                                                    <button>
                                                        <i className="fa-solid fa-plus"></i>
                                                        <p>Add New Section</p>
                                                    </button>
                                                </div>
                                                <div className="box_items">
                                                    {
                                                        academicClass.length > 0 ? (
                                                            academicClass.map((section, i) =>
                                                                <div className="class_item" key={i}>
                                                                    <div className="item_inner">
                                                                        <div className="top_part">
                                                                            <div className="part_content">
                                                                                <a><i className="fa-solid fa-chalkboard-user"></i></a>
                                                                                <h6>1 - A</h6>
                                                                                <span>1000 Students</span>
                                                                            </div>
                                                                            <div className="teacher_name_sec">
                                                                                <p><b>Class Teacher :</b>Poonam C K</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bottom_btn">
                                                                            <button className="details" onClick={handleRedirectionClassroomDetailsPage}>View Details</button>
                                                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        ) : (
                                                            <div className="empty_box"></div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    ) : (
                                        <div className="empty_box"></div>
                                    )
                                }
                            </div>
                        </>
                    ) : (
                        <div className="empty_messege">
                            <img src="/images/no-fields.svg" alt="" />
                            <p>No Data available.</p>
                        </div>
                    )
                }

                <CreateAcademicLabelModal
                    isCreateAcademicLabelOpen={isCreateAcademicLabelOpen}
                    setIsCreateAcademicLabelOpen={setIsCreateAcademicLabelOpen}
                    refreshAcademicLevels={() => fetchAcademicLevels(false)}
                />
                <CreateClassModal
                    isCreateClassOpen={isCreateClassOpen}
                    setIsCreateClassOpen={setIsCreateClassOpen}
                    academicLevels={academicLevels}
                    refreshClasses={() => fetchClasses(false)}
                />
            </ClassroomsWrapper>
        </>
    );
}

export default ClassroomPage;