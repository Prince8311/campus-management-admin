import { useState } from "react";
import { AddStateCitiesWrapper } from "../../../Styles/SettingModalStyle";
import states from "../../../Data/States.json";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddStateCitiesModal = ({ isShowAddCityModal, setIsShowAddCityModal, refreshData }) => {
    const api = getApiEndpoints();
    const [stateDropdownShow, setStateDropdownShow] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [cityName, setCityName] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = selectedState.trim() !== '' && cityName.trim() !== '';

    function closeModal() {
        setSelectedState('');
        setCityName('');
        setIsShowAddCityModal(false);
    }

    const handleAddCity = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            state: selectedState,
            city: cityName
        };
        try {
            const response = await axiosInstance.post(api.createCity, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                setCityName('');
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddStateCitiesWrapper className={isShowAddCityModal ? 'active' : ''}>
                <div className={`modal_box ${isShowAddCityModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Cities</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select State <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setStateDropdownShow(!stateDropdownShow)}>
                                        <p>{selectedState}</p>
                                        <i className={`fa-solid fa-angle-down ${stateDropdownShow ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${stateDropdownShow ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    states && states.length > 0 ? (
                                                        states.map((state, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => {
                                                                    setSelectedState(state.name);
                                                                    setStateDropdownShow(false);
                                                                }}
                                                            >
                                                                {state.name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No state found</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>City Name <p>*</p></span>
                                <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleAddCity}>
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
            </AddStateCitiesWrapper>
        </>
    );
}

export default AddStateCitiesModal;