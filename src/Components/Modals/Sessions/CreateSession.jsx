import { CreateSessionsWrapper } from "../../../Styles/SessionModalStyle";

const CreateSessionsModal = ({isCreateSessionOpen, setIsCreateSessionOpen}) => {

    function closeModal() {
        setIsCreateSessionOpen(false);
    }

    return (
        <>
            <CreateSessionsWrapper className={isCreateSessionOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSessionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create New Session</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Session Status <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Session</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Upcoming</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box">
                                <span>Calendar Year <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>2026 - 2027</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>2026 - 2027</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Academic Session Name<p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="date_box">
                                <span>Start Date <p>*</p></span>
                                <div className="date_btn">
                                    <p>01 Apr 2026</p>
                                    <i className="fa-regular fa-calendar"></i>
                                </div>
                                <div className="dropdown"></div>
                            </div>
                            <div className="date_box">
                                <span>End Date <p>*</p></span>
                                <div className="date_btn">
                                    <p>01 Apr 2027</p>
                                    <i className="fa-regular fa-calendar"></i>
                                </div>
                                <div className="dropdown"></div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CreateSessionsWrapper>
        </>
    );
}

export default CreateSessionsModal;