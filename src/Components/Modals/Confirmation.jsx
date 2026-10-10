import { ConfirmationWrapper } from "../../Styles/SettingModalStyle";

const ConfirmationModal = ({ isModalOpen = false, setIsModalOpen = () => {}, message = "Your message was sent successfully." }) => {
    return (
        <>
            <ConfirmationWrapper className={isModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isModalOpen ? 'active' : ''}`}>
                    <div className="modal_body">
                        <div className="body_inner">
                            <p>{message}</p>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button className="cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button className="confirm" onClick={() => setIsModalOpen(false)}>Done</button>
                    </div>
                </div>
            </ConfirmationWrapper>
        </>
    );
}

export default ConfirmationModal;
