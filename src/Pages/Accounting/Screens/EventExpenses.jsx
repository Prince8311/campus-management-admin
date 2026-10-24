import { useNavigate } from "react-router-dom";
import { EventExpenseWrapper } from "../../../Styles/ExpenseStyle";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const formatStatus = (status = "") => status.trim().toLowerCase().replace(/\s+/g, "_");

const EventExpensesPage = ({ initalLoading, data }) => {
    const navigate = useNavigate();

    return (
        <EventExpenseWrapper>
            {
                initalLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="sec_item">
                            <SkeletonLoader width="100%" height="210px" />
                        </div>
                    ))
                ) : data.length > 0 ? (
                    <div className="folder_section" aria-label="Event expense folders">
                        {
                            data.map((format, i) => {
                                return <article
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
                                        <span className={`folder_status ${formatStatus(format.status)}`}>
                                            <i className="fa-solid fa-circle" aria-hidden="true" />
                                            {format.status}
                                        </span>
                                        <p className="folder_title">{format.event}</p>
                                        <span className="folder_description">Event expense collection</span>
                                        <div className="folder_footer">
                                            <span>View expenses</span>
                                            <span className="folder_arrow" aria-hidden="true">
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </div>
                                    </button>
                                    <div className="folder_actions" role="group">
                                        <button type="button" className="folder_action edit_action">
                                            <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                            <span>Edit</span>
                                        </button>
                                        <button type="button" className="folder_action delete_action">
                                            <i className="fa-solid fa-trash-can" aria-hidden="true" />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </article>;
                            })
                        }
                    </div>
                ) : (
                    <div className="empty_messege">
                        <img src="/images/no-fields.svg" alt="" />
                        <p>No Events available.</p>
                    </div>
                )
            }
        </EventExpenseWrapper>
    );
};

export default EventExpensesPage;
