import { SelectFeesStructureTypeWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const SelectFeesStructureTypeModal = ({isFeesStructureOpen, setIsFeesStructureOpen}) => {

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
                                <img src="/images/" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SelectFeesStructureTypeWrapper>
        </>
    );
}

export default SelectFeesStructureTypeModal;