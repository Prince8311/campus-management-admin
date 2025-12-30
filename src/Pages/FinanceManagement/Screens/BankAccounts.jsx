import { NavLink, Outlet } from "react-router-dom";
import { BankAccountsWrapper } from "../../../Styles/FinanceStyle";

const BankAccountPage = () => {
    return (
        <>
            <BankAccountsWrapper>
                <div className="page_head">
                    <h2>Bank Accounts</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Account</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <NavLink to="all-accounts">Accounts</NavLink>
                        <NavLink to="split-accounts">Split Accounts</NavLink>
                    </div>
                </div>
                <Outlet />
            </BankAccountsWrapper>
        </>
    );
}

export default BankAccountPage;