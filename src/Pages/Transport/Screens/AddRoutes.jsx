import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRoutesWrapper } from "../../../Styles/TransportStyle";

const AddRoutesPage = () => {
    const navigate = useNavigate();
    const [stopages, setStopages] = useState([{ id: 1, label: "Stopage 1" }]);

    const handleRedirectionRoutesPage = () => {
        navigate("/admin/transport-management/routes");
    }

    const handleAddStopage = () => {
        setStopages((prevStopages) => [
            ...prevStopages,
            { id: Date.now(), label: `Stopage ${prevStopages.length + 1}` }
        ]);
    }

    return (
        <>
            <AddRoutesWrapper>
                <div className="page_items">
                    <div className="left_items">
                        <div className="item_inner">
                            <div className="page_head">
                                <div className="icon" onClick={handleRedirectionRoutesPage}><i className="fa-solid fa-angle-left"></i></div>
                                <h2>Add Routes</h2>
                            </div>
                            <div className="top_sec">
                                <div className="input_box">
                                    <span>Route Name <p>*</p></span>
                                    <input type="text" />
                                </div>
                                <div className="select_box">
                                    <span>Assign Vehicle <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>WB- 45 -15498</p>
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
                                <div className="select_box">
                                    <span>Assign Staff <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>Driver</p>
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
                                <div className="date_box">
                                    <span>School Start Time <p>*</p></span>
                                    <div className="date_btn">
                                        <p>Set Time</p>
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                                <div className="date_box">
                                    <span>School End Time <p>*</p></span>
                                    <div className="date_btn">
                                        <p>Set Time</p>
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="stopage_sections">
                                <div className="sec_head">
                                    <h6>Add Stopage</h6>
                                </div>
                                <div className="sec_content">
                                    {stopages.map((stopage) => (
                                        <div className="content_box" key={stopage.id}>
                                            <a>{stopage.label}</a>
                                            <div className="box_items">
                                                <div className="select_box">
                                                    <span>Select Stopage <p>*</p></span>
                                                    <div className="dropdown_sec">
                                                        <div className="dropdown_btn">
                                                            <p>Driver</p>
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
                                                <div className="date_box">
                                                    <span>Pick up Time <p>*</p></span>
                                                    <div className="date_btn">
                                                        <p>Set Time</p>
                                                        <i className="fa-regular fa-clock"></i>
                                                    </div>
                                                </div>
                                                <div className="date_box">
                                                    <span>Drop Time <p>*</p></span>
                                                    <div className="date_btn">
                                                        <p>Set Time</p>
                                                        <i className="fa-regular fa-clock"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="add_sec" onClick={handleAddStopage} style={{ cursor: "pointer" }}>
                                        <span><i className="fa-solid fa-plus"></i>Add more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_items">
                        <div className="item_inner"></div>
                    </div>
                </div>
            </AddRoutesWrapper>
        </>
    );
}

export default AddRoutesPage;