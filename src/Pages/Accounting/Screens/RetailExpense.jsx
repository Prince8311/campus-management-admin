import { useNavigate } from "react-router-dom";
import { RetailExpenseWrapper } from "../../../Styles/ExpenseStyle";

const retailers = [
    { name: "Abc Retailer", status: "paid", label: "Paid" },
    { name: "Def retail", status: "due", label: "Due" },
];

const RetailExpensePage = () => {
    const navigate = useNavigate();

    return (
        <RetailExpenseWrapper>
            <div className="folder_section" aria-label="Retailer expense folders">
                {retailers.map((retailer) => (
                    <article
                        className={`folder_box ${retailer.status}`}
                        key={retailer.name}
                    >
                        <button
                            type="button"
                            className="box_inner folder_open"
                            onClick={() => navigate("/admin/accounting/retail-details")}
                            aria-label={`Open ${retailer.name} expenses, ${retailer.label}`}
                        >
                            <div className="folder_topline">
                                <span className={`folder_status ${retailer.status}`}>
                                    <i className="fa-solid fa-circle" aria-hidden="true" />
                                    {retailer.label}
                                </span>
                            </div>
                            <div className="img_sec" aria-hidden="true">
                                <span className="folder_halo" />
                                <img src="/images/retail.png" alt="" />
                            </div>
                            <p className="folder_title">{retailer.name}</p>
                            <span className="folder_description">Retailer expense collection</span>
                            <div className="folder_footer">
                                <span>View expenses</span>
                                <span className="folder_arrow" aria-hidden="true">
                                    <i className="fa-solid fa-arrow-right" />
                                </span>
                            </div>
                        </button>
                        <div className="folder_actions" role="group" aria-label={`Actions for ${retailer.name}`}>
                            <button type="button" className="folder_action edit_action" aria-label={`Edit ${retailer.name}`}>
                                <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                                <span>Edit</span>
                            </button>
                            <button type="button" className="folder_action delete_action" aria-label={`Delete ${retailer.name}`}>
                                <i className="fa-solid fa-trash-can" aria-hidden="true" />
                                <span>Delete</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </RetailExpenseWrapper>
    );
};

export default RetailExpensePage;
