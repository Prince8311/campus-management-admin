import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEventExpenseModal from "../../../Components/Modals/ExpenseManagement/AddEventExpense";
import { RetailerDetailsWrapper } from "../../../Styles/ExpenseStyle";

const RetailerDetailsPage = () => {
    const navigate = useNavigate();
    const [isAddRetailer, setIsAddRetailer] = useState(false);

    const handleBackToRetailers = () => {
        navigate("/admin/accounting/expense-management", {
            state: { selectedTab: "retailer" }
        });
    }

    return (
        <>
            <RetailerDetailsWrapper>
                <div className="retaile_details_container">
                    <div className="back_icon">
                        <a onClick={handleBackToRetailers}><i className="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="contain_item_sec">
                        <div className="icon">
                            <img src="/images/retail.png" alt="" />
                        </div>
                        <h5>Abc Store</h5>
                    </div>
                    <div className="top_btn">
                        <button onClick={() => setIsAddRetailer(true)}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Retailer</p>
                        </button>
                    </div>
                </div>
                <div className="price_section">
                    <div className="price_card total_amount">
                        <div className="price_card_top">
                            <div className="price_icon">
                                <i className="fa-solid fa-sack-dollar"></i>
                            </div>
                            <div className="price_content">
                                <h6>Total Amount</h6>
                                <h3>₹50,000</h3>
                                <p>Total budget for this retailer</p>
                            </div>
                            <svg className="price_graph" viewBox="0 0 170 70" aria-hidden="true">
                                <path d="M2 50 C35 68, 48 8, 85 16 S126 57, 168 30" />
                            </svg>
                        </div>
                        <div className="progress_row">
                            <div className="progress_track"><span></span></div>
                        </div>
                    </div>

                    <div className="price_card burn_amount">
                        <div className="price_card_top">
                            <div className="price_icon">
                                <i className="fa-solid fa-coins"></i>
                            </div>
                            <div className="price_content">
                                <h6>Burn Amount</h6>
                                <h3>₹5,000</h3>
                                <p>Total spent till now</p>
                            </div>
                            <svg className="price_graph" viewBox="0 0 170 70" aria-hidden="true">
                                <path d="M2 52 C28 68, 48 25, 78 37 S119 50, 139 15 S162 10, 168 19" />
                            </svg>
                        </div>
                        <div className="progress_row">
                            <div className="progress_track"><span></span></div>
                            <strong>10% used</strong>
                        </div>
                    </div>

                    <div className="price_card remaining_amount">
                        <div className="price_card_top">
                            <div className="price_icon">
                                <i className="fa-solid fa-wallet"></i>
                            </div>
                            <div className="price_content">
                                <h6>Remaining Amount</h6>
                                <h3>₹45,000</h3>
                                <p>Amount left to spend</p>
                            </div>
                            <svg className="price_graph" viewBox="0 0 170 70" aria-hidden="true">
                                <path d="M2 49 C34 68, 48 23, 79 31 S121 45, 145 12 S163 6, 168 3" />
                                <circle cx="125" cy="36" r="4" />
                            </svg>
                        </div>
                        <div className="progress_row">
                            <div className="progress_track"><span></span></div>
                            <strong>90% left</strong>
                        </div>
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
            </RetailerDetailsWrapper>
            <AddEventExpenseModal
                isAddEventExpense={isAddRetailer}
                setIsAddEventExpense={setIsAddRetailer}
                nameLabel="Retailer Name"
                title="Create retailer"
            />
        </>
    );
}

export default RetailerDetailsPage;
