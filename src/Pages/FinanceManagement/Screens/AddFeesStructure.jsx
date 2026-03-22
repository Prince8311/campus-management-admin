import { useState } from "react";
import { AddFeesStructureWrapper } from "../../../Styles/FinanceStyle";

const AddFeesStructure = () => {
    const [step, setStep] = useState(1);

    return (
        <>
            <AddFeesStructureWrapper>
                <div className="page_head">
                    <h2>One Time Fees</h2>
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
                <div className="fees_structure_level_sec">
                    {
                        step === 1 &&
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
                                                <div className="box_top">
                                                    <div className="top_left">
                                                        <input type="checkbox" id="class" />
                                                        <label htmlFor="class">
                                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                            <p>Class - 1</p>
                                                        </label>
                                                    </div>
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
                                                <div className="box_top">
                                                    <div className="top_left">
                                                        <input type="checkbox" id="class" />
                                                        <label htmlFor="class">
                                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                            <p>Class - 2</p>
                                                        </label>
                                                    </div>
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
                            <div className="btn_sec">
                                <button onClick={() => setStep(2)}>Next <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                    }
                    {
                        step === 2 &&
                        <div className="fees_sec">
                            <div className="sec_head">
                                <span>Provide fees types, tax and due dates to create this structure.</span>
                            </div>
                            <div className="sec_item">
                                <div className="fees_type_sec">
                                    <div className="select_box">
                                        <span>Fees type <p>*</p></span>
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
                            <div className="btn_sec">
                                <button onClick={() => setStep(3)}>Next <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                    }
                    {
                        step === 3 &&
                        <div className="amount_sec">
                            <div className="sec_head">
                                <span>Add amount to the installments</span>
                            </div>
                            <div className="sec_items">
                                <div className="installments_sec">
                                    <div className="installment_box">
                                        <p>1. 31 May, 2026</p>
                                        <div className="amount">
                                            <span>₹</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="installment_box">
                                        <p>1. 31 May, 2026</p>
                                        <div className="amount">
                                            <span>₹</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="tax_sec">
                                        <a>Total fee : <span>₹50000</span></a>
                                        <a>Tax applied : <span>₹1020</span></a>
                                    </div>
                                    <div className="grand_total_sec">
                                        <p>Total fee including tax : <span>₹100000</span></p>
                                    </div>
                                </div>
                                <div className="btn_sec">
                                    <button>Publish</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </AddFeesStructureWrapper>
        </>
    );
}

export default AddFeesStructure;