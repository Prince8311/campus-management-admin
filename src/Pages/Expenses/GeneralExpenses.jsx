import { GeneralExpenseWrapper } from "../../Styles/ExpenseStyle";

const GeneralExpensesPage = () => {
    return (
        <>
            <GeneralExpenseWrapper>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Creater Name</th>
                                <th>Item Name</th>
                                <th>Total Amount</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joydeep Barik</td>
                                <td>Daily Expense</td>
                                <td>5000</td>
                                <td>2kg</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </GeneralExpenseWrapper>
        </>
    );
}

export default GeneralExpensesPage