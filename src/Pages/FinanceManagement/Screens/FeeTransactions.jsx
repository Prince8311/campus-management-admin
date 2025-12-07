import { FeeTransactionsWrapper } from "../../../Styles/FinanceStyle";

const FeeTransactionsPage = () => {
    return (
        <>
            <FeeTransactionsWrapper>
                <div className="page_head">
                    <h2>Fee Transation</h2>
                </div>
                <div className="fee_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Amount" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Download</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Amount</th>
                                <th>Receipt No</th>
                                <th>Paid On</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="left_table_sec">
                                        <h5>JB</h5>
                                    </div>
                                    <div className="right_table_sec">
                                        <h6>Joydeep Barik</h6>
                                        <p>360 / 2025-26</p>
                                    </div>
                                </td>
                                <td>10 - A</td>
                                <td>30,000</td>
                                <td>SAS-2025-26-684</td>
                                <td>7 Dec 2025</td>
                                <td><p className="success">Success</p></td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="left_table_sec">
                                        <h5>JB</h5>
                                    </div>
                                    <div className="right_table_sec">
                                        <h6>Joydeep Barik</h6>
                                        <p>360 / 2025-26</p>
                                    </div>
                                </td>
                                <td>10 - A</td>
                                <td>30,000</td>
                                <td>SAS-2025-26-684</td>
                                <td>7 Dec 2025</td>
                                <td><p className="">Pending</p></td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </FeeTransactionsWrapper>
        </>
    );
}

export default FeeTransactionsPage;