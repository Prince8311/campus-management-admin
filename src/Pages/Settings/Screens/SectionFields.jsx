import { useState } from "react";
import CreateFieldsPage from "../../../Components/Modals/Setting/CreateFields";
import { SectionFieldsWrapper } from "../../../Styles/SettingStyle";

const SectionFieldsPage = () => {
    const [isCreateFieldsOpen, setIsCreateFieldsOpen] = useState(false);

    const handleOpenCreateFieldsModal = () => {
        setIsCreateFieldsOpen(true);
    }

    return (
        <>
            <SectionFieldsWrapper>
                <div className="wrapper_content">
                    <div className="content_top">
                        <div className="box_head">
                            <h6>Address Details</h6>
                        </div>
                        <div className="preview_sec">
                            <div className="preview_btn">
                                <i className="fa-solid fa-eye"></i>
                                <p>Preview</p>
                            </div>
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenCreateFieldsModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Create Field</p>
                            </button>
                        </div>
                    </div>
                    <div className="content_bottom">
                        <div className="left_content">
                            <div className="left_content_inner">
                                <li>
                                    <p>Address Line 1</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </li>
                                <li className="active">
                                    <p>Address Line 1</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </li>
                                <li>
                                    <p>Address Line 1</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </li>
                                <li>
                                    <p>Address Line 1</p>
                                    <i className="fa-solid fa-angle-right"></i>
                                </li>
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content_inner">
                                <div className="inner_head">
                                    <h6>Field Type: Text Box</h6>
                                </div>
                                <div className="inner_body">
                                    <div className="input_field_sec">
                                        <div className="input_box">
                                            <input type="text" required />
                                            <span>Field Title*</span>
                                        </div>
                                        <button>Save</button>
                                    </div>
                                    <div className="mandatory_sec">
                                        <p>Make this field mandatory</p>
                                        <div className="toggle_bar">
                                            <input type="checkbox" id="status" />
                                            <label htmlFor="status">
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CreateFieldsPage
                    isCreateFieldsOpen={isCreateFieldsOpen}
                    setIsCreateFieldsOpen={setIsCreateFieldsOpen}
                />
            </SectionFieldsWrapper>
        </>
    )
};

export default SectionFieldsPage;