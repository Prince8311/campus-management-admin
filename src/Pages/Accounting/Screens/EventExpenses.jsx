import { useNavigate } from "react-router-dom";
import { EventExpenseWrapper } from "../../../Styles/ExpenseStyle";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const eventStatuses = [
    "active", "cancel", "conclude", "active", "cancel",
    "conclude", "active", "conclude", "cancel",
];

const statusLabels = { active: "Active", cancel: "Cancel", conclude: "Conclude" };

const EventExpensesPage = ({ initalLoading, data }) => {
    const navigate = useNavigate();

    return (
        <EventExpenseWrapper>
            <div className="folder_section" aria-label="Event expense folders">
                {
                    initalLoading ? (
                        <></>
                    ) : data.length > 0 ? (
                        data.map((format, i) =>
                            <article
                                className={`folder_box ${format.status}`}
                                key={i}
                            >
                                <button
                                    type="button"
                                    className="box_inner folder_open"
                                    onClick={() => navigate("/admin/accounting/event-details")}
                                >
                                    <div className="img_sec" aria-hidden="true">
                                        <span className="folder_halo" />
                                        <img src="/images/folder1.png" alt="" />
                                    </div>
                                    <span className={`folder_status ${format.status}`}>
                                        <i className="fa-solid fa-circle" aria-hidden="true" />
                                        {format.status}
                                    </span>
                                    <p className="folder_title">Festival</p>
                                    <span className="folder_description">Event expense collection</span>
                                    <div className="folder_footer">
                                        <span>View expenses</span>
                                        <span className="folder_arrow" aria-hidden="true">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </div>
                                </button>
                                <div className="folder_actions" role="group" aria-label={`Actions for Festival event ${i + 1}`}>
                                    <button type="button" className="folder_action edit_action" aria-label={`Edit Festival event ${i + 1}`}>
                                        <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                        <span>Edit</span>
                                    </button>
                                    <button type="button" className="folder_action delete_action" aria-label={`Delete Festival event ${i + 1}`}>
                                        <i className="fa-solid fa-trash-can" aria-hidden="true" />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </article>
                        )
                    ) : (
                        <div className="empty_messege">
                            <img src="/images/no-fields.svg" alt="" />
                            <p>No Section available.</p>
                        </div>
                    )
                }
            </div>
        </EventExpenseWrapper>
    );
};

export default EventExpensesPage;
