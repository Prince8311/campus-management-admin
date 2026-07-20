import { SelectTemplateTypeWrapper } from "../../../Styles/Modals/CommunicationStyle";

const SelectTemplateTypeModal = ({isSelectTemplateTypeOpen, setIsSelectTemplateTypeOpen, isManageTemplateOpen, setIsManageTemplateOpen}) => {

    function closeModal () {
        setIsSelectTemplateTypeOpen(false);
    }

    const handleOpenManageTemplateModal = () => {
        setIsManageTemplateOpen(true);
        setIsSelectTemplateTypeOpen(false);
    }
    return (
        <>
            <SelectTemplateTypeWrapper className={isSelectTemplateTypeOpen ? 'active' : ''}>
                <div className={`modal_box ${isSelectTemplateTypeOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create new Template Type</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_box" onClick={handleOpenManageTemplateModal}>
                                <div className="box_item">
                                    <img src="/images/one-time-fee.svg" alt="" />
                                    <p>One Time</p>
                                    <span>Create one time template cretae etc.</span>
                                </div>
                            </div>
                            <div className="inner_box">
                                <div className="box_item">
                                    <img src="/images/recurring-fee.svg" alt="" />
                                    <p>Recurring</p>
                                    <span>Create recurring fees like every month same tempalte use.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SelectTemplateTypeWrapper>
        </>
    );
}

export default SelectTemplateTypeModal;