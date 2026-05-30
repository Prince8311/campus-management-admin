import { useEffect, useState } from "react";
import { ManageTeacherWrapper } from "../../../Styles/ModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import Pagination from "../../Pagination";

const ManageTeacher = ({ isManageTeacherModalOpen, setIsManageTeacherModalOpen, manageTeacherType, selectedClass, section, currentSubject }) => {
    const api = getApiEndpoints();
    const [page, setPage] = useState(1);
    const [teachers, setTeachers] = useState([]);
    const [isInitialTeacherssLoading, setIsInitialTeacherssLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');
    const [currentClassTeacher, setCurrentClassTeacher] = useState('');

    function closeModal() {
        setIsManageTeacherModalOpen(false);
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
                                            teachers.map((teacher, i) =>
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
                                                        <div className="toggle_bar">
                                                            <input
                                                                type="checkbox"
                                                                id="toggle"
                                                            />
                                                            <label htmlFor="toggle">
                                                                <span></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
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
                            totalCount > 10 &&
                            <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={7} onPageChange={(newPage) => setPage(newPage)} />
                        }
                    </div>
                    <div className="modal_btn">
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </div>
            </ManageTeacherWrapper>
        </>
    );
}

export default ManageTeacher;