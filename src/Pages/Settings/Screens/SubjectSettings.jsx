import { useState } from "react";
import CreateSubjectsModal from "../../../Components/Modals/Setting/CreateSubjects";
import { SubjectSettingsWrapper } from "../../../Styles/SettingStyle";
import DeleteSubjectsModal from "../../../Components/Modals/Setting/DeleteSubjects";

const SubjectSettingsPage = () => {
    const [isCreateSubjectOpen, setIsCreateSubjectOpen] = useState(false);
    const [isDeleteSubjectOpen, setIsDeleteSubjectOpen] = useState(false);

    const handleOpenCreateSubject = () => {
        setIsCreateSubjectOpen(true);
    };

    const handleDeleteSubject = () => {
        setIsDeleteSubjectOpen(true);
        setIsCreateSubjectOpen(false);
    };

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
                    <div className="subject_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-solid fa-book"></i></a>
                                    <h6>English</h6>
                                </div>
                                <div className="subject_assigning_sec">
                                    <p><b>Class Assigning :</b>1 - A</p>
                                </div>
                            </div>
                            <div className="bottom_btn">
                                <button className="details">Edit Name</button>
                                <button className="delete" onClick={handleDeleteSubject}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateSubjectsModal
                    isCreateSubjectOpen={isCreateSubjectOpen}
                    setIsCreateSubjectOpen={setIsCreateSubjectOpen}
                />
                <DeleteSubjectsModal
                    isDeleteSubjectOpen={isDeleteSubjectOpen}
                    setIsDeleteSubjectOpen={setIsDeleteSubjectOpen}
                />
            </SubjectSettingsWrapper>
        </>
    );
}

export default SubjectSettingsPage;