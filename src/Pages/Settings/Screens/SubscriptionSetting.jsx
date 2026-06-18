import { SubscriptionSettingWrapper } from "../../../Styles/SettingStyle";

const SubscriptionSettingPage = () => {
    return (
        <>
            <SubscriptionSettingWrapper>
                <div className="page_head">
                    <h2>Subscription Duration & Offers</h2>
                    <div className="edit_btn">
                        <button>
                            <i className="fa-regular fa-pen-to-square"></i>
                            <p>Edit Configaration</p>
                        </button>
                    </div>
                </div>
                <div className="institution_subscription_section">
                    <div className="subscription_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h6>3 Months</h6>
                                </div>
                                <div className="duration_name">
                                    <p>Short Term Pilot</p>
                                </div>
                            </div>
                            <div className="bottom_part">
                                <h5>Rate<span>(Basic)</span></h5>
                                <div className="bottom_btn">
                                    <button className="edit">Edit</button>
                                    <button className="delete" ><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscription_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h6>6 Months</h6>
                                </div>
                                <div className="duration_name">
                                    <p>Semi - Annual</p>
                                </div>
                            </div>
                            <div className="bottom_part">
                                <h5>Rate<span>(Standard)</span></h5>
                                <div className="bottom_btn">
                                    <button className="edit">Edit</button>
                                    <button className="delete" ><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscription_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h6>12 Months</h6>
                                </div>
                                <div className="duration_name">
                                    <p>Annual Growtht</p>
                                </div>
                            </div>
                            <div className="bottom_part">
                                <h5>Discount<span>(5% off)</span></h5>
                                <div className="bottom_btn">
                                    <button className="edit">Edit</button>
                                    <button className="delete" ><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscription_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h6>24 Months</h6>
                                    <span>Best Value</span>
                                </div>
                                <div className="duration_name">
                                    <p>Institutional Partner</p>
                                </div>
                            </div>
                            <div className="bottom_part">
                                <h5>Bonus<span>(3 Mo Free)</span></h5>
                                <div className="bottom_btn">
                                    <button className="edit">Edit</button>
                                    <button className="delete" ><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subscription_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h6>48 Months</h6>
                                </div>
                                <div className="duration_name">
                                    <p>Long Term Stability</p>
                                </div>
                            </div>
                            <div className="bottom_part">
                                <h5>Bonus<span>(4 Mo Free)</span></h5>
                                <div className="bottom_btn">
                                    <button className="edit">Edit</button>
                                    <button className="delete" ><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing_section">
                    <div className="price_top_sec">
                        <div className="sec_head">
                            <h3>Pricing Configuration</h3>
                            <p>Global rate definitions and institution-level overrides.</p>
                        </div>
                        <div className="pricing_option_part">
                            <div className="inner_part">
                                <a className="part_box">
                                    <span>Genaral Rates</span>
                                </a>
                                <a className="part_box active">
                                    <span>Institution Specific</span>
                                </a>
                            </div>
                        </div>
                        <div className="add_btn">
                            <button>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add New Price</p>
                            </button>
                        </div>
                    </div>
                    <div className="pricing_box_sec">
                        <div className="price_box">
                            <div className="box_inner">
                                <div className="box_top">
                                    <a><i className="fa-solid fa-user-plus"></i></a>
                                    <span><i className="fa-regular fa-pen-to-square"></i>Edit</span>
                                </div>
                                <div className="box_content">
                                    <h5>Per-Student Base Price</h5>
                                    <p>Core license cost calculated per active seat. Tiered discounts apply for volume.</p>
                                    <div className="price_sec">
                                        <h6>₹20.00<span>/ student / month</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price_box">
                            <div className="box_inner">
                                <div className="box_top">
                                    <a><i className="fa-solid fa-truck"></i></a>
                                    <span><i className="fa-regular fa-pen-to-square"></i>Edit</span>
                                </div>
                                <div className="box_content">
                                    <h5>Service Add-ons</h5>
                                    <div className="addon_sec">
                                        <li>
                                            <p>Hostel Management</p>
                                            <a>₹3.00</a>
                                        </li>
                                        <li>
                                            <p>Hostel + Travel Management</p>
                                            <a>₹2.00</a>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price_box">
                            <div className="box_inner">
                                <div className="box_top">
                                    <a href=""><i className="fa-solid fa-money-bill"></i></a>
                                    <span><i className="fa-regular fa-pen-to-square"></i>Edit</span>
                                </div>
                                <div className="box_content">
                                    <h5>Billing Cycle</h5>
                                    <div className="toggle_sec">
                                        <div className="sec_box">
                                            <h4>Monthly</h4>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sec_box">
                                            <h4>Quarterly</h4>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggleqa"
                                                />
                                                <label htmlFor="toggleqa">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sec_box">
                                            <h4>Annually</h4>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggleann"
                                                />
                                                <label htmlFor="toggleann">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price_box">
                            <div className="box_inner">
                                <div className="box_top">
                                    <a><i className="fa-solid fa-star"></i></a>
                                    <span><i className="fa-regular fa-pen-to-square"></i>Edit</span>
                                </div>
                                <div className="box_content">
                                    <h5>All-in Bundle (LMS + ERP)</h5>
                                    <p>Bundled pricing for schools utilizing full suite (LMS, ERP, Hostel, & Transport).</p>
                                    <ul>
                                        <a>LMS</a>
                                        <a>ERP</a>
                                        <a>Support+</a>
                                    </ul>
                                    <div className="price_sec">
                                        <h6>₹15.99<span>flat / seat</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table_sec">
                        <table>
                            <thead>
                                <tr>
                                    <th>Institution Name</th>
                                    <th>Student Price</th>
                                    <th>Add-on Price</th>
                                    <th>Billing Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ABC Institution</td>
                                    <td>15</td>
                                    <td>
                                        <p>₹5.20 <span>(Hostel)</span></p>
                                        <p>₹3.20 <span>(Hostel & Travel)</span></p>
                                    </td>
                                    <td>₹1,03,250</td>
                                    <td>
                                        <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </SubscriptionSettingWrapper>
        </>
    );
}

export default SubscriptionSettingPage;