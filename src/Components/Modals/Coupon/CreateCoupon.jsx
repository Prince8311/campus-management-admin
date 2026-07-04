import { useState } from "react";
import { CouponModalWrapper } from "../../../Styles/Modals/CouponModalStyle";


const CreateCouponModal = ({ isCouponModalOpen, setIsCouponModalOpen }) => {

    const couponTypes = ['Genaral', 'Private'];
    const [showCouponTypeDropdown, setShowCouponTypeDropdown] = useState(false);
    const [selectedCouponType, setSelectedCouponType] = useState('');

    const closeModal = () => {
        setIsCouponModalOpen(false);
    };

    const handleSelectedCouponType = (couponType) => {
        if (couponType === selectedCouponType) return;
        setSelectedCouponType(couponType);
        setShowCouponTypeDropdown(false);
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
                            <div className="select_box halfwidth">
                                <span>Institution <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Abc Institution</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Abc Institution</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Amount Range <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>All</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>All</li>
                                                <li>Above</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Amount <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Offer Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Flet</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Flet</li>
                                                <li>Approx</li>
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
                                    <div className="dropdown_btn">
                                        <p>Percentage</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Percentage</li>
                                                <li>Rupee</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Offer Limit <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Validity Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Count</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Count</li>
                                                <li>Date</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="select_box halfwidth">
                                <span>Count Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Per User</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Per User</li>
                                                <li>Per Day</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Count Value <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Validity Date <p>*</p></span>
                                <div className="date_btn">
                                    <p>12/05/2026</p>
                                    <i className="fa-regular fa-calendar"></i>
                                </div>
                            </div>
                            <div className="select_box fullwidth">
                                <span>Count Code <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Sourish-05</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Sourish-05</li>
                                                <li>Another-Code</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
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