import { HomePageWrapper } from "../../Styles/Frontend/HomeStyle";

const HomePage = () => {
    return (
        <>
            <HomePageWrapper>
                <div className="banner_sec">
                    <div className="sec_content">
                        <div className="left_content">
                            <div className="content_inner">
                                <a>Unified Campas Management</a>
                                <h1>The All-in-One <span>Command Center</span> for Your Campus</h1>
                                <p>Empower your institution with an editorial-grade interface thats transform complex date into actiable intelligence. Academic planing finance and student traking in one cognitive sanctuary.</p>
                                <div className="banner_btns">
                                    <button>Get Started Now</button>
                                    <button><i className="fa-regular fa-circle-play"></i>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="right_content">

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

                <div class="stats_sec">
                    <div class="sec_content">
                        <div class="stat_box">
                            <a class="blue">10k+</a>
                            <p>STUDENTS MANAGED</p>
                        </div>

                        <div class="stat_box">
                            <a class="green">500+</a>
                            <p>STAFFS INCLUDED</p>
                        </div>

                        <div class="stat_box">
                            <a class="light">99.9%</a>
                            <p>PLATFORM UPTIME</p>
                        </div>
                    </div>
                </div>
            </HomePageWrapper>
        </>
    );
}

export default HomePage;