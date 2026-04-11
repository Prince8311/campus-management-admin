import { useEffect, useState } from "react";
import { AddPaymentAmoutDateWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import Calender from "../../Calender";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddPaymentAmoutDateModal = ({ showAddPaymentAmountModal, setShowAddPaymentAmountModal, onSave, editingPayment }) => {
    const [showPaymentDateDropdown, setShowPaymentDateDropdown] = useState(false);
    const [paymentDate, setPaymentDate] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = paymentDate && paymentAmount && !isNaN(paymentAmount) && Number(paymentAmount) > 0;

    function closeModal() {
        setPaymentDate('');
        setPaymentAmount('');
        setShowAddPaymentAmountModal(false);
    }

    useEffect(() => {
        if (editingPayment) {
            setPaymentDate(editingPayment.paymentDate);
            setPaymentAmount(editingPayment.amount);
        } else {
            setPaymentDate('');
            setPaymentAmount('');
        }
    }, [editingPayment]);

    const handleSave = async () => {
        if (!isFormValid) return;

        try {
            setIsButtonLoading(true);
            await onSave({
                paymentDate,
                amount: paymentAmount
            });
            closeModal();
        } catch (err) {
            console.error(err);
        } finally {
            setIsButtonLoading(false);
        }
    };

    return (
        <>
            <AddPaymentAmoutDateWrapper className={showAddPaymentAmountModal ? 'active' : ''}>
                <div className={`modal_box ${showAddPaymentAmountModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Payment Amount & Schdule Date</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="date_box_sec">
                                <span>Date <p>*</p></span>
                                <div className="date_box">
                                    <div className="date_btn" onClick={() => setShowPaymentDateDropdown(!showPaymentDateDropdown)}>
                                        <p>{paymentDate}</p>
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    {
                                        showPaymentDateDropdown &&
                                        <div className="dropdown">
                                            <Calender
                                                hideYear={true}
                                                setFinalSelectedDate={(date) => {
                                                    setPaymentDate(date)
                                                    setShowPaymentDateDropdown(false)
                                                }}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Amount <p>*</p></span>

                                <div className="input_sec">
                                    <span className="rupee">₹</span>
                                    <input type="text" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button
                            disabled={!isFormValid || isButtonLoading}
                            onClick={handleSave}
                        >
                            {
                                isButtonLoading
                                    ? <ButtonLoader />
                                    : (editingPayment ? "Update" : "Save")
                            }
                        </button>
                    </div>
                </div>
            </AddPaymentAmoutDateWrapper>
        </>
    );
}

export default AddPaymentAmoutDateModal;