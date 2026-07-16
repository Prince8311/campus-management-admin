import { useState, useEffect } from "react";
import { MessageCreateWrapper } from "../../../Styles/Modals/CommunicationStyle";
import { UserData } from "../../../Context/PageContext";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateMessageModal = ({ isMessageCreateModalOpen, setIsMessageCreateModalOpen }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [messageId, setMessageId] = useState("");
    const [isApproved, setIsApproved] = useState(false);

    const [tittle, setTittle] = useState('');
    const [body, setBody] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = tittle.trim() !== '' && body.trim() !== '';

    const closeModal = () => {
        setIsMessageCreateModalOpen(false);
        setTittle('');
        setBody('');
    };

    const handleSaveTemplate = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            template_title: tittle,
            template_body: body
        }
        try {
            const response = await axiosInstance.post(api.insertCommunicationMsgTemplate, payload, {
                params: {
                    intent: 'add',
                }
            });
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                closeModal();
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            setIsButtonLoading(false);
        }
    }

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
                        <h4>Add Template</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Tittle <p>*</p></span>
                                <input type="text" value={tittle} onChange={(e) => setTittle(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <span>Body <p>*</p></span>
                                <textarea name="" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
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
                        <button
                            disabled={!isFormValid || isButtonLoading}
                            onClick={handleSaveTemplate}
                        >
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>

                </div>
            </MessageCreateWrapper>
        </>
    );
}

export default CreateMessageModal;