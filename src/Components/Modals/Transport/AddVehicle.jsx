import { useState, useEffect } from "react";
import { AddVehicleWrapper } from "../../../Styles/Modals/TransportModalsStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddVehicleModal = ({ isAddVehicleModal, setIsAddVehicleModal, refreshData }) => {
    const api = getApiEndpoints();
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleName, setVehicleName] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');

    const types = ['Bus', 'Mini Bus', 'Coach Bus', 'Van', 'Mini Van', 'Tempo Traveller', 'Shuttle', 'Staff Bus', 'Student Bus', 'SUV', 'Car', 'Electric Bus', 'Electric Van', 'Ambulance', 'Utility Vehicle', 'Pickup Truck'];
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [vehicleType, setVehicleType] = useState('');

    const [isStatus, setIsStatus] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = vehicleNumber.trim() !== '' && vehicleName.trim() !== '' && vehicleType.trim() !== '' && vehicleCapacity.trim() !== '';

    function closeModal() {
        setIsAddVehicleModal(false);
        setVehicleNumber('');
        setVehicleName('');
        setVehicleType('');
        setVehicleCapacity('');
        setIsStatus(false);
    }

    const handleAddVehicle = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: vehicleName,
            number: vehicleNumber,
            type: vehicleType,
            capacity: vehicleCapacity,
            status: isStatus
        }
        try {
            const response = await axiosInstance.post(api.addVehicle, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                closeModal();
                refreshData();
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred");
        } finally {
            setIsButtonLoading(false);
        }
    }

    const handleSelectTypeDropdown = () => {
        setShowTypeDropdown(!showTypeDropdown);
    }

    const handleSelectType = (type) => {
        setVehicleType(type);
        setShowTypeDropdown(false);
    };

    return (
        <>
            <AddVehicleWrapper className={isAddVehicleModal ? 'active' : ''}>
                <div className={`modal_box ${isAddVehicleModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Vehicle</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Vehicle Number <p>*</p></span>
                                <input
                                    type="text"
                                    value={vehicleNumber}
                                    onChange={(e) => setVehicleNumber(e.target.value)}
                                />
                            </div>
                            <div className="input_box">
                                <span>Vehicle Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={vehicleName}
                                    onChange={(e) => setVehicleName(e.target.value)}
                                />
                            </div>
                            <div className="select_box">
                                <span>Vehicle Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectTypeDropdown}>
                                        <p>{vehicleType}</p>
                                        <i className={`fa-solid fa-angle-down ${showTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    types.map((type, index) => (
                                                        <li key={index}
                                                        onClick={() => handleSelectType(type)}
                                                        className={vehicleType === type ? 'active' : ''}
                                                    > {type}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Vehicle Capacity <p>*</p></span>
                                <input
                                    type="text"
                                    value={vehicleCapacity}
                                    onChange={(e) => setVehicleCapacity(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="toggle_bar">
                            <input
                                type="checkbox"
                                id="toggle"
                                checked={isStatus}
                                onChange={(e) => setIsStatus(e.target.checked)}
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <button
                            disabled={!isFormValid || isButtonLoading}
                            onClick={handleAddVehicle}
                        >
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
            </AddVehicleWrapper>
        </>
    );
}

export default AddVehicleModal;