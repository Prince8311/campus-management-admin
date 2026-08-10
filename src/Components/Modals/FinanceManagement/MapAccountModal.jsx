import { useState } from "react";
import { MapAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const MapAccountModal = ({ isMapAccountModalOpen, setIsMapAccountModalOpen }) => {

    const accountNameList = ['joyddep', 'sourish', 'abhayji'];
    // const [accountNameList, setAccountNameList] = useState([]);
    const [showAccountNameDropdown, setShowAccountNameDropdown] = useState(false);
    const [selectedAccountName, setSelectedAccountName] = useState('');

    const feeTypes = ['tution', 'hostel', 'travel'];
    // const [feeTypes, setFeeTypes] = useState([]);
    const [showFeeTypeDropdown, setShowFeeTypeDropdown] = useState(false);
    const [selectedFeesType, setSelectedFeesType] = useState('');

    const classList = ['Class1', ' Class2', 'class3', ' class4'];
    // const [classList, setClassList] = useState([]);
    const [showClassDropdown, setShowClassDropdown] = useState(false);
    const [selectedClass, setSelectedClass] = useState('');

    const sectionList = ['a', 'b', 'c'];
    // const [sectionList, setSectionList] = useState([]);
    const [showSectionDropdown, setShowSectionDropdown] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');

    const handleSelectedAccountNameDropdown = () => {
        setShowAccountNameDropdown(!showAccountNameDropdown);
    }

    const handleSelectedClassDropdown = () => {
        setShowClassDropdown(!showClassDropdown);
    }

    const handleSelectedSectionDropdown = () => {
        setShowSectionDropdown(!showSectionDropdown);
    }

    const handleSelectedFeeTypeDropdown = () => {
        setShowFeeTypeDropdown(!showFeeTypeDropdown);
    }

    const handleSelectAccountName = (name) => {
        setSelectedAccountName(name);
        setShowAccountNameDropdown(false);
    }
    const handleSelectClass = (cla) => {
        setSelectedClass(cla);
        setShowClassDropdown(false);
    }
    const handleSelectSection = (section) => {
        setSelectedSection(section);
        setShowSectionDropdown(false);
    }
    const handleSelectFeeType = (fee) => {
        setSelectedFeesType(fee);
        setShowFeeTypeDropdown(false);
    }

    function closeModal() {
        setIsMapAccountModalOpen(false);
    }
    return (
        <>
            <MapAccountWrapper className={isMapAccountModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isMapAccountModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Map Account</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Account Name <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedAccountNameDropdown}>
                                        <p>{selectedAccountName}</p>
                                        <i className={`fa-solid fa-angle-down ${showAccountNameDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showAccountNameDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    accountNameList.map((name, i) => (
                                                        <div className={`user_box ${selectedAccountName === name ? 'active' : ''}`} key={i}
                                                            onClick={()=> handleSelectAccountName(name)}
                                                        >
                                                            <div className="box_left">
                                                                <h6>JB</h6>
                                                            </div>
                                                            <div className="box_right">
                                                                <p>{name}</p>
                                                                <span>#1458759351000</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Account Number <p>*</p></span>
                                <input type="text" readOnly />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Class <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedClassDropdown}>
                                        <p>{selectedClass}</p>
                                        <i className={`fa-solid fa-angle-down ${showClassDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showClassDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    classList.map((cla, i) => (
                                                        <li key={i}
                                                            onClick={() => handleSelectClass(cla)}
                                                            className={selectedClass === cla ? 'active' : ''}
                                                        >
                                                            {cla}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Section <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedSectionDropdown}>
                                        <p>{selectedSection}</p>
                                        <i className={`fa-solid fa-angle-down ${showSectionDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showSectionDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by Account Name and number..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    sectionList.map((section, i) => (
                                                        <li key={i}
                                                            onClick={() => handleSelectSection(section)}
                                                            className={selectedSection === section ? 'active' : ''}
                                                        >
                                                            {section}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Fee Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSelectedFeeTypeDropdown}>
                                        <p>{selectedFeesType}</p>
                                        <i className={`fa-solid fa-angle-down ${showFeeTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFeeTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input
                                                    type="text"
                                                    placeholder="Search by feetype..."
                                                />
                                            </div>
                                            <ul>
                                                {
                                                    feeTypes.map((fee, i) => (
                                                        <li key={i}
                                                            onClick={() => handleSelectFeeType(fee)}
                                                            className={selectedFeesType === fee ? 'active' : ''}
                                                        >
                                                            {fee}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>IFSC Code <p>*</p></span>
                                <input type="text" readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button> Save</button>
                    </div>
                </div>
            </MapAccountWrapper>
        </>
    );
}

export default MapAccountModal;