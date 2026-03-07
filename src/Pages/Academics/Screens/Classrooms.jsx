import { useState } from "react";
import CreateAcademicLabelModal from "../../../Components/Modals/AcademicsModals/CreateAcademicLabel";
import { ClassroomsWrapper } from "../../../Styles/AcademicStyle";
import CreateClassModal from "../../../Components/Modals/AcademicsModals/CreateClass";

const ClassroomPage = () => {
    const [isCreateAcademicLabelOpen, setIsCreateAcademicLabelOpen] = useState(false);
    const [isCreateClassOpen, setIsCreateClassOpen] = useState(false);

    const handleOpenCreateAcademicLabel = () => {
        setIsCreateAcademicLabelOpen(true);
    };

    const handleOpenCreateClass = () => {
        setIsCreateClassOpen(true);
    };

    return (
        <>
            <ClassroomsWrapper>
                <div className="page_head">
                    <h2>Classroom Setup</h2>
                    <div className="btns_sec">
                        <button className="academic" onClick={handleOpenCreateAcademicLabel}><i className="fa-solid fa-plus"></i>Add Academic label</button>
                        <button className="add_class" onClick={handleOpenCreateClass}><i className="fa-solid fa-plus"></i>Add Class</button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Primary</li>
                        <li>Middle</li>
                        <li>Secondary</li>
                        <li>Custom</li>
                    </div>
                </div>
                <div className="class_levels">
                    <div className="class_level_box">
                        <div className="box_head">
                            <span>Class - 1</span>
                            <button>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add New Section</p>
                            </button>
                        </div>
                        <div className="box_items">
                            <div className="class_item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <a><i className="fa-solid fa-chalkboard-user"></i></a>
                                        <div className="part_content">
                                            <div className="content_name">
                                                <h6>1 - A</h6>
                                                <span>1000 Students</span>
                                            </div>
                                            <p><b>Class Teacher :</b>Poonam C K</p>
                                        </div>

                                    </div>
                                    <div className="bottom_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="class_item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <a><i className="fa-solid fa-chalkboard-user"></i></a>
                                        <div className="part_content">
                                            <div className="content_name">
                                                <h6>1 - A</h6>
                                                <span>1000 Students</span>
                                            </div>
                                            <p><b>Class Teacher :</b>Poonam C K</p>
                                        </div>

                                    </div>
                                    <div className="bottom_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="class_item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <a><i className="fa-solid fa-chalkboard-user"></i></a>
                                        <div className="part_content">
                                            <div className="content_name">
                                                <h6>1 - A</h6>
                                                <span>1000 Students</span>
                                            </div>
                                            <p><b>Class Teacher :</b>Poonam C K</p>
                                        </div>

                                    </div>
                                    <div className="bottom_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="class_item">
                                <div className="item_inner">
                                    <div className="top_part">
                                        <a><i className="fa-solid fa-chalkboard-user"></i></a>
                                        <div className="part_content">
                                            <div className="content_name">
                                                <h6>1 - A</h6>
                                                <span>1000 Students</span>
                                            </div>
                                            <p><b>Class Teacher :</b>Poonam C K</p>
                                        </div>

                                    </div>
                                    <div className="bottom_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CreateAcademicLabelModal
                    isCreateAcademicLabelOpen={isCreateAcademicLabelOpen}
                    setIsCreateAcademicLabelOpen={setIsCreateAcademicLabelOpen}
                />
                <CreateClassModal
                    isCreateClassOpen={isCreateClassOpen}
                    setIsCreateClassOpen={setIsCreateClassOpen}
                />
            </ClassroomsWrapper>
        </>
    );
}

export default ClassroomPage;