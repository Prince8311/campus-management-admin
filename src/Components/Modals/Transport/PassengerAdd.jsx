import { useState } from "react";
import { PassengerAddWrapper } from "../../../Styles/Modals/TransportModalsStyle";

const PassengerAddModal = ({ isAddPassenger, setIsAddPassenger }) => {
    const passengers = ['Joydeep Barik', 'Sourish Mondal'];
    const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
    const [passengerName, setPassengerName] = useState('');

    const routes = ['abc', 'gantok'];
    const [showRoutesDropdown, setShowRoutesDropdown] = useState(false);
    const [routeName, setRouteName] = useState('');

    const stopages = ['newTown', 'ecopark'];
    const [showStopagesDropdown, setShowStopagesDropdown] = useState(false);
    const [stopageName, setStopageName] = useState('');

    const handleSelectedPassemgerDropdown = () => {
        setShowPassengerDropdown(!showPassengerDropdown);
    }

    const handleSelectedRouteDropdown = () => {
        setShowRoutesDropdown(!showRoutesDropdown);
    }

    const handleSelectedStopageDropdown = () => {
        setShowStopagesDropdown(!showStopagesDropdown);
    }

    const handleSelectPassengerName = (passenger) => {
        setPassengerName(passenger);
        setShowPassengerDropdown(false);
    }

    const handleSelectRouteName = (route) => {
        setRouteName(route);
        setShowRoutesDropdown(false);
    }

    const handleSelectStopageName = (stopage) => {
        setStopageName(stopage);
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
                            <div className="select_box full">
                                <span>Select Passenger <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedPassemgerDropdown}>
                                        <p>{passengerName}</p>
                                        <i className={`fa-solid fa-angle-down ${showPassengerDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showPassengerDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by passenger Name..."
                                                />
                                            </div>
                                            <ul>
                                                {passengers.map((passenger, i) => (
                                                    <li
                                                        key={i}
                                                        className={`user_box ${passengerName === passenger ? "active" : ""}`}
                                                        onClick={() => handleSelectPassengerName(passenger)}
                                                    >
                                                        <div className="box_left">
                                                            <h6>JB</h6>
                                                        </div>

                                                        <div className="box_right">
                                                            <p>{passenger}</p>
                                                            <span>#20152d5</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box half">
                                <span>Select Route <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedRouteDropdown}>
                                        <p>{routeName}</p>
                                        <i className={`fa-solid fa-angle-down ${showRoutesDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showRoutesDropdown ? 'active' : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Route Name..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    routes.map((route, i) => (

                                                        <li key={i}
                                                            onClick={() => handleSelectRouteName(route)}
                                                            className={routeName === route ? 'active' : ''}
                                                        >
                                                            {route}
                                                        </li>
                                                    ))
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
                                        <p>{stopageName}</p>
                                        <i className={`fa-solid fa-angle-down ${showStopagesDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStopagesDropdown ? 'active' : ''} dropUp`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Stopage Name..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    stopages.map((stopage, i) => (

                                                        <li key={i}
                                                            onClick={() => handleSelectStopageName(stopage)}
                                                            className={stopageName === stopage ? 'active' : ''}
                                                        >
                                                            {stopage}
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
                        <button>Save</button>
                    </div>
                </div>
            </PassengerAddWrapper>
        </>
    );
}

export default PassengerAddModal;