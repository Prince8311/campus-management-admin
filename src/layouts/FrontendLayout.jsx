import { Outlet } from "react-router-dom";
import FooterFrontend from "../Frontend/Components/Footer";
import NavbarFrontend from "../Frontend/Components/Navbar";
import { FrontendLayoutWrapper } from "../Styles/Frontend/FrontendLayoutStyle";

const FrontendLayout = () => {
    return (
        <>
            <FrontendLayoutWrapper>
                <div className="top_section">
                    <NavbarFrontend />
                </div>
                <div className="body_section">
                    <Outlet />
                </div>
                <div className="bottom_section">
                    <FooterFrontend />
                </div>
            </FrontendLayoutWrapper>
        </>
    );
}

export default FrontendLayout;