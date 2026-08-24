import { useState } from "react";
import { FeeCollectWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const FeeCollectionModal = ({ isOpenFeeCollectModal, setIsOpenFeeCollectModal }) => {
    const [recordType, setRecordType] = useState('');
    const [paymentMode, setPaymentMode] = useState('');

    function closeModal() {
        setIsOpenFeeCollectModal(false);
    }
    return (
        <>
            <FeeCollectWrapper className={isOpenFeeCollectModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenFeeCollectModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Collect Fee for Joydeep barik</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="modal_content_sec">
                        <div className="installment_box_sec">
                            <div className="installment_box">
                                <div className="box_inner">
                                    <div className="top_part">
                                        <div className="part_content">
                                            <a><i className="fa-solid fa-money-bill"></i></a>
                                            <h6>15 Aug</h6>
                                            <span className="paid">paid</span>
                                        </div>
                                        <div className="amount_sec">
                                            <div className="amt_box">
                                                <p>Paid Amount</p>
                                                <span className="paid">₹50000</span>
                                            </div>
                                            <div className="amt_box">
                                                <p>Due Amount</p>
                                                <span className="due">₹10000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="installment_box">
                                <div className="box_inner">
                                    <div className="top_part">
                                        <div className="part_content">
                                            <a><i className="fa-solid fa-money-bill"></i></a>
                                            <h6>15 Aug</h6>
                                            <span className="unpaid">Unpaid</span>
                                        </div>
                                        <div className="amount_sec">
                                            <div className="amt_box">
                                                <p>Paid Amount</p>
                                                <span className="paid">₹50000</span>
                                            </div>
                                            <div className="amt_box">
                                                <p>Due Amount</p>
                                                <span className="due">₹10000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="installment_type_sec">
                            <div className="type_box">
                                <h5>Record By</h5>
                                <div className="box_content">
                                    <div className="content">
                                        <input
                                            id="int"
                                            name="type"
                                            type="radio"
                                            value="installments"
                                            checked={recordType === 'installments'}
                                            onChange={(event) => setRecordType(event.target.value)}
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
                                    <h6>₹0</h6>
                                </div>
                                <div className="amount">
                                    <p>Due till date <span>(including fine)</span></p>
                                    <h6>₹0</h6>
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
                        <div className="payment_method_sec">
                            <h4>Payment Methhods</h4>
                            <div className="method_sec_content">
                                {paymentMode === 'online' && (
                                    <>
                                        <div className="method_box">
                                            <input type="radio" id="link" name="method" />
                                            <label htmlFor="link">
                                                <a><i className="fa-solid fa-link"></i></a>
                                                <p>Payment Link</p>
                                            </label>
                                        </div>
                                        <div className="method_box">
                                            <input type="radio" id="upi" name="method" />
                                            <label htmlFor="upi">
                                                <a><i className="fa-solid fa-qrcode"></i></a>
                                                <p>Upi QR</p>
                                            </label>
                                        </div>
                                    </>
                                )}
                                {paymentMode === 'offline' && (
                                    <>
                                        <div className="method_box">
                                            <input type="radio" id="cash" name="method" />
                                            <label htmlFor="cash">
                                                <a><i className="fa-solid fa-money-bill"></i></a>
                                                <p>Cash</p>
                                            </label>
                                        </div>
                                        <div className="method_box">
                                            <input type="radio" id="dd" name="method" />
                                            <label htmlFor="dd">
                                                <a><i className="fa-solid fa-money-check"></i></a>
                                                <p>Demand Draft</p>
                                            </label>
                                        </div>
                                        <div className="method_box">
                                            <input type="radio" id="cheque" name="method" />
                                            <label htmlFor="cheque">
                                                <a><i className="fa-solid fa-money-check"></i></a>
                                                <p>Cheque</p>
                                            </label>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
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
                                            <div className="time_btn">
                                                <p>23 Aug, 2026</p>
                                                <i className="fa-regular fa-calendar-days"></i>
                                            </div>
                                            <div className="dropdown"></div>
                                        </div>
                                    </div>
                                    <div className="input_box halfWidth">
                                        <span>Reference Number</span>
                                        <input type="text" />
                                    </div>
                                    <div className="select_box half">
                                        <span>Company Bank Account <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn">
                                                <p>Joydeep Barik</p>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                            <div className="dropdown">
                                                <div className="dropdown_inner">
                                                    <div className="search_sec">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                        <input type="text" placeholder="Search by Account Name..." />
                                                    </div>
                                                    <ul>
                                                        <div className="user_box">
                                                            <div className="box_left">
                                                                <h6>JB</h6>
                                                            </div>
                                                            <div className="box_right">
                                                                <p>Joydeep Barik</p>
                                                                <span>A/c : 427961575535</span>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="btn_sec">
                            <button><i className="fa-solid fa-plus"></i>Add Fine</button>
                            <button><i className="fa-solid fa-plus"></i>Add Wallet</button>
                        </div>
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