import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ClassroomDetailsWrapper } from "../../../Styles/AcademicStyle";
import AddSubjectModal from '../../../Components/Modals/Academics/AddSubject';
import ManageSubjectModal from '../../../Components/Modals/Academics/ManageSubject';
import { toast } from 'react-toastify';
import axiosInstance from '../../../Services/Middleware/AxiosInstance';
import { getApiEndpoints } from '../../../Services/Api/ApiConfig';
import SkeletonLoader from '../../../Components/Loader/SkeletonLoader';
import ManageTeacher from '../../../Components/Modals/Academics/ManageTeacher';

const ClassroomDetailsPage = () => {
    const api = getApiEndpoints();
    const [selectedClass] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).selectedClass : '');
    const [sections] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).sections : []);
    const [selectedSection, setSelectedSection] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).selectedSection : '');

    const [classroomDetails, setClassroomDetails] = useState({});

    const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
    const [isManageSubjectModalOpen, setIsManageSubjectModalOpen] = useState(false);
    const [isManageTeacherModalOpen, setIsManageTeacherModalOpen] = useState(false);
    const [manageTeacherType, setManageTeacherType] = useState("");

    const handleOpenSubjectAddModal = () => {
        setIsAddSubjectModalOpen(true);
    }

    const handleOpenSubjectManageModal = () => {
        setIsManageSubjectModalOpen(true);
    }

    const handleOpenTeacherManageModal = (type) => {
        setManageTeacherType(type);
        setIsManageTeacherModalOpen(true);
    }

    const fetchClassDetails = async () => {
        try {
            const response = await axiosInstance.get(api.classSectionDetails, {
                params: {
                    class: selectedClass,
                    section: selectedSection
                }
            });
            if (response?.data.status === 200) {
                console.log("Class Details: ", response.data.data);
                setClassroomDetails(response?.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedClass && selectedSection) {
            fetchClassDetails();
        }
    }, []);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    return (
        <>
            <ClassroomDetailsWrapper>
                <div className="page_head">
                    <h2>Class {selectedClass} - {selectedSection}</h2>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={8}
                            className="mySwiper"
                        >
                            {sections && sections.map((section, idx) => (
                                <SwiperSlide key={section}>
                                    <li
                                        className={selectedSection === section ? 'active' : ''}
                                        onClick={() => setSelectedSection(section)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {selectedClass} - {section}
                                    </li>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="class_teacher_sec">
                    <div className="sec_inner">
                        <div className="inner_top_sec">
                            <li>
                                <h5>Manage class teacher for 10 - A</h5>
                                <p>Class teacher is responsible for day to day activities of the class</p>
                            </li>
                            {
                                (!classroomDetails.class_teacher) &&
                                <a onClick={() => handleOpenTeacherManageModal("add_class_teacher")}>
                                    <i className="fa-solid fa-plus"></i>Add Class Teacher
                                </a>
                            }
                        </div>
                        {
                            classroomDetails.class_teacher &&
                            <div className="inner_bottom_sec">
                                <div className="teacher_name_sec">
                                    <div className="left_sec">
                                        <h6>PK</h6>
                                    </div>
                                    <div className="right_sec">
                                        <p>POONAM C K</p>
                                        <span>91-7760390715</span>
                                    </div>
                                </div>
                                <div className="btn_sec">
                                    <button>Remove</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="class_details_sec">
                    <div className="student_box">
                        <div className="student_box_inner">
                            <div className="student_heading">
                                <h6>Student List</h6>
                                <div className="search_sec">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search by student name..." />
                                </div>
                            </div>
                            <div className="student_list_sec">
                                {
                                    (classroomDetails.students) && (classroomDetails.students).length > 0 ? (
                                        (classroomDetails.students).map((student, i) =>
                                            <div className="list_box" key={i}>
                                                <div className="left_sec">
                                                    <h5>{getInitials(student.name)}</h5>
                                                </div>
                                                <div className="right_sec">
                                                    <h6>{student.name}</h6>
                                                    <p>#{student.enrollment_id}</p>
                                                </div>
                                                <a className='absent'></a>
                                            </div>
                                        )
                                    ) : (
                                        <div className="empty_box">
                                            <img src="/images/no-fields.svg" alt="" />
                                            <p>No Student available.</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="details_box">
                        <div className="box_head_sec">
                            <div className="head_content">
                                <h4>Manage subjects for 10 - A</h4>
                                <p>Add/remove subjects for the class and assign teachers to respective subjects</p>
                                <div className="search_sec">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search by Subject..." />
                                </div>
                            </div>
                            <div className="add_btn">
                                <button onClick={handleOpenSubjectAddModal}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Add Subject</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_item_sec">
                            {
                                (classroomDetails.subjects) && (classroomDetails.subjects).length > 0 ? (
                                    <div className="item">
                                        <div className="item_inner">
                                            <div className="top_part">
                                                <div className="part_content">
                                                    <a><i className="fa-solid fa-book-open"></i></a>
                                                    <h6>Subject Name</h6>
                                                    <span onClick={handleOpenSubjectManageModal}>1000 Students <i className="fa-solid fa-angle-right"></i></span>
                                                </div>
                                                <div className="teacher_sec">
                                                    <div className="teacher_box">
                                                        <div className="teacher_heading">
                                                            <h5>Subject Teacher</h5>
                                                            <li>
                                                                <a className='edit' onClick={() => handleOpenTeacherManageModal("manage_teacher")}>
                                                                    <i className="fa-solid fa-pen-to-square"></i>Edit
                                                                </a>
                                                                {/* <a className='add'><i className="fa-solid fa-plus"></i>Add</a> */}
                                                            </li>
                                                        </div>
                                                        <p>SOMASHEKAR M BHAIRANATTI</p>
                                                        <span>91-9916068002</span>
                                                    </div>
                                                    <div className="teacher_box">
                                                        <div className="teacher_heading">
                                                            <h5>Co Teacher</h5>
                                                            <li>
                                                                <button className='add' onClick={() => handleOpenTeacherManageModal("manage_co_teacher")}>
                                                                    <i className="fa-solid fa-plus prefix"></i>Add / Remove<i className="fa-solid fa-angle-right"></i>
                                                                </button>
                                                            </li>
                                                        </div>
                                                        <p>SOMASHEKAR M BHAIRANATTI</p>
                                                        <span>91-9916068002</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom_btn">
                                                <div className="left_btns">
                                                    <a className="left_box">
                                                        <h6>Compulsory</h6>
                                                    </a>
                                                    <a className="left_box active">
                                                        <h6>Optional</h6>
                                                    </a>
                                                </div>
                                                <div className="right_btns">
                                                    <button className="edit">Edit Name</button>
                                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="empty_box">
                                        <img src="/images/no-fields.svg" alt="" />
                                        <p>No Subjects available.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <AddSubjectModal
                    isAddSubjectModalOpen={isAddSubjectModalOpen}
                    setIsAddSubjectModalOpen={setIsAddSubjectModalOpen}
                />

                <ManageSubjectModal
                    isManageSubjectModalOpen={isManageSubjectModalOpen}
                    setIsManageSubjectModalOpen={setIsManageSubjectModalOpen}
                />

                <ManageTeacher
                    isManageTeacherModalOpen={isManageTeacherModalOpen}
                    setIsManageTeacherModalOpen={setIsManageTeacherModalOpen}
                    manageTeacherType={manageTeacherType}
                />
            </ClassroomDetailsWrapper>
        </>
    );
}

export default ClassroomDetailsPage;