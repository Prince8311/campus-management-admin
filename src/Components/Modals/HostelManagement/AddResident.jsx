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
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showBuildingDropdown, setShowBuildingDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const [showFoodPreferenceDropdown, setShowFoodPreferenceDropdown] = useState(false);

    const closeModal = () => {
        setIsAddResidentOpen(false);
    };

    const toggleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    };

    const toggleBuildingDropdown = () => {
        setShowBuildingDropdown(!showBuildingDropdown);
        setShowUserDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }   

    const toggleRoomDropdown = () => {
        setShowRoomDropdown(!showRoomDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowStatusDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleStatusDropdown = () => {
        setShowStatusDropdown(!showStatusDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowFoodPreferenceDropdown(false);
    }

    const toggleFoodPreferenceDropdown = () => {
        setShowFoodPreferenceDropdown(!showFoodPreferenceDropdown);
        setShowUserDropdown(false);
        setShowBuildingDropdown(false);
        setShowRoomDropdown(false);
        setShowStatusDropdown(false);
    }

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
                                        <p>Sick Room</p>
                                        <i className={`fa-solid fa-angle-down ${showUserDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                <div className="user_box">
                                                    <div className="box_left">
                                                        <h6>JB</h6>
                                                    </div>
                                                    <div className="box_right">
                                                        <p>Resident</p>
                                                        <span>54149-H1-164</span>
                                                    </div>
                                                </div>
                                                <div className="user_box">
                                                    <div className="box_left">
                                                        <h6>JB</h6>
                                                    </div>
                                                    <div className="box_right">
                                                        <p>Resident</p>
                                                        <span>54149-H1-164</span>
                                                    </div>
                                                </div>
                                                <div className="user_box">
                                                    <div className="box_left">
                                                        <h6>JB</h6>
                                                    </div>
                                                    <div className="box_right">
                                                        <p>Resident</p>
                                                        <span>54149-H1-164</span>
                                                    </div>
                                                </div>
                                                <div className="user_box">
                                                    <div className="box_left">
                                                        <h6>JB</h6>
                                                    </div>
                                                    <div className="box_right">
                                                        <p>Resident</p>
                                                        <span>54149-H1-164</span>
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Building <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleBuildingDropdown}>
                                        <p>Sick Room</p>
                                        <i className={`fa-solid fa-angle-down ${showBuildingDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showBuildingDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sick Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Floor No. <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Room <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleRoomDropdown}>
                                        <p>Sick Room</p>
                                        <i className={`fa-solid fa-angle-down ${showRoomDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoomDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sick Room</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Status <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleStatusDropdown}>
                                        <p>On Campus</p>
                                        <i className={`fa-solid fa-angle-down ${showStatusDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStatusDropdown ? "active" : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    statusOptions.map((option) => (
                                                        <li key={option}>{option}</li>
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
                                        <p>Veg</p>
                                        <i className={`fa-solid fa-angle-down ${showFoodPreferenceDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFoodPreferenceDropdown ? "active" : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    foodPreferenceOptions.map((option) => (
                                                        <li key={option}>{option}</li>
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
                        <button>Save</button>
                    </div>
                </div>
            </AddResidentWrapper>
        </>
    );
}

export default AddResidentModal;