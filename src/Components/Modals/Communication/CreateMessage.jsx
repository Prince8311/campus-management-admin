import { useState } from "react";
import { MessageCreateWrapper } from "../../../Styles/Modals/CommunicationStyle";
import { UserData } from "../../../Context/PageContext";

const CreateMessageModal = ({ isMessageCreateModalOpen, setIsMessageCreateModalOpen }) => {

    const { userDetails } = UserData();
    const [messageId, setMessageId] = useState("");
    const [isApproved, setIsApproved] = useState(false);

    const closeModal = () => {
        setIsMessageCreateModalOpen(false);
    };

    const handleMessageIdChange = (e) => {
        const value = e.target.value.trim();
        setMessageId(value);
        if (!value) {
            setIsApproved(false);
        }
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
                            {userDetails?.user_type === "super_admin" && (
                                <div className="input_box">
                                    <span>Message Id <p>*</p></span>
                                    <input
                                        type="text"
                                        value={messageId}
                                        onChange={handleMessageIdChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="modal_btn">
                        {userDetails?.user_type === "super_admin" && (
                            <>
                                <p>Approve</p>
                                <div className="toggle_bar">
                                    <input
                                        type="checkbox"
                                        id="toggle"
                                        checked={isApproved}
                                        disabled={!messageId}
                                        onChange={(e) => setIsApproved(e.target.checked)}
                                    />
                                    <label htmlFor="toggle">
                                        <span></span>
                                    </label>
                                </div>
                            </>
                        )}
                        <button> Save </button>
                    </div>

                </div>
            </MessageCreateWrapper>
        </>
    );
}

export default CreateMessageModal;