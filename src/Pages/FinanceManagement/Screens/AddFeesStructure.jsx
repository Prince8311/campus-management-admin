import { AddFeesStructureWrapper } from "../../../Styles/FinanceStyle";

const AddFeesStructure = () => {
    return (
        <>
            <AddFeesStructureWrapper>
                <div className="page_head">
                    <h2>One Time Fees</h2>
                </div>
                <div className="progress_section">
                    <div className="sec_box">
                        <p>1</p>
                    </div>
                    <div class="line"></div>
                    <div className="sec_box">
                        <p>2</p>
                    </div>
                    <div class="line"></div>
                    <div className="sec_box">
                        <p>3</p>
                    </div>
                </div>
                <div className="fees_structure_level_sec">
                    <div className="criteria_sec">
                        <div className="sec_head">
                            <span>Select classes you want to create structure for</span>
                        </div>
                        <div className="sec_item">
                            <div className="class_item">
                                <div className="top_part active">
                                    <div className="left_info">
                                        <input type="checkbox" id="check" />
                                        <label htmlFor="check">
                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                            <p>Primary</p>
                                        </label>
                                    </div>
                                    <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                </div>
                                <div className="bottom_part">
                                    <div className="bottom_inner">
                                        <div className="class_box">
                                            <div className="box_top active">
                                                <div className="top_left">
                                                    <input type="checkbox" id="class" />
                                                    <label htmlFor="class">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class - 1</p>
                                                    </label>
                                                </div>
                                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                            </div>
                                            <div className="box_bottom">
                                                <div className="bottom_inner">
                                                    <ul>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="sec1"
                                                            />
                                                            <label htmlFor="sec1">
                                                                <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                <p>Section A</p>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="sec2"
                                                            />
                                                            <label htmlFor="sec2">
                                                                <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                <p>Section B</p>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="sec3"
                                                            />
                                                            <label htmlFor="sec3">
                                                                <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                <p>Section C</p>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="class_box">
                                            <div className="box_top active">
                                                <div className="top_left">
                                                    <input type="checkbox" id="class" />
                                                    <label htmlFor="class">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class - 2</p>
                                                    </label>
                                                </div>
                                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                            </div>
                                            <div className="box_bottom">
                                                <div className="bottom_inner">
                                                    <ul>
                                                        <li>
                                                            <input
                                                                type="checkbox"
                                                                id="sec1"
                                                            />
                                                            <label htmlFor="sec1">
                                                                <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                <p>Section A</p>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fees_sec">
                        <div className="sec_head">
                            <span>Provide fees types, tax and due dates to create this structure.</span>
                        </div>
                        <div className="sec_item">
                            <div className="fees_type_sec">
                                <div className="select_box">
                                    <span>Receipt prefix <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>SSA</p>
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
                                    <span>Receipt prefix <p>*</p></span>
                                    <div className="dropdown_sec">
                                        <div className="dropdown_btn">
                                            <p>SSA</p>
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
                                <div className="input_box">
                                    <span>Tax % (if applicable) <p>*</p></span>
                                    <div className="input_wrapper">
                                        <input type="text" defaultValue="0" />
                                        <span className="percent_symbol">%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="fees_date_sec">
                                <div className="fees_head">
                                    <p>Payment schduled dates : </p>
                                </div>
                                <div className="sec_items">
                                    <div className="date_box">
                                        <div className="date_btn">
                                            <p>21 March, 2026</p>
                                            <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="dropdown">

                                        </div>
                                    </div>
                                    <div className="add_btn">
                                        <button><i class="fa-solid fa-plus"></i>Add more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddFeesStructureWrapper>
        </>
    );
}

export default AddFeesStructure;