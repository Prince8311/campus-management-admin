import { useEffect, useState } from "react";
import { CreateClassWrapper } from "../../../Styles/ModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateClassModal = ({ isCreateClassOpen, setIsCreateClassOpen, academicLevels, refreshClasses }) => {
    const api = getApiEndpoints();
    const [selectedLevel, setSelectedLevel] = useState({});
    const [className, setClassName] = useState('');
    const [showLevelDropdown, setShowLevelDropdown] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = selectedLevel.id && className.trim() !== '';

    function closeModal() {
        setSelectedLevel({});
        setClassName('');
        setIsCreateClassOpen(false);
    }

    const handleSelectLevel = (level) => {
        if (level.id === selectedLevel.id) return;
        setSelectedLevel(level);
        setShowLevelDropdown(false);
    }

    const handleCreateClass = async () => {
        setIsButtonLoading(true);
        const payload = {
            academicLevelId: selectedLevel.id,
            class: className
        };
        try {
            const response = await axiosInstance.post(api.createClass, payload);
            if (response?.data.status === 200) { 
                toast.success(response?.data.message);
                refreshClasses();
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
            <CreateClassWrapper className={isCreateClassOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateClassOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create class academic level wise</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Academic Level <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowLevelDropdown(!showLevelDropdown)}>
                                        <p>{selectedLevel.level_name}</p>
                                        <i className={`fa-solid fa-angle-down ${showLevelDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showLevelDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    academicLevels && academicLevels.length > 0 ? (
                                                        academicLevels.map((level, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectLevel(level)}
                                                                className={level.id === selectedLevel.id ? 'active' : ''}
                                                            >
                                                                {level.level_name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No academic level available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Class <p>*</p></span>
                                <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleCreateClass}>
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
            </CreateClassWrapper>
        </>
    );
}

export default CreateClassModal;