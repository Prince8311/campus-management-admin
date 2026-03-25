import { AddVehicleWrapper } from "../../../Styles/Modals/TransportModalsStyle";

const AddVehicleModal = ({isAddVehicleModal, setIsAddVehicleModal}) => {

    function closeModal() {
        setIsAddVehicleModal(false);
    }
    return (
        <>
            <AddVehicleWrapper className={isAddVehicleModal ? 'active' : ''}>
                <div className={`modal_box ${isAddVehicleModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Vehicle</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Vehicle Number <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Vehicle Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box">
                                <span>Vehicle Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Bus</p>
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
                            <div className="input_box">
                                <span>Vehicle Capacity <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddVehicleWrapper>
        </>
    );
}

export default AddVehicleModal;