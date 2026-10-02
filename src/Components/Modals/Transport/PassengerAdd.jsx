import { useState, useEffect } from "react";
import { PassengerAddWrapper } from "../../../Styles/Modals/TransportModalsStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const PassengerAddModal = ({ isAddPassenger, setIsAddPassenger }) => {
    const api = getApiEndpoints();

    // const passengers = ['Joydeep Barik', 'Sourish Mondal'];
    const [users, setUsers] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState('');
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const [routes, setRoutes] = useState([]);
    const [routeSearchInput, setRouteSearchInput] = useState('');
    const [showRoutesDropdown, setShowRoutesDropdown] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState({});

    const [stopages, setStopages] = useState([]);
    const [stoppageSearchInput, setStoppageSearchInput] = useState('');
    const [showStopagesDropdown, setShowStopagesDropdown] = useState(false);
    const [selectedStopage, setSelectedStopage] = useState({});

    const handleSelectedUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
        setShowRoutesDropdown(false);
        setShowStopagesDropdown(false);
    }

    const handleSelectedRouteDropdown = () => {
        setShowRoutesDropdown(!showRoutesDropdown);
        setShowStopagesDropdown(false);
    }

    const handleSelectedStopageDropdown = () => {
        setShowRoutesDropdown(false);
        setShowStopagesDropdown(!showStopagesDropdown);
    }

    const fetchAllUsers = async () => {
        try {
            const response = await axiosInstance.get(api.fetchAllUsers, {
                params: {
                    search: userSearchInput
                }
            });
            if (response.data.status === 200) {
                console.log('Users:', response.data);
                setUsers(response.data.users ?? []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddPassenger) {
            fetchAllUsers();
        }
    }, [isAddPassenger, userSearchInput]);

    const fetchRoutes = async () => {
        try {
            const response = await axiosInstance.get(api.fetchRoutes, {
                params: {
                    isForm: true,
                    search: routeSearchInput
                }
            });
            if (response.data.status === 200) {
                setRoutes(response.data.routes ?? []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isAddPassenger) {
            fetchRoutes();
        }
    }, [isAddPassenger, routeSearchInput]);

    const fetchStopages = async () => {
        try {
            const response = await axiosInstance.get(api.fetchStopagesRoutewise, {
                params: {
                    id: selectedRoute.id,
                    search: stoppageSearchInput
                }
            });
            if (response.data.status === 200) {
                setStopages(response.data.stopages ?? []);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedRoute.id) {
            fetchStopages();
        }
    }, [isAddPassenger, selectedRoute, stoppageSearchInput]);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        setShowUserDropdown(false);
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };


    const handleSelectRoute = (route) => {
        setSelectedRoute(route);
        setSelectedStopage({});
        setShowRoutesDropdown(false);
    }

    const handleSelectStopage = (stopage) => {
        setSelectedStopage(stopage);
        setShowStopagesDropdown(false);
    }

    function closeModal() {
        setIsAddPassenger(false);
    }
    return (
        <>
            <PassengerAddWrapper className={isAddPassenger ? 'active' : ''}>
                <div className={`modal_box ${isAddPassenger ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Passenger</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box half">
                                <span>Select User <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedUserDropdown}>
                                        <p>{selectedUser.name || ''}</p>
                                        <i className={`fa-solid fa-angle-down ${showUserDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by user Name..."
                                                />
                                            </div>
                                            <ul>
                                                {users.map((user, i) => (
                                                    <li
                                                        key={i}
                                                        className={`user_box ${selectedUser.id === user.id ? "active" : ""}`}
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
                            <div className="input_box">
                                <span>Contact No. <p>*</p></span>
                                <input
                                    type="text"
                                    value={selectedUser.phone || ''}
                                    readOnly
                                />
                            </div>
                            <div className="select_box half">
                                <span>Select Route <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedRouteDropdown}>
                                        <p>{selectedRoute.name || ''}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoutesDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoutesDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                routes.length > 10 &&
                                                <div className="search_sec">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input
                                                        type="text"
                                                        value={routeSearchInput}
                                                        onChange={(e) => setRouteSearchInput(e.target.value)}
                                                        placeholder="Search by Route Name..."
                                                    />
                                                </div>
                                            }
                                            <ul>
                                                {
                                                    routes.length > 0 ? (
                                                        routes.map((route, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectRoute(route)}
                                                                className={selectedRoute.id === route.id ? 'active' : ''}
                                                            >
                                                                {route.name}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="no_data">No routes found</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box half">
                                <span>Select Stopage <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedStopageDropdown}>
                                        <p>{selectedStopage.name || ''}</p>
                                        <i className={`fa-solid fa-angle-down ${showStopagesDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStopagesDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                stopages.length > 10 &&
                                                <div className="search_sec">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input
                                                        type="text"
                                                        value={stoppageSearchInput}
                                                        onChange={(e) => setStoppageSearchInput(e.target.value)}
                                                        placeholder="Search by Stopage Name..."
                                                    />
                                                </div>
                                            }
                                            <ul>
                                                {
                                                    stopages.length > 0 ? (
                                                        stopages.map((stopage, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectStopage(stopage)}
                                                                className={selectedStopage.id === stopage.id ? 'active' : ''}
                                                            >
                                                                {stopage.name}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="no_data">No stopages found</li>
                                                    )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </PassengerAddWrapper>
        </>
    );
}

export default PassengerAddModal;
