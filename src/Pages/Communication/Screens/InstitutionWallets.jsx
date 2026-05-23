import { InstitutionWalletWrapper } from "../../../Styles/CommunicationStyle";

const InstitutionWalletsPage = () => {
    return (
        <>
            <InstitutionWalletWrapper>
                <div className="page_head">
                    <h2>Institution Wallet</h2>
                </div>
                <div className="filter_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Institution name..." />
                    </div>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Institution Name</th>
                                <th>Total Balance</th>
                                <th>Avl Balance</th>
                                <th>Request Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abc Institution</td>
                                <td>10,000,00</td>
                                <td>100000</td>
                                <td>
                                    <p className="active">Active</p>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </InstitutionWalletWrapper>
        </>
    );
}

export default InstitutionWalletsPage;