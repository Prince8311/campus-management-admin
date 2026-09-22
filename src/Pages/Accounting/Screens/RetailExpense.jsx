import { RetailExpenseWrapper } from "../../../Styles/ExpenseStyle";

const RetailExpensePage = () => {
    return (
        <>
            <RetailExpenseWrapper>
                <div className="folder_section">
                    <div className="folder_box">
                        <div className="box_inner">
                            <div className="img_sec">
                                <img src="/images/folder1.png" alt="" />
                            </div>
                            <p>Abc Retailer</p>
                            <a className="paid"><i className="fa-solid fa-circle"></i>Paid</a>
                        </div>
                    </div>
                    <div className="folder_box">
                        <div className="box_inner">
                            <div className="img_sec">
                                <img src="/images/folder1.png" alt="" />
                            </div>
                            <p>Def retail</p>
                            <a className="due"><i className="fa-solid fa-circle"></i>Due</a>
                        </div>
                    </div>
                </div>
            </RetailExpenseWrapper>
        </>
    );
}

export default RetailExpensePage;