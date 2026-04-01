/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { HomePageWrapper } from "../../Styles/Frontend/HomeStyle";

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/auth", { replace: true });
    };

    return (
        <>
            <HomePageWrapper>
                <div className="banner_sec" id="home">
                    <div className="sec_content">
                        <div className="left_content">
                            <div className="content_inner">
                                <a>Unified Campas Management</a>
                                <h1>The All-in-One <span>Command Center</span> for Your Campus</h1>
                                <p>Empower your institution with an editorial-grade interface thats transform complex date into actiable intelligence. Academic planing finance and student traking in one cognitive sanctuary.</p>
                                <div className="banner_btns">
                                    <button onClick={handleGetStarted}>Get Started Now</button>
                                    <button><i className="fa-regular fa-circle-play"></i>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="right_content">
                            <img src="/images/dashboard.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="about_sec" id="about">
                    <div className="sec_content">
                        <div className="about_content_left">
                            <div className="left_item">
                                <img src="/images/about-us.png" alt="" />
                            </div>
                        </div>
                        <div className="about_content_right">
                            <div className="right_items">
                                <div className="item_head">
                                    <h4>About Us</h4>
                                    <p>At Edu Connekt by Shetty Ticket Counter Pvt Ltd, we are passionate about leveraging technology to drive growth and efficiency for businesses and educational institutions. Based in Chikkamagaluru, our mission is to deliver innovative solutions that transform the way organizations operate, communicate, and engage with their Customers/Users.</p>
                                </div>
                                <div className="bottom_items">
                                    <div className="item_box">
                                        <div className="icon"><img src="/images/mission.svg" alt="" /></div>
                                        <p>Mission</p>
                                        <span>We believe every business deserves a powerful digital presence, so we craft personalized design and marketing solutions that are effective, affordable, and built around you.</span>
                                    </div>
                                    <div className="item_box">
                                        <div className="icon"><img src="/images/vision.svg" alt="" /></div>
                                        <p>Vision</p>
                                        <span>We are building a globally recognized name — one that stands for creativity, results, and the kind of tailored web design and marketing that transforms businesses from the inside out.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scale_sec">
                    <div className="sec_content">
                        <div className="sec_head">
                            <h3>Everything You Need to Scale Excellence</h3>
                            <p>Sophisticated modules designed to handle the nuances of modern educational administration without the clutter.</p>
                        </div>
                        <div className="content_items">
                            <div className="item_box">
                                <div className="box_inner">
                                    <a><i className="fa-solid fa-money-bill"></i></a>
                                    <h5>Finance Management</h5>
                                    <p>Automate tution billing, track expenses, and generatereal-time financial health reports for stakeholders.</p>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <a><i className="fa-regular fa-calendar"></i></a>
                                    <h5>Academic Planning</h5>
                                    <p>Dynamic scheduling, curriculum mapping, and credit tracking built into an intuitive calender system.</p>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <a><i className="fa-solid fa-users"></i></a>
                                    <h5>Student Information</h5>
                                    <p>A 360-degree view of every student, from enrollment status to disciplinary records and health files</p>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <a><i className="fa-regular fa-message"></i></a>
                                    <h5>Communication Tools</h5>
                                    <p>Bridge the gap between faculty and parents with integrated messaging, newsletters, and push alerts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="stats_sec">
                    <div className="sec_content">
                        <div className="stat_box">
                            <a className="blue">10k+</a>
                            <p>STUDENTS MANAGED</p>
                        </div>

                        <div className="stat_box">
                            <a className="green">500+</a>
                            <p>STAFFS INCLUDED</p>
                        </div>

                        <div className="stat_box">
                            <a className="light">99.9%</a>
                            <p>PLATFORM UPTIME</p>
                        </div>
                    </div>
                </div>

                <div className="registration_sec" id="register">
                    <div className="sec_content">
                        <div className="image_sec">
                            <img src="/images/connect.png" alt="" />
                        </div>
                        <div className="sec_items">
                            <div className="item_inner">
                                <div className="form_head">
                                    <h3>Register Your Institution</h3>
                                    <p>Start your digital transformation journey today.</p>
                                </div>
                                <div className="form_sec">
                                    <div className="input_box">
                                        <span>Institution Name <p>*</p></span>
                                        <input type="text" placeholder="Enter your institution's name" />
                                    </div>
                                    <div className="input_box">
                                        <span>Admin Email <p>*</p></span>
                                        <input type="text" placeholder="admin@institution.edu" />
                                    </div>
                                    <div className="input_box">
                                        <span>Phone Number <p>*</p></span>
                                        <input type="text" placeholder="+91 (555) 000-0000" />
                                    </div>
                                    <div className="text_box">
                                        <span>Location <p>*</p></span>
                                        <textarea placeholder="Enter your institution's location" />
                                    </div>
                                    <div className="btn_box">
                                        <button>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="demo_sec">
                    <div className="sec_content">
                        <div className="demo_items">
                            <div className="demo_head">
                                <h3>Ready to bring intelligence to your campus?</h3>
                                <p>Join hundreds of forward-thinking institutions that have upgraded to the world's most sophisticated management platform.</p>
                            </div>
                            <div className="demo_btn">
                                <button>Request a Demo</button>
                                <button>View Pricing</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_sec" id="contact">
                    <div className="sec_content">
                        <div className="content_left">
                            <div className="left_inner">
                                <div className="inner_head">
                                    <h4>Contact Us</h4>
                                </div>
                                <div className="inner_items">
                                    <div className="item_box">
                                        <a className="email"><i className="fa-regular fa-envelope"></i></a>
                                        <div className="content">
                                            <span>EMAIL</span>
                                            <p>hello@educonnect.com</p>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <a className="call"><i className="fa-solid fa-phone"></i></a>
                                        <div className="content">
                                            <span>PHONE</span>
                                            <p>91+ 9449618559</p>
                                        </div>
                                    </div>
                                    <div className="item_box">
                                        <a className="location"><i className="fa-solid fa-location-dot"></i></a>
                                        <div className="content">
                                            <span>LOCATION</span>
                                            <p>THE MERIDIAN Luxury Hotel, District Stadium Main Road(Kurvangi main road), Dhantaramakki, Chikkamagaluru - 577101, Karnataka, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content_right">
                            <div className="right_inner">
                                <div className="input_box">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder="Email Address" />
                                </div>
                                <div className="text_box">
                                    <textarea placeholder="Enter Message" />
                                </div>
                                <div className="btn_box">
                                    <button>Send Inquiry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomePageWrapper>
        </>
    );
}

export default HomePage;