import { MapAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const MapAccountModal = ({isMapAccountModalOpen, setIsMapAccountModalOpen}) => {

    function closeModal() {
        setIsMapAccountModalOpen(false);
    }
    return (
        <>
            <MapAccountWrapper className={isMapAccountModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isMapAccountModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Map Account</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Account Name <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p></p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                <div className="user_box">
                                                    <div className="box_left">
                                                        <h6>JB</h6>
                                                    </div>
                                                    <div className="box_right">
                                                        <p>Joydeep Barik</p>
                                                        <span>#1458759351000</span>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Account Number <p>*</p></span>
                                <input type="text" readOnly />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Class <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p></p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Section <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p></p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Fee Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p></p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>IFSC Code <p>*</p></span>
                                <input type="text" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button> Save</button>
                    </div>
                </div>
            </MapAccountWrapper>
        </>
    );
}

export default MapAccountModal;