import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ExpenseManagementWrapper } from "../../../Styles/ExpenseStyle";
import EventExpensesPage from "./EventExpenses";
import GeneralExpensesPage from "./GeneralExpenses";
import AddEventExpenseModal from "../../../Components/Modals/ExpenseManagement/AddEventExpense";
import AddGeneralExpenseModal from "../../../Components/Modals/ExpenseManagement/AddGeneralExpense";
import RetailExpensePage from "./RetailExpense";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";

const ExpenseManagementpage = () => {
    const api = getApiEndpoints();
    const location = useLocation();
    const tabs = [
        { label: "General", value: "general" },
        { label: "Event", value: "event" },
        { label: "Retailer", value: "retailer" }
    ];
    const initialTab = tabs.some((tab) => tab.value === location.state?.selectedTab)
        ? location.state.selectedTab
        : tabs[0].value;
    const [selectedTab, setSelectedTab] = useState(initialTab);
    const [isAddGeneralExpense, setIsAddGeneralExpense] = useState(false);
    const [isAddEventExpense, setIsAddEventExpense] = useState(false);
    const [initalLoading, setInitalLoading] = useState(false);
    const [formats, setFormats] = useState([]);

    const handleOpenGeneralExpenseModal = () => {
        setIsAddGeneralExpense(true);
    }

    const handleOpenEventExpenseModal = () => {
        setIsAddEventExpense(true);
    }

    const fetchAccountFormats = useCallback(async (showSkeleton = false) => {
        if (showSkeleton) {
            setInitalLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchAccountFormatList, {
                params: {
                    type: selectedTab,
                }
            });
            if (response?.data.status === 200) {
                setFormats(response?.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setInitalLoading(false);
        }
    }, [api.fetchAccountFormatList, selectedTab]);

    useEffect(() => {
        if (selectedTab === "event" || selectedTab === "retailer") {
            fetchAccountFormats(true);
        }
    }, [selectedTab, fetchAccountFormats]);

    return (
        <>
            <ExpenseManagementWrapper>
                <div className="page_head">
                    <h2>Expense Management</h2>
                    <div className="add_btn">
                        {
                            selectedTab === "general" ? (
                                <button onClick={handleOpenGeneralExpenseModal}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Add General Expense</p>
                                </button>
                            ) : (
                                <button onClick={handleOpenEventExpenseModal}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>{selectedTab === "retailer" ? "Create Retailer" : "Create Event"}</p>
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
                {selectedTab === "general" && (
                    <GeneralExpensesPage />
                )}
                {selectedTab === "event" && (
                    <EventExpensesPage
                        initalLoading={initalLoading}
                        data={formats}
                    />
                )}
                {selectedTab === "retailer" && (
                    <RetailExpensePage
                        initalLoading={initalLoading}
                        data={formats}
                    />
                )}

                <AddGeneralExpenseModal
                    isAddGeneralExpense={isAddGeneralExpense}
                    setIsAddGeneralExpense={setIsAddGeneralExpense}
                />
                <AddEventExpenseModal
                    isAddEventExpense={isAddEventExpense}
                    setIsAddEventExpense={setIsAddEventExpense}
                    type={selectedTab}
                    nameLabel={selectedTab === "retailer" ? "Retailer Name" : "Event Name"}
                    title={selectedTab === "retailer" ? "Create Retailer" : "Create Event"}
                />
            </ExpenseManagementWrapper>
        </>
    );
}

export default ExpenseManagementpage;
