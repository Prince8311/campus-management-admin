import { AddRoomsWrapper } from "../../../Styles/Modals/HostelManagementStyle";
const AddRoomsModal = ({ isAddRoomOpen, setIsAddRoomOpen }) => {

    const closeModal = () => {
        setIsAddRoomOpen(false);
    };


    return (
        <>
            <AddRoomsWrapper className={isAddRoomOpen ? "active" : ''}>
                <div className={`modal_box ${isAddRoomOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Hostel Living Room</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box fullwidth">
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
                            <div className="input_box">
                                <span>Room Number <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Total Beds <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Occupied <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>AC</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>AC</li>
                                                <li>Non-AC</li>
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
            </AddRoomsWrapper>
        </>
    );
}

export default AddRoomsModal;