import { StockManagementWrapper } from "../../../Styles/ExpenseStyle";

const StockManagementPage = () => {
    return (
        <>
            <StockManagementWrapper>
                <div className="page_head">
                    <h2>Stock Management</h2>
                </div>
                <div className="stock_sec">
                    <div className="stock_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-solid fa-layer-group"></i></a>
                                    <h6>Basmoti Rice</h6>
                                    <span className="inStock">Instock</span>
                                </div>
                                <div className="teacher_name_sec">
                                    <p><b>Quantity :</b><span>5kg</span></p>
                                </div>
                            </div>
                            <div className="bottom_btn">
                                <button className="details">View Details</button>
                                <button className="delete"><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </StockManagementWrapper>
        </>
    );
}

export default StockManagementPage;