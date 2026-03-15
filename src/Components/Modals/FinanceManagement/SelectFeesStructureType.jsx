import { SelectFeesStructureTypeWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const SelectFeesStructureTypeModal = ({ isFeesStructureOpen, setIsFeesStructureOpen }) => {

    function closeModal() {
        setIsFeesStructureOpen(false);
    }
    return (
        <>
            <SelectFeesStructureTypeWrapper className={isFeesStructureOpen ? 'active' : ''}>
                <div className={`modal_box ${isFeesStructureOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create new Fees Structure</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_box">
                                <div className="box_item">
                                    <img src="/images/recurring-fee.svg" alt="" />
                                    <p>Recurring Fee</p>
                                    <span>Create recurring fees like tution fees, maintance fees etc.</span>
                                </div>
                            </div>
                            <div className="inner_box">
                                <div className="box_item">
                                    <img src="/images/one-time-fee.svg" alt="" />
                                    <p>One Time Fee</p>
                                    <span>Create one time fees like admission fees, uniform fees etc.</span>
                                </div>
                            </div>
                            <div className="inner_box">
                                <div className="box_item">
                                    <img src="/images/transport-fee.svg" alt="" />
                                    <p>Transfort Fee</p>
                                    <span>Create transportation fees based on distance or stopages.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SelectFeesStructureTypeWrapper>
        </>
    );
}

export default SelectFeesStructureTypeModal;