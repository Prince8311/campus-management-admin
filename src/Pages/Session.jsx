import { useState } from "react";
import CreateSessionsModal from "../Components/Modals/Sessions/CreateSession";
import { SessionWrapper } from "../Styles/SessionStyle";

const SessionPage = () => {
    const [isCreateSessionOpen, setIsCreateSessionOpen] = useState(false);

    const handleOpenCreateSession = () => {
        setIsCreateSessionOpen(true);
    };
    return (
        <>
            <SessionWrapper>
                <div className="page_head">
                    <h2>Academic Sessions</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenCreateSession}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create New Session</p>
                        </button>
                    </div>
                </div>
                <div className="heading_option_part">
                    <div className="inner_part">
                        <a className="part_box active">
                            <h6>All Sessions</h6>
                        </a>
                        <a className="part_box">
                            <h6>Upcoming</h6>
                        </a>
                        <a className="part_box">
                            <h6>Delete</h6>
                        </a>
                    </div>
                </div>
                <div className="session_levels">
                    <div className="box_items">
                        <div className="session_item">
                            <div className="item_inner">
                                <div className="inner_top">
                                    <div className="inner_content">
                                        <a><i className="fa-solid fa-graduation-cap"></i></a>
                                        <h6>AY 2025-26</h6>
                                        <span className="ongoing">Ongoing</span>
                                    </div>
                                    <div className="session_name">
                                        <p>01 Apr 2025 - 31 Mar 2026</p>
                                    </div>
                                </div>
                                <div className="inner_btn">
                                    <button className="edit"><i className="fa-solid fa-pen-to-square"></i>Edit</button>
                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateSessionsModal
                    isCreateSessionOpen={isCreateSessionOpen}
                    setIsCreateSessionOpen={setIsCreateSessionOpen}
                />
            </SessionWrapper>
        </>
    );
}

export default SessionPage;