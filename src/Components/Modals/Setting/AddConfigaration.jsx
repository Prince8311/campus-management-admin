import { AddConfigarationWrapper } from "../../../Styles/SettingModalStyle";

const AddConfigarationModal = ({isAddConfigaration, setIsAddConfigaration}) => {

    function closeModal() {
        setIsAddConfigaration(false);
    }

    return (
        <>
            <AddConfigarationWrapper className={isAddConfigaration ? 'active' : ''}>
                <div className={`modal_box ${isAddConfigaration ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Configaration Add</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box halfWdith">
                                <span>Duration <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWdith">
                                <span>Tag Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box">
                                <span>Configaration Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Rate</p>
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
                            <div className="input_box halfWdith">
                                <span>Type Name <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddConfigarationWrapper>
        </>
    );
}

export default AddConfigarationModal;