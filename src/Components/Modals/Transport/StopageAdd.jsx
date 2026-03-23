import { StopageAddWrapper } from "../../../Styles/Modals/TransportModalsStyle";

const StopageAddModal = ({ isStopageAdd, setIsStopageAdd }) => {

    function closeModal() {
        setIsStopageAdd(false);
    }
    return (
        <>
            <StopageAddWrapper className={isStopageAdd ? 'active' : ''}>
                <div className={`modal_box ${isStopageAdd ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Stopage</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="search_sec_box">
                                <div className="search_sec">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="text" placeholder="Search by Locations..." />
                                </div>
                            </div>
                            <div className="map_box"></div>
                            <div className="distance_sec">
                                <div className="text_box">
                                    <span>Location <p>*</p></span>
                                    <textarea ></textarea>
                                </div>
                                <div className="input_box">
                                    <span>Distance <p>*</p></span>
                                    <div className="input_wrapper">
                                        <input type="text" placeholder="0" />
                                        <p>Km</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </StopageAddWrapper>
        </>
    );
}

export default StopageAddModal;