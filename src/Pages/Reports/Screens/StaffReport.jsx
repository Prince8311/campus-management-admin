import { NavLink, Outlet } from "react-router-dom";
import { StaffReportWrapper } from "../../../Styles/ReportsStyle";

const StaffReportPage = () => {
    return (
        <>
            <StaffReportWrapper>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <NavLink to="staffoverview">Overview</NavLink>
                        <NavLink to="teaching-staff">Teaching Staff</NavLink>
                        <NavLink to="non-teaching-staff">Non Teaching Staff</NavLink>
                    </div>
                </div>
                <div className="tab_items">
                    <Outlet />
                </div>
            </StaffReportWrapper>
        </>
    );
}

export default StaffReportPage;