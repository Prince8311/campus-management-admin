import { MessagingWrapper } from "../../../Styles/CommunicationStyle";

const MessagingPage = () => {
    return (
        <>
            <MessagingWrapper>
                <div className="page_head">
                    <h2>Whatsapp Message Setup</h2>
                </div>
                <div className="filter_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Text..." />
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
                <div className="page_content">
                    <div className="content_box">
                        <div className="box_head">
                            <h5>Fee Due Reminder</h5>
                            <a><i className="fa-solid fa-arrows-rotate"></i>Automated</a>
                        </div>
                        <div className="box_body">
                            <p>{"Dear Parent, {{ Name }} 's pending fee is {{ Amount }}. Pay online on Teachmint bit.ly/3K8zWwV Ignore if paid. Regards SRI SAI ANGELS SCHOOL via Edu Connekt"}</p>
                        </div>
                        <div className="box_bottom">
                            <p><b>Created by :</b>Meghashree K M</p>
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