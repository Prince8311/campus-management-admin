import { CreateFieldsWrapper } from "../../../Styles/SettingModalStyle";

const CreateFieldsModal = ({ isCreateFieldsOpen, setIsCreateFieldsOpen }) => {

    function closeModal() {
        setIsCreateFieldsOpen(false);
    }

    return (
        <>
            <CreateFieldsWrapper className={isCreateFieldsOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateFieldsOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create custom field - Address Details</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Class <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box">
                                <span>Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Type</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="toggle_bar">
                            <input type="checkbox" id="toggle" />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <p>Make this field mandatory</p>
                        <button>Save</button>
                    </div>
                </div>
            </CreateFieldsWrapper>
        </>
    )
};

export default CreateFieldsModal;