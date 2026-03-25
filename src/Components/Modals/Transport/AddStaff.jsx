import { AddStaffWrapper } from "../../../Styles/Modals/TransportModalsStyle";

const AddStaffModal = ({ isStaffAddModal, setIsStaffAddModal }) => {

    function closeModal() {
        setIsStaffAddModal(false);
    }
    return (
        <>
            <AddStaffWrapper className={isStaffAddModal ? 'active' : ''}>
                <div className={`modal_box ${isStaffAddModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Vehicle Staff</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Staff Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box">
                                <span>Staff Role <p>*</p></span>
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
                            <div className="input_box">
                                <span>Contact No. <p>*</p></span>
                                <input type="number" />
                            </div>
                            <div className="upload_box">
                                <span>Driving License <p>*</p></span>
                                <div className="document_upload_sec">
                                    <label htmlFor="fileUpload" className="upload_label">
                                        <i className="fa-solid fa-cloud-arrow-up"></i>
                                        <p>Drag and drop your file here or <span>browse files</span></p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddStaffWrapper>
        </>
    );
}

export default AddStaffModal;