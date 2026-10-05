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
                    <div className="back_icon">
                        <a onClick={handleBackToEvents}><i className="fa-solid fa-angle-left"></i></a>
                    </div>
                    <div className="contain_item_sec">
                        <div className="icon">
                            <img src="/images/event.png" alt="" />
                        </div>
                        <h5>Durga Puja <a><i className="fa-solid fa-circle"></i>Active</a></h5>
                        <p>Total Cost : <span>₹50000</span></p>
                    </div>
                    <div className="top_btn">
                        <button onClick={() => setIsAddEventExpense(true)}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Event</p>
                        </button>
                    </div>
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
