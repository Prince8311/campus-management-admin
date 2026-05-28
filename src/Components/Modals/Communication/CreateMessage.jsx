import { MessageCreateWrapper } from "../../../Styles/Modals/CommunicationStyle";

const CreateMessageModal = ({ isMessageCreateModalOpen, setIsMessageCreateModalOpen }) => {

    const closeModal = () => {
        setIsMessageCreateModalOpen(false);
    };

    return (
        <>
            <MessageCreateWrapper className={isMessageCreateModalOpen ? "active" : ''}>
                <div className={`modal_box ${isMessageCreateModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Add Message</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Message Tittle <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Message Body <p>*</p></span>
                                <textarea name="" ></textarea>
                            </div>
                            <div className="input_box">
                                <span>Message Id <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <p>Approve by</p>
                        <div className="toggle_bar">
                            <input
                                type="checkbox"
                                id="toggle"
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <button> Save </button>
                    </div>
                </div>
            </MessageCreateWrapper>
        </>
    );
}

export default CreateMessageModal;