import { useState, useEffect } from "react";
import { CouponModalWrapper } from "../../../Styles/Modals/CouponModalStyle";
import Calender from "../../Calender";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";


const CreateCouponModal = ({ isCouponModalOpen, setIsCouponModalOpen, selectedCoupon, setSelectedCoupon, refreshData }) => {
    const api = getApiEndpoints();
    const [couponCode, setCouponCode] = useState('');
    const [targetBillAmount, setTargetBillAmount] = useState('');
    const [offerValue, setOfferValue] = useState('');
    const [offerLimit, setOfferLimit] = useState('');
    const [countValue, setCountValue] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [isStatus, setIsStatus] = useState(false);


    const couponTypes = ['General', 'Private'];
    const [showCouponTypeDropdown, setShowCouponTypeDropdown] = useState(false);
    const [selectedCouponType, setSelectedCouponType] = useState('');

    const [searchInput, setSearchInput] = useState('');
    const [institutions, setInstitutions] = useState([]);
    const [showInstitutionDropdown, setShowInstitutionDropdown] = useState(false);
    const [selectedInstitution, setSelectedInstitution] = useState({});

    const amountRanges = ['All', 'Above'];
    const [showAmountRangeDropdown, setShowAmountRangeDropdown] = useState(false);
    const [selectedAmountRange, setSelectedAmountRange] = useState('');

    const offerTypes = ['Flat', 'Approx'];
    const [showOfferTypeDropdown, setShowOfferTypeDropdown] = useState(false);
    const [selectedOfferType, setSelectedOfferType] = useState('');

    const offerUnits = selectedOfferType === 'Approx' ? ['Percentage'] : ['Percentage', 'Rupee'];
    const [showOfferUnitDropdown, setShowOfferUnitDropdown] = useState(false);
    const [selectedOfferUnit, setSelectedOfferUnit] = useState('');

    const validityTypes = ['Count', 'Date'];
    const [showValidityTypeDropdown, setShowValidityTypeDropdown] = useState(false);
    const [selectedValidityType, setSelectedValidityType] = useState('');

    const countTypes = ['Per User', 'Per Day'];
    const [showCountTypeDropdown, setShowCountTypeDropdown] = useState(false);
    const [selectedCountType, setSelectedCountType] = useState('');

    const [selectedDate, setSelectedDate] = useState('');
    const [showDateDropdown, setShowDateDropdown] = useState(false);

    const closeModal = () => {
        setIsCouponModalOpen(false);
        setSelectedCoupon(null);
        resetForm();
    };

    const toggleCouponTypeDropdown = () => {
        setShowCouponTypeDropdown(!showCouponTypeDropdown);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleInstitutionDropdown = () => {
        setShowInstitutionDropdown(!showInstitutionDropdown);
        setShowCouponTypeDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleAmountRangeDropdown = () => {
        setShowAmountRangeDropdown(!showAmountRangeDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleOfferTypeDropdown = () => {
        setShowOfferTypeDropdown(!showOfferTypeDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleOfferUnitDropdown = () => {
        setShowOfferUnitDropdown(!showOfferUnitDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleValidityTypeDropdown = () => {
        setShowValidityTypeDropdown(!showValidityTypeDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowCountTypeDropdown(false);
        setShowDateDropdown(false);
    }

    const toggleCountTypeDropdown = () => {
        setShowCountTypeDropdown(!showCountTypeDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowDateDropdown(false);

    }

    const handleSelectDate = () => {
        setShowDateDropdown(!showDateDropdown);
        setShowCouponTypeDropdown(false);
        setShowInstitutionDropdown(false);
        setShowAmountRangeDropdown(false);
        setShowOfferTypeDropdown(false);
        setShowOfferUnitDropdown(false);
        setShowValidityTypeDropdown(false);
        setShowCountTypeDropdown(false);
    }

    const fetchInstitutions = async () => {
        try {
            const response = await axiosInstance.get(api.fetchInstitutions, {
                params: {
                    isForm: true,
                    search: searchInput
                }
            });
            if (response?.data.status === 200) {
                console.log('Institutions fetched successfully:', response.data);
                setInstitutions(response.data.institutions);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isCouponModalOpen) {
            fetchInstitutions();
        }
    }, [isCouponModalOpen, searchInput]);

    useEffect(() => {
        if (selectedOfferType === 'Approx' && selectedOfferUnit !== 'Percentage') {
            setSelectedOfferUnit('Percentage');
        }
    }, [selectedOfferType, selectedOfferUnit]);

    const handleSelectedCouponType = (couponType) => {
        if (couponType === selectedCouponType) return;
        setSelectedCouponType(couponType);
        setShowCouponTypeDropdown(false);
    }

    const handleSelectedInstitutions = (institution) => {
        if (institution === selectedInstitution) return;
        setSelectedInstitution(institution);
        setShowInstitutionDropdown(false);
    }

    const handleSelectedAmountRanges = (amountRange) => {
        if (amountRange === selectedAmountRange) return;
        setSelectedAmountRange(amountRange);
        setShowAmountRangeDropdown(false);
    }

    const handleSelectedOfferTypes = (offerType) => {
        if (offerType === selectedOfferType) return;
        setSelectedOfferType(offerType);
        setShowOfferTypeDropdown(false);
    }

    const handleSelectedOfferUnits = (offerUnit) => {
        if (offerUnit === selectedOfferUnit) return;
        setSelectedOfferUnit(offerUnit);
        setShowOfferUnitDropdown(false);
    }

    const handleSelectedValidityTypes = (validityType) => {
        if (validityType === selectedValidityType) return;
        setSelectedValidityType(validityType);
        setShowValidityTypeDropdown(false);
    }

    const handleSelectedCountTypes = (countType) => {
        if (countType === selectedCountType) return;
        setSelectedCountType(countType);
        setShowCountTypeDropdown(false);
    }

    const isEditMode = Boolean(selectedCoupon?.id);

    useEffect(() => {
        if (selectedCoupon) {
            setCouponCode(selectedCoupon.code || '');
            setSelectedCouponType(selectedCoupon.type || '');
            setSelectedInstitution(selectedCoupon.institution || {});
            setSelectedAmountRange(selectedCoupon.bill_amount_range || '');
            setTargetBillAmount(selectedCoupon.target_bill_amount || '');
            setSelectedOfferType(selectedCoupon.offer_type || '');
            setOfferValue(selectedCoupon.offer_value || '');
            setSelectedOfferUnit(selectedCoupon.offer_unit || '');
            setOfferLimit(selectedCoupon.offer_limit || '');
            setSelectedValidityType(selectedCoupon.validity_type || '');
            setSelectedCountType(selectedCoupon.count_type || '');
            setCountValue(selectedCoupon.count_value || '');
            setSelectedDate(selectedCoupon.validity_date || '');
            setIsStatus(Boolean(selectedCoupon.status));
        } else {
            resetForm();
        }
    }, [selectedCoupon]);

    const handleCreatCoupon = async () => {
        setIsButtonLoading(true);
        const payload = {
            code: couponCode,
            type: selectedCouponType,
            inst_id: selectedInstitution?.inst_id || null,
            bill_amount_range: selectedAmountRange,
            target_bill_amount: targetBillAmount,
            offer_type: selectedOfferType,
            offer_value: offerValue,
            offer_unit: selectedOfferUnit,
            offer_limit: offerLimit,
            validity_type: selectedValidityType,
            count_type: selectedCountType,
            count_value: countValue,
            validity_date: selectedDate,
            status: isStatus
        };
        try {
            let response;

            if (isEditMode) {
                payload.couponId = selectedCoupon.id;
                response = await axiosInstance.post(api.createCoupon, payload);
            } else {
                response = await axiosInstance.post(api.createCoupon, payload);
            }

            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                closeModal();
                resetForm();
                refreshData?.();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    function resetForm() {
        setCouponCode('');
        setSelectedCouponType('');
        setSelectedInstitution({});
        setSelectedAmountRange('');
        setTargetBillAmount('');
        setSelectedOfferType('');
        setOfferValue('');
        setSelectedOfferUnit('');
        setOfferLimit('');
        setSelectedValidityType('');
        setSelectedCountType('');
        setCountValue('');
        setSelectedDate('');
        setIsStatus(false);
    };

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const isFormValid = couponCode.trim() !== '' && selectedCouponType.trim() !== '' && selectedAmountRange.trim() !== '' && selectedOfferType.trim() !== '' && selectedOfferUnit.trim() !== '' && selectedValidityType.trim() !== '';

    const modalHeading = isEditMode ? 'Edit Coupon' : 'Create Coupon';

    return (
        <>
            <CouponModalWrapper className={isCouponModalOpen ? "active" : ''}>
                <div className={`modal_box ${isCouponModalOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>{modalHeading}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Coupon Code <p>*</p></span>
                                <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Coupon Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleCouponTypeDropdown}>
                                        <p>{selectedCouponType}</p>
                                        <i className={`fa-solid fa-angle-down ${showCouponTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showCouponTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    couponTypes.length > 0 ? (
                                                        couponTypes.map((couponType, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectedCouponType(couponType)}
                                                                className={couponType === selectedCouponType ? 'active' : ''}
                                                            >
                                                                {couponType}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No coupontype available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                selectedCouponType === 'Private' && (
                                    <div className="select_box halfwidth">
                                        <span>Institution <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={toggleInstitutionDropdown}>
                                                <p>{selectedInstitution.inst_name}</p>
                                                <i className={`fa-solid fa-angle-down ${showInstitutionDropdown ? 'active' : ''}`}></i>
                                            </div>
                                            <div className={`dropdown ${showInstitutionDropdown ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by Institution Name..." />
                                                    </div>
                                                    <ul>
                                                        {
                                                            institutions.length > 0 ? (
                                                                institutions.map((institution, i) =>
                                                                    <div className={`inst_box ${institution.inst_id === selectedInstitution.inst_id ? 'active' : ''}`} key={i} onClick={() => handleSelectedInstitutions(institution)}>
                                                                        <div className="box_left">
                                                                            <h6>{getInitials(institution.inst_name)}</h6>
                                                                        </div>
                                                                        <div className="box_right">
                                                                            <p>{institution.inst_name}</p>
                                                                            <span>#{institution.inst_id}</span>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            ) : (
                                                                <p className="no_data">No institutions found</p>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="select_box halfwidth">
                                <span>Bill Amount Range <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleAmountRangeDropdown}>
                                        <p>{selectedAmountRange}</p>
                                        <i className={`fa-solid fa-angle-down ${showAmountRangeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showAmountRangeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    amountRanges.length > 0 ? (
                                                        amountRanges.map((amountRange, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() =>
                                                                    handleSelectedAmountRanges(amountRange)}
                                                                className={amountRange === selectedAmountRange ? 'active' : ''}
                                                            >
                                                                {amountRange}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No amountRanes available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                selectedAmountRange === 'Above' && (
                                    <div className="input_box halfwidth">
                                        <span>Target Bill Amount(₹) <p>*</p></span>
                                        <input type="text" value={targetBillAmount} onChange={(e) => setTargetBillAmount(e.target.value)} />
                                    </div>
                                )
                            }
                            <div className="select_box halfwidth">
                                <span>Offer Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleOfferTypeDropdown}>
                                        <p>{selectedOfferType}</p>
                                        <i className={showOfferTypeDropdown ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                                    </div>
                                    <div className={`dropdown ${showOfferTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    offerTypes.length > 0 ? (
                                                        offerTypes.map((offerType, i) =>
                                                            <li key={i}
                                                                onClick={() =>
                                                                    handleSelectedOfferTypes(offerType)}
                                                                className={offerType === selectedOfferType ? 'active' : ''}>
                                                                {offerType}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No offer types available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Offer Value <p>*</p></span>
                                <input type="text" value={offerValue} onChange={(e) => setOfferValue(e.target.value)} />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Offer Unit <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleOfferUnitDropdown}>
                                        <p>{selectedOfferUnit}</p>
                                        <i className={`fa-solid fa-angle-down ${showOfferUnitDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown drop_up ${showOfferUnitDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    offerUnits.length > 0 ? (
                                                        offerUnits.map((unit, i) =>
                                                            <li
                                                                key={i}
                                                                onClick={() => handleSelectedOfferUnits(unit)}
                                                                className={unit === selectedOfferUnit ? 'active' : ''}
                                                            >
                                                                {unit}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No offer units available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                selectedOfferType === 'Approx' && (
                                    <div className="input_box halfwidth">
                                        <span>Offer Limit(₹) <p>*</p></span>
                                        <input type="text" value={offerLimit} onChange={(e) => setOfferLimit(e.target.value)} />
                                    </div>
                                )
                            }
                            <div className="select_box halfwidth">
                                <span>Validity Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleValidityTypeDropdown}>
                                        <p>{selectedValidityType}</p>
                                        <i className={`fa-solid fa-angle-down ${showValidityTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown drop_up ${showValidityTypeDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    validityTypes.length > 0 ? (
                                                        validityTypes.map((validityType, i) =>
                                                            <li key={i} onClick={() => handleSelectedValidityTypes(validityType)}
                                                                className={validityType === selectedValidityType ? 'active' : ''}>
                                                                {validityType}
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="empty_message">No validity types available</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                selectedValidityType === 'Count' && (
                                    <>
                                        <div className="select_box halfwidth">
                                            <span>Count Type <p>*</p></span>
                                            <div className="dropdown_sec">
                                                <div className="dropdown_btn" onClick={toggleCountTypeDropdown}>
                                                    <p>{selectedCountType}</p>
                                                    <i className={showCountTypeDropdown ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                                                </div>
                                                <div className={`dropdown drop_up ${showCountTypeDropdown ? 'active' : ''}`}>
                                                    <div className="dropdown_inner">
                                                        <ul>
                                                            {
                                                                countTypes.length > 0 ? (
                                                                    countTypes.map((countType, i) =>
                                                                        <li key={i} onClick={() => handleSelectedCountTypes(countType)}
                                                                            className={countType === selectedCountType ? 'active' : ''}>
                                                                            {countType}
                                                                        </li>
                                                                    )
                                                                ) : (
                                                                    <li className="empty_message">No count types available</li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input_box halfwidth">
                                            <span>Count Value <p>*</p></span>
                                            <input type="text" value={countValue} onChange={(e) => setCountValue(e.target.value)} />
                                        </div>
                                    </>
                                )
                            }
                            {
                                selectedValidityType === 'Date' && (
                                    <div className="date_box halfwidth">
                                        <span>Validity Date <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={handleSelectDate}>
                                                <p>{selectedDate}</p>
                                                <i className="fa-regular fa-calendar"></i>
                                            </div>
                                            {
                                                showDateDropdown && (
                                                    <div className="dropdown drop_up">
                                                        <Calender setFinalSelectedDate={(date) => {
                                                            setSelectedDate(date); setShowDateDropdown(false)
                                                        }} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
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
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleCreatCoupon}>
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
            </CouponModalWrapper>
        </>
    );
}

export default CreateCouponModal;