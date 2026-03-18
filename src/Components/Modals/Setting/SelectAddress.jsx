import { SelectAddressWrapper } from "../../../Styles/SettingModalStyle";

const SelectAddressModal = ({ isShowAddressModal, setIsShowAddressModal }) => {

    function closeModal() {
        setIsShowAddressModal(false);
    }

    return (
        <>
            <SelectAddressWrapper className={isShowAddressModal ? 'active' : ''}>
                <div className={`modal_box ${isShowAddressModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Address form Google Map</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="country_name_sec">
                                <p>Country : <span>India</span></p>
                            </div>
                            <div className="select_box">
                                <span>Select State <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>State</p>
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
                            <div className="select_box">
                                <span>Select City <p>*</p></span>
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
                            <div className="search_sec_box">
                                <div className="search_sec">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search by State & Cities..." />
                                </div>
                            </div>
                            <div className="map_box"></div>
                            <div className="text_box">
                                <span>Location <p>*</p></span>
                                <textarea id=""></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </SelectAddressWrapper>
        </>
    );
}

export default SelectAddressModal;