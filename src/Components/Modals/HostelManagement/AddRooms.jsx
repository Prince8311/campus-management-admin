import { useState, useEffect } from "react";
import { AddRoomsWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";


const AddRoomsModal = ({ isAddRoomOpen, setIsAddRoomOpen, roomToEdit, setRoomToEdit, refreshRooms }) => {
    const api = getApiEndpoints();
    const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
    const [buildings, setBuildings] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState({});

    const [showFloorDropdown, setShowFloorDropdown] = useState(false);
    const [floorNumber, setFloorNumber] = useState('');
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [roomNumbers, setRoomNumbers] = useState([]);
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
    const [initialFormValues, setInitialFormValues] = useState(null);
    const isEditMode = Boolean(roomToEdit?.id);
    const isFormValid = selectedBuilding?.id && floorNumber !== '' && roomNumber !== '' && totalBed.trim() !== '' && selectedCategory.trim() !== '' && selectedType.trim() !== '';
    const currentFormValues = {
        buildingId: String(selectedBuilding?.id ?? ''),
        floorNo: String(floorNumber),
        roomNo: String(roomNumber),
        bedCount: String(totalBed),
        category: selectedCategory,
        type: selectedType,
        status: Boolean(isStatus)
    };
    const hasFormChanged = !isEditMode || (initialFormValues && JSON.stringify(currentFormValues) !== JSON.stringify(initialFormValues));
    const totalFloors = Number.parseInt(selectedBuilding?.total_floors, 10) || 0;
    const floorOptions = Array.from({ length: totalFloors }, (_, index) => index + 1);
    const formatFloorNumber = (floor) => String(floor).padStart(2, '0');

    const closeModal = () => {
        setIsAddRoomOpen(false);
        setFloorNumber('');
        setRoomNumber('');
        setTotalBed('');
        setIsStatus(false);
        setSelectedCategory('');
        setSelectedType('');
        setSelectedBuilding({});
        setInitialFormValues(null);
        setRoomToEdit(null);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setRoomNumbers([]);
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

            if (roomToEdit) {
                const values = {
                    buildingId: String(roomToEdit.building_id ?? roomToEdit.buildingId ?? roomToEdit.hostel_building_id ?? ''),
                    floorNo: String(roomToEdit.floor_no ?? roomToEdit.floorNo ?? ''),
                    roomNo: String(roomToEdit.room_no ?? roomToEdit.roomNo ?? ''),
                    bedCount: String(roomToEdit.bed_count ?? roomToEdit.bedCount ?? ''),
                    category: roomToEdit.category ?? roomToEdit.room_category ?? '',
                    type: roomToEdit.type ?? '',
                    status: roomToEdit.status === true || roomToEdit.status === 1 || roomToEdit.status === '1' || roomToEdit.status === 'true'
                };

                setSelectedBuilding({
                    id: values.buildingId,
                    building_name: roomToEdit.building_name ?? ''
                });
                setFloorNumber(values.floorNo);
                setRoomNumber(values.roomNo);
                setTotalBed(values.bedCount);
                setSelectedCategory(values.category);
                setSelectedType(values.type);
                setIsStatus(values.status);
                setInitialFormValues(values);
            }
        }
    }, [isAddRoomOpen, roomToEdit]);

    useEffect(() => {
        if (isEditMode && buildings.length > 0) {
            const matchingBuilding = buildings.find(
                (building) => String(building.id) === String(roomToEdit.building_id ?? roomToEdit.buildingId ?? roomToEdit.hostel_building_id)
            );
            if (matchingBuilding) setSelectedBuilding(matchingBuilding);
        }
    }, [buildings, isEditMode, roomToEdit]);

    const fetchAvailableRooms = async () => {
        try {
            const response = await axiosInstance.get(api.fetchHostelRoom, {
                params: {
                    isRoomForm: true,
                    building_id: selectedBuilding.id
                }
            });
            if (response?.data.status === 200) {
                let availableRoomNumbers = Array.isArray(response.data.roomNumbers)
                    ? response.data.roomNumbers.map(Number).filter(Number.isFinite)
                    : [];
                const originalBuildingId = roomToEdit?.building_id ?? roomToEdit?.buildingId ?? roomToEdit?.hostel_building_id;
                const originalRoomNumber = Number(roomToEdit?.room_no ?? roomToEdit?.roomNo);
                if (isEditMode && String(selectedBuilding.id) === String(originalBuildingId) && Number.isFinite(originalRoomNumber)) {
                    availableRoomNumbers = [...new Set([...availableRoomNumbers, originalRoomNumber])].sort((a, b) => a - b);
                }
                setRoomNumbers(availableRoomNumbers);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddRoomOpen && selectedBuilding?.id) {
            fetchAvailableRooms();
        }
    }, [isAddRoomOpen, selectedBuilding]);

    const handleCreateRoom = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            ...(isEditMode && { id: roomToEdit.id }),
            buildingId: selectedBuilding.id,
            floorNo: floorNumber,
            roomNo: roomNumber,
            bedCount: totalBed,
            category: selectedCategory,
            type: selectedType,
            status: isStatus
        }
        try {
            const response = await axiosInstance.post(api.addHostelRoom, payload, {
                params: {
                    intent: isEditMode ? 'update' : 'add'
                }
            });
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
        setFloorNumber('');
        setRoomNumber('');
        setRoomNumbers([]);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    }

    const handleSelectFloor = (floor) => {
        setFloorNumber(floor);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowBuildingDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleSelectRoom = (room) => {
        setRoomNumber(room);
        setShowRoomDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setShowCategoryDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleSelectType = (type) => {
        setSelectedType(type);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
    };

    const handleOpenBuildingDropdown = () => {
        setShowBuildingDropdown(!showBuildingDropdown);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenFloorDropdown = () => {
        setShowFloorDropdown(!showFloorDropdown);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenRoomDropdown = () => {
        setShowRoomDropdown(!showRoomDropdown);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowCategoryDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowTypeDropdown(false);
    };

    const handleOpenTypeDropdown = () => {
        setShowTypeDropdown(!showTypeDropdown);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowCategoryDropdown(false);
    };


    return (
        <>
            <AddRoomsWrapper className={isAddRoomOpen ? "active" : ''}>
                <div className={`modal_box ${isAddRoomOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>{isEditMode ? 'Edit Hostel Room' : 'Add Hostel Living Room'}</h4>
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
                                                        <li className="no_data">No building available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Floor No. <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleOpenFloorDropdown}>
                                        <p>{floorNumber === '' ? '' : formatFloorNumber(floorNumber)}</p>
                                        <i className={`fa-solid fa-angle-down ${showFloorDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFloorDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    floorOptions.length > 0 ? (
                                                        floorOptions.map((floor) => (
                                                            <li
                                                                key={floor}
                                                                onClick={() => handleSelectFloor(floor)}
                                                                className={floorNumber === floor ? 'active' : ''}
                                                            >{formatFloorNumber(floor)}</li>
                                                        ))
                                                    ) : (
                                                        <li className="no_data">Select a building first</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Room Number <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleOpenRoomDropdown}>
                                        <p>{roomNumber === '' ? '' : formatFloorNumber(roomNumber)}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoomDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoomDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    roomNumbers.length > 0 ? (
                                                        roomNumbers.map((room) => (
                                                            <li
                                                                key={room}
                                                                onClick={() => handleSelectRoom(room)}
                                                                className={roomNumber === room ? 'active' : ''}
                                                            >{formatFloorNumber(room)}</li>
                                                        ))
                                                    ) : (
                                                        <li className="no_data">
                                                            {selectedBuilding?.id ? 'No rooms available' : 'Select a building first'}
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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
                            disabled={!isFormValid || isButtonLoading || !hasFormChanged}
                            onClick={handleCreateRoom}
                        >
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>{isEditMode ? 'Update' : 'Save'}</>
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
