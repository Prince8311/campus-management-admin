import { useState } from "react";
import { CreateSectionWrapper } from "../../../Styles/SettingModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateSectionModal = ({ isCreateSectionOpen, setIsCreateSectionOpen, userType, setUserType, sectionType, setSectionType }) => {
    const api = getApiEndpoints();
    const [name, setName] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    function closeModal() {
        setIsCreateSectionOpen(false);
        setUserType('');
        setSectionType('');
    }

    const handleAddFormSection = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            section: name,
            sectionType: sectionType
        };
        try {
            const response = await axiosInstance.post(api.createStudentFormSection, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
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
            <CreateSectionWrapper className={isCreateSectionOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSectionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Section - {userType}s' {sectionType === 'profile_info' ? 'profile information' : 'document'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Section Name <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <a><span>*</span>Note: You can't delete or edit profile section after creating</a>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={name.trim() == '' || isButtonLoading} onClick={handleAddFormSection}>
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
            </CreateSectionWrapper>
        </>
    );
}

export default CreateSectionModal;