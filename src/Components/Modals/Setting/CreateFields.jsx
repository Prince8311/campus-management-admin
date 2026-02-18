import { CreateFieldsWrapper } from "../../../Styles/SettingModalStyle";

const CreateFieldsPage = ({ isCreateFieldsOpen, setIsCreateFieldsOpen }) => {

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
                                <input type="text" required />
                                <span>Field title*</span>
                            </div>
                            <div className="select_box">
                                <input type="text" required />
                                <div className="dropdown_btn">
                                    {/* <span>Text Box</span> */}
                                    <p>selectedAgeCategory</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="dropdown">
                                    <div className="dropdown_inner">
                                        <ul>
                                            <li>Dropdown</li>
                                            <li>Multi select dropdown</li>
                                            <li>Date</li>
                                        </ul>
                                    </div>
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

export default CreateFieldsPage;