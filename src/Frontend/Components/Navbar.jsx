/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarFrontendWrapper } from "../../Styles/Frontend/FrontendLayoutStyle";

const NavbarFrontend = () => {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sections = ["home", "about", "register", "contact"];

        const observer = new IntersectionObserver(
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

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <NavbarFrontendWrapper>
                <div className="nav_inner">
                    <div className="inner_items">
                        <div className="logo_part">
                            <img src="/images/logo.png" alt="" />
                        </div>
                        <div className="nav_items_part">
                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setActive("home")}
                                    className={active === "home" ? "active" : ""}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setActive("about")}
                                    className={active === "about" ? "active" : ""}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#register"
                                    onClick={() => setActive("register")}
                                    className={active === "register" ? "active" : ""}
                                >
                                    Register
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setActive("contact")}
                                    className={active === "contact" ? "active" : ""}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </div>
                        <div className="menubar_icon">
                            <span><i class="fa-solid fa-bars"></i></span>
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