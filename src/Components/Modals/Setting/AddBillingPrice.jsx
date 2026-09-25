import { AddBillingPriceWrapper } from "../../../Styles/SettingModalStyle";

const AddBIllingPriceModal = ({isOpenAddPriceModal, setIsOpenAddPriceModal, showInstitutionField}) => {

    function closeModal() {
        setIsOpenAddPriceModal(false);
    }
    return (
        <>
            <AddBillingPriceWrapper className={isOpenAddPriceModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenAddPriceModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Billing Price</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            {showInstitutionField && (
                                <div className="select_box fullWdith">
                                    <span>Institution Name<p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>Abc</p>
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
                            )}
                            <div className="input_box halfWdith">
                                <span>Student Base Price <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWdith">
                                <span>Hostel Management Price <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWdith">
                                <span>Travel Management Price <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWdith">
                                <span>Library Management Price <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWdith">
                                <span>Account Management Price <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfWdith">
                                <span>Billing Cycle<p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Rate</p>
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
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddBillingPriceWrapper>
        </>
    );
}

export default AddBIllingPriceModal;
