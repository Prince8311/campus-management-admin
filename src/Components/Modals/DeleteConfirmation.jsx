import { DeleteConfirmationWrapper } from "../../Styles/SettingModalStyle";

const DeleteConfirmationModal = ({isModalOpen, setIsModalOpen}) => {

    function closeModal  () {
        setIsModalOpen(false);
    }
    return (
        <>
            <DeleteConfirmationWrapper className={isModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isModalOpen ? 'active' : ''}`}>
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
            </DeleteConfirmationWrapper>
        </>
    );
}

export default DeleteConfirmationModal;