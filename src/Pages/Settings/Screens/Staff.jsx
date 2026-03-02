import { StaffWrapper } from "../../../Styles/SettingStyle";

const StaffPage = () => {
    return (
        <>
            <StaffWrapper>
                <div className="wrapper_content">
                    <div className="content_box">
                        <div className="box_top_sec">
                            <div className="box_head">
                                <h6>Profile Information</h6>
                                <p>Create and edit profile sections in staffs' profile</p>
                            </div>
                            <div className="add_btn">
                                <button>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            <div className="sec_item">
                                <div className="item_inner">
                                    <div className="inner_top">
                                        <a><i class="fa-solid fa-thumbtack"></i></a>
                                        <div className="inner_content">
                                            <h6>Admin</h6>
                                            <span>20 fields</span>
                                        </div>
                                    </div>
                                    <div className="inner_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="sec_item">
                                <div className="item_inner">
                                    <div className="inner_top">
                                        <a><i class="fa-solid fa-thumbtack"></i></a>
                                        <div className="inner_content">
                                            <h6>Admin</h6>
                                            <span>20 fields</span>
                                        </div>
                                    </div>
                                    <div className="inner_btn">
                                        <button className="details">View Details</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_top_sec">
                            <div className="box_head">
                                <h6>Documents</h6>
                                <p>Create and edit document sections in staffs' profile</p>
                            </div>
                            <div className="add_btn">
                                <button>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            <div className="empty_messege">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No Section available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </StaffWrapper>
        </>
    );
}

export default StaffPage;