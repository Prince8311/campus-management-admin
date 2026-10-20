import { useNavigate } from "react-router-dom";
import { EventExpenseWrapper } from "../../../Styles/ExpenseStyle";

const eventStatuses = [
    "active", "cancel", "conclude", "active", "cancel",
    "conclude", "active", "conclude", "cancel",
];

const statusLabels = { active: "Active", cancel: "Cancel", conclude: "Conclude" };

const EventExpensesPage = () => {
    const navigate = useNavigate();

    return (
        <EventExpenseWrapper>
            <div className="folder_section" aria-label="Event expense folders">
                {eventStatuses.map((status, index) => (
                    <button
                        type="button"
                        className={`folder_box ${status}`}
                        key={index}
                        onClick={() => navigate("/admin/accounting/event-details")}
                        aria-label={`Open Festival event ${index + 1}, ${statusLabels[status]}`}
                    >
                        <div className="box_inner">
                            <div className="folder_topline">
                                <span className="folder_category">Event expenses</span>
                                <span className={`folder_status ${status}`}>
                                    <i className="fa-solid fa-circle" aria-hidden="true" />
                                    {statusLabels[status]}
                                </span>
                            </div>
                            <div className="img_sec" aria-hidden="true">
                                <span className="folder_halo" />
                                <img src="/images/folder1.png" alt="" />
                            </div>
                            <p className="folder_title">Festival</p>
                            <span className="folder_description">Event expense collection</span>
                            <div className="folder_footer">
                                <span>View expenses</span>
                                <span className="folder_arrow" aria-hidden="true">
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </EventExpenseWrapper>
    );
};

export default EventExpensesPage;
