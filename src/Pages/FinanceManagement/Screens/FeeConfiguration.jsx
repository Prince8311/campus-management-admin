import { NavLink, Outlet } from "react-router-dom";
import { FeeConfigurationWrapper } from "../../../Styles/FinanceStyle";

const FeeConfigurationPage = () => {
    return (
        <>
            <FeeConfigurationWrapper>
                <div className="heading_part">
                    <div className="inner_part">
                        <NavLink to="fees-structure" className="part_box">
                            <h6>Fee Structure</h6>
                        </NavLink>
                        <NavLink to="discount" className="part_box">
                            <h6>Discount</h6>
                        </NavLink>
                    </div>
                </div>
                <Outlet />
            </FeeConfigurationWrapper>
        </>
    );
}

export default FeeConfigurationPage;