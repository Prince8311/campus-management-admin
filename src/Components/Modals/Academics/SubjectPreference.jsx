import { SubjectPreferenceWrapper } from "../../../Styles/ModalStyle";

const SubjectPreferenceModal = ({ isSubjectPreferenceModalOpen, setIsSubjectPreferenceModalOpen }) => {

    const closeModal = () => {
        setIsSubjectPreferenceModalOpen(false);
    };

    return (
        <>
            <SubjectPreferenceWrapper className={isSubjectPreferenceModalOpen ? "active" : ''}>
                <div className={`modal_box ${isSubjectPreferenceModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Manage Subject Compalsary</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <a>You want to make <span>Math</span> compalsary for</a>
                            <div className="selection_type">
                                <li>
                                    <input
                                        type="radio"
                                        id="sec"
                                        name="subject_type"
                                    />
                                    <label htmlFor="sec">
                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                        <p>For this Section only</p>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="cla"
                                        name="subject_type"
                                    />
                                    <label htmlFor="cla">
                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                        <p>For whole Class 10</p>
                                    </label>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </SubjectPreferenceWrapper>
        </>
    );
}

export default SubjectPreferenceModal;