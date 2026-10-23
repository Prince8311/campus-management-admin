import { useState } from "react";
import { AddEventExpenseWrapper } from "../../../Styles/Modals/ExpenseManagementStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddEventExpenseModal = ({ isAddEventExpense, setIsAddEventExpense, type, nameLabel = "Event Name", title = "Create Event" }) => {
    const api = getApiEndpoints();
    const [name, setName] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setIsAddEventExpense(false);
        setName('');
    }

    const handleSave = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: name,
            format: type
        };
        try {
            const response = await axiosInstance.post(api.createAccountFormat, payload, {
                params: {
                    intent: 'add'
                }
            });
             if (response.data.status === 200) {
                toast.success(response.data.message);
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddEventExpenseWrapper className={isAddEventExpense ? 'active' : ''}>
                <div className={`modal_box ${isAddEventExpense ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>{title}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>{nameLabel} <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!name.trim() || isButtonLoading} onClick={handleSave}>
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
            </AddEventExpenseWrapper>
        </>
    );
}

export default AddEventExpenseModal;
