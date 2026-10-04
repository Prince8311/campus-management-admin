import { useEffect, useState } from "react";
import { AddResidentWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddResidentModal = ({ isAddResidentOpen, setIsAddResidentOpen, residentToEdit, setResidentToEdit, activeTab, refreshResidents }) => {
    const api = getApiEndpoints();
    const [users, setUsers] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState('');
    const [buildingList, setBuildingList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const [roomBedList, setRoomBedList] = useState([]);
    // Room filter states
    const typeOptions = ['Ac', 'Non-Ac'];
    const categoryOptions = ['Living', 'Sick'];
    const [selectedTypes, setSelectedTypes] = useState([...typeOptions]);
    const [selectedCategories, setSelectedCategories] = useState([...categoryOptions]);
    const statusOptions = ['On Campus', 'On Outing', 'Sick Leave'];
    const foodPreferenceOptions = ['Veg', 'Non-Veg'];
    const [selectedUser, setSelectedUser] = useState({});
    const [selectedBuilding, setSelectedBuilding] = useState({});
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedRoom, setSelectedRoom] = useState({});
    const [selectedRoomBed, setSelectedRoomBed] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedFoodPreference, setSelectedFoodPreference] = useState('');
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
    const [showFloorDropdown, setShowFloorDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [showRoomBedDropdown, setShowRoomBedDropdown] = useState(false);
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showFoodPreferenceDropdown, setShowFoodPreferenceDropdown] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState(null);
    const isEditMode = Boolean(residentToEdit?.id);

    const getFormValues = (user, building, floor, room, bed, status, foodPreference) => ({
        userId: String(user?.user_id ?? ''),
        buildingId: String(building?.id ?? ''),
        floor: String(floor ?? ''),
        roomId: String(room?.id ?? ''),
        bedNo: String(bed ?? ''),
        status: status ?? '',
        foodPreference: foodPreference ?? ''
    });

    const closeModal = () => {
        setIsAddResidentOpen(false);
        setUsers([]);
        setUserSearchInput('');
        setBuildingList([]);
        setRoomList([]);
        setRoomBedList([]);
        setSelectedUser({});
        setSelectedBuilding({});
        setSelectedFloor('');
        setSelectedRoom({});
        setSelectedRoomBed('');
        setSelectedStatus('');
        setSelectedFoodPreference('');
        setInitialFormValues(null);
        setResidentToEdit(null);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowRoomBedDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowRoomBedDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    };

    const toggleBuildingDropdown = () => {
        setShowBuildingDropdown(!showBuildingDropdown);
        setShowUserDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowRoomBedDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleFloorDropdown = () => {
        setShowFloorDropdown(!showFloorDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowRoomBedDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleRoomDropdown = () => {
        setShowRoomDropdown(!showRoomDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomBedDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleRoomBedDropdown = () => {
        setShowRoomBedDropdown(!showRoomBedDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleStatusDropdown = () => {
        setShowStatusDropdown(!showStatusDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowRoomBedDropdown(false);
        setShowFloorDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleFoodPreferenceDropdown = () => {
        setShowFoodPreferenceDropdown(!showFoodPreferenceDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomBedDropdown(false);
    }

    const fetchUsers = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchAllUsers, {
                params: {
                    search: userSearchInput
                }
            });
            if (respose?.data.status === 200) {
                setUsers(respose?.data.users);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    const fetchHostelBuildings = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchHostelBuilding, {
                params: {
                    showAll: true
                }
            });
            if (respose?.data.status === 200) {
                console.log(respose.data);
                setBuildingList(respose?.data.buildings);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddResidentOpen) {
            fetchUsers();
        }
    }, [isAddResidentOpen, userSearchInput]);

    useEffect(() => {
        if (isAddResidentOpen) {
            fetchUsers();
            fetchHostelBuildings();

            if (residentToEdit) {
                const room = residentToEdit.room ?? {};
                const user = residentToEdit.user_details ?? {};
                const selectedUserValue = {
                    ...user,
                    user_id: residentToEdit.user_id ?? user.user_id ?? user.id,
                    name: residentToEdit.name ?? user.name,
                };
                const selectedBuildingValue = {
                    id: room.building_id ?? room.buildingId ?? room.hostel_building_id ?? residentToEdit.building_id ?? residentToEdit.buildingId,
                    building_name: room.building ?? room.building_name ?? residentToEdit.building_name ?? ''
                };
                const selectedRoomValue = {
                    ...room,
                    id: room.room_id ?? residentToEdit.room_id ?? room.id,
                    room_no: room.room_no ?? room.number
                };
                const floor = room.floor_no ?? room.floor ?? residentToEdit.floor_no ?? '';
                const bed = room.bed_no ?? residentToEdit.bed_no ?? '';
                const status = residentToEdit.status ?? '';
                const foodPreference = residentToEdit.food_preference ?? residentToEdit.foodPreference ?? '';

                setSelectedUser(selectedUserValue);
                setSelectedBuilding(selectedBuildingValue);
                setSelectedFloor(String(floor));
                setSelectedRoom(selectedRoomValue);
                setSelectedRoomBed(String(bed));
                setSelectedStatus(status);
                setSelectedFoodPreference(foodPreference);
                setInitialFormValues(getFormValues(
                    selectedUserValue,
                    selectedBuildingValue,
                    floor,
                    selectedRoomValue,
                    bed,
                    status,
                    foodPreference
                ));
            }
        }
    }, [isAddResidentOpen, residentToEdit]);

    useEffect(() => {
        if (isAddResidentOpen && isEditMode && buildingList.length > 0) {
            const matchingBuilding = buildingList.find(
                (building) => (
                    selectedBuilding?.id !== undefined &&
                    selectedBuilding?.id !== null &&
                    String(building.id) === String(selectedBuilding.id)
                ) || (
                    selectedBuilding?.building_name &&
                    String(building.building_name).trim().toLowerCase() ===
                    String(selectedBuilding.building_name).trim().toLowerCase()
                )
            );
            if (matchingBuilding) setSelectedBuilding(matchingBuilding);
        }
    }, [buildingList, isAddResidentOpen, isEditMode, selectedBuilding?.id, selectedBuilding?.building_name]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const formatNumberForDisplay = (number) => {
        if (number === null || number === undefined || number === '') return '';
        const value = String(number);
        return /^\d$/.test(value) ? `0${value}` : value;
    };

    const handleSelectUser = (user) => {
        if (selectedUser.user_id === user.user_id) return;
        setSelectedUser(user);
        setShowUserDropdown(false);
    }


    const handleBuildingSelect = (building) => {
        if (selectedBuilding.id === building.id) return;
        setSelectedBuilding(building);
        setShowBuildingDropdown(false);
        setSelectedFloor('');
        setSelectedRoom({});
        setRoomBedList([]);
        setSelectedRoomBed('');
    }

    const handleFloorSelect = (floor) => {
        if (selectedFloor === floor) return;
        setSelectedFloor(floor);
        setShowFloorDropdown(false);
        setSelectedRoom({});
        setRoomBedList([]);
        setSelectedRoomBed('');
    }

    const floorOptions = [];
    if (selectedBuilding && selectedBuilding.total_floors) {
        const total = parseInt(selectedBuilding.total_floors, 10);
        for (let i = 1; i <= total; i++) {
            floorOptions.push(i.toString());
        }
    }

    const fetchRooms = async () => {
        try {
            const apiCategories = selectedCategories.map(cat => cat === 'Living' ? 'Living Room' : 'Sick Room');
            const response = await axiosInstance.get(api.fetchHostelRoom, {
                params: {
                    building_id: selectedBuilding.id,
                    floor_no: selectedFloor,
                    type: selectedTypes,
                    category: apiCategories
                }
            });
            if (response?.data.status === 200) {
                console.log(response.data);
                const rooms = response?.data.rooms ?? [];
                const originalRoom = residentToEdit?.room ?? {};
                const roomIdCandidates = [
                    originalRoom.room_id,
                    originalRoom.id,
                    residentToEdit?.room_id,
                    selectedRoom?.room_id,
                    selectedRoom?.id
                ].filter((id) => id !== undefined && id !== null && id !== '');
                const selectedRoomNumber = selectedRoom?.room_no ?? selectedRoom?.number ??
                    originalRoom.room_no ?? originalRoom.number;
                // Room number is the safest edit-mode match because some resident
                // responses use `room.id` for the allocation rather than the room.
                const matchingRoom = rooms.find((room) =>
                    selectedRoomNumber !== undefined && selectedRoomNumber !== null &&
                    String(room.room_no) === String(selectedRoomNumber)
                ) ?? rooms.find((room) =>
                    roomIdCandidates.some((id) => String(room.id) === String(id))
                );

                if (isEditMode && matchingRoom) {
                    // Use the canonical room returned by the room API. Resident data can
                    // contain an allocation id in `room.id`, which otherwise creates a
                    // duplicate option and sends the wrong id while fetching beds.
                    setSelectedRoom(matchingRoom);
                    setRoomList(rooms);
                } else if (isEditMode && selectedRoom?.id && !rooms.some((room) => String(room.id) === String(selectedRoom.id))) {
                    setRoomList([...rooms, selectedRoom]);
                } else {
                    setRoomList(rooms);
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddResidentOpen && selectedBuilding?.id && selectedFloor) {
            fetchRooms();
        }
    }, [isAddResidentOpen, selectedBuilding?.id, selectedFloor, selectedTypes, selectedCategories]);

    const fetchRoomBeds = async () => {
        try {
            const response = await axiosInstance.get(api.fetchRoomBeds, {
                params: {
                    buildingId: selectedBuilding.id,
                    floorNo: selectedFloor,
                    roomId: selectedRoom.id
                }
            });
            if (response?.data.status === 200) {
                console.log(response.data);
                const availableBeds = response?.data.availableBeds ?? [];
                const originalBed = residentToEdit?.room?.bed_no ?? residentToEdit?.bed_no;
                const beds = isEditMode && originalBed !== undefined && originalBed !== null &&
                    String(selectedRoomBed) === String(originalBed) &&
                    !availableBeds.some((bed) => String(bed) === String(originalBed))
                    ? [...availableBeds, originalBed]
                    : availableBeds;
                setRoomBedList(beds);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddResidentOpen && selectedBuilding?.id && selectedFloor && selectedRoom?.id) {
            fetchRoomBeds();
        }
    }, [isAddResidentOpen, selectedBuilding?.id, selectedFloor, selectedRoom?.id]);

    const handleRoomSelect = (room) => {
        if (selectedRoom.id === room.id) return;
        setSelectedRoom(room);
        setShowRoomDropdown(false);
        setSelectedRoomBed('');
    }

    const handleRoomBedSelect = (bed) => {
        if (selectedRoomBed === bed) return;
        setSelectedRoomBed(bed);
        setShowRoomBedDropdown(false);
    }

    const handleStatusSelect = (status) => {
        if (selectedStatus === status) return;
        setSelectedStatus(status);
        setShowStatusDropdown(false);
    }

    const handleFoodPreferenceSelect = (preference) => {
        if (selectedFoodPreference === preference) return;
        setSelectedFoodPreference(preference);
        setShowFoodPreferenceDropdown(false);
    }

    const isFormValid = Boolean(
        selectedUser && selectedUser.user_id &&
        selectedBuilding && selectedBuilding.id &&
        selectedFloor &&
        selectedRoom && selectedRoom.id &&
        selectedRoomBed &&
        selectedStatus &&
        selectedFoodPreference
    );
    const currentFormValues = getFormValues(
        selectedUser,
        selectedBuilding,
        selectedFloor,
        selectedRoom,
        selectedRoomBed,
        selectedStatus,
        selectedFoodPreference
    );
    const hasFormChanged = !isEditMode || (initialFormValues && JSON.stringify(currentFormValues) !== JSON.stringify(initialFormValues));
    const isSaveDisabled = !isFormValid || isButtonLoading || !hasFormChanged;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            ...(isEditMode && { id: residentToEdit.id }),
            name: selectedUser.name,
            userId: selectedUser.user_id,
            userType: activeTab,
            roomId: selectedRoom.id,
            bedNo: selectedRoomBed,
            status: selectedStatus,
            foodPreference: selectedFoodPreference,
            ...(activeTab === 'Student'
                ? { classSection: selectedUser.class && selectedUser.section ? `${selectedUser.class} - ${selectedUser.section}` : (selectedUser.class_section || '') }
                : { role: selectedUser.role || '' })
        };
        try {
            const response = await axiosInstance.post(api.addHostelResident, payload, {
                params: {
                    intent: isEditMode ? 'update' : 'add'
                }
            });
            if (response?.data.status === 200) {
                toast.success(response.data.message);
                refreshResidents();
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
            <AddResidentWrapper className={isAddResidentOpen ? "active" : ''}>
                <div className={`modal_box ${isAddResidentOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>{isEditMode ? 'Edit Resident' : 'Add Resident'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select Resident <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleUserDropdown}>
                                        <p>{selectedUser.name || ''}</p>
                                        <i className={`fa-solid fa-angle-down ${showUserDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Resident Name..."
                                                    value={userSearchInput}
                                                    onChange={(e) => setUserSearchInput(e.target.value)}
                                                />
                                            </div>
                                            <ul>
                                                {users.map((user, i) => (
                                                    <li
                                                        key={i}
                                                        className={`user_box ${selectedUser.user_id === user.user_id ? "active" : ""}`}
                                                        onClick={() => handleSelectUser(user)}
                                                    >
                                                        <div className="box_left">
                                                            {user.image ? (
                                                                <img
                                                                    src={`${profileImageBaseURL}/${user.directory}/${user.image}`}
                                                                    alt={user.name}
                                                                />
                                                            ) : (
                                                                <h6>{getInitials(user.name)}</h6>
                                                            )}
                                                        </div>

                                                        <div className="box_right">
                                                            <p>{user.name}</p>
                                                            <span>#{user.enroll_id}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Building <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleBuildingDropdown}>
                                        <p>{selectedBuilding.building_name}</p>
                                        <i className={`fa-solid fa-angle-down ${showBuildingDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showBuildingDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    buildingList && buildingList.length > 0 ? (
                                                        buildingList.map((building, i) =>
                                                            <li key={i} className={selectedBuilding.id === building.id ? "active" : ""} onClick={() => handleBuildingSelect(building)}>
                                                                {building.building_name}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <p className="no_data">No buildings found</p>
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
                                    <div className="dropdown_btn" onClick={toggleFloorDropdown}>
                                        <p>{formatNumberForDisplay(selectedFloor)}</p>
                                        <i className={`fa-solid fa-angle-down ${showFloorDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFloorDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    floorOptions.length > 0 ? (
                                                        floorOptions.map((option) => (
                                                            <li key={option} className={selectedFloor === option ? "active" : ""} onClick={() => handleFloorSelect(option)}>
                                                                {formatNumberForDisplay(option)}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <p className="no_data">No floors found</p>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Room <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleRoomDropdown}>
                                        <p>{formatNumberForDisplay(selectedRoom.room_no)}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoomDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoomDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                selectedFloor && (
                                                    <div className="room_type_sec">
                                                        {/* Type Filters */}
                                                        {typeOptions.map((type) => (
                                                            <div className="type_box" key={type}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={type.toLowerCase()}
                                                                    checked={selectedTypes.includes(type)}
                                                                    onChange={() => {
                                                                        setSelectedTypes(prev =>
                                                                            prev.includes(type)
                                                                                ? prev.filter(t => t !== type)
                                                                                : [...prev, type]
                                                                        );
                                                                    }}
                                                                />
                                                                <label htmlFor={type.toLowerCase()}>
                                                                    <span className="check_box"></span>
                                                                    <p>{type}</p>
                                                                </label>
                                                            </div>
                                                        ))}
                                                        {/* Category Filters */}
                                                        {categoryOptions.map((cat) => (
                                                            <div className="type_box" key={cat}>
                                                                <input
                                                                    type="checkbox"
                                                                    id={cat.toLowerCase()}
                                                                    checked={selectedCategories.includes(cat)}
                                                                    onChange={() => {
                                                                        setSelectedCategories(prev =>
                                                                            prev.includes(cat)
                                                                                ? prev.filter(c => c !== cat)
                                                                                : [...prev, cat]
                                                                        );
                                                                    }}
                                                                />
                                                                <label htmlFor={cat.toLowerCase()}>
                                                                    <span className="check_box"></span>
                                                                    <p>{cat}</p>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )
                                            }
                                            <ul>
                                                {
                                                    roomList && roomList.length > 0 ? (
                                                        roomList.map((room, i) => {
                                                            const bedCount = Number(room.bed_count) || 0;
                                                            const occupied = Number(room.occupied) || 0;
                                                            const available = bedCount - occupied;
                                                            return (
                                                                <li key={room.id ?? i} className={String(selectedRoom.id) === String(room.id) ? "active" : ""} onClick={() => handleRoomSelect(room)}>
                                                                    {formatNumberForDisplay(room.room_no)} <span>( Beds: {bedCount} / Avl: {available} )</span>
                                                                </li>
                                                            );
                                                        })
                                                    ) : (
                                                        <p className="no_data">No rooms found</p>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box oneThirdWidth">
                                <span>Select Bed No. <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleRoomBedDropdown}>
                                        <p>{formatNumberForDisplay(selectedRoomBed)}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoomBedDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoomBedDropdown ? "active" : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    roomBedList && roomBedList.length > 0 ? (
                                                        roomBedList.map((bed, i) =>
                                                            <li key={i} className={selectedRoomBed === bed ? "active" : ""} onClick={() => handleRoomBedSelect(bed)}>
                                                                {formatNumberForDisplay(bed)}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <p className="no_data">No beds available</p>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box oneThirdWidth">
                                <span>Status <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleStatusDropdown}>
                                        <p>{selectedStatus}</p>
                                        <i className={`fa-solid fa-angle-down ${showStatusDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStatusDropdown ? "active" : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    statusOptions.map((status, i) => (
                                                        <li key={i} className={selectedStatus === status ? "active" : ""} onClick={() => handleStatusSelect(status)}>
                                                            {status}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box oneThirdWidth">
                                <span>Food Preference <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleFoodPreferenceDropdown}>
                                        <p>{selectedFoodPreference}</p>
                                        <i className={`fa-solid fa-angle-down ${showFoodPreferenceDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFoodPreferenceDropdown ? "active" : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    foodPreferenceOptions.map((preference, i) => (
                                                        <li key={i} className={selectedFoodPreference === preference ? "active" : ""} onClick={() => handleFoodPreferenceSelect(preference)}>
                                                            {preference}
                                                        </li>
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
                        <button disabled={isSaveDisabled} onClick={handleSubmit}>
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
            </AddResidentWrapper>
        </>
    );
}

export default AddResidentModal;
