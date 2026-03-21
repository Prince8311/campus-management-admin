import { useEffect, useState } from "react";
import { EditStateCitiesWrapper } from "../../../Styles/SettingModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";

const EditStateCitiesModal = ({ showEditCityModal, setShowEditCityModal, selectedStateData, setSelectedStateData, refreshData }) => {
    const api = getApiEndpoints();
    const [modalCities, setModalCities] = useState([]);
    const [editingCityIndex, setEditingCityIndex] = useState(null);
    const [editedCityValues, setEditedCityValues] = useState({});

    function closeModal() {
        setShowEditCityModal(false);
        setEditingCityIndex(null);
        setSelectedStateData([]);
    }

    useEffect(() => {
        if (showEditCityModal && selectedStateData?.cities) {
            setModalCities([...selectedStateData.cities]);
        }
    }, [showEditCityModal, selectedStateData]);

    const handleCityNameEdit = async (index, city) => {
        if (editingCityIndex === index) {
            const finalNewCityName = (editedCityValues[index]?.trim() || city);

            if (!finalNewCityName || finalNewCityName === city) {
                setEditingCityIndex(null);
                return;
            }

            const payload = {
                stateName: selectedStateData.state,
                currentCityName: city,
                newCityName: finalNewCityName
            };

            try {
                const response = await axiosInstance.post(api.updateCityName, payload);
                if (response?.data.status === 200) {
                    toast.success(response?.data.message);
                    const updatedCities = [...modalCities];
                    updatedCities[index] = finalNewCityName;
                    setModalCities(updatedCities);
                    setEditingCityIndex(null);
                    setEditedCityValues((prev) => {
                        const copy = { ...prev };
                        delete copy[index];
                        return copy;
                    });
                    refreshData();
                }
            } catch (error) {
                toast.error(error.response?.data.message || error.message);
            }
        } else {
            setEditingCityIndex(index);
            setEditedCityValues((prev) => ({
                ...prev,
                [index]: city
            }));
        }
    };

    const handleDeleteCity = async (city) => {
        const payload = {
            name: city,
            isState: false
        };

        try {
            const response = await axiosInstance.post(api.deleteStatesCities, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                const updatedCities = modalCities.filter(c => c !== city);
                setModalCities(updatedCities);
                if (updatedCities.length === 0) {
                    closeModal();
                }
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    return (
        <>
            <EditStateCitiesWrapper className={showEditCityModal ? 'active' : ''}>
                <div className={`modal_box ${showEditCityModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Cities of <span>West Bengal</span></h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_city">
                                {
                                    modalCities.length > 0 ? (
                                        modalCities.map((city, i) =>
                                            <div className="city" key={i}>
                                                <li>
                                                    {editingCityIndex !== i && <p>{city}</p>}
                                                    <input type="text" className={editingCityIndex === i ? 'show' : ''} value={editedCityValues[i] ?? city} onChange={(e) =>
                                                        setEditedCityValues((prev) => ({
                                                            ...prev,
                                                            [i]: e.target.value,
                                                        }))
                                                    } />
                                                    <span className={editingCityIndex === i ? 'confirm_btn' : 'edit_btn'} onClick={() => handleCityNameEdit(i, city)}><i className={`fa-solid ${editingCityIndex === i ? 'fa-check' : 'fa-pen'}`}></i></span>
                                                    <span className="delete_btn" onClick={() => handleDeleteCity(city)}><i className="fa-solid fa-trash"></i></span>
                                                </li>
                                            </div>
                                        )
                                    ) : (
                                        <div className="empty_message">
                                            <p>No Cities available</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </EditStateCitiesWrapper>
        </>
    );
}

export default EditStateCitiesModal;