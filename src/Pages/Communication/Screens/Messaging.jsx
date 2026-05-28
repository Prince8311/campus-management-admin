import { MessagingWrapper } from "../../../Styles/CommunicationStyle";

const MessagingPage = () => {
    return (
        <>
            <MessagingWrapper>
                <div className="page_head">
                    <h2>Message Setup</h2>
                </div>
                <div className="balance_section">
                    <div className="balance_box">
                        <div className="box_inner">
                            <div className="inner_top">
                                <p>Total Balance</p>
                                <a><i className="fa-solid fa-wallet"></i></a>
                            </div>
                            <span>15,00,000</span>
                        </div>
                    </div>
                    <div className="balance_box">
                        <div className="box_inner">
                            <div className="inner_top">
                                <p>Total Used</p>
                                <a><i className="fa-solid fa-paper-plane"></i></a>
                            </div>
                            <span>200000</span>
                        </div>
                    </div>
                    <div className="balance_box">
                        <div className="box_inner">
                            <div className="inner_top">
                                <p>Available Balance</p>
                            </div>
                            <span>20000</span>
                            <div className="box_btn">
                                <button>Recharge<i className="fa-solid fa-hourglass-half"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter_search_sec">
                    <div className="search_head">
                        <h5>Configure automated reminders and notification templates.</h5>
                    </div>
                    <div className="search_item">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Messege..." />
                        </div>
                        <div className="filter_sec">
                            <div className="filter_btn">
                                <i className="fa-solid fa-filter"></i>
                                <p>Filter by</p>
                            </div>
                            <div className="filter_dropdown"></div>
                        </div>
                        <div className="add_btn">
                            <button>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add New</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Active</li>
                        <li>Requested</li>
                    </div>
                </div>
                <div className="page_content">
                    <div className="content_box">
                        <div className="box_head">
                            <h5>Fee Due Reminder</h5>
                            <span>Pending</span>
                        </div>
                        <div className="box_body">
                            <p>{"Dear Parent, {{ Name }} 's pending fee is {{ Amount }}. Pay online on Teachmint bit.ly/3K8zWwV Ignore if paid. Regards SRI SAI ANGELS SCHOOL via Edu Connekt"}</p>
                        </div>
                        <div className="box_bottom">
                            <p><b>Created by :</b>Meghashree K M</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><b>Approved by :</b>Sourish Mondal</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><i className="fa-solid fa-calendar"></i>11 Oct, 2025</p>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h5>Fee Due Reminder</h5>
                            <span>Pending</span>
                        </div>
                        <div className="box_body">
                            <p>{"Dear Parent, {{ Name }} 's pending fee is {{ Amount }}. Pay online on Teachmint bit.ly/3K8zWwV Ignore if paid. Regards SRI SAI ANGELS SCHOOL via Edu Connekt"}</p>
                        </div>
                        <div className="box_bottom">
                            <p><b>Created by :</b>Meghashree K M</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><b>Approved by :</b>Sourish Mondal</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><i className="fa-solid fa-calendar"></i>11 Oct, 2025</p>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h5>Fee Due Reminder</h5>
                            <span>Pending</span>
                        </div>
                        <div className="box_body">
                            <p>{"Dear Parent, {{ Name }} 's pending fee is {{ Amount }}. Pay online on Teachmint bit.ly/3K8zWwV Ignore if paid. Regards SRI SAI ANGELS SCHOOL via Edu Connekt"}</p>
                        </div>
                        <div className="box_bottom">
                            <p><b>Created by :</b>Meghashree K M</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><b>Approved by :</b>Sourish Mondal</p>
                            <span><i className="fa-solid fa-circle"></i></span>
                            <p><i className="fa-solid fa-calendar"></i>11 Oct, 2025</p>
                        </div>
                    </div>
                </div>
            </MessagingWrapper>
        </>
    );
}

export default MessagingPage;