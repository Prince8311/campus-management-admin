import { NavLink, Outlet } from "react-router-dom";
import { AcademicsWrapper } from "../../../Styles/ReportsStyle";

const AcademicsPage = () => {
    return (
        <>
            <AcademicsWrapper>
                <div className="page_head">
                    <h2>Academic Performance Reports</h2>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <NavLink to="student-wise-academic">Student Wise Report</NavLink>
                        <NavLink to="teacher-wise-academic">Teacher Wise Report</NavLink>
                        <NavLink to="class-wise-academic">Class Wise Report</NavLink>
                    </div>
                </div>
                <div className="page_contents">
                    <Outlet />
                </div>
            </AcademicsWrapper>
        </>
    );
}

export default AcademicsPage;