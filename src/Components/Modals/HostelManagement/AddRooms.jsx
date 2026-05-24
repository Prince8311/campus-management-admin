import { useState, useEffect } from "react";
import { AddRoomsWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";


const AddRoomsModal = ({ isAddRoomOpen, setIsAddRoomOpen, refreshRooms }) => {
    const api = getApiEndpoints();
    const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
    const [buildings, setBuildings] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState({});

    const [floorNumber, setFloorNumber] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [totalBed, setTotalBed] = useState('');

    const categories = ['Living Room', 'Sick Room'];
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    const types = ['Ac', 'Non-Ac'];
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    const [isStatus, setIsStatus] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = selectedBuilding?.id && floorNumber.trim() !== '' && roomNumber.trim() !== '' && totalBed.trim() !== '' && selectedCategory.trim() !== '' && selectedType.trim() !== '';

    const closeModal = () => {
        setIsAddRoomOpen(false);
        setFloorNumber('');
        setRoomNumber('');
        setTotalBed('');
        setIsStatus(false);
        setSelectedCategory('');
        setSelectedType('');
    };

    const fetchAllBuildings = async () => {
        try {
            const response = await axiosInstance.get(api.fetchHostelBuilding, {
                params: { showAll: true }
            });
            if (response?.data.status === 200) {
                console.log(response);
                setBuildings(response?.data.buildings);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddRoomOpen) {
            fetchAllBuildings();
        }
    }, [isAddRoomOpen]);

    const handleCreateRoom = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            buildingId: selectedBuilding.id,
            floorNo: floorNumber,
            roomNo: roomNumber,
            bedCount: totalBed,
            category: selectedCategory,
            type: selectedType,
            status: isStatus
        }
        try {
            const response = await axiosInstance.post(api.createHostelRoom, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                refreshRooms();
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    const handleSelectBuilding = (building) => {
        if (building.id === selectedBuilding.id) return;
        setSelectedBuilding(building);
        setShowBuildingDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    }

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setShowCategoryDropdown(false);
        setShowBuildingDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
        setShowBuildingDropdown(false);
    };

    const handleOpenBuildingDropdown = () => {
        setShowBuildingDropdown(!showBuildingDropdown);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
        setShowBuildingDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenTypeDropdown = () => {
        setShowTypeDropdown(!showTypeDropdown);
        setShowBuildingDropdown(false);
        setShowCategoryDropdown(false);
    };

    const handleFloorNumberChange = (e) => {
        const raw = e.target.value;
        const digitsOnly = raw.replace(/\D/g, '');
        if (digitsOnly === '') {
            setFloorNumber('');
            return;
        }
        // Ensure a building is selected before allowing floor input
        if (!selectedBuilding?.id) {
            toast.warn('Please select a building first');
            return;
        }
        const valueNum = parseInt(digitsOnly, 10);
        const maxFloors = selectedBuilding?.total_floors ? parseInt(selectedBuilding.total_floors, 10) : null;
        if (maxFloors && valueNum > maxFloors) {
            toast.warn(`Floor cannot exceed ${maxFloors}`);
            return;
        }
        setFloorNumber(String(valueNum));
    };


    return (
        <>
            <AddRoomsWrapper className={isAddRoomOpen ? "active" : ''}>
                <div className={`modal_box ${isAddRoomOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Hostel Living Room</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select Building <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleOpenBuildingDropdown}>
                                        <p>{selectedBuilding.building_name}</p>
                                        <i className={`fa-solid fa-angle-down ${showBuildingDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showBuildingDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    buildings && buildings.length > 0 ? (
                                                        buildings.map((building, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectBuilding(building)}
                                                                className={building.id === selectedBuilding.id ? 'active' : ''}
                                                            >{building.building_name}</li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No building available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Floor No. <p>*</p></span>
                                <input type="text" value={floorNumber} onChange={handleFloorNumberChange} inputMode="numeric" />
                            </div>
                            <div className="input_box">
                                <span>Room Number <p>*</p></span>
                                <input type="text" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <span>Total Beds <p>*</p></span>
                                <input type="text" value={totalBed} onChange={(e) => setTotalBed(e.target.value)} />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Room Category <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleOpenCategoryDropdown}>
                                        <p>{selectedCategory}</p>
                                        <i className={`fa-solid fa-angle-down ${showCategoryDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showCategoryDropdown ? 'active' : ''} dropup`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    categories.map((category, i) => (
                                                        <li
                                                            key={i}
                                                            onClick={() => handleSelectCategory(category)}
                                                            className={selectedCategory === category ? 'active' : ''}
                                                        >{category}</li>

                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleOpenTypeDropdown}>
                                        <p>{selectedType}</p>
                                        <i className={`fa-solid fa-angle-down ${showTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showTypeDropdown ? 'active' : ''} dropup`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    types.map((type, i) => (
                                                        <li
                                                            key={i}
                                                            onClick={() => handleSelectType(type)}
                                                            className={selectedType === type ? 'active' : ''}
                                                        >{type}</li>

                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                            onClick={handleCreateRoom}
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
            </AddRoomsWrapper>
        </>
    );
}

export default AddRoomsModal;