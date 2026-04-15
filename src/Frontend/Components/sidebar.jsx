import { SidebarFrontendWrapper } from "../../Styles/Frontend/FrontendLayoutStyle";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    return (
        <>
            <SidebarFrontendWrapper className={isSidebarOpen ? "active" : ""}>
                <div className={`sidebar_inner ${isSidebarOpen ? "active" : ""}`}>
                    <div className="inner_head">
                        <h4>Checkout</h4>
                    </div>
                    <div className="inner_items">
                        <div className="items_inner">
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Services</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                        </div>
                    </div>
                    <div className="inner_btn">
                        <button>Get Started</button>
                    </div>
                </div>
            </SidebarFrontendWrapper>
        </>
    );
}

export default Sidebar;