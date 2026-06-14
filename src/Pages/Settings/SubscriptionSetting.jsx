import { SubscriptionSettingWrapper } from "../../Styles/SettingStyle";

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
                </div>
            </SubscriptionSettingWrapper>
        </>
    );
}

export default SubscriptionSettingPage;