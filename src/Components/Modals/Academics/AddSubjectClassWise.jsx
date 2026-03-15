import { useEffect, useState } from "react";
import { AddSubjectClassWiseWrapper } from "../../../Styles/ModalStyle";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddSubjectClassWiseModal = ({ isSubjectAddModalOpen, setIsSubjectAddModalOpen, currentClass, setCurrentClass }) => {
    const api = getApiEndpoints();
    const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState({});
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setSelectedSubject({});
        setCurrentClass('');
        setIsSubjectAddModalOpen(false);
    }

    const fetchAllSubjects = async () => {
        try {
            const response = await axiosInstance.get(api.fetchSubjects, {
                params: { showAll: true }
            });
            if (response?.data.status === 200) {
                setSubjects(response?.data.subjects);
                console.log(response);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isSubjectAddModalOpen) {
            fetchAllSubjects();
        }
    }, [isSubjectAddModalOpen]);

    const handleSelectedSubject = (subject) => {
        if (subject.id === selectedSubject.id) return;
        setSelectedSubject(subject);
        setShowSubjectDropdown(false);
    }

    const handleAddSubjectClassWise = async () => {
        setIsButtonLoading(true);
        const payload = {
            academicLevelId: currentClass.level_id,
            class: currentClass.class,
            subject: selectedSubject.subject_name
        };
        try {
            const response = await axiosInstance.post(api.addSubjectClassWise, payload);
            if (response?.data.status === 200) { 
                toast.success(response?.data.message);
                setSelectedSubject({});
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddSubjectClassWiseWrapper className={isSubjectAddModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isSubjectAddModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Subject to Class {currentClass.class}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Subject <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}>
                                        <p>{selectedSubject.subject_name}</p>
                                        <i className={`fa-solid fa-angle-down ${showSubjectDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showSubjectDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                subjects.length > 5 && (
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input type="text" placeholder="Search by Subject Name..." />
                                                    </div>
                                                )
                                            }
                                            <ul>
                                                {
                                                    subjects.length > 0 ? (
                                                        subjects.map((subject, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectedSubject(subject)}
                                                                className={subject.id === selectedSubject.id ? 'active' : ''}
                                                            >
                                                                {subject.subject_name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No subjects available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!selectedSubject.id || isButtonLoading} onClick={handleAddSubjectClassWise}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </AddSubjectClassWiseWrapper>
        </>
    );
}

export default AddSubjectClassWiseModal;