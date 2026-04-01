/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { NavbarFrontendWrapper } from "../../Styles/Frontend/FrontendLayoutStyle";

const NavbarFrontend = () => {
    return (
        <>
            <NavbarFrontendWrapper>
                <div className="nav_inner">
                    <div className="inner_items">
                        <div className="logo_part">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <div className="nav_items_part">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#register">Register</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </div>
                        <div className="nav_btn">
                            <Link to="/auth">Get Started</Link>
                        </div>
                    </div>
                </div>
            </NavbarFrontendWrapper>
        </>
    );
}

export default NavbarFrontend;