/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { NavbarFrontendWrapper } from "../../Styles/Frontend/FrontendLayoutStyle";
import Sidebar from "./sidebar";

const NavbarFrontend = () => {
    const [active, setActive] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleNavClick = (id) => {
        if (location.pathname !== "/") {
            navigate(`/?section=${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        setActive(id);
    };

    const handleOpenSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    useEffect(() => {
        if (location.pathname !== "/") {
            setActive("");
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/") return;

        const sections = ["home", "about", "register", "contact"];
        let observer;
        const timeout = setTimeout(() => {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(entry.target.id);
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "-40% 0px -40% 0px",
                    threshold: 0,
                }
            );
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.observe(el);
            });
        }, 200);

        return () => {
            clearTimeout(timeout);
            if (observer) observer.disconnect();
        };
    }, [location.pathname]);

    return (
        <NavbarFrontendWrapper>
            <div className="nav_inner">
                <div className="inner_items">
                    <div className="logo_part">
                        <img src="/images/logo.png" alt="" />
                    </div>

                    <div className="nav_items_part">
                        <li>
                            <a
                                onClick={() => handleNavClick("home")}
                                className={active === "home" ? "active" : ""}
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => handleNavClick("about")}
                                className={active === "about" ? "active" : ""}
                            >
                                About Us
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => handleNavClick("register")}
                                className={active === "register" ? "active" : ""}
                            >
                                Register
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => handleNavClick("contact")}
                                className={active === "contact" ? "active" : ""}
                            >
                                Contact Us
                            </a>
                        </li>
                    </div>

                    <div className="nav_btn">
                        <Link to="/auth">Sign In</Link>
                    </div>
                    <div className="menubar_icon">
                        <a className={isSidebarOpen ? 'active' : ''} onClick={handleOpenSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
        </NavbarFrontendWrapper>
    );
};

export default NavbarFrontend;