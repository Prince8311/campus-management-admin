import { AddSubjectWrapper } from "../../../Styles/ModalStyle";

const AddSubjectModal = ({ isAddSubjectModalOpen, setIsAddSubjectModalOpen }) => {

    function closeModal() {
        setIsAddSubjectModalOpen(false);
    }
    return (
        <>
            <AddSubjectWrapper className={isAddSubjectModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddSubjectModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Subject</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Subject <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Math</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input type="text" placeholder="Search by Subject Name..." />
                                            </div>
                                            <ul>
                                                <li>English</li>
                                                <li>Math</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="selection_type">
                                <li>
                                    <input
                                        type="radio"
                                        id="section"
                                        name="subject_type"
                                    />
                                    <label htmlFor="section">
                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                        <p>For this Section only</p>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="class"
                                        name="subject_type"
                                    />
                                    <label htmlFor="class">
                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                        <p>For whole Class 10</p>
                                    </label>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button> Save </button>
                    </div>
                </div>
            </AddSubjectWrapper>
        </>
    );
}

export default AddSubjectModal;