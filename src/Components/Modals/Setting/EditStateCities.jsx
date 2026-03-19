import { EditStateCitiesWrapper } from "../../../Styles/SettingModalStyle";

const EditStateCitiesModal = ({ showEditCityModal, setShowEditCityModal }) => {

    function closeModal() {
        setShowEditCityModal(false);
    }
    return (
        <>
            <EditStateCitiesWrapper className={showEditCityModal ? 'active' : ''}>
                <div className={`modal_box ${showEditCityModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Cities of <span>West Bengal</span></h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_city">
                                <div className="city">
                                    <li>
                                        <p>kolkata</p>
                                        <span className="edit_btn"><i className="fa-solid fa-pen"></i></span>
                                        <span className="delete_btn"><i className="fa-solid fa-trash"></i></span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </EditStateCitiesWrapper>
        </>
    );
}

export default EditStateCitiesModal;