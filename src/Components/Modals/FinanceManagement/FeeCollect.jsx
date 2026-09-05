import { useState, useEffect,useRef, useCallback } from "react";
import { FeeCollectWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import Calender from "../../Calender";

const FeeCollectionModal = ({ isOpenFeeCollectModal, setIsOpenFeeCollectModal, studentDetails }) => {
    const api = getApiEndpoints();
    const [recordType, setRecordType] = useState('installments');
    const [paymentMode, setPaymentMode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentReferenceNumber, setPaymentReferenceNumber] = useState('');
    const [adjustmentType, setAdjustmentType] = useState('');
    const [collectionAmount, setCollectionAmount] = useState('0.00');
    const [studentFeeDetails, setStudentFeeDetails] = useState({
        total_due: '0.00',
        overdue: '0.00',
        installments: [],
        canSelectInstallment: true,
        account_details: null,
    });
    const [isStudentFeeDetailsLoading, setIsStudentFeeDetailsLoading] = useState(false);

    const filterBtnRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isCalendarDropdownOpen, setIsCalendarDropdownOpen] = useState(false);
    const [finalSelectedDate, setFinalSelectedDate] = useState('');

    useEffect(() => {
        if (isOpenFeeCollectModal) {
            setRecordType('installments');
            setPaymentMode('');
            setPaymentMethod('');
            setPaymentReferenceNumber('');
            setAdjustmentType('');
            setCollectionAmount('0.00');
            setFinalSelectedDate('');
            setIsCalendarDropdownOpen(false);
        }
    }, [isOpenFeeCollectModal]);

    const fetchStudentFeeDetails = useCallback(async () => {
        setIsStudentFeeDetailsLoading(true);
        setCollectionAmount('0.00');
        setStudentFeeDetails({
            total_due: '0.00',
            overdue: '0.00',
            installments: [],
            canSelectInstallment: true,
            account_details: null,
        });
        try {
            const response = await axiosInstance.get(api.fetchStudentFeeDetails, {
                params: {
                    studentId: studentDetails?.studentId,
                    class: studentDetails?.className,
                    section: studentDetails?.sectionName,
                }
            });
            if (response?.data.status === 200) {
                const feeDetails = response?.data?.data || response?.data;
                const canSelectInstallment = feeDetails?.canSelectInstallment ?? true;
                const installments = feeDetails?.installments || [];
                const totalDue = feeDetails?.total_due ?? '0.00';
                const activeInstallment = installments.find((installment) => installment.isActive === true);
                const defaultRecordType = canSelectInstallment ? 'installments' : 'lumpSum';

                setStudentFeeDetails({
                    total_due: totalDue,
                    overdue: feeDetails?.overdue ?? '0.00',
                    installments,
                    canSelectInstallment,
                    account_details: feeDetails?.account_details || null,
                });
                setRecordType(defaultRecordType);
                setCollectionAmount(activeInstallment?.due_amount ?? '0.00');
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsStudentFeeDetailsLoading(false);
        }
    }, [api.fetchStudentFeeDetails, studentDetails?.studentId, studentDetails?.className, studentDetails?.sectionName]);

    useEffect(() => {
        if (isOpenFeeCollectModal) {
            fetchStudentFeeDetails();
        }
    }, [isOpenFeeCollectModal, fetchStudentFeeDetails]);

    function closeModal() {
        setIsOpenFeeCollectModal(false);
    }

    const handleRecordTypeChange = (event) => {
        const selectedRecordType = event.target.value;
        const activeInstallment = studentFeeDetails.installments.find(
            (installment) => installment.isActive === true
        );

        setRecordType(selectedRecordType);
        setCollectionAmount(activeInstallment?.due_amount ?? '0.00');
    };

    const handleLumpSumAmountChange = (event) => {
        const { value } = event.target;

        if (/^\d*\.?\d{0,2}$/.test(value)) {
            setCollectionAmount(value);
        }
    };

    const handlePaymentModeChange = (event) => {
        setPaymentMode(event.target.value);
        setPaymentMethod('');
        setPaymentReferenceNumber('');
        setFinalSelectedDate('');
        setIsCalendarDropdownOpen(false);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        setPaymentReferenceNumber('');
    };

    const requiresReferenceNumber = paymentMode === 'offline'
        && (paymentMethod === 'dd' || paymentMethod === 'cheque');
    const isFormValid = Number(collectionAmount) > 0
        && Boolean(paymentMode)
        && Boolean(paymentMethod)
        && (paymentMode !== 'offline' || Boolean(finalSelectedDate))
        && (!requiresReferenceNumber || Boolean(paymentReferenceNumber.trim()));

    const openCalender = () => {
        setIsCalendarDropdownOpen(!isCalendarDropdownOpen)
    }
    return (
        <>
            <FeeCollectWrapper className={isOpenFeeCollectModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenFeeCollectModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Collect Fee for {studentDetails?.studentName}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="modal_content_sec">
                        <div className="installment_box_sec">
                            {
                                isStudentFeeDetailsLoading ? (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <div className="installment_box" key={index}>
                                            <SkeletonLoader width="100%" height="115px" />
                                        </div>
                                    ))
                                ) : studentFeeDetails.installments.length > 0 ? (
                                    studentFeeDetails.installments.map((installment) => {
                                        const statusClass = installment.status?.toLowerCase().replace(/\s+/g, '_');
                                        const isInactive = installment.isActive === false;

                                        return (
                                            <div
                                                className={`installment_box ${isInactive ? 'inactive' : ''}`}
                                                key={`${installment.configuration_id}-${installment.installment_id}`}
                                            >
                                                <div className="box_inner">
                                                    <div className="top_part">
                                                        <div className="part_content">
                                                            <a><i className="fa-solid fa-calendar-day"></i></a>
                                                            <div className="middle_sec">
                                                                <h6>{installment.scheduled_date}</h6>
                                                                <h4>Total amount: <b>₹{installment.amount}</b></h4>
                                                            </div>
                                                            <span className={statusClass}>{installment.status}</span>
                                                        </div>
                                                        {isInactive ? (
                                                            <div className="installment_message">
                                                                <p>{installment.message}</p>
                                                            </div>
                                                        ) : (
                                                            <div className="amount_sec">
                                                                <div className="amt_box">
                                                                    <p>Paid Amount</p>
                                                                    <span className="paid">₹{installment.paid_amount}</span>
                                                                </div>
                                                                <div className="amt_box">
                                                                    <p>Due Amount</p>
                                                                    <span className="due">₹{installment.due_amount}</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>No installments available.</p>
                                )
                            }
                        </div>
                        <div className="installment_type_sec">
                            <div className="type_box">
                                <h5>Record By</h5>
                                <div className="box_content">
                                    <div
                                        className="content"
                                        title={!studentFeeDetails.canSelectInstallment ? 'Installment selection is not available.' : ''}
                                    >
                                        <input
                                            id="int"
                                            name="type"
                                            type="radio"
                                            value="installments"
                                            checked={recordType === 'installments'}
                                            onChange={handleRecordTypeChange}
                                            disabled={!studentFeeDetails.canSelectInstallment}
                                        />
                                        <label htmlFor="int">
                                            <span><i className="fa-solid fa-circle"></i></span>
                                            <p>Installments</p>
                                        </label>
                                    </div>
                                    <div className="content">
                                        <input
                                            id="lump"
                                            name="type"
                                            type="radio"
                                            value="lumpSum"
                                            checked={recordType === 'lumpSum'}
                                            onChange={handleRecordTypeChange}
                                        />
                                        <label htmlFor="lump">
                                            <span><i className="fa-solid fa-circle"></i></span>
                                            <p>Lump Sum</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="amount_box">
                                <div className="amount">
                                    <p>Total Due</p>
                                    {isStudentFeeDetailsLoading
                                        ? <SkeletonLoader width="70px" height="16px" margin="5px 0 0 0" />
                                        : <h6>₹{studentFeeDetails.total_due}</h6>
                                    }
                                </div>
                                <div className="amount">
                                    <p>Overdue<span>(including fine)</span></p>
                                    {isStudentFeeDetailsLoading
                                        ? <SkeletonLoader width="70px" height="16px" margin="5px 0 0 0" />
                                        : <h6>₹{studentFeeDetails.overdue}</h6>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="account_details_sec">
                            <div className="section_heading">
                                <div className="heading_icon">
                                    <i className="fa-solid fa-building-columns"></i>
                                </div>
                                <div>
                                    <h4>Account Details</h4>
                                    <p>Bank account linked with this class &amp; section</p>
                                </div>
                            </div>
                            {isStudentFeeDetailsLoading ? (
                                <SkeletonLoader width="100%" height="92px" margin="12px 0 0 0" />
                            ) : studentFeeDetails.account_details ? (
                                <div className="account_details_grid">
                                    <div className="detail_item">
                                        <span>Account Name</span>
                                        <p>{studentFeeDetails.account_details.account_name || '—'}</p>
                                    </div>
                                    <div className="detail_item">
                                        <span>Account Number</span>
                                        <p className="account_number">{studentFeeDetails.account_details.account_no || '—'}</p>
                                    </div>
                                    <div className="detail_item">
                                        <span>Beneficiary Name</span>
                                        <p>{studentFeeDetails.account_details.beneficiary_name || '—'}</p>
                                    </div>
                                    <div className="detail_item">
                                        <span>IFSC Code</span>
                                        <p className="ifsc_code">{studentFeeDetails.account_details.ifsc_code || '—'}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="account_details_empty">
                                    <i className="fa-solid fa-circle-info"></i>
                                    <p>No bank account details are available.</p>
                                </div>
                            )}
                        </div>
                        <div className="payment_type_sec">
                            <h4>Payment Mode</h4>
                            <div className="type_sec_content">
                                <div className="content_box">
                                    <input
                                        type="radio"
                                        id="offline"
                                        name="category"
                                        value="offline"
                                        checked={paymentMode === 'offline'}
                                        onChange={handlePaymentModeChange}
                                    />
                                    <label htmlFor="offline">
                                        <a><i className="fa-solid fa-money-bills"></i></a>
                                        <p>Offline Collect</p>
                                        <span>(Cash & Other mode)</span>
                                    </label>
                                </div>
                                <div className="content_box">
                                    <input
                                        type="radio"
                                        id="online"
                                        name="category"
                                        value="online"
                                        checked={paymentMode === 'online'}
                                        onChange={handlePaymentModeChange}
                                    />
                                    <label htmlFor="online">
                                        <a><i className="fa-solid fa-qrcode"></i></a>
                                        <p>Quick Pay</p>
                                        <span>(Scan QR/send payment link)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {paymentMode && (
                            <div className="payment_method_sec">
                                <h4>Payment Methods</h4>
                                <div className="method_sec_content">
                                    {paymentMode === 'online' && (
                                        <>
                                            <div className="method_box">
                                                <input
                                                    type="radio"
                                                    id="link"
                                                    name="method"
                                                    value="link"
                                                    checked={paymentMethod === 'link'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <label htmlFor="link">
                                                    <a className="link"><i className="fa-solid fa-link"></i></a>
                                                    <p>Payment Link</p>
                                                    <span>(Send payment link)</span>
                                                </label>
                                            </div>
                                            <div className="method_box">
                                                <input
                                                    type="radio"
                                                    id="upi"
                                                    name="method"
                                                    value="upi"
                                                    checked={paymentMethod === 'upi'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <label htmlFor="upi">
                                                    <a><i className="fa-solid fa-qrcode"></i></a>
                                                    <p>Upi QR</p>
                                                    <span>(Scan QR code)</span>
                                                </label>
                                            </div>
                                        </>
                                    )}
                                    {paymentMode === 'offline' && (
                                        <>
                                            <div className="method_box">
                                                <input
                                                    type="radio"
                                                    id="cash"
                                                    name="method"
                                                    value="cash"
                                                    checked={paymentMethod === 'cash'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <label htmlFor="cash">
                                                    <a className="cash"><i className="fa-solid fa-money-bill"></i></a>
                                                    <p>Cash</p>
                                                    <span>(Cash Payment)</span>
                                                </label>
                                            </div>
                                            <div className="method_box">
                                                <input
                                                    type="radio"
                                                    id="dd"
                                                    name="method"
                                                    value="dd"
                                                    checked={paymentMethod === 'dd'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <label htmlFor="dd">
                                                    <a className="dd"><i className="fa-solid fa-money-check"></i></a>
                                                    <p>Demand Draft</p>
                                                    <span>(Bank Draft Payment)</span>
                                                </label>
                                            </div>
                                            <div className="method_box">
                                                <input
                                                    type="radio"
                                                    id="cheque"
                                                    name="method"
                                                    value="cheque"
                                                    checked={paymentMethod === 'cheque'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <label htmlFor="cheque">
                                                    <a className="cheque"><i className="fa-solid fa-money-check"></i></a>
                                                    <p>Cheque</p>
                                                    <span>(Cheque Payment)</span>
                                                </label>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                        {(recordType === 'lumpSum' || paymentMode === 'offline') && (
                            <div className="content_input_sec">
                                {recordType === 'lumpSum' && (
                                    <div className="input_box halfWidth">
                                        <span>Lump Sum Amount</span>
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={collectionAmount}
                                            onChange={handleLumpSumAmountChange}
                                        />
                                    </div>
                                )}
                                {paymentMode === 'offline' && (
                                    <>
                                        <div className="input_box halfWidth">
                                            <span>Payment Date <p>*</p></span>
                                            <div className="sec_box">
                                                <div className="time_btn" onClick={openCalender} ref={filterBtnRef}>
                                                    <p>{finalSelectedDate}</p>
                                                    <i className="fa-regular fa-calendar"></i>
                                                </div>
                                                {isCalendarDropdownOpen && (
                                                    <div className="dropdown" ref={dropdownRef}>
                                                        <Calender setFinalSelectedDate={setFinalSelectedDate} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {requiresReferenceNumber && (
                                            <div className="input_box halfWidth">
                                                <span>
                                                    {paymentMethod === 'dd' ? 'Demand Draft Number' : 'Cheque Number'}
                                                    <p>*</p>
                                                </span>
                                                <input
                                                    type="text"
                                                    value={paymentReferenceNumber}
                                                    onChange={(event) => setPaymentReferenceNumber(event.target.value)}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                        <div className="btn_sec">
                            <div className="adjustment_title">
                                <h4>Payment Adjustments</h4>
                                <p>Add an optional fine or discount to this collection</p>
                            </div>
                            <button
                                type="button"
                                className={`adjustment_btn fine ${adjustmentType === 'fine' ? 'active' : ''}`}
                                onClick={() => setAdjustmentType(adjustmentType === 'fine' ? '' : 'fine')}
                            >
                                <span className="action_icon"><i className="fa-solid fa-receipt"></i></span>
                                <span className="action_copy">
                                    <strong>Add Fine</strong>
                                    <small>Apply an extra charge</small>
                                </span>
                                <i className="fa-solid fa-chevron-right action_arrow"></i>
                            </button>
                            <button
                                type="button"
                                className={`adjustment_btn discount ${adjustmentType === 'discount' ? 'active' : ''}`}
                                onClick={() => setAdjustmentType(adjustmentType === 'discount' ? '' : 'discount')}
                            >
                                <span className="action_icon"><i className="fa-solid fa-tags"></i></span>
                                <span className="action_copy">
                                    <strong>Add Discount</strong>
                                    <small>Reduce the payable amount</small>
                                </span>
                                <i className="fa-solid fa-chevron-right action_arrow"></i>
                            </button>
                        </div>
                        {adjustmentType && (
                            <div className={`reason_from_sec ${adjustmentType}`}>
                                <div className="sec_inner">
                                    <div className="adjustment_form_head">
                                        <div className="head_icon">
                                            <i className={`fa-solid ${adjustmentType === 'fine' ? 'fa-receipt' : 'fa-tags'}`}></i>
                                        </div>
                                        <div className="head_copy">
                                            <h4>{adjustmentType === 'fine' ? 'Add Fine Details' : 'Add Discount Details'}</h4>
                                            <p>
                                                {adjustmentType === 'fine'
                                                    ? 'Enter the charge and mention why it is being applied.'
                                                    : 'Enter the concession and select the applicable reason.'}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="close_adjustment"
                                            aria-label="Close adjustment form"
                                            onClick={() => setAdjustmentType('')}
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                    {adjustmentType === 'fine' && (
                                        <>
                                            <div className="input_box halfWidth">
                                                <span>Fine Amount <p>*</p></span>
                                                <div className="amount_input">
                                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    <input type="text" inputMode="decimal" placeholder="Enter amount" />
                                                </div>
                                            </div>
                                            <div className="input_box halfWidth">
                                                <span>Reason <p>*</p></span>
                                                <input type="text" placeholder="e.g. Late payment" />
                                            </div>
                                        </>
                                    )}
                                    {adjustmentType === 'discount' && (
                                        <>
                                            <div className="input_box halfWidth">
                                                <span>Discount Amount <p>*</p></span>
                                                <div className="amount_input">
                                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                                    <input type="text" inputMode="decimal" placeholder="Enter amount" />
                                                </div>
                                            </div>
                                            <div className="select_box half">
                                                <span>Select Discount Reason <p>*</p></span>
                                                <div className="dropdown_sec">
                                                    <div className="dropdown_btn">
                                                        <p>Advance Payment</p>
                                                        <i className="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div className="dropdown">
                                                        <div className="dropdown_inner">
                                                            <ul>
                                                                <li></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="from_btns">
                                        <button type="button" onClick={() => setAdjustmentType('')}>Cancel</button>
                                        <button type="button">
                                            <i className="fa-solid fa-check"></i>
                                            {adjustmentType === 'fine' ? 'Apply Fine' : 'Apply Discount'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormValid}>
                            Collect <span>(&#8377;{collectionAmount || '0.00'})</span>
                        </button>
                    </div>
                </div>
            </FeeCollectWrapper>
        </>
    );
}

export default FeeCollectionModal;
