import { useEffect, useState } from "react";
import { MapAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import SkeletonLoader from "../../Loader/SkeletonLoader";

const MapAccountModal = ({ isMapAccountModalOpen, setIsMapAccountModalOpen }) => {
    const api = getApiEndpoints();

    const [isAccountsLoading, setIsAccountsLoading] = useState(false);
    const accountNameList = ['joyddep', 'sourish', 'abhayji'];
    const [accountList, setAccountList] = useState([]);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState({});

    const [isFeeTypesLoading, setIsFeeTypesLoading] = useState(false);
    const [feeTypes, setFeeTypes] = useState([]);
    const [showFeeTypeDropdown, setShowFeeTypeDropdown] = useState(false);
    const [selectedFeeType, setSelectedFeeType] = useState('');

    const [isClassListLoading, setIsClassListLoading] = useState(false);
    const [classList, setClassList] = useState([]);
    const [showClassDropdown, setShowClassDropdown] = useState(false);
    const [selectedClass, setSelectedClass] = useState('');

    const [isSectionListLoading, setIsSectionListLoading] = useState(false);
    const [sectionList, setSectionList] = useState([]);
    const [showSectionDropdown, setShowSectionDropdown] = useState(false);
    const [selectedSection, setSelectedSection] = useState('');

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const fetchAccountList = async () => {
        setIsAccountsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchBankAccounts, {
                params: {
                    isForm: true
                }
            });
            if (response.data.status === 200) {
                setAccountList(response.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsAccountsLoading(false);
        }
    }

    useEffect(() => {
        if (showAccountDropdown) {
            fetchAccountList();
        }
    }, [showAccountDropdown]);

    const handleAccountDropdown = () => {
        setShowAccountDropdown(!showAccountDropdown);
        setShowFeeTypeDropdown(false);
        setShowClassDropdown(false);
        setShowSectionDropdown(false);
    }
    

    const handleSelectAccount = (account) => {
        setSelectedAccount(account);
        setShowAccountDropdown(false);
    }

    const fetchFeeTypes = async () => {
        setIsFeeTypesLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchFeeTypes);
            if (response.data.status === 200) {
                setFeeTypes(response.data.types);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsFeeTypesLoading(false);
        }
    }

    useEffect(() => {
        if (showFeeTypeDropdown) {
            fetchFeeTypes();
        }
    }, [showFeeTypeDropdown]);

    const handleSelectFeeType = (type) => {
        setSelectedFeeType(type);
        setShowFeeTypeDropdown(false);
    }

    const handleFeeTypeDropdown = () => {
        setShowFeeTypeDropdown(!showFeeTypeDropdown);
        setShowAccountDropdown(false);
        setShowClassDropdown(false);
        setShowSectionDropdown(false);
    }

    const fetchClassList = async () => {
        setIsClassListLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchClasses, {
                params: {
                    isForm: true
                }
            });
            if (response.data.status === 200) {
                setClassList(response.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsClassListLoading(false);
        }
    }

    useEffect(() => {
        if (showClassDropdown) {
            fetchClassList();
        }
    }, [showClassDropdown]);

    const handleClassDropdown = () => {
        setShowClassDropdown(!showClassDropdown);
        setShowAccountDropdown(false);
        setShowFeeTypeDropdown(false);
        setShowSectionDropdown(false);
    }

    const fetchSectionList = async () => {
        setIsSectionListLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchClassSections, {
                params: {
                    isForm: true,
                    class: selectedClass
                }
            });
            if (response.data.status === 200) {
                setSectionList(response.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsSectionListLoading(false);
        }
    }

    useEffect(() => {
        if (showSectionDropdown && selectedClass) {
            fetchSectionList();
        }
    }, [showSectionDropdown, selectedClass]);

    const handleSectionDropdown = () => {
        setShowSectionDropdown(!showSectionDropdown);
    }

    const handleSelectClass = (className) => {
        setSelectedClass(className);
        setShowClassDropdown(false);
    }
    const handleSelectSection = (section) => {
        setSelectedSection(section);
        setShowSectionDropdown(false);
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
                                    <div className="dropdown_btn" onClick={handleAccountDropdown}>
                                        <p>{selectedAccount.account_name}</p>
                                        <i className={`fa-solid fa-angle-down ${showAccountDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showAccountDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                (!isAccountsLoading && accountList.length > 6) && (
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input
                                                            type="text"
                                                            placeholder="Search by Account Name and Number..."
                                                        />
                                                    </div>
                                                )
                                            }
                                            <ul>
                                                {
                                                    isAccountsLoading ? (
                                                        Array.from({ length: 2 }).map((_, index) => (
                                                            <div className="user_box" key={index}>
                                                                <div className="box_left">
                                                                    <SkeletonLoader width="100%" height="100%" />
                                                                </div>
                                                                <div className="box_right">
                                                                    <SkeletonLoader width="250" height="13px" />
                                                                    <SkeletonLoader width="150" height="10px" />
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : accountList.length > 0 ? (
                                                        accountList.map((account, i) => (
                                                            <div className={`user_box ${account.id === selectedAccount.id ? 'active' : ''}`} key={i}
                                                                onClick={() => handleSelectAccount(account)}
                                                            >
                                                                <div className="box_left">
                                                                    <h6>{getInitials(account.account_name)}</h6>
                                                                </div>
                                                                <div className="box_right">
                                                                    <p>{account.account_name}</p>
                                                                    <span>#{account.account_no}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <li className="empty_message">No accounts available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Account Number <p>*</p></span>
                                <input type="text" value={selectedAccount.account_no ?? ''} readOnly />
                            </div>
                            <div className="input_box halfwidth">
                                <span>IFSC Code <p>*</p></span>
                                <input type="text" value={selectedAccount.ifsc_code ?? ''} readOnly />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Fee Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleFeeTypeDropdown}>
                                        <p>{selectedFeeType}</p>
                                        <i className={`fa-solid fa-angle-down ${showFeeTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showFeeTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    isFeeTypesLoading ? (
                                                        Array.from({ length: 2 }).map((_, index) => (
                                                            <li key={index}>
                                                                <SkeletonLoader width="100%" height="13px" />
                                                            </li>
                                                        ))
                                                    ) : feeTypes.length > 0 ? (
                                                        feeTypes.map((fee, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectFeeType(fee)}
                                                                className={selectedFeeType === fee ? 'active' : ''}
                                                            >
                                                                {fee}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="empty_message">No fee types available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Class <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleClassDropdown}>
                                        <p>{selectedClass}</p>
                                        <i className={`fa-solid fa-angle-down ${showClassDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown dropUp ${showClassDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    isClassListLoading ? (
                                                        Array.from({ length: 2 }).map((_, index) => (
                                                            <li key={index}>
                                                                <SkeletonLoader width="100%" height="13px" />
                                                            </li>
                                                        ))
                                                    ) : classList.length > 0 ? (
                                                        classList.map((className, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectClass(className)}
                                                                className={selectedClass === className ? 'active' : ''}
                                                            >
                                                                {className}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="empty_message">No classes available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Section <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={handleSectionDropdown}>
                                        <p>{selectedSection}</p>
                                        <i className={`fa-solid fa-angle-down ${showSectionDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown dropUp ${showSectionDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    isSectionListLoading ? (
                                                        Array.from({ length: 2 }).map((_, index) => (
                                                            <li key={index}>
                                                                <SkeletonLoader width="100%" height="13px" />
                                                            </li>
                                                        ))
                                                    ) : sectionList.length > 0 ? (
                                                        sectionList.map((section, i) => (
                                                            <li key={i}
                                                                onClick={() => handleSelectSection(section)}
                                                                className={selectedSection === section ? 'active' : ''}
                                                            >
                                                                {section}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li className="empty_message">No sections available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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