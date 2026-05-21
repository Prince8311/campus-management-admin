import { SuccessWrapper } from "../../Styles/ModalStyle";

const SuccessModal = ({ isSuccessModalOpen, setIsSuccessModalOpen }) => {

    function closeModal() {
        setIsSuccessModalOpen(false);
    }

    return(
        <>
            <SuccessWrapper className={isSuccessModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isSuccessModalOpen ? 'active' : ''}`}>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="image_box">
                                <img src="/images/success.gif" alt="" />
                            </div>
                            <p>The request for your institution has been submitted successfully. Please wait for admin approval.</p>
                        </div>
                        <div className="modal_btn">
                            <button onClick={closeModal}>Done</button>
                        </div>
                    </div>
                </div>
            </SuccessWrapper>
        </>
    );
}

export default SuccessModal;