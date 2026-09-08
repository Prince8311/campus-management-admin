import { useState } from "react";
import { ExpenseManagementWrapper } from "../../Styles/ExpenseStyle";
import EventExpensesPage from "./EventExpenses";
import GeneralExpensesPage from "./GeneralExpenses";
import AddEventExpenseModal from "../../Components/Modals/ExpenseManagement/AddEventExpense";
import AddGeneralExpenseModal from "../../Components/Modals/ExpenseManagement/AddGeneralExpense";

const ExpenseManagementpage = () => {
    const tabs = [
        { label: "General", value: "general" },
        { label: "Event", value: "event" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const [isAddGeneralExpense, setIsAddGeneralExpense] = useState(false);
    const [isAddEventExpense, setIsAddEventExpense] = useState(false);

    const handleOpenGeneralExpenseModal = () => {
        setIsAddGeneralExpense(true);
    }

    const handleOpenEventExpenseModal = () => {
        setIsAddEventExpense(true);
    }
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
                                    <p>Create Event</p>
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
                    <EventExpensesPage />
                )}
                <AddGeneralExpenseModal
                    isAddGeneralExpense={isAddGeneralExpense}
                    setIsAddGeneralExpense={setIsAddGeneralExpense}
                />
                <AddEventExpenseModal
                    isAddEventExpense={isAddEventExpense}
                    setIsAddEventExpense={setIsAddEventExpense}
                />
            </ExpenseManagementWrapper>
        </>
    );
}

export default ExpenseManagementpage;