import { useState } from "react";
import { AddInstitutionWrapper } from "../../../Styles/InstitutionModalStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddInstitutionModal = ({ isAddInstitutionOpen, setIsAddInstitutionOpen }) => {
    const api = getApiEndpoints();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && location.trim() !== '';

    function closeModal() {
        setIsAddInstitutionOpen(false);
    }

    const handleAddInstitution = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            institutionName: name,
            phone: phone,
            email: email,
            location: location
        };
        try {
            const response = await axiosInstance.post(api.addInstitution, payload);
            if(response?.data.status === 200) {
                toast.success(response?.data.message);
                setIsAddInstitutionOpen(false);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddInstitutionWrapper className={isAddInstitutionOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddInstitutionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Instituion</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Institution Name <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <span>Email Address <p>*</p></span>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <span>Contact No. <p>*</p></span>
                                <input
                                    type="tel"
                                    pattern="[0-9]*"
                                    className="no-spinner"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="input_box">
                                <span>Location <a>(Google map location)</a><p>*</p></span>
                                <textarea value={location} onChange={(e) => setLocation(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={handleAddInstitution} disabled={!isFormValid}>
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
            </AddInstitutionWrapper>
        </>
    )
};

export default AddInstitutionModal;