import { BookIssueWrapper } from "../../../Styles/Modals/LibraryManagementStyle";

const BookIssueModal = ({isOpenBookIssueModal, setIsOpenBookIssueModal}) => {

    function closeModal() {
        setIsOpenBookIssueModal(false);
    }
    return (
        <>
            <BookIssueWrapper className={isOpenBookIssueModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenBookIssueModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Book Issue</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select Member <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Joydeep Barik</p>
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
                            <div className="input_box halfwidth">
                                <span>Contact No. <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Book <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Math</p>
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
                            <div className="input_box halfwidth">
                                <span>Author Name <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </BookIssueWrapper>
        </>
    );
}

export default BookIssueModal;