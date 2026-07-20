import { UserData } from "../../../Context/PageContext";
import { ControlCenterWrapper } from "../../../Styles/CommunicationStyle";

const ControlCenterPage = () => {
    const { userDetails } = UserData();
    return (
        <>
            <ControlCenterWrapper>
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
                            {
                                userDetails?.user_type === "inst_admin" &&
                                <div className="box_btn">
                                    <button>Recharge<i className="fa-solid fa-hourglass-half"></i></button>
                                </div>
                            }
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
                        <li className="active">One Time</li>
                        <li>Recurring</li>
                    </div>
                </div>
                <div className="page_content">
                    <div className="content_box">
                        <div className="box_head">
                            <h5>One Time</h5>
                            <span>View Details</span>
                        </div>
                        <div className="box_body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vel dolorum perferendis laudantium eaque at rem maiores, dicta est in illo natus amet, temporibus porro minus voluptatem quae repudiandae sint odit. Sint minus hic quos non assumenda quia laborum beatae doloremque eligendi, ullam amet in perspiciatis id commodi pariatur est.</p>
                        </div>
                        <div className="box_bottom">
                            <div className="bottom_left">
                                <p><i className="fa-solid fa-user"></i><b>Created by :</b>Joydeep Barik</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-calendar"></i><b>Created at :</b>18 Jul, 2026</p>
                            </div>
                            <div className="bottom_right">
                                <p><i className="fa-solid fa-calendar"></i><b>Sending date :</b>18 Jul, 2026</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-users"></i><b>Number of recivers :</b>100</p>
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h5>One Time</h5>
                            <span>View Details</span>
                        </div>
                        <div className="box_body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vel dolorum perferendis laudantium eaque at rem maiores, dicta est in illo natus amet, temporibus porro minus voluptatem quae repudiandae sint odit. Sint minus hic quos non assumenda quia laborum beatae doloremque eligendi, ullam amet in perspiciatis id commodi pariatur est.</p>
                        </div>
                        <div className="box_bottom">
                            <div className="bottom_left">
                                <p><i className="fa-solid fa-user"></i><b>Created by :</b>Joydeep Barik</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-calendar"></i><b>Created at :</b>18 Jul, 2026</p>
                            </div>
                            <div className="bottom_right">
                                <p><i className="fa-solid fa-calendar"></i><b>Sending date :</b>18 Jul, 2026</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-users"></i><b>Number of recivers :</b>100</p>
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h5>One Time</h5>
                            <span>View Details</span>
                        </div>
                        <div className="box_body">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vel dolorum perferendis laudantium eaque at rem maiores, dicta est in illo natus amet, temporibus porro minus voluptatem quae repudiandae sint odit. Sint minus hic quos non assumenda quia laborum beatae doloremque eligendi, ullam amet in perspiciatis id commodi pariatur est.</p>
                        </div>
                        <div className="box_bottom">
                            <div className="bottom_left">
                                <p><i className="fa-solid fa-user"></i><b>Created by :</b>Joydeep Barik</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-calendar"></i><b>Created at :</b>18 Jul, 2026</p>
                            </div>
                            <div className="bottom_right">
                                <p><i className="fa-solid fa-calendar"></i><b>Sending date :</b>18 Jul, 2026</p>
                                <span><i className="fa-solid fa-circle"></i></span>
                                <p><i className="fa-solid fa-users"></i><b>Number of recivers :</b>100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ControlCenterWrapper>
        </>
    );
}

export default ControlCenterPage;