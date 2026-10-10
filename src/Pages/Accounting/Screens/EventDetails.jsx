import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEventExpenseModal from "../../../Components/Modals/ExpenseManagement/AddEventExpense";
import { EventDetailsWrapper } from "../../../Styles/ExpenseStyle";

const EventDetailsPage = () => {
    const navigate = useNavigate();
    const [isAddEventExpense, setIsAddEventExpense] = useState(false);

    const handleBackToEvents = () => {
        navigate("/admin/accounting/expense-management", {
            state: { selectedTab: "event" }
        });
    }

    return (
        <>
            <EventDetailsWrapper>
                <div className="event_details_container">
                    <svg className="event_waves" viewBox="0 0 1200 170" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 0H800C925 0 880 155 1200 170H0Z" fill="#0055c4" opacity=".38" />
                        <path d="M760 170C935 45 1010 115 1200 155V170Z" fill="#00c5ff" opacity=".42" />
                        <path d="M0 105C90 190 130 70 225 170H0Z" fill="#8de7ff" opacity=".35" />
                    </svg>
                    <button className="event_back" type="button" onClick={handleBackToEvents} aria-label="Back to events">
                        <i className="fa-solid fa-angle-left" aria-hidden="true"></i>
                    </button>
                    <div className="event_summary">
                        <span className="event_label">Event</span>
                        <div className="event_title">
                            <h5>Durga Puja</h5>
                            <span className="event_status"><i className="fa-solid fa-circle" aria-hidden="true"></i>Active</span>
                        </div>
                        <p>Total Cost for this event</p>
                        <strong className="event_cost">&#8377;50000</strong>
                    </div>
                    <div className="event_stats">
                        <div className="event_stat">
                            <div><span>Total Items</span><strong>1</strong></div>
                            <i className="fa-solid fa-coins" aria-hidden="true"></i>
                        </div>
                    </div>
                    <button className="event_add" type="button" onClick={() => setIsAddEventExpense(true)}>
                        <i className="fa-solid fa-plus" aria-hidden="true"></i>
                        <span>Add Event</span>
                    </button>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Total Amount</th>
                                <th>Quantity</th>
                                <th>Beerar Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Daily Expense</td>
                                <td>5000</td>
                                <td>2kg</td>
                                <td>Joydeep Barik</td>
                                <td>12 sept, 2026</td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </EventDetailsWrapper>
            <AddEventExpenseModal
                isAddEventExpense={isAddEventExpense}
                setIsAddEventExpense={setIsAddEventExpense}
            />
        </>
    );
}

export default EventDetailsPage;
