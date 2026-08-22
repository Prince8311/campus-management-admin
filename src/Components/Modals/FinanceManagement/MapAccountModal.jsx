import { useEffect, useRef, useState } from "react";
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
    const [selectedSections, setSelectedSections] = useState([]);

    const textRef = useRef(null);
    const [displayText, setDisplayText] = useState('');
    const [isDropUp, setIsDropUp] = useState(false);

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
        if (!selectedClass) {
            toast.warning("Please select a class first");
            return;
        }

        setShowSectionDropdown((prev) => !prev);

        setShowAccountDropdown(false);
        setShowFeeTypeDropdown(false);
        setShowClassDropdown(false);
    }

    const handleSelectClass = (className) => {
        setSelectedClass(className);
        setShowClassDropdown(false);

        setSectionList([]);
        setShowSectionDropdown(false);
    };

    const handleMultiSelect = (section) => {
        // =========================
        // ALL SECTION
        // =========================
        if (section === "All Section") {
            const existingAllSection = selectedSections.some(
                (item) =>
                    item.className === selectedClass &&
                    item.isAll === true
            );

            if (existingAllSection) {
                // Current class-এর All Section remove
                setSelectedSections((prev) =>
                    prev.filter(
                        (item) => item.className !== selectedClass
                    )
                );
            } else {
                // Current class-এর আগের সব section remove
                // তারপর All Section add
                setSelectedSections((prev) => [
                    ...prev.filter(
                        (item) => item.className !== selectedClass
                    ),
                    {
                        className: selectedClass,
                        section: "All Section",
                        isAll: true,
                    },
                ]);
            }

            return;
        }

        // =========================
        // NORMAL SECTION
        // =========================

        const isCurrentClassAllSelected = selectedSections.some(
            (item) =>
                item.className === selectedClass &&
                item.isAll === true
        );

        // All Section selected থাকলে normal section select হবে না
        if (isCurrentClassAllSelected) {
            return;
        }

        setSelectedSections((prev) => {
            const alreadySelected = prev.some(
                (item) =>
                    item.className === selectedClass &&
                    item.section === section
            );

            if (alreadySelected) {
                // শুধু current class-এর এই section remove
                return prev.filter(
                    (item) =>
                        !(
                            item.className === selectedClass &&
                            item.section === section
                        )
                );
            }

            // নতুন section add
            return [
                ...prev,
                {
                    className: selectedClass,
                    section: section,
                    isAll: false,
                },
            ];
        });
    };

    const currentClassSelectedSections = selectedSections.filter(
        item => item.className === selectedClass
    );

    const allSelected = currentClassSelectedSections.some(
        item => item.isAll === true
    );

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
                            <div className="select_box fullwidth">
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
                            <div className="input_box fullwidth">
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
                            <div className="multi_select_box halfwidth">
                                <span>Section <p>*</p></span>
                                <div className="select_btn" onClick={handleSectionDropdown}>
                                    <p>
                                        {allSelected
                                            ? "All Section"
                                            : currentClassSelectedSections.length > 0
                                                ? currentClassSelectedSections
                                                    .map((item) => item.section)
                                                    .join(", ")
                                                : ""
                                        }
                                    </p>

                                    <i
                                        className={`fa-solid fa-angle-down ${showSectionDropdown ? "active" : ""
                                            }`}
                                    ></i>
                                </div>
                                {
                                    showSectionDropdown &&
                                    <div className={`dropdown ${isDropUp ? "drop_up" : ""}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {isSectionListLoading ? (
                                                    Array.from({ length: 3 }).map((_, index) => (
                                                        <li key={index}>
                                                            <SkeletonLoader
                                                                width="100%"
                                                                height="13px"
                                                            />
                                                        </li>
                                                    ))
                                                ) : sectionList.length > 0 ? (
                                                    <>
                                                        <li
                                                            onClick={() => handleMultiSelect("All Section")}
                                                            className={allSelected ? "selected" : ""}
                                                        >
                                                            <p>All Section</p>

                                                            <span>
                                                                {allSelected && (
                                                                    <img
                                                                        src="/images/check-icon.png"
                                                                        alt="selected"
                                                                    />
                                                                )}
                                                            </span>
                                                        </li>

                                                        {/* Sections */}
                                                        {sectionList.map((section, i) => {
                                                            const isSelected = selectedSections.some(
                                                                item =>
                                                                    item.className === selectedClass &&
                                                                    item.section === section
                                                            );

                                                            return (
                                                                <li
                                                                    key={i}
                                                                    onClick={() => handleMultiSelect(section)}
                                                                    className={`
                                                                        ${isSelected ? "selected" : ""}
                                                                        ${allSelected ? "disabled" : ""}
                                                                    `}
                                                                >
                                                                    <p>{section}</p>

                                                                    <span>
                                                                        {isSelected && (
                                                                            <img
                                                                                src="/images/check-icon.png"
                                                                                alt="selected"
                                                                            />
                                                                        )}
                                                                    </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </>
                                                ) : (
                                                    <li className="empty_message">
                                                        No sections available
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                            {selectedSections.length > 0 && (
                                <div className="box_content">
                                    {selectedSections.map((item, index) => (
                                        <li
                                            key={`${item.className}-${item.section}-${index}`}
                                        >
                                            <p>
                                                {item.className} -{" "}
                                                <a>
                                                    {item.isAll
                                                        ? "All Section"
                                                        : item.section}
                                                </a>
                                            </p>

                                            <span>
                                                <i
                                                    className="fa-solid fa-circle-xmark"
                                                    onClick={() =>
                                                        setSelectedSections((prev) =>
                                                            prev.filter(
                                                                (sectionItem) =>
                                                                    !(
                                                                        sectionItem.className ===
                                                                        item.className &&
                                                                        sectionItem.section ===
                                                                        item.section
                                                                    )
                                                            )
                                                        )
                                                    }
                                                ></i>
                                            </span>
                                        </li>
                                    ))}
                                </div>
                            )}
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