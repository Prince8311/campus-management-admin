import { useState } from "react";
import { DiscountFineWrapper } from "../../../Styles/FinanceStyle";
import DiscountPage from "./Discount";

const DiscountFinePage = () => {
    const tabs = [
        { label: "Discount", value: "discounts" },
        { label: "Fine", value: "fines" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    return (
        <>
            <DiscountFineWrapper>
                <div className="page_head">
                    <h2>Discount & Fine setup</h2>
                    <div className="add_btn">
                        {
                            selectedTab === "discounts" ? (
                                <button>
                                    <i className="fa-solid fa-tag"></i>
                                    <p>Create Discount</p>
                                </button>
                            ) : (
                                <button>
                                    <i className="fa-solid fa-receipt"></i>
                                    <p>Setup Fine</p>
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
                {selectedTab === "discounts" && (
                    <DiscountPage />
                )}
            </DiscountFineWrapper>
        </>
    );
}

export default DiscountFinePage