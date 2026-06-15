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
import SubjectPreferenceModal from '../../../Components/Modals/Academics/SubjectPreference';
import AttendenceModal from '../../../Components/Modals/Academics/Attendence';

const ClassroomDetailsPage = () => {
    const api = getApiEndpoints();
    const [selectedClass] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).selectedClass : '');
    const [sections] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).sections : []);
    const [selectedSection, setSelectedSection] = useState(localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")).selectedSection : '');

    const [classroomDetails, setClassroomDetails] = useState({});
    const [isDetailsLoading, setIsDetailsLoading] = useState(false);

    const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false);
    const [isManageSubjectModalOpen, setIsManageSubjectModalOpen] = useState(false);
    const [isManageTeacherModalOpen, setIsManageTeacherModalOpen] = useState(false);
    const [manageTeacherType, setManageTeacherType] = useState("");
    const [currentSubject, setCurrentSubject] = useState("");
    const [isSubjectPreferenceModalOpen, setIsSubjectPreferenceModalOpen] = useState(false);
    const [currentSubjectTeacherId, setCurrentSubjectTeacherId] = useState(null);
    const [currentSubjectCoTeacherIds, setCurrentSubjectCoTeacherIds] = useState([]);
    const [isAttendenceModalOpen, setIsAttendenceModalOpen] = useState(false);
    const [isHistory, setIsHistory] = useState(false);

    const getFormattedCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = today.toLocaleString('en-US', { month: 'long' });
        const year = today.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const [filterDate, setFilterDate] = useState(getFormattedCurrentDate());

    const handleSectionChange = (section) => {
        setSelectedSection(section);

        const classroomDetails = JSON.parse(
            localStorage.getItem("classroomDetails") || "{}"
        );

        classroomDetails.selectedSection = section;

        localStorage.setItem(
            "classroomDetails",
            JSON.stringify(classroomDetails)
        );
    };

    const handleOpenSubjectAddModal = () => {
        setIsAddSubjectModalOpen(true);
    }

    const handleOpenSubjectManageModal = () => {
        setIsManageSubjectModalOpen(true);
    }

    const handleOpenTeacherManageModal = (type, subject = "", teacherData = null) => {
        setManageTeacherType(type);
        if (subject) {
            setCurrentSubject(subject);
        }

        if (type === "manage_class_teacher") {
            setCurrentSubjectTeacherId(null);
            setCurrentSubjectCoTeacherIds([]);
        } else if (type === "manage_subject_teacher") {
            setCurrentSubjectTeacherId(teacherData?.id || null);
            setCurrentSubjectCoTeacherIds([]);
        } else if (type === "manage_co_teacher") {
            setCurrentSubjectCoTeacherIds(
                Array.isArray(teacherData)
                    ? teacherData.map((teacher) => teacher.id)
                    : []
            );
            setCurrentSubjectTeacherId(null);
        }
        setIsManageTeacherModalOpen(true);
    }

    const handleOpenSubjectPreferenceModal = () => {
        setIsSubjectPreferenceModalOpen(true);
    }

    const fetchClassDetails = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsDetailsLoading(true);
        }
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
        } finally {
            setIsDetailsLoading(false);
        }
    }

    useEffect(() => {
        if (selectedClass && selectedSection) {
            fetchClassDetails(true);
        }
    }, [selectedClass, selectedSection]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const handleOpenAttendenceModal = (history) => {
        setIsHistory(history);
        setIsAttendenceModalOpen(true);
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
                                        onClick={() => handleSectionChange(section)}
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
                    {
                        isDetailsLoading ? (
                            <SkeletonLoader width="100%" height="80px" margin='25px 0 0 0' />
                        ) : (
                            <div className="sec_inner">
                                <div className="inner_top_sec">
                                    <li>
                                        <h5>Manage class teacher for 10 - A</h5>
                                        <p>Class teacher is responsible for day to day activities of the class</p>
                                    </li>
                                    {
                                        (!classroomDetails.class_teacher) &&
                                        <a onClick={() => handleOpenTeacherManageModal("manage_class_teacher")}>
                                            <i className="fa-solid fa-plus"></i>Add Class Teacher
                                        </a>
                                    }
                                </div>
                                {
                                    classroomDetails.class_teacher &&
                                    <div className="inner_bottom_sec">
                                        <div className="teacher_name_sec">
                                            <div className="left_sec">
                                                <h6>{getInitials(classroomDetails.class_teacher.name)}</h6>
                                            </div>
                                            <div className="right_sec">
                                                <p>{classroomDetails.class_teacher.name}</p>
                                                <span>{classroomDetails.class_teacher.phone}</span>
                                            </div>
                                        </div>
                                        <div className="btn_sec">
                                            <button>Remove</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    }
                </div>
                <div className="class_details_sec">
                    <div className="student_box">
                        {
                            isDetailsLoading ? (
                                <SkeletonLoader width="100%" height="250px" />
                            ) : (
                                <div className="student_box_inner">
                                    <div className="student_heading">
                                        <div className="heading_sec">
                                            <h6>Student List</h6>
                                            <a>Attendance Type: <span>{classroomDetails.attendance_type ? classroomDetails.attendance_type : 'N/A'}</span></a>
                                        </div>
                                        {
                                            classroomDetails.attendance_type &&
                                            <div className="btn_sec">
                                                <button onClick={() => handleOpenAttendenceModal(false)}><i className="fa-regular fa-circle-check"></i>Mark Attendance</button>
                                                <button onClick={() => handleOpenAttendenceModal(true)}><i className="fa-solid fa-clock-rotate-left"></i>Attendance History</button>
                                            </div>
                                        }
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
                            )
                        }
                    </div>
                    <div className="details_box">
                        {
                            isDetailsLoading ? (
                                <SkeletonLoader width="100%" height="250px" />
                            ) : (
                                <>
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
                                                (classroomDetails.subjects).map((subject, i) =>
                                                    <div className="item" key={i}>
                                                        <div className="item_inner">
                                                            <div className="top_part">
                                                                <div className="part_content">
                                                                    <a><i className="fa-solid fa-book-open"></i></a>
                                                                    <h6>{subject.subject}</h6>
                                                                    <span onClick={handleOpenSubjectManageModal}>{subject.students_count} Student{subject.students_count > 1 && 's'} <i className="fa-solid fa-angle-right"></i></span>
                                                                </div>
                                                                <div className="teacher_sec">
                                                                    <div className="teacher_box">
                                                                        <div className="teacher_heading">
                                                                            <h5>Subject Teacher</h5>
                                                                            <li>
                                                                                {
                                                                                    subject.subject_teacher ? (
                                                                                        <a className='edit' onClick={() => handleOpenTeacherManageModal("manage_subject_teacher", subject.subject, subject.subject_teacher)}>
                                                                                            <i className="fa-solid fa-pen-to-square"></i>Edit
                                                                                        </a>
                                                                                    ) : (
                                                                                        <a className='add' onClick={() => handleOpenTeacherManageModal("manage_subject_teacher", subject.subject, subject.subject_teacher)}><i className="fa-solid fa-plus"></i>Add</a>
                                                                                    )
                                                                                }
                                                                            </li>
                                                                        </div>
                                                                        {
                                                                            subject.subject_teacher ? (
                                                                                <ul>
                                                                                    <p>{subject.subject_teacher.name}</p>
                                                                                    <span>{subject.subject_teacher.phone}</span>
                                                                                </ul>
                                                                            ) : (
                                                                                <p className='empty'>N/A</p>
                                                                            )
                                                                        }
                                                                    </div>
                                                                    <div className="teacher_box">
                                                                        <div className="teacher_heading">
                                                                            <h5>Co-Teachers</h5>
                                                                            <li>
                                                                                <button className='add' onClick={() => handleOpenTeacherManageModal("manage_co_teacher", subject.subject, subject.co_teachers)}>
                                                                                    <i className="fa-solid fa-plus prefix"></i>Add / Remove<i className="fa-solid fa-angle-right"></i>
                                                                                </button>
                                                                            </li>
                                                                        </div>
                                                                        {
                                                                            (subject.co_teachers).length > 0 ? (
                                                                                <ul>
                                                                                    <li>
                                                                                        <p>{subject.co_teachers[subject.co_teachers.length - 1].name}</p>
                                                                                        {subject.co_teachers.length > 1 && (
                                                                                            <label className="more_count">
                                                                                                +{subject.co_teachers.length - 1}
                                                                                            </label>
                                                                                        )}
                                                                                    </li>
                                                                                    <span>{subject.co_teachers[subject.co_teachers.length - 1].phone}</span>
                                                                                </ul>
                                                                            ) : (
                                                                                <p className='empty'>N/A</p>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bottom_btn">
                                                                <div className="left_btns">
                                                                    <a className={`left_box ${subject.is_mandatory ? 'active' : ''}`} onClick={handleOpenSubjectPreferenceModal}>
                                                                        <h6>Compulsory</h6>
                                                                    </a>
                                                                    <a className={`left_box ${!subject.is_mandatory ? 'active' : ''}`}>
                                                                        <h6>Optional</h6>
                                                                    </a>
                                                                </div>
                                                                <div className="right_btns">
                                                                    <button className="delete"><i className="fa-solid fa-trash"></i>Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            ) : (
                                                <div className="empty_box">
                                                    <img src="/images/no-fields.svg" alt="" />
                                                    <p>No Subjects available.</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </>
                            )
                        }
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
                    selectedClass={selectedClass}
                    section={selectedSection}
                    currentSubject={currentSubject}
                    currentSubjectTeacherId={currentSubjectTeacherId}
                    currentSubjectCoTeacherIds={currentSubjectCoTeacherIds}
                    refreshData={() => fetchClassDetails(false)}
                />

                <SubjectPreferenceModal
                    isSubjectPreferenceModalOpen={isSubjectPreferenceModalOpen}
                    setIsSubjectPreferenceModalOpen={setIsSubjectPreferenceModalOpen}
                />

                <AttendenceModal
                    isAttendenceModalOpen={isAttendenceModalOpen}
                    setIsAttendenceModalOpen={setIsAttendenceModalOpen}
                    selectedDate={filterDate}
                    isHistory={isHistory}
                />
            </ClassroomDetailsWrapper>
        </>
    );
}

export default ClassroomDetailsPage;