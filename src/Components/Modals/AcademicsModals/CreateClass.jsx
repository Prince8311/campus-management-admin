import { CreateClassWrapper } from "../../../Styles/ModalStyle";

const CreateClassModal = ({isCreateClassOpen, setIsCreateClassOpen}) => {

    function closeModal() {
        setIsCreateClassOpen(false);
    }

    return (
        <>
            <CreateClassWrapper className={isCreateClassOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateClassOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create class academic level wise</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Academic Level <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Label Type</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Value</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Class <p>*</p></span>
                                <input />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CreateClassWrapper>
        </>
    );
}

export default CreateClassModal;