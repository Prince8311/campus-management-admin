import { useState } from "react";
import { CreateSessionsWrapper } from "../../../Styles/SessionModalStyle";

const CreateSessionsModal = ({ isCreateSessionOpen, setIsCreateSessionOpen }) => {
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const statusList = [ 'Upcoming', 'Ongoing'];
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleSelectStatus = (status) => {
        if (status !== selectedStatus) {
            setSelectedStatus(status);
            setShowStatusDropdown(false);
        }
    }

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
                                    <div className="dropdown_btn" onClick={() => setShowStatusDropdown(!showStatusDropdown)}>
                                        <p>{selectedStatus}</p>
                                        <i className={`fa-solid fa-angle-down ${showStatusDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStatusDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    statusList.map((status, i) =>
                                                        <li key={i} className={selectedStatus === status ? 'active' : ''} onClick={() => handleSelectStatus(status)}>{status}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                            <div className="input_box">
                                <span>Session Name<p>*</p></span>
                                <input type="text" />
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