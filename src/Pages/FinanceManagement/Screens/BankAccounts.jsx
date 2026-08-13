import { useEffect, useState } from "react";
import { BankAccountsWrapper } from "../../../Styles/FinanceStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import AddBankAccountModal from "../../../Components/Modals/FinanceManagement/AddBankAccount";
import AllAccountsPage from "./AllAccounts";
import SplitAccountsPage from "./SplitAccounts";
import MapAccountModal from "../../../Components/Modals/FinanceManagement/MapAccountModal";

const BankAccountPage = () => {
    const api = getApiEndpoints();
    const tabs = [
        { label: "Accounts", value: "all-accounts" },
        { label: "Split Accounts", value: "split-accounts" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const [isAddBankAccountModalOpen, setIsAddBankAccountModalOpen] = useState(false);
    const [isMapAccountModalOpen, setIsMapAccountModalOpen] = useState(false);
    const [bankAccounts, setBankAccounts] = useState([]);
    const [isInitialBankAccountsLoading, setIsInitialBankAccountsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);

    const fetchBankAccounts = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialBankAccountsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchBankAccounts, {
                params: {
                    page: pageNumber
                }
            });
            if (response?.data.status === 200) {
                setBankAccounts(response?.data.data);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialBankAccountsLoading(false);
        }
    };

    useEffect(() => {
        fetchBankAccounts(true, page);
    }, [page]);

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
                {selectedTab === "all-accounts" && (
                    <AllAccountsPage 
                        bankAccounts={bankAccounts}
                        isInitialBankAccountsLoading={isInitialBankAccountsLoading}
                        page={page}
                        setPage={setPage}
                        totalCount={totalCount}
                    />
                )}
                {selectedTab === "split-accounts" && <SplitAccountsPage />}
                <AddBankAccountModal
                    isAddBankAccountModalOpen={isAddBankAccountModalOpen}
                    setIsAddBankAccountModalOpen={setIsAddBankAccountModalOpen}
                    refreshData={() => fetchBankAccounts(false, page)}
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