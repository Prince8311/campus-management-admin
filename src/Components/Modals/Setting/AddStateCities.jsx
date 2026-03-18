import { AddStateCitiesWrapper } from "../../../Styles/SettingModalStyle";

const AddStateCitiesModal = ({isShowAddCityModal, setIsShowAddCityModal}) => {

    function closeModal() {
        setIsShowAddCityModal(false);
    }
    
    return (
        <>
            <AddStateCitiesWrapper className={isShowAddCityModal ? 'active' : ''}>
                <div className={`modal_box ${isShowAddCityModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Cities</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Type <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>City</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li>Dropdown</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item_box">
                                <span>State<p>*</p><a>(Please press enter after typing each City name.)</a></span>
                                <div className="box_content">
                                    <li>
                                        <p>Kolkata</p>
                                        <span>
                                            <i className="fa-solid fa-circle-xmark"></i>
                                        </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddStateCitiesWrapper>
        </>
    );
}

export default AddStateCitiesModal;