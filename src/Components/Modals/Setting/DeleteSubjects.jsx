import { DeleteSubjectsWrapper } from "../../../Styles/SettingModalStyle";

const DeleteSubjectsModal = ({isDeleteSubjectOpen, setIsDeleteSubjectOpen}) => {

    function closeModal  () {
        setIsDeleteSubjectOpen(false);
    }
    return (
        <>
            <DeleteSubjectsWrapper className={isDeleteSubjectOpen ? 'active' : ''}>
                <div className={`modal_box ${isDeleteSubjectOpen ? 'active' : ''}`}>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="image_box">
                                <img src="/images/warning.gif" alt="" />
                            </div>
                            <p>Are you sure, you want to delete this <span>Subject</span></p>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button className="cancel" onClick={closeModal}>Cancel</button>
                        <button className="confirm">Confirm</button>
                    </div>
                </div>
            </DeleteSubjectsWrapper>
        </>
    );
}

export default DeleteSubjectsModal;