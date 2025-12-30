import { AllAccountsWrapper } from "../../../Styles/FinanceStyle";

const AllAccountsPage = () => {
    return (
        <>
            <AllAccountsWrapper>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>A/C Name</th>
                                <th>A/C Number</th>
                                <th>IFSC Code</th>
                                <th>Beneficiary Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joydeep Barik</td>
                                <td>25478900114759</td>
                                <td>PUNB0007</td>
                                <td>Joydeep Barik</td>
                                <td>
                                    <input type="checkbox" id="status" />
                                    <label htmlFor="status">
                                        <span></span>
                                    </label>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </AllAccountsWrapper>
        </>
    );
}

export default AllAccountsPage;