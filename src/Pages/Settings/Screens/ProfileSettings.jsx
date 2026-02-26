import { NavLink, Outlet, useMatch } from "react-router-dom";
import { ProfileSettingsWrapper } from "../../../Styles/SettingStyle";

const ProfileSettingPage = () => {
    const isStudent = useMatch("/profile-settings/student");
    const isStaff = useMatch("/profile-settings/staff");

    const showTabs = isStudent || isStaff;

    return (
        <>
            <ProfileSettingsWrapper>
                <div className="page_head">
                    <h2>Profile Settings</h2>
                </div>
                {
                    showTabs &&
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
                }
                <div className="page_contents">
                    <Outlet />
                </div>
            </ProfileSettingsWrapper>
        </>
    );
}

export default ProfileSettingPage;