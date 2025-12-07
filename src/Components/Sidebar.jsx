import { useEffect, useState } from "react";
import { SidebarWrapper } from "../Styles/LayoutStyle";
import { NavLink, useLocation } from "react-router-dom";
import { UserData } from "../Context/PageContext";

const Sidebar = () => {
    const location = useLocation();
    const { setPageName } = UserData();
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const formatPathName = (pathName) => {
            return pathName.split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        };
        const path = location.pathname;
        const pathName = path.split('/').filter(Boolean).pop() || 'Dashboard';
        const formattedPageName = formatPathName(pathName);
        setPageName(formattedPageName);
        if (path.startsWith('/academics')) {
            setActiveDropdown(1);
        } else if (path.startsWith('/finance-management')) {
            setActiveDropdown(2);
        }
    }, [location]);

    const toggleDropdown = (index) => {
        setActiveDropdown(prev => (prev === index ? null : index));
    };

    return (
        <>
            <SidebarWrapper>
                <div className="logo">
                    <h3>Campus <span><b>C</b>onnect</span></h3>
                </div>
                <div className="institution_brief">
                    <div className="brief_inner">
                        <div className="top_part">
                            <div className="image_box">
                                <i className="fa-solid fa-school"></i>
                            </div>
                            <li>
                                <h4>Sri Sai Angels School</h4>
                                <p><b>INT ID :</b>SRI894</p>
                            </li>
                        </div>
                        <div className="bottom_part">
                            <li>
                                <p>Ongoing Session :</p>
                                <span>AY 2025-26</span>
                            </li>
                            <div className="btn_sec">
                                <button className="view_btn">View Details</button>
                                <a className="manage_btn">Manage Sessions<i className="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar_items">
                    <ul className="items_inner">
                        <NavLink to="/dashboard">
                            <i className="fa-solid fa-gauge"></i>
                            <p>Dashboard</p>
                        </NavLink>
                        <div className={`dropdown_item ${activeDropdown === 0 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(0)}>
                                <li>
                                    <i className="fa-solid fa-chart-bar prefix"></i>
                                    <span>
                                        <p>Reports</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <a>
                                    <i className="fa-solid fa-users"></i>
                                    <p>School Strength</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-computer"></i>
                                    <p>Classroom Activity</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-id-card-clip"></i>
                                    <p>Student Attendance</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <p>Academics</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-money-bill"></i>
                                    <p>Fee</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 1 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(1)}>
                                <li>
                                    <i className="fa-solid fa-book prefix"></i>
                                    <span>
                                        <p>Academics</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <NavLink to="/academics/student-information">
                                    <i className="fa-solid fa-file-pen"></i>
                                    <p>Student Information</p>
                                </NavLink>
                                <NavLink to="/academics/classrooms">
                                    <i className="fa-solid fa-computer"></i>
                                    <p>Classrooms</p>
                                </NavLink>
                                <a>
                                    <i className="fa-solid fa-id-card-clip"></i>
                                    <p>Student Attendance</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-file-lines"></i>
                                    <p>Report Card</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 2 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(2)}>
                                <li>
                                    <i className="fa-solid fa-sack-dollar prefix"></i>
                                    <span>
                                        <p>Finance Management</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <NavLink to="/finance-management/fee-collection">
                                    <i className="fa-solid fa-hand-holding-dollar prefix"></i>
                                    <p>Fee Collection</p>
                                </NavLink>
                                <NavLink to="/finance-management/fee-transactions">
                                    <i className="fa-solid fa-file-invoice prefix"></i>
                                    <p>Fee Transactions</p>
                                </NavLink>
                                <a>
                                    <i className="fa-solid fa-gear prefix"></i>
                                    <p>Fee Configuration</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-building-columns prefix"></i>
                                    <p>Bank Accounts</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 3 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(3)}>
                                <li>
                                    <i className="fa-solid fa-headphones prefix"></i>
                                    <span>
                                        <p>Communication</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <a>
                                    <i className="fa-solid fa-message prefix"></i>
                                    <p>Messaging</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 4 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(4)}>
                                <li>
                                    <i className="fa-solid fa-users-gear prefix"></i>
                                    <span>
                                        <p>Staff Management</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <a>
                                    <i className="fa-solid fa-file-pen prefix"></i>
                                    <p>Staff Information</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-id-card-clip prefix"></i>
                                    <p>Staff Attendance</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 5 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(5)}>
                                <li>
                                    <i className="fa-solid fa-user-shield prefix"></i>
                                    <span>
                                        <p>Administration</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <a>
                                    <i className="fa-solid fa-certificate prefix"></i>
                                    <p>Certificates</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-id-card-clip prefix"></i>
                                    <p>Id Cards</p>
                                </a>
                            </div>
                        </div>
                        <div className={`dropdown_item ${activeDropdown === 6 ? 'active' : ''}`}>
                            <div className="dropdown_btn" onClick={() => toggleDropdown(6)}>
                                <li>
                                    <i className="fa-solid fa-gears prefix"></i>
                                    <span>
                                        <p>Settings</p>
                                        <i className="fa-solid fa-angle-right suffix"></i>
                                    </span>
                                </li>
                            </div>
                            <div className="dropdown">
                                <a>
                                    <i className="fa-solid fa-mobile prefix"></i>
                                    <p>Device Settings</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-user-gear prefix"></i>
                                    <p>Profile Settings</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-gear prefix"></i>
                                    <p>General Settings</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-file-shield prefix"></i>
                                    <p>Roles & Permissions</p>
                                </a>
                                <a>
                                    <i className="fa-solid fa-hand-holding-hand prefix"></i>
                                    <p>Preferences</p>
                                </a>
                            </div>
                        </div>
                        <a>
                            <i className="fa-solid fa-hand-holding-dollar prefix"></i>
                            <p>Billing</p>
                        </a>
                    </ul>
                </div>
                <div className="auth_btn">
                    <a>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Log Out</span>
                    </a>
                </div>
            </SidebarWrapper>
        </>
    );
}

export default Sidebar;