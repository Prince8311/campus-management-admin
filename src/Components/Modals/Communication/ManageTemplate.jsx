import { useState } from "react";
import { ManageTemplateWrapper } from "../../../Styles/Modals/CommunicationStyle";

const ManageTemplateModal = ({ isManageTemplateOpen, setIsManageTemplateOpen }) => {
    const [step, setStep] = useState(1);

    function closeModal() {
        setIsManageTemplateOpen(false);
    }

    return (
        <>
            <ManageTemplateWrapper className={isManageTemplateOpen ? 'active' : ''}>
                <div className={`modal_box ${isManageTemplateOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Manage Template</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="progress_section">
                        <div className={`sec_box ${(step === 1 || step === 2 || step === 3) ? 'active' : ''}`}>
                            <p>1</p>
                        </div>
                        <div class={`line ${(step === 2 || step === 3) ? 'active' : ''}`}></div>
                        <div className={`sec_box ${(step === 2 || step === 3) ? 'active' : ''}`}>
                            <p>2</p>
                        </div>
                        <div class={`line ${(step === 3) ? 'active' : ''}`}></div>
                        <div className={`sec_box ${step === 3 ? 'active' : ''}`}>
                            <p>3</p>
                        </div>
                    </div>
                    <div className="modal_content_sec">
                        {
                            step === 1 &&
                            <div className="template_category_sec">
                                <div className="modal_top_sec">
                                    <div className="top_box">
                                        <div className="box_inner">
                                            <a><i className="fa-solid fa-message"></i></a>
                                            <p>SMS</p>
                                            <div class="check_sec">
                                                <label for="sms">
                                                    <input id="sms" name="language" type="checkbox" />
                                                    <span><i className="fa-solid fa-check"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="top_box">
                                        <div className="box_inner">
                                            <a><i className="fa-solid fa-envelope"></i></a>
                                            <p>Email</p>
                                            <div class="check_sec">
                                                <label for="email">
                                                    <input id="email" name="language" type="checkbox" />
                                                    <span><i className="fa-solid fa-check"></i></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category_heading">
                                    <h4>Use Template Category</h4>
                                </div>
                                <div className="category_box_sec">
                                    <div className="category_box">
                                        <input
                                            type="radio"
                                            id="category1"
                                            name="category"
                                        />
                                        <label htmlFor="category1">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Thought of the Day</p>
                                        </label>
                                    </div>
                                    <div className="category_box">
                                        <input
                                            type="radio"
                                            id="category2"
                                            name="category"
                                        />
                                        <label htmlFor="category2">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Word of the Day</p>
                                        </label>
                                    </div>
                                    <div className="category_box">
                                        <input
                                            type="radio"
                                            id="category3"
                                            name="category"
                                        />
                                        <label htmlFor="category3">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Holiday Notice</p>
                                        </label>
                                    </div>
                                    <div className="category_box">
                                        <input
                                            type="radio"
                                            id="category4"
                                            name="category"
                                        />
                                        <label htmlFor="category4">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Holiday Notice</p>
                                        </label>
                                    </div>
                                </div>

                                <div className="filter_date_sec">
                                    <span>Send by : </span>
                                    <div className="filter_btn">
                                        <i className="fa-regular fa-calendar"></i>
                                        <p>21 July, 2026</p>
                                    </div>
                                </div>
                                <div className="category_btn">
                                    <button onClick={() => {setStep(2)}}>Save & Next <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        }
                        {
                            step === 2 &&
                            <div className="template_selection_sec">
                                <div className="select_box">
                                    <span>Select Template <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>Holiday Notice</p>
                                            <i className="fa-solid fa-angle-down"></i>
                                        </div>
                                        <div className="dropdown">
                                            <div className="dropdown_inner">
                                                <div className="search_sec">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input type="text" placeholder="Search by Subject Name..." />
                                                </div>
                                                <ul>
                                                    <li>Holiday</li>
                                                    <li>Word of the day</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="input_box">
                                    <span>Tittle <p>*</p></span>
                                    <input type="text" />
                                </div>
                                <div className="input_box">
                                    <span>Body <p>*</p></span>
                                    <textarea name="" ></textarea>
                                </div>
                                <div className="select_btn">
                                    <button onClick={() => setStep(step - 1)}><i class="fa-solid fa-angle-left"></i>Previous</button>
                                    <button onClick={() => setStep(3)}>Save & Next <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        }
                        {
                            step === 3 &&
                            <div className="template_reciver_sec">
                                <div className="reciver_heading">
                                    <h4>Reciver Section</h4>
                                </div>
                                <div className="reciver_type_sec">
                                    <div className="reciver_box">
                                        <input
                                            type="radio"
                                            id="reciver1"
                                            name="reciver"
                                        />
                                        <label htmlFor="reciver1">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>To All</p>
                                        </label>
                                    </div>
                                    <div className="reciver_box">
                                        <input
                                            type="radio"
                                            id="reciver2"
                                            name="reciver"
                                        />
                                        <label htmlFor="reciver2">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Customizes</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="tab_sec">
                                    <div className="tab_inner">
                                        <li className="active">Student</li>
                                        <li>Staff</li>
                                    </div>
                                </div>
                                <div className="reciver_type_sec">
                                    <div className="reciver_box">
                                        <input
                                            type="radio"
                                            id="cus1"
                                            name="customize"
                                        />
                                        <label htmlFor="cus1">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Select All</p>
                                        </label>
                                    </div>
                                    <div className="reciver_box">
                                        <input
                                            type="radio"
                                            id="cus2"
                                            name="customize"
                                        />
                                        <label htmlFor="cus2">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Manually</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="table_sec">
                                    <div className="search_sec">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <input type="text" placeholder="Search by Teacher name..." />
                                    </div>
                                    <div className="sec_inner">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Teacher Name</th>
                                                    <th>Contact No.</th>
                                                    <th>Assign</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <h5>SB</h5>
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>Subhadeep Barik</h6>
                                                        </div>
                                                    </td>
                                                    <td>749708386</td>
                                                    <td>
                                                        <div className="toggle_bar">
                                                            <input
                                                                type="checkbox"
                                                                id="check"
                                                            />
                                                            <label htmlFor="check">
                                                                <span></span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="reciver_btn">
                                    <button onClick={() => setStep(step - 1)}><i class="fa-solid fa-angle-left"></i>Previous</button>
                                    <button><i class="fa-solid fa-floppy-disk"></i>Save</button>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </ManageTemplateWrapper>
        </>
    );
}

export default ManageTemplateModal;