import { AddBuildingWrapper } from "../../../Styles/Modals/HostelManagementStyle";

const AddBuildingModal = ({ isAddBuildingOpen, setIsAddBuildingOpen }) => {

    const closeModal = () => {
        setIsAddBuildingOpen(false);
    };

    return (
        <>
            <AddBuildingWrapper className={isAddBuildingOpen ? "active" : ''}>
                <div className={`modal_box ${isAddBuildingOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Hostel Building</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Building Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Total Living Rooms <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Total Sick Rooms <p>*</p></span>
                                <input type="text" />
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
            </AddBuildingWrapper>
        </>
    );
}

export default AddBuildingModal;