import { NavLink, Outlet } from "react-router-dom";
import { ProfileSettingsWrapper } from "../../../Styles/SettingStyle";

const ProfileSettingPage = () => {
    return (
        <>
            <ProfileSettingsWrapper>
                <div className="page_head">
                    <h2>Profile Settings</h2>
                </div>
                <div className="heading_option_part">
                    <div className="inner_part">
                        <NavLink to="student" className="part_box">
                            <h6>Student</h6>
                        </NavLink>
                        <NavLink to="staff" className="part_box">
                            <h6>Staff</h6>
                        </NavLink>
                    </div>
                </div>
                <div className="page_contents">
                    <Outlet />
                </div>
            </ProfileSettingsWrapper>
        </>
    );
}

export default ProfileSettingPage;