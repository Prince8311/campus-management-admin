import { PassengerAddWrapper } from "../../../Styles/Modals/TransportModalsStyle";

const PassengerAddModal = ({ isAddPassenger, setIsAddPassenger }) => {

    function closeModal() {
        setIsAddPassenger(false);
    }
    return (
        <>
            <PassengerAddWrapper className={isAddPassenger ? 'active' : ''}>
                <div className={`modal_box ${isAddPassenger ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Passenger</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Passenger <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Driver</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="multi_select_box">
                                <span>Select Stopage <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="select_btn">
                                        <p>Distance</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>
                                                    <span></span>
                                                    <p></p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </PassengerAddWrapper>
        </>
    );
}

export default PassengerAddModal;