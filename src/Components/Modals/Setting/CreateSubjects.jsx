import { useState } from "react";
import { CreateSubjectsWrapper } from "../../../Styles/SettingModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateSubjectsModal = ({ isCreateSubjectOpen, setIsCreateSubjectOpen, refreshSubjects }) => {
    const api = getApiEndpoints();
    const [name, setName] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setName('');
        setIsCreateSubjectOpen(false);
    }

    const handleAddSubject = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = { subject: name };
        try {
            const response = await axiosInstance.post(api.createSubject, payload);
            if (response?.data.status === 200) { 
                toast.success(response?.data.message);
                refreshSubjects();
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
            <CreateSubjectsWrapper className={isCreateSubjectOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSubjectOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create new Subject</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Subject Name <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={name.trim() === '' || isButtonLoading} onClick={handleAddSubject}>
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
            </CreateSubjectsWrapper>
        </>
    );
}

export default CreateSubjectsModal;