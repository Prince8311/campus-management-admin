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
                    <button
                        type="button"
                        className={`folder_box ${retailer.status}`}
                        key={retailer.name}
                        onClick={() => navigate("/admin/accounting/retail-details")}
                        aria-label={`Open ${retailer.name} expenses, ${retailer.label}`}
                    >
                        <div className="box_inner">
                            <div className="folder_topline">
                                <span className="folder_category">Retailer</span>
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
                        </div>
                    </button>
                ))}
            </div>
        </RetailExpenseWrapper>
    );
};

export default RetailExpensePage;
