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
    const [adjustmentType, setAdjustmentType] = useState('');
    const [studentFeeDetails, setStudentFeeDetails] = useState({
        total_due: '0.00',
        overdue: '0.00',
        installments: [],
        canSelectInstallment: true,
    });
    const [isStudentFeeDetailsLoading, setIsStudentFeeDetailsLoading] = useState(false);

    const bankAccounts = ['Pnb', 'sbi', 'axis', 'hdfc'];
    const [showBankAccountDropdown, setShowBankAccountDropdown] = useState(false);
    const [selectAccount, setSelectAccount] = useState('');
    const filterBtnRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isCalendarDropdownOpen, setIsCalendarDropdownOpen] = useState(false);
    const [finalSelectedDate, setFinalSelectedDate] = useState('');

    useEffect(() => {
        if (isOpenFeeCollectModal) {
            setRecordType('installments');
            setPaymentMode('');
            setPaymentMethod('');
            setAdjustmentType('');
            setShowBankAccountDropdown(false);
            setSelectAccount('');
        }
    }, [isOpenFeeCollectModal]);

    const fetchStudentFeeDetails = useCallback(async () => {
        setIsStudentFeeDetailsLoading(true);
        setStudentFeeDetails({
            total_due: '0.00',
            overdue: '0.00',
            installments: [],
            canSelectInstallment: true,
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

                setStudentFeeDetails({
                    total_due: feeDetails?.total_due ?? '0.00',
                    overdue: feeDetails?.overdue ?? '0.00',
                    installments: feeDetails?.installments || [],
                    canSelectInstallment,
                });
                setRecordType(canSelectInstallment ? 'installments' : 'lumpSum');
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

    const handleSelectAccount = (account) => {
        setSelectAccount(account);
        setShowBankAccountDropdown(false);
    }

    const handleOpenAccountDropdown = () => {
        setShowBankAccountDropdown(!showBankAccountDropdown);
    }

    function closeModal() {
        setIsOpenFeeCollectModal(false);
    }

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
                                            onChange={(event) => setRecordType(event.target.value)}
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
                                            onChange={(event) => setRecordType(event.target.value)}
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
                                        onChange={(event) => setPaymentMode(event.target.value)}
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
                                        onChange={(event) => setPaymentMode(event.target.value)}
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
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
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
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
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
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
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
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
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
                                                    onChange={(event) => setPaymentMethod(event.target.value)}
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
                        <div className="content_input_sec">
                            {recordType === 'lumpSum' && (
                                <div className="input_box halfWidth">
                                    <span>Lump Sum Amount</span>
                                    <input type="text" />
                                </div>
                            )}
                            {paymentMode !== 'online' && (
                                <>
                                    <div className="input_box halfWidth">
                                        <span>Payment Date <p>*</p></span>
                                        <div className="sec_box">
                                            <div className="time_btn" onClick={openCalender} ref={filterBtnRef}>
                                                <p>{finalSelectedDate}</p>
                                                <i className="fa-regular fa-calendar"></i>
                                            </div>
                                            {
                                                isCalendarDropdownOpen && (
                                                    <div className="dropdown" ref={dropdownRef}>
                                                        <Calender setFinalSelectedDate={setFinalSelectedDate} />
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {(paymentMethod === 'dd' || paymentMethod === 'cheque') && (
                                        <div className="input_box halfWidth">
                                            <span>{paymentMethod === 'dd' ? 'Demand Draft Number' : 'Cheque Number'}</span>
                                            <input type="text" />
                                        </div>
                                    )}
                                    <div className="select_box half">
                                        <span>Company Bank Account <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={handleOpenAccountDropdown}>
                                                <p>{selectAccount}</p>
                                                <i className={`fa-solid fa-angle-down ${showBankAccountDropdown} ? 'active' : ''`}></i>
                                            </div>
                                            <div className={`dropdown ${showBankAccountDropdown ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input type="text" placeholder="Search by Account Name..." />
                                                    </div>
                                                    <ul>
                                                        {
                                                            bankAccounts.map((account, i) => (
                                                                <li key={i}
                                                                    onClick={() => handleSelectAccount(account)}
                                                                    className={selectAccount === account ? 'active' : ''}
                                                                >
                                                                    {account}
                                                                </li>
                                                            ))
                                                        }
                                                        {/* <div className="user_box">
                                                            <div className="box_left">
                                                                <h6>JB</h6>
                                                            </div>
                                                            <div className="box_right">
                                                                <p>Joydeep Barik</p>
                                                                <span>A/c : 427961575535</span>
                                                            </div>
                                                        </div> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="btn_sec">
                            <button type="button" onClick={() => setAdjustmentType(adjustmentType === 'fine' ? '' : 'fine')}>
                                <i className="fa-solid fa-plus"></i>Add Fine
                            </button>
                            <button type="button" onClick={() => setAdjustmentType(adjustmentType === 'discount' ? '' : 'discount')}>
                                <i className="fa-solid fa-plus"></i>Add Discount
                            </button>
                        </div>
                        {adjustmentType && (
                            <div className="reason_from_sec">
                                <div className="sec_inner">
                                    {adjustmentType === 'fine' && (
                                        <>
                                            <div className="input_box halfWidth">
                                                <span>Fine Amount <p>*</p></span>
                                                <input type="text" />
                                            </div>
                                            <div className="input_box halfWidth">
                                                <span>Reason <p>*</p></span>
                                                <input type="text" />
                                            </div>
                                        </>
                                    )}
                                    {adjustmentType === 'discount' && (
                                        <>
                                            <div className="input_box halfWidth">
                                                <span>Discount Amount <p>*</p></span>
                                                <input type="text" />
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
                                        <button>Add</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="modal_btn">
                        <button>Collect <span>(₹10000)</span></button>
                    </div>
                </div>
            </FeeCollectWrapper>
        </>
    );
}

export default FeeCollectionModal;
