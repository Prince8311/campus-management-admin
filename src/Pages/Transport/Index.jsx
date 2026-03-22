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
                            <h6>Passengers</h6>
                        </NavLink>
                        <NavLink to="vehicles" className="part_box">
                            <h6>Vehicles</h6>
                        </NavLink>
                        <NavLink to="staffs" className="part_box">
                            <h6>Staffs</h6>
                        </NavLink>
                        <NavLink to="routes" className="part_box">
                            <h6>Routes</h6>
                        </NavLink>
                        <NavLink to="stopages" className="part_box">
                            <h6>Stopages</h6>
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