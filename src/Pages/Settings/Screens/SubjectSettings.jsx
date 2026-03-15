import { useEffect, useState } from "react";
import CreateSubjectsModal from "../../../Components/Modals/Setting/CreateSubjects";
import { SubjectSettingsWrapper } from "../../../Styles/SettingStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import DeleteConfirmationModal from "../../../Components/Modals/DeleteConfirmation";

const SubjectSettingsPage = () => {
    const api = getApiEndpoints();
    const [subjects, setSubjects] = useState([]);
    const [page, setPage] = useState(1);
    const [isInitialSubjectsLoading, setIsInitialSubjectsLoading] = useState(true);
    const [isCreateSubjectOpen, setIsCreateSubjectOpen] = useState(false);
    const [isDeleteSubjectOpen, setIsDeleteSubjectOpen] = useState(false);

    const handleOpenCreateSubject = () => {
        setIsCreateSubjectOpen(true);
    };

    const handleDeleteSubject = () => {
        setIsDeleteSubjectOpen(true);
        setIsCreateSubjectOpen(false);
    };

    const fetchSubjects = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialSubjectsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchSubjects, {
                params: { page: pageNumber }
            });
            if (response?.data.status === 200) {
                setSubjects(response?.data.subjects);
                console.log("subjects", response);
            }
        } catch (error) {
            setSubjects([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialSubjectsLoading(false);
        }
    }

    useEffect(() => {
        fetchSubjects(true);
    }, [page]);

    return (
        <>
            <SubjectSettingsWrapper>
                <div className="page_head">
                    <h2>All Subjects</h2>
                </div>
                <div className="subject_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Subjects..." />
                    </div>
                    <div className="add_btn">
                        <button onClick={handleOpenCreateSubject}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Subject</p>
                        </button>
                    </div>
                </div>
                <div className="subjects_levels">
                    {
                        isInitialSubjectsLoading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="subject_box">
                                    <SkeletonLoader width="100%" height="110px" />
                                </div>
                            ))
                        ) : subjects.length > 0 ? (
                            subjects.map((subject, i) =>
                                <div className="subject_box" key={i}>
                                    <div className="box_inner">
                                        <div className="top_part">
                                            <div className="part_content">
                                                <a><i className="fa-solid fa-book"></i></a>
                                                <h6>{subject.subject_name}</h6>
                                            </div>
                                            <div className="subject_assigning_sec">
                                                <p><b>Class Assigned :</b>1 - A</p>
                                            </div>
                                        </div>
                                        <div className="bottom_btn">
                                            <button className="details">Edit Name</button>
                                            <button className="delete" onClick={handleDeleteSubject}><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No Subject available.</p>
                            </div>
                        )
                    }
                </div>
                <CreateSubjectsModal
                    isCreateSubjectOpen={isCreateSubjectOpen}
                    setIsCreateSubjectOpen={setIsCreateSubjectOpen}
                    refreshSubjects={() => fetchSubjects(false)}
                />
                <DeleteConfirmationModal
                    isModalOpen={isDeleteSubjectOpen}
                    setIsModalOpen={setIsDeleteSubjectOpen}
                />
            </SubjectSettingsWrapper>
        </>
    );
}

export default SubjectSettingsPage;