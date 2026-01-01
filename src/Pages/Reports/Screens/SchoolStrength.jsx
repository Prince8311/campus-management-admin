import { NavLink, Outlet } from "react-router-dom";
import { SchoolSthrengthWrapper } from "../../../Styles/ReportsStyle";

const SchoolSthrengthPage = () => {
    return (
        <>
            <SchoolSthrengthWrapper>
                <div className="page_head">
                    <h2>School Strength Report</h2>
                </div>
                <div className="heading_option_part">
                    <div className="inner_part">
                        <NavLink to="student-report" className="part_box">
                            <h6>Student Reports</h6>
                        </NavLink>
                        <NavLink to="staff-report" className="part_box">
                            <h6>Staff Reports</h6>
                        </NavLink>
                    </div>
                </div>
                <div className="page_contents">
                    <Outlet />
                </div>
            </SchoolSthrengthWrapper>
        </>
    );
}

export default SchoolSthrengthPage;