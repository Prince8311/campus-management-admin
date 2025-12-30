import { SplitAccountsWrapper } from "../../../Styles/FinanceStyle";

const SplitAccountsPage = () => {
    return (
        <>
            <SplitAccountsWrapper>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>A/C Name</th>
                                <th>A/C Number</th>
                                <th>Classes</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joydeep Barik</td>
                                <td>25478900114759</td>
                                <td>
                                    <li>
                                        <a>5</a>
                                        <span><i className="fa-solid fa-circle-info"></i></span>
                                    </li>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </SplitAccountsWrapper>
        </>
    );
}

export default SplitAccountsPage;