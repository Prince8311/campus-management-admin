import { DiscountWrapper } from "../../../Styles/FinanceStyle";

const DiscountPage = () => {
    return (
        <>
            <DiscountWrapper>
                <div className="page_head">
                    <h2>Discounts</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Discount</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Discount Name</th>
                                <th>Discount (Amt / %)</th>
                                <th>Fees Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>STAFF CHILD</td>
                                <td>50%</td>
                                <td>Tuition Fee</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DiscountWrapper>
        </>
    );
}

export default DiscountPage;