import { AccountSettingWrapper } from "../../../Styles/SettingStyle";

const AccountSettingPage = () => {
    return (
        <>
            <AccountSettingWrapper>
                <div className="page_head">
                    <h2>Account Settings</h2>
                </div>
                <div className="profile_sec">
                    <div className="image_sec">
                        <img src="/images/profile-image.png" alt="" />
                        <span><i className="fa-regular fa-pen-to-square"></i></span>
                    </div>
                </div>
                <div className="page_contents">
                    <div className="content_box">
                        <div className="box_head">
                            <h4>Basic Details</h4>
                        </div>
                        <div className="content_items">
                            <div className="input_box half">
                                <span>Full Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box half">
                                <span>Ph No. <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box half">
                                <span>Email <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h4>Institution Details</h4>
                        </div>
                        <div className="content_items">
                            <div className="input_box full">
                                <span>Institution Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box full">
                                <span>Location <p>*</p></span>
                                <textarea type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_head">
                            <h4>Password Details</h4>
                        </div>
                        <div className="content_items">
                            <div className="input_box half">
                                <span>Old Password <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box half">
                                <span>New Password <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box half">
                                <span>Confirm Password <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn_sec">
                    <button><i className="fa-regular fa-floppy-disk"></i>Save</button>
                </div>
            </AccountSettingWrapper>
        </>
    );
}

export default AccountSettingPage;