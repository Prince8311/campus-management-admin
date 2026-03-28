import { FooterFrontendWrapper } from "../../Styles/Frontend/FrontendLayoutStyle";

const FooterFrontend = () => {
    return (
        <>
            <FooterFrontendWrapper>
                <div className="footer_top">
                    <div className="top_inner">
                        <div className="left_inner">
                            <div className="logo">
                                <img src="/images/logo.png" alt="" />
                            </div>
                            <p>Empowering institutional intelligence with the world's most sophisticated campus management platform.</p>
                        </div>
                        <div className="right_inner">
                            <div className="inner_box">
                                <h5>Quick Links</h5>
                                <ul>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Admissions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Faculty</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Finance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Reports</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner_box">
                                <h5>Legal</h5>
                                <ul>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Privacy Policy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span>Terms & Conditions</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner_box">
                                <h5>Connect</h5>
                                <div className="social_media">
                                    <a><i className="fa-brands fa-instagram"></i></a>
                                    <a><i className="fa-brands fa-x-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>Copyright© <span>Edu Connekt  by Shetty Ticket Counter Private Limited</span> | All Rights Reserved</p>
                </div>
            </FooterFrontendWrapper>
        </>
    );
}

export default FooterFrontend;