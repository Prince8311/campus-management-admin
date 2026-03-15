import { AddSubjectClassWiseWrapper } from "../../../Styles/ModalStyle";

const AddSubjectClassWiseModal = ({isSubjectAddModalOpen, setIsSubjectAddModalOpen}) => {

    function closeModal () {
        setIsSubjectAddModalOpen(false);
    }
    return (
        <>
            <AddSubjectClassWiseWrapper className={isSubjectAddModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isSubjectAddModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Subject to Class - 1</h4>
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
                                        <p>Select</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Math</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddSubjectClassWiseWrapper>
        </>
    );
}

export default AddSubjectClassWiseModal;