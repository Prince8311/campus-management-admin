import { NavLink, Outlet } from "react-router-dom";
import { TransportMainWrapper } from "../../Styles/TransportStyle";

const TransportMainPage = () => {
    return (
        <>
            <TransportMainWrapper>
                <div className="page_head">
                    <h2>Transport Management</h2>
                </div>
                <div className="heading_option_part">
                    <div className="inner_part">
                        <NavLink to="passengers" className="part_box">
                            Passengers
                        </NavLink>
                        <NavLink to="vehicles" className="part_box">
                            Vehicles
                        </NavLink>
                        <NavLink to="staffs" className="part_box">
                            Staffs
                        </NavLink>
                        <NavLink to="stopages" className="part_box">
                            Stopages
                        </NavLink>
                        <NavLink to="routes" className="part_box">
                            Routes
                        </NavLink>
                    </div>
                </div>
                <div className="page_contents">
                    <Outlet />
                </div>
            </TransportMainWrapper>
        </>
    );
}

export default TransportMainPage;