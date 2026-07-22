import { useEffect, useState } from "react";
import { ManageTeacherWrapper } from "../../../Styles/ModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import Pagination from "../../Pagination";
import ButtonLoader from "../../Loader/ButtonLoader";

const ManageTeacher = ({ isManageTeacherModalOpen, setIsManageTeacherModalOpen, manageTeacherType, selectedClass, section, currentSubject, currentSubjectTeacherId, currentSubjectCoTeacherIds, refreshData }) => {
    const api = getApiEndpoints();
    const [page, setPage] = useState(1);
    const [teachers, setTeachers] = useState([]);
    const [isInitialTeacherssLoading, setIsInitialTeacherssLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');
    const [selectedClassTeacherId, setSelectedClassTeacherId] = useState(null);
    const [selectedSubjectTeacherId, setSelectedSubjectTeacherId] = useState(null);
    const [selectedCoTeacherIds, setSelectedCoTeacherIds] = useState([]);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setIsManageTeacherModalOpen(false);
        setPage(1);
    }

    const getHeading = () => {
        switch (manageTeacherType) {
            case "manage_class_teacher":
                return `Manage Class Teacher for Class ${selectedClass} - ${section}`;

            case "manage_subject_teacher":
                return `Manage Subject Teacher for ${currentSubject} of Class ${selectedClass} - ${section}`;

            case "manage_co_teacher":
                return `Manage Co-Teachers for ${currentSubject} of Class ${selectedClass} - ${section}`;

            default:
                return "Manage Teacher";
        }
    };

    const fetchTeachers = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialTeacherssLoading(true);
        }
        const params = {
            page: pageNumber,
            limit: 7
        };

        if (manageTeacherType === "manage_subject_teacher" || manageTeacherType === "manage_co_teacher") {
            params.subject = currentSubject;
        }
        try {
            const response = await axiosInstance.get(api.fetchTeachers, { params });
            if (response?.data.status === 200) {
                console.log('Teachers', response.data);
                setTeachers(response?.data.teachers);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialTeacherssLoading(false);
        }
    }

    useEffect(() => {
        if (isManageTeacherModalOpen) {
            fetchTeachers(true, page);
        }
    }, [isManageTeacherModalOpen, page]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    useEffect(() => {
        if (isManageTeacherModalOpen) {
            console.log(currentSubjectTeacherId);
            setSelectedSubjectTeacherId(currentSubjectTeacherId);
            setSelectedCoTeacherIds(currentSubjectCoTeacherIds || []);
        }
    }, [isManageTeacherModalOpen, currentSubjectTeacherId, currentSubjectCoTeacherIds]);

    const handleTeacherToggle = (teacherId) => {
        if (manageTeacherType === "manage_class_teacher") {
            const teacher = teachers.find(
                (item) => item.id === teacherId
            );

            const currentClassSection = `${selectedClass}-${section}`;

            if (teacher?.class_teacher && teacher.class_teacher !== currentClassSection) {
                return;
            }

            setSelectedClassTeacherId((prev) =>
                prev === teacherId ? null : teacherId
            );
        } else if (manageTeacherType === "manage_subject_teacher") {
            if (currentSubjectTeacherId && currentSubjectTeacherId !== teacherId) {
                toast.error("A subject teacher is already assigned.");
                return;
            }

            setSelectedSubjectTeacherId(
                selectedSubjectTeacherId === teacherId
                    ? null
                    : teacherId
            );
        } else if (manageTeacherType === "manage_co_teacher") {
            setSelectedCoTeacherIds((prev) =>
                prev.includes(teacherId)
                    ? prev.filter((id) => id !== teacherId)
                    : [...prev, teacherId]
            );
        }
    };

    const hasChanges =
        manageTeacherType === "manage_class_teacher"
            ? selectedClassTeacherId !== null
            : manageTeacherType === "manage_subject_teacher"
                ? selectedSubjectTeacherId !== currentSubjectTeacherId
                : JSON.stringify([...selectedCoTeacherIds].sort()) !==
                JSON.stringify([...(currentSubjectCoTeacherIds || [])].sort());

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        let payload = {};
        let type = "";

        if (manageTeacherType === "manage_class_teacher") {
            payload = {
                teacherId: selectedClassTeacherId,
                class: selectedClass,
                section,
            };
            type = "class_teacher";
        } else if (manageTeacherType === "manage_subject_teacher") {
            payload = {
                teacherId: selectedSubjectTeacherId,
                class: selectedClass,
                section,
                subject: currentSubject,
            };
            type = "subject_teacher";
        } else if (manageTeacherType === "manage_co_teacher") {
            payload = {
                teacherId: selectedCoTeacherIds,
                class: selectedClass,
                section,
                subject: currentSubject,
            };
            type = "co_teacher";
            console.log(payload);
        }

        try {
            const response = await axiosInstance.post(api.editClassSectionTeacher, payload, {
                params: {
                    intent: "add",
                    type,
                },
            });

            if (response?.data.status === 200) {
                console.log(response.data);
                toast.success(response?.data.message);
                refreshData();
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <ManageTeacherWrapper className={isManageTeacherModalOpen ? "active" : ""}>
                <div className={`modal_box ${isManageTeacherModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>{getHeading()}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="table_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Teacher name..." />
                        </div>
                        <div className="sec_inner">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Teacher Name</th>
                                        <th>Contact No.</th>
                                        <th>Assign</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialTeacherssLoading ? (
                                            Array.from({ length: 2 }).map((_, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <SkeletonLoader width="30px" height="30px" />
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <SkeletonLoader width="100%" height="15px" />
                                                        </div>
                                                    </td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td>
                                                        <SkeletonLoader width="50px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : teachers.length > 0 ? (
                                            teachers.map((teacher, i) => {
                                                let shouldBeChecked = false;
                                                const currentClassSection = `${selectedClass}-${section}`;
                                                if (manageTeacherType === "manage_class_teacher") {
                                                    const isOtherClassTeacher =
                                                        teacher.class_teacher &&
                                                        teacher.class_teacher !== currentClassSection;

                                                    if (isOtherClassTeacher) {
                                                        shouldBeChecked = true;
                                                    } else {
                                                        shouldBeChecked = selectedClassTeacherId === teacher.id;
                                                    }
                                                } else if (manageTeacherType === "manage_subject_teacher") {
                                                    shouldBeChecked = selectedSubjectTeacherId === teacher.id;
                                                } else if (manageTeacherType === "manage_co_teacher") {
                                                    shouldBeChecked = selectedCoTeacherIds.includes(teacher.id);
                                                }

                                                const shouldBeDisabled =
                                                    manageTeacherType === "manage_class_teacher" &&
                                                    teacher.class_teacher &&
                                                    teacher.class_teacher !== currentClassSection;

                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            <div className="left_table_sec">
                                                                <h5>{getInitials(teacher.name)}</h5>
                                                            </div>
                                                            <div className="right_table_sec">
                                                                <h6>{teacher.name}</h6>
                                                            </div>
                                                        </td>
                                                        <td>{teacher.phone}</td>
                                                        <td>
                                                            <div className={`toggle_bar ${shouldBeDisabled ? "disabled" : ""}`}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={`toggle-${teacher.id}`}
                                                                    checked={shouldBeChecked}
                                                                    disabled={shouldBeDisabled}
                                                                    onChange={() => handleTeacherToggle(teacher.id)}
                                                                />
                                                                <label htmlFor={`toggle-${teacher.id}`}>
                                                                    <span></span>
                                                                </label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No teachers available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        {
                            totalCount > 7 &&
                            <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={7} onPageChange={(newPage) => setPage(newPage)} />
                        }
                    </div>
                    <div className="modal_btn">
                        <button onClick={closeModal}>Cancel</button>
                        <button disabled={!hasChanges || isButtonLoading} onClick={handleSubmit}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save Changes</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </ManageTeacherWrapper>
        </>
    );
}

export default ManageTeacher;