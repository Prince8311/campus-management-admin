import { useState } from "react";
import { CouponModalWrapper } from "../../../Styles/Modals/CouponModalStyle";


const CreateCouponModal = ({ isCouponModalOpen, setIsCouponModalOpen }) => {

    const couponTypes = ['General', 'Private'];
    const [showCouponTypeDropdown, setShowCouponTypeDropdown] = useState(false);
    const [selectedCouponType, setSelectedCouponType] = useState('');

    const institutions = ['Abc', 'defg', 'ijkl'];
    const [showInstitutionDropdown, setShowInstitutionDropdown] = useState(false);
    const [selectedInstitution, setSelectedInstitution] = useState('');

    const amountRanges = ['All', 'Above'];
    const [showAmountRangeDropdown, setShowAmountRangeDropdown] = useState(false);
    const [selectedAmountRange, setSelectedAmountRange] = useState('');

    const offerTypes = ['Flat', 'Approx'];
    const [showOfferTypeDropdown, setShowOfferTypeDropdown] = useState(false);
    const [selectedOfferType, setSelectedOfferType] = useState('');

    const offerUnits = ['Percentage', 'Rupee'];
    const [showOfferUnitDropdown, setShowOfferUnitDropdown] = useState(false);
    const [selectedOfferUnit, setSelectedOfferUnit] = useState('');

    const validityTypes = ['Count', 'Date'];
    const [showValidityTypeDropdown, setShowValidityTypeDropdown] = useState(false);
    const [selectedValidityType, setSelectedValidityType] = useState('');

    const countTypes = ['Per User', 'Per Day'];
    const [showCountTypeDropdown, setShowCountTypeDropdown] = useState(false);
    const [selectedCountType, setSelectedCountType] = useState('');

    const closeModal = () => {
        setIsCouponModalOpen(false);
    };

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

    return (
        <>
            <CouponModalWrapper className={isCouponModalOpen ? "active" : ''}>
                <div className={`modal_box ${isCouponModalOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Create Coupon</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Coupon Code <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Coupon Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowCouponTypeDropdown(!showCouponTypeDropdown)}>
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
                                            <div className="dropdown_btn" onClick={() =>
                                                setShowInstitutionDropdown(!showInstitutionDropdown)
                                            }>
                                                <p>{selectedInstitution}</p>
                                                <i className={`fa-solid fa-angle-down ${showInstitutionDropdown ? 'active' : ''}`}></i>
                                            </div>
                                            <div className={`dropdown ${showInstitutionDropdown ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input type="text" placeholder="Search by Institution Name..." />
                                                    </div>
                                                    <ul>
                                                        {
                                                            institutions.length > 0 ? (
                                                                institutions.map((institution, i) =>
                                                                    <div className={`inst_box ${institution === selectedInstitution ? 'active' : ''}`} key={i} onClick={() => handleSelectedInstitutions(institution)}>
                                                                        <div className="box_left">
                                                                            <h6>{institution}</h6>
                                                                        </div>
                                                                        <div className="box_right">
                                                                            <p>School</p>
                                                                            <span>#12345</span>
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
                                    <div className="dropdown_btn" onClick={() =>
                                        setShowAmountRangeDropdown(!showAmountRangeDropdown)
                                    }>
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
                                        <input type="text" />
                                    </div>
                                )
                            }
                            <div className="select_box halfwidth">
                                <span>Offer Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowOfferTypeDropdown(!showOfferTypeDropdown)}>
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
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Offer Unit <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowOfferUnitDropdown(!showOfferUnitDropdown)}>
                                        <p>{selectedOfferUnit}</p>
                                        <i className={`fa-solid fa-angle-down ${showOfferUnitDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showOfferUnitDropdown ? 'active' : ''}`}>
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
                                        <input type="text" />
                                    </div>
                                )
                            }
                            <div className="select_box halfwidth">
                                <span>Validity Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowValidityTypeDropdown(!showValidityTypeDropdown)}>
                                        <p>{selectedValidityType}</p>
                                        <i className={`fa-solid fa-angle-down ${showValidityTypeDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showValidityTypeDropdown ? 'active' : ''}`}>
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
                                                <div className="dropdown_btn" onClick={() => setShowCountTypeDropdown(!showCountTypeDropdown)}>
                                                    <p>{selectedCountType}</p>
                                                    <i className={showCountTypeDropdown ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}></i>
                                                </div>
                                                <div className={`dropdown ${showCountTypeDropdown ? 'active' : ''}`}>
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
                                            <input type="text" />
                                        </div>
                                    </>
                                )
                            }
                            {
                                selectedValidityType === 'Date' && (
                                    <div className="input_box halfwidth">
                                        <span>Validity Date <p>*</p></span>
                                        <div className="date_btn">
                                            <p>12/05/2026</p>
                                            <i className="fa-regular fa-calendar"></i>
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
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <button>Save</button>
                    </div>
                </div>
            </CouponModalWrapper>
        </>
    );
}

export default CreateCouponModal;