import { useEffect, useState } from "react";
import { AddResidentWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddResidentModal = ({ isAddResidentOpen, setIsAddResidentOpen, activeTab }) => {
    const api = getApiEndpoints();
    const [userList, setUserList] = useState([]);
    const [buildingList, setBuildingList] = useState([]);
    const [roomList, setRoomList] = useState([]);
    const statusOptions = ['On Campus', 'On Outing', 'On Sick Leave'];
    const foodPreferenceOptions = ['Veg', 'Non Veg'];
    const [selectedUser, setSelectedUser] = useState({});
    const [selectedBuilding, setSelectedBuilding] = useState({});
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedRoom, setSelectedRoom] = useState({});
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedFoodPreference, setSelectedFoodPreference] = useState('');
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
    const [showFloorDropdown, setShowFloorDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showFoodPreferenceDropdown, setShowFoodPreferenceDropdown] = useState(false);

    const closeModal = () => {
        setIsAddResidentOpen(false);
        setSelectedUser({});
        setSelectedBuilding({});
        setSelectedFloor('');
        setSelectedRoom({});
        setSelectedStatus('');
        setSelectedFoodPreference('');
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    };

    const toggleBuildingDropdown = () => {
        setShowBuildingDropdown(!showBuildingDropdown);
        setShowUserDropdown(false);
        setShowFloorDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleFloorDropdown = () => {
        setShowFloorDropdown(!showFloorDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleRoomDropdown = () => {
        setShowRoomDropdown(!showRoomDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowFloorDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleStatusDropdown = () => {
        setShowStatusDropdown(!showStatusDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
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
    }

    const fetchUsers = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchUserlist, {
                params: {
                    userType: activeTab
                }
            });
            if (respose?.data.status === 200) {
                console.log(respose.data);
                setUserList(respose?.data.users);
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
            fetchHostelBuildings();
        }
    }, [isAddResidentOpen]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const handleUserSelect = (user) => {
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
    }

    const handleFloorSelect = (floor) => {
        if (selectedFloor === floor) return;
        setSelectedFloor(floor);
        setShowFloorDropdown(false);
        setSelectedRoom({});
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
            const response = await axiosInstance.get(api.fetchHostelRoom, {
                params: {
                    building_id: selectedBuilding.id,
                    floor_no: selectedFloor
                }
            });
            if (response?.data.status === 200) {
                console.log(response.data);
                setRoomList(response?.data.rooms);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedBuilding && selectedFloor) {
            fetchRooms();
        }
    }, [selectedBuilding, selectedFloor]);

    const handleRoomSelect = (room) => {
        if (selectedRoom.id === room.id) return;
        setSelectedRoom(room);
        setShowRoomDropdown(false);
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

    const isSaveDisabled = !(
        selectedUser && selectedUser.user_id &&
        selectedBuilding && selectedBuilding.id &&
        selectedFloor &&
        selectedRoom && selectedRoom.id &&
        selectedStatus &&
        selectedFoodPreference
    );

    return (
        <>
            <AddResidentWrapper className={isAddResidentOpen ? "active" : ''}>
                <div className={`modal_box ${isAddResidentOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Resident</h4>
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
                                        <p>{selectedUser.name}</p>
                                        <i className={`fa-solid fa-angle-down ${showUserDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input type="text" placeholder="Search by Resident Name..." />
                                            </div>
                                            <ul>
                                                {
                                                    userList && userList.length > 0 ? (
                                                        userList.map((user, i) =>
                                                            <div className={`user_box ${selectedUser.user_id === user.user_id ? "active" : ""}`} key={i} onClick={() => handleUserSelect(user)}>
                                                                <div className="box_left">
                                                                    <h6>{getInitials(user.name)}</h6>
                                                                </div>
                                                                <div className="box_right">
                                                                    <p>{user.name}</p>
                                                                    <span>#{user.user_id} - {activeTab === 'Student' ? `Class ${user.class}/${user.section}` : `${user.role}`}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    ) : (
                                                        <p className="no_data">No users found</p>
                                                    )
                                                }
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
                                        <p>{selectedFloor}</p>
                                        <i className={`fa-solid fa-angle-down ${showFloorDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFloorDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    floorOptions.length > 0 ? (
                                                        floorOptions.map((option) => (
                                                            <li key={option} className={selectedFloor === option ? "active" : ""} onClick={() => handleFloorSelect(option)}>
                                                                {option}
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
                                        <p>{selectedRoom.room_no}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoomDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoomDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="room_type_sec">
                                                <div className="type_box">
                                                    <input
                                                        type="checkbox"
                                                        id="ac"
                                                    />
                                                    <label htmlFor="ac">
                                                        <span className="check_box"><i className="fa-regular fa-circle"></i></span>
                                                        <p>AC</p>
                                                    </label>
                                                </div>
                                                <div className="type_box">
                                                    <input
                                                        type="checkbox"
                                                        id="nonac"
                                                    />
                                                    <label htmlFor="nonac">
                                                        <span className="check_box"><i className="fa-regular fa-circle"></i></span>
                                                        <p>Non-AC</p>
                                                    </label>
                                                </div>
                                                <div className="type_box">
                                                    <input
                                                        type="checkbox"
                                                        id="living"
                                                    />
                                                    <label htmlFor="living">
                                                        <span className="check_box"><i className="fa-regular fa-circle"></i></span>
                                                        <p>Living</p>
                                                    </label>
                                                </div>
                                                <div className="type_box">
                                                    <input
                                                        type="checkbox"
                                                        id="sick"
                                                    />
                                                    <label htmlFor="sick">
                                                        <span className="check_box"><i className="fa-regular fa-circle"></i></span>
                                                        <p>Sick</p>
                                                    </label>
                                                </div>
                                            </div>
                                            <ul>
                                                {
                                                    roomList && roomList.length > 0 ? (
                                                        roomList.map((room, i) => {
                                                            const bedCount = Number(room.bed_count) || 0;
                                                            const occupied = room.occupied === null ? 0 : Number(room.occupied);
                                                            const available = bedCount - occupied;
                                                            return (
                                                                <li key={i} className={selectedRoom.id === room.id ? "active" : ""} onClick={() => handleRoomSelect(room)}>
                                                                    {room.room_no} <span>( Beds: {bedCount} / Avl: {available} )</span>
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
                            <div className="select_box halfwidth">
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
                            <div className="select_box halfwidth">
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
                        <button disabled={isSaveDisabled}>Save</button>
                    </div>
                </div>
            </AddResidentWrapper>
        </>
    );
}

export default AddResidentModal;