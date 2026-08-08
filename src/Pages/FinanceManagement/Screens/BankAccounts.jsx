import { useState } from "react";
import { BankAccountsWrapper } from "../../../Styles/FinanceStyle";
import AddBankAccountModal from "../../../Components/Modals/FinanceManagement/AddBankAccount";
import AllAccountsPage from "./AllAccounts";
import SplitAccountsPage from "./SplitAccounts";
import MapAccountModal from "../../../Components/Modals/FinanceManagement/MapAccountModal";

const BankAccountPage = () => {
    const tabs = [
        { label: "Accounts", value: "all-accounts" },
        { label: "Split Accounts", value: "split-accounts" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const [isAddBankAccountModalOpen, setIsAddBankAccountModalOpen] = useState(false);
    const [isMapAccountModalOpen, setIsMapAccountModalOpen] = useState(false);

    const handleOpenAddBankAccountModal = () => {
        setIsAddBankAccountModalOpen(true);
    };

    const handleOpenMapAccountModal = () => {
        setIsMapAccountModalOpen(true);
    };

    return (
        <>
            <BankAccountsWrapper>
                <div className="page_head">
                    <h2>Bank Accounts</h2>
                    <div className="add_btn">
                        {
                            selectedTab === "all-accounts" ? (
                                <button onClick={handleOpenAddBankAccountModal}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Add Account</p>
                                </button>
                            ) : (
                                <button onClick={handleOpenMapAccountModal}>
                                    <i className="fa-solid fa-arrows-split-up-and-left"></i>
                                    <p>Map Account</p>
                                </button>
                            )
                        }
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {tabs.map((tab) => (
                            <li
                                key={tab.value}
                                className={selectedTab === tab.value ? "active" : ""}
                                onClick={() => setSelectedTab(tab.value)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </div>
                </div>
                {selectedTab === "all-accounts" && <AllAccountsPage />}
                {selectedTab === "split-accounts" && <SplitAccountsPage />}
                <AddBankAccountModal
                    isAddBankAccountModalOpen={isAddBankAccountModalOpen}
                    setIsAddBankAccountModalOpen={setIsAddBankAccountModalOpen}
                />
                <MapAccountModal
                    isMapAccountModalOpen={isMapAccountModalOpen}
                    setIsMapAccountModalOpen={setIsMapAccountModalOpen}
                />
            </BankAccountsWrapper>
        </>
    );
}

export default BankAccountPage;