import { NewLibraryMemberWrapper } from "../../../Styles/Modals/LibraryManagementStyle";

const NewLibraryMemberModal = ({isOpenNewMemberModal, setIsOpenNewMemberModal}) => {

    function closeModal() {
        setIsOpenNewMemberModal(false);
    }
    return (
        <>
            <NewLibraryMemberWrapper className={isOpenNewMemberModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenNewMemberModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add New Member</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select User <p>*</p></span>
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
                            <div className="input_box fullwidth">
                                <span>Email Address <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </NewLibraryMemberWrapper>
        </>
    );
}

export default NewLibraryMemberModal;