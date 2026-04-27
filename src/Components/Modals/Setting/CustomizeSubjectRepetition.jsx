import { CustomizeSubjectRepetitionWrapper } from "../../../Styles/SettingModalStyle";

const CustomizeSubjectRepetitionModal = ({isCustomizeSubjectOpen, setIsCustomizeSubjectOpen}) => {

    function closeModal() {
        setIsCustomizeSubjectOpen(false);
    }

    return (
        <>
            <CustomizeSubjectRepetitionWrapper className={isCustomizeSubjectOpen ? 'active' : ''}>
                <div className={`modal_box ${isCustomizeSubjectOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Customize Subject Repetition</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box fullwidth">
                                <span>Select Subject <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Section A</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Section A</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Value Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Max</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Max</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Value <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CustomizeSubjectRepetitionWrapper>
        </>
    );
}

export default CustomizeSubjectRepetitionModal;