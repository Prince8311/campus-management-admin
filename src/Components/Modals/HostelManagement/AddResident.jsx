import { AddResidentWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";

const AddResidentModal = ({ isAddResidentOpen, setIsAddResidentOpen }) => {

    const closeModal = () => {
        setIsAddResidentOpen(false);
    };

    return (
        <>
            <AddResidentWrapper className={isAddResidentOpen ? "active" : ''}>
                <div className={`modal_box ${isAddResidentOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Resident</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box fullwidth">
                                <span>Select Resident <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Sick Room</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sick Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Building <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Sick Room</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sick Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Room <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Sick Room</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sick Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Class <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Contact No. <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Mail ID <p>*</p></span>
                                <input type="text" readOnly />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Food Preference <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Veg</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Non Veg</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="toggle_bar">
                            <input
                                type="checkbox"
                                id="toggle"
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <p>Make this field mandatory</p>
                        <button>Save</button>
                    </div>
                </div>
            </AddResidentWrapper>
        </>
    );
}

export default AddResidentModal;