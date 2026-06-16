import { SubcriptionWrapper } from "../Styles/Frontend/PricingStyle";

const SubscriptionPage = () => {
    return (
        <>
            <SubcriptionWrapper>
                <div className="heading_sec">
                    <div className="sec_content">
                        <h2>Configure Your <span>Subscription</span></h2>
                        <p>Tailor your educational ecosystem. Manage student capacities and integratedfacility add-ons for a unified management experience.</p>
                    </div>
                </div>
                <div className="subcription_content_sec">
                    <div className="sec_content">
                        <div className="left_content">
                            <div className="left_content_inner">
                                <div className="lisence_sec">
                                    <div className="top_sec">
                                        <div className="top_left">
                                            <div className="icon">
                                                <i className="fa-solid fa-graduation-cap"></i>
                                            </div>
                                            <div className="left_item">
                                                <h5>Base License</h5>
                                                <p>Includes LMS, Attendance, Examination, and Fee Management for every enrolled student.</p>
                                                <a> <span>₹200</span> per student / month</a>
                                            </div>
                                        </div>
                                        <div className="top_right">
                                            <a>Active</a>
                                        </div>
                                    </div>
                                    <div className="bottom_sec">
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                        <div className="bottom_box">
                                            <div className="box_inner">
                                                <i class="fa-solid fa-circle-check"></i>
                                                <span>Centralized Student Database</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="subcription_items">
                                    <div className="item_box">
                                        <div className="box_head">
                                            <div className="head_img">
                                                <img src="/images/hostel.svg" alt="" />
                                            </div>
                                            <h6>Hostel Add-on</h6>
                                        </div>
                                        <div className="box_item">
                                            <p>Integrated dormitory management, room allocation, and mess billing systems.</p>
                                            <div className="bottom_item">
                                                <a> <span>₹30</span> / month</a>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="hostel"
                                                    />
                                                    <label htmlFor="hostel">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <div className="box_head">
                                            <div className="head_img">
                                                <img src="/images/travel.svg" alt="" />
                                            </div>
                                            <h6>Travel Add-on</h6>
                                        </div>
                                        <div className="box_item">
                                            <p>Real-time fleet tracking, route optimization, and driver management portal.</p>
                                            <div className="bottom_item">
                                                <a> <span>₹30</span> / month</a>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="travel"
                                                    />
                                                    <label htmlFor="travel">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="elite_campus_sec">
                                    <div className="icon_sec">
                                        <img src="/images/elite.svg" alt="" />
                                    </div>
                                    <div className="item_sec">
                                        <h6>Elite Campus Bundle</h6>
                                        <p>Combine Hostel & Travel for a preferred price</p>
                                    </div>
                                    <div className="price_sec">
                                        <a>50/-</a>
                                        <span>SAVE 10/- MONTHLY</span>
                                    </div>
                                </div>

                                <div className="term_sec">
                                    <div className="term_heading">
                                        <h5>Subscription Term</h5>
                                        <img src="/images/term.svg" alt="" />
                                    </div>

                                    <div className="subcription_term_box">
                                        {/* <div className="dropdown_sec">
                                            <div className="dropdown_btn">
                                                <p>12 Months (Best Value)</p>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                            <div className="dropdown">
                                                <div className="dropdown_inner">
                                                    <ul>
                                                        <li>Sick Room</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="term_box">
                                            <div className="box_inner">
                                                <a>3</a>
                                                <p>Months</p>
                                            </div>
                                        </div>
                                        <div className="term_box">
                                            <div className="box_inner">
                                                <a>6</a>
                                                <p>Months</p>
                                            </div>
                                        </div>
                                        <div className="term_box active">
                                            <div className="box_inner">
                                                <a>12</a>
                                                <p>Months</p>
                                                <span>Best Value</span>
                                            </div>
                                        </div>
                                        <div className="term_box">
                                            <div className="box_inner">
                                                <a>24</a>
                                                <p>Months</p>
                                            </div>
                                        </div>
                                        <div className="term_box">
                                            <div className="box_inner">
                                                <a>48</a>
                                                <p>Months</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content_inner">
                                <div className="content_top">
                                    <div className="top_head">
                                        <span>Plan Summary</span>
                                        <h3>Standard Enrollment</h3>
                                    </div>
                                    <div className="top_icon">
                                        <img src="/images/bill.svg" alt="" />
                                    </div>
                                </div>
                                <div className="content_bottom">
                                    <div className="bill_items">
                                        <li>
                                            <p>Base License (per student)</p>
                                            <span>200/-</span>
                                        </li>
                                        <li>
                                            <p>Add-ons (Bundle)</p>
                                            <span>50/-</span>
                                        </li>
                                        <li>
                                            <p>Duration</p>
                                            <span>12 months</span>
                                        </li>
                                    </div>
                                    <div className="total_sec">
                                        <a>Monthly Total</a>
                                        <span>250/-</span>
                                    </div>
                                    <div className="final_sec">
                                        <div className="final_heading_sec">
                                            <img src="/images/math.svg" alt="" />
                                            <p>Final Projection</p>
                                        </div>
                                        <a> <span>3000/-</span> per student / year</a>
                                    </div>
                                    <div className="btn_sec">
                                        <button>Confirm Configuration <i className="fa-solid fa-arrow-right-long"></i></button>
                                        <button>Download Quote (PDF)</button>
                                    </div>
                                </div>
                            </div>
                            <div className="right_content_img">
                                <img src="/images/dashboard.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </SubcriptionWrapper>
        </>
    );
}

export default SubscriptionPage;