import { useState } from "react";
import { CreateAcademicLabelWrapper } from "../../../Styles/ModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateAcademicLabelModal = ({ isCreateAcademicLabelOpen, setIsCreateAcademicLabelOpen, refreshAcademicLevels }) => {
    const api = getApiEndpoints();
    const [levelName, setLevelName] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = levelName.trim() !== '';

    function closeModal() {
        setLevelName('');
        setIsCreateAcademicLabelOpen(false);
    }

    const handleAddAcademicLevel = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            levelName: levelName
        };
        try {
            const response = await axiosInstance.post(api.createAcademicLevel, payload);
            if (response?.data.status === 200) { 
                toast.success(response?.data.message);
                refreshAcademicLevels();
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
            <CreateAcademicLabelWrapper className={isCreateAcademicLabelOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateAcademicLabelOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Academic Level</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Academic Level Name <p>*</p></span>
                                <input type="text" value={levelName} onChange={(e) => setLevelName(e.target.value)} />
                            </div>
                            <a><span>*</span>Note: You can't delete or edit Academic Level after creating</a>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleAddAcademicLevel}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader/>
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </CreateAcademicLabelWrapper>
        </>
    );
}

export default CreateAcademicLabelModal;