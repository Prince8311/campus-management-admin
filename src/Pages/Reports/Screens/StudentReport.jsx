import { NavLink, Outlet } from "react-router-dom";
import { StudentReportWrapper } from "../../../Styles/ReportsStyle";

const StudentReportPage = () => {
    return (
        <>
            <StudentReportWrapper>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <NavLink to="overview">Overview</NavLink>
                        <NavLink to="class-wise">Class-Wise</NavLink>
                        <NavLink to="student-wise">Student-wise</NavLink>
                    </div>
                </div>
                <div className="tab_items">
                    <Outlet />
                </div>
            </StudentReportWrapper>
        </>
    );
}

export default StudentReportPage;