import { DiscountModalWrapper } from "../../../Styles/Modals/FinanceModalsStyle";


const DiscountModal = ({isOpenDiscountModal, setIsDiscountModal}) => {

    function closeModal() {
        setIsDiscountModal(false);
    }
    return (
        <>
            <DiscountModalWrapper className={isOpenDiscountModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenDiscountModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Discount</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Discount Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Discount <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Fee Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Tution</p>
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
            </DiscountModalWrapper>
        </>
    );
}

export default DiscountModal;