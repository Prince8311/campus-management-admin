import { UserData } from "../Context/PageContext";
import { NavbarWrapper } from "../Styles/LayoutStyle";

const Navbar = () => {
    const {pageName} = UserData();

    return(
        <>
            <NavbarWrapper>
                <div className="nav_inner">
                    <div className="toggle_btn"><i className="fa-solid fa-bars-staggered"></i></div>
                    <h4>{pageName}</h4>
                    <div className="nav_items">
                        <div className="notification_box">
                            <a><i className="fa-solid fa-bell"></i></a>
                        </div>
                        <div className="profile_box">
                            <div className="profile_img">
                                <img src="/images/profile-image.png" alt="" />
                            </div>
                            <p>Sourish Mondal</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                    </div>
                </div>
            </NavbarWrapper>
        </>
    );
}

export default Navbar;