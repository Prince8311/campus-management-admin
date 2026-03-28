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
                            <li><a>Dashboard</a></li>
                            <li><a>Admission</a></li>
                            <li><a>Faculty</a></li>
                            <li><a>Finance</a></li>
                            <li><a>Report</a></li>
                        </div>
                        <div className="nav_btn">
                            <a>Get Started</a>
                        </div>
                    </div>
                </div>
            </NavbarFrontendWrapper>
        </>
    );
}

export default NavbarFrontend;