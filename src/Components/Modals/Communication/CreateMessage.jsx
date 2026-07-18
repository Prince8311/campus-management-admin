import { useState, useEffect } from "react";
import { MessageCreateWrapper } from "../../../Styles/Modals/CommunicationStyle";
import { UserData } from "../../../Context/PageContext";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateMessageModal = ({ isMessageCreateModalOpen, setIsMessageCreateModalOpen, selectedTemplate, setSelectedTemplate, refreshData }) => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const [messageId, setMessageId] = useState("");
    const [isApproved, setIsApproved] = useState(false);

    const [tittle, setTittle] = useState('');
    const [balance, setBalance] = useState('');
    const [isStatus, setIsStatus] = useState(false);
    const [body, setBody] = useState('');

    const [initialData, setInitialData] = useState(null);
    const [isFormChanged, setIsFormChanged] = useState(false);

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = tittle.trim() !== '' && body.trim() !== '';

    // Pre-fill form when selectedTemplate changes
    useEffect(() => {
        if (selectedTemplate) {
            const data = {
                tittle: selectedTemplate.template_title || "",
                body: selectedTemplate.template_body || "",
                messageId: selectedTemplate.message_id || "",
                balance: selectedTemplate.balance || "",
                isStatus: selectedTemplate.status || false,
            };

            setTittle(data.tittle);
            setBody(data.body);
            setMessageId(data.messageId);
            setBalance(data.balance);
            setIsStatus(data.isStatus);

            setInitialData(data);
            setIsFormChanged(false);
        } else {
            setTittle("");
            setBody("");
            setMessageId("");
            setBalance("");
            setIsStatus(false);

            setInitialData(null);
            setIsFormChanged(true);
        }
    }, [selectedTemplate]);

    useEffect(() => {
        if (!initialData) return;

        const changed =
            tittle !== initialData.tittle ||
            body !== initialData.body ||
            messageId !== initialData.messageId ||
            balance !== initialData.balance ||
            isStatus !== initialData.isStatus;

        setIsFormChanged(changed);
    }, [tittle, body, messageId, balance, isStatus, initialData]);

    const closeModal = () => {
        setIsMessageCreateModalOpen(false);

        setTittle("");
        setBody("");
        setMessageId("");
        setBalance("");
        setIsStatus(false);
        setIsApproved(false);

        setInitialData(null);
        setIsFormChanged(false);

        setSelectedTemplate(null);
    };

    const handleSaveTemplate = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            template_title: tittle,
            template_body: body
        }

        if (userDetails.user_type === 'super_admin') {
            payload.template_id = messageId;
            payload.balance = balance;
            payload.status = isStatus;
        }

        if (selectedTemplate?.id) {
            payload.id = selectedTemplate.id;
        }

        try {
            const params = {
                intent: selectedTemplate ? 'update' : 'add'
            };

            const response = await axiosInstance.post(api.insertCommunicationMsgTemplate, payload, {
                params
            });
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                closeModal();
                refreshData(); // Call the refreshData function to update the list of templates
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
                        <h4>{selectedTemplate ? 'Edit Template' : 'Add Template'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullWidth">
                                <span>Tittle <p>*</p></span>
                                <input type="text" value={tittle} onChange={(e) => setTittle(e.target.value)} />
                            </div>
                            <div className="input_box fullWidth">
                                <span>Body <p>*</p></span>
                                <textarea name="" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                            </div>
                            {userDetails?.user_type === "super_admin" && (
                                <>
                                    <div className="input_box halfWidth">
                                        <span>Message Id <p>*</p></span>
                                        <input
                                            type="text"
                                            value={messageId}
                                            onChange={handleMessageIdChange}
                                        />
                                    </div>
                                    <div className="input_box halfWidth">
                                        <span>Balance <p>*</p></span>
                                        <input
                                            type="text"
                                            value={balance}
                                            onChange={(e) => setBalance(e.target.value)}
                                        />
                                    </div>
                                </>
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
                                        checked={isStatus}
                                        disabled={!messageId}
                                        onChange={(e) => setIsStatus(e.target.checked)}
                                    />
                                    <label htmlFor="toggle">
                                        <span></span>
                                    </label>
                                </div>
                            </>
                        )}
                        <button
                            disabled={
                                !isFormValid ||
                                isButtonLoading ||
                                (selectedTemplate && !isFormChanged)
                            }
                            onClick={handleSaveTemplate}
                        >
                            {isButtonLoading ? (
                                <ButtonLoader />
                            ) : (
                                selectedTemplate ? "Update" : "Save"
                            )}
                        </button>
                    </div>

                </div>
            </MessageCreateWrapper>
        </>
    );
}

export default CreateMessageModal;