import { useState } from "react";
import { ExpenseManagementWrapper } from "../../Styles/ExpenseStyle";
import EventExpensesPage from "./EventExpenses";
import GeneralExpensesPage from "./GeneralExpenses";

const ExpenseManagementpage = () => {
    const tabs = [
        { label: "General", value: "general" },
        { label: "Event", value: "event" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    return (
        <>
            <ExpenseManagementWrapper>
                <div className="page_head">
                    <h2>Expense Management</h2>
                    <div className="add_btn">
                        {
                            selectedTab === "general" ? (
                                <button>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Add General Expense</p>
                                </button>
                            ) : (
                                <button>
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
            </ExpenseManagementWrapper>
        </>
    );
}

export default ExpenseManagementpage;