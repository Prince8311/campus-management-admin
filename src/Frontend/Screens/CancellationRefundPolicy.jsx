import { CancellationRefundPolicyWrapper } from "../../Styles/Frontend/CancellationStyle";

const CancellationRefundPolicyPage = () => {
    return (
        <>
            <CancellationRefundPolicyWrapper>
                <div className="heading_sec">
                    <div className="sec_content">
                        <span>Official Document</span>
                        <h2>Cancellation & Refund Policy</h2>
                        <ul>
                            <li>
                                <i className="fa-solid fa-calendar"></i>
                                <p>Last Updated: May 08, 2026</p>
                            </li>
                            <div className="gap"></div>
                            <li>
                                <i className="fa-solid fa-business-time"></i>
                                <p>Version 1.0.0</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="overview_sec">
                    <div className="sec_inner">
                        <ul>
                            <h4>01 / OVERVIEW</h4>
                            <span>THE FOUNDATION OF AGREEMENT</span>
                        </ul>
                        <p>This policy outlines the terms and conditions governing cancellations and refunds for services provided by Campus Management Systems. As a partner in your educational journey, we maintain a policy of absolute transparency to ensure institutional trust and administrative clarity.</p>
                    </div>
                </div>
                <div className="policy_sec">
                    <div className="sec_inner">
                        <div className="institution_part">
                            <div className="left_part">
                                <div className="part_inner">
                                    <h5>Institutional Subscriptions</h5>
                                    <p>For educational institutions utilizing our SaaS ecosystem, the framework is designed for continuity and long-term stability. Our subscription model reflects the complex resource allocation required for high-tier academic support.</p>
                                    <span>"For Institutions: There is no Refund for the subscription you have taken. You can cancel the subscription within your subscription time ends."</span>
                                </div>
                            </div>
                            <div className="right_part">
                                <div className="part_inner">
                                    <img src="/images/check-shield.svg" alt="" className="icon" />
                                    <h5>Integrity Guarantee</h5>
                                    <p>We prioritize data security and system uptime. When an institution commits, we allocate dedicated infrastructure to ensure your campus never faces downtime.</p>
                                    <img src="/images/about-us.png" alt="" className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="student_staff_part">
                            <div className="left_part">
                                <div className="part_inner">
                                    <h5>Student & Staff Policies</h5>
                                    <p>Individual users under an institutional umbrella are managed by their respective organizations. This ensures that privacy and local administrative policies are respected.</p>
                                    <ul>
                                        <p>DIRECT ACTION DIRECTIVE:</p>
                                        <span>"For staffs or Students: For refund or cancellation contact your respective institutions."</span>
                                    </ul>
                                </div>
                            </div>
                            <div className="right_part">
                                <img src="/images/dashboard.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="process_sec">
                    <div className="sec_inner">
                        <div className="sec_head">
                            <h4>The Cancellation Process</h4>
                            <p>A streamlined, 3-step digital journey for institutional administrators.</p>
                        </div>
                        <div className="sec_content">
                            <div className="item_box">
                                <span>01</span>
                                <h6>Account Review</h6>
                                <p>Login to the Admin Console and navigate to the 'Billing & Subscriptions' segment to review your current period status.</p>
                            </div>
                            <div className="item_box">
                                <span>02</span>
                                <h6>Formal Intent</h6>
                                <p>Select 'Terminate Automatic Renewal'. Your service will remain fully active until the precise end date of your current cycle.</p>
                            </div>
                            <div className="item_box">
                                <span>03</span>
                                <h6>Data Export</h6>
                                <p>You will have 30 days post-expiration to export all institutional data via our secure 'Ethics & Portability' portal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CancellationRefundPolicyWrapper>
        </>
    );
}

export default CancellationRefundPolicyPage;