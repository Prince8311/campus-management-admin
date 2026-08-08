import { AddBankAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const AddBankAccountModal = ({isAddBankAccountModalOpen, setIsAddBankAccountModalOpen}) => {

    const closeModal = () => {
        setIsAddBankAccountModalOpen(false);
    };

    return (
        <>
            <AddBankAccountWrapper className={isAddBankAccountModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddBankAccountModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Bank Account</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Account Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Account Number <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>IFSC Code <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Beneficiary Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box">
                                <span>Cancelled Cheque <p>*</p></span>
                                <div className="sec_box">
                                    <p>Upload file</p>
                                    <i className="fa-solid fa-file-arrow-up"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddBankAccountWrapper>
        </>
    );
}

export default AddBankAccountModal;