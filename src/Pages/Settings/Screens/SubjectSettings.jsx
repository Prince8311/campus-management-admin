import { SubjectSettingsWrapper } from "../../../Styles/SettingStyle";

const SubjectSettingsPage = () => {
    return (
        <>
            <SubjectSettingsWrapper>
                <div className="page_head">
                    <h2>All Subjects</h2>
                    <div className="add_btn">
                        <button>
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
                                <button className="delete"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </SubjectSettingsWrapper>
        </>
    );
}

export default SubjectSettingsPage;