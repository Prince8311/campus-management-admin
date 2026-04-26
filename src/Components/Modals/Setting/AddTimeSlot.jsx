import { AddTimeSlotWrapper } from "../../../Styles/SettingModalStyle";

const AddTimeSlotModal = ({ isAddTimeSlotOpen, setIsAddTimeSlotOpen }) => {

    function closeModal() {
        setIsAddTimeSlotOpen(false);
    }

    return (
        <>
            <AddTimeSlotWrapper className={isAddTimeSlotOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddTimeSlotOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Time Slot</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Slot Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Slot Timing <p>*</p></span>
                                <div className="time_sec">
                                    <div className="time_btn">
                                        <input type="text" />
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                    <a>to</a>
                                    <div className="time_btn">
                                        <input type="text" />
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button> Save </button>
                    </div>
                </div>
            </AddTimeSlotWrapper>
        </>
    );
}

export default AddTimeSlotModal;