import { AddPaymentAmoutDateWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const AddPaymentAmoutDateModal = ({ showAddPaymentAmountDate, setShowAddPaymentAmountDate }) => {

    function closeModal() {
        setShowAddPaymentAmountDate(false);
    }

    return (
        <>
            <AddPaymentAmoutDateWrapper className={showAddPaymentAmountDate ? 'active' : ''}>
                <div className={`modal_box ${showAddPaymentAmountDate ? 'active' : ''}`}>
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
                                    <div className="date_btn">
                                        <p>21 March, 2026</p>
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    <div className="dropdown">

                                    </div>
                                </div>
                            </div>
                            <div className="input_box">
                                <span>Amount <p>*</p></span>

                                <div className="input_sec">
                                    <span className="rupee">₹</span>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddPaymentAmoutDateWrapper>
        </>
    );
}

export default AddPaymentAmoutDateModal;