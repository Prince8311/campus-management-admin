import { useState } from "react";
import { DeleteConfirmationWrapper } from "../../Styles/SettingModalStyle";
import ButtonLoader from "../Loader/ButtonLoader";
import { toast } from "react-toastify";
import axiosInstance from "../../Services/Middleware/AxiosInstance";

const DeleteConfirmationModal = ({ isModalOpen, setIsModalOpen, deleteObject, payload, endPoint, refreshData }) => {
    const [isConfirmButtonLoading, setIsConfirmButtonLoading] = useState(false);
    function closeModal() {
        setIsModalOpen(false);
    }

    const handleSubmit = async () => {
        setIsConfirmButtonLoading(true);
        try {
            const response = await axiosInstance.post(endPoint, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                refreshData();
                closeModal();
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsConfirmButtonLoading(false);
        }
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
                            <p>Are you sure, you want to delete this <span>{deleteObject}</span></p>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button className="cancel" onClick={closeModal}>Cancel</button>
                        <button className="confirm" disabled={isConfirmButtonLoading} onClick={handleSubmit}>
                            {
                                isConfirmButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Confirm</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </DeleteConfirmationWrapper>
        </>
    );
}

export default DeleteConfirmationModal;