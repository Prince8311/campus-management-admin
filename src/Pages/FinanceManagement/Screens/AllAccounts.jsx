import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { documentBaseURL } from "../../../Services/Api/ApiConfig";
import { AllAccountsWrapper } from "../../../Styles/FinanceStyle";

const AllAccountsPage = ({ bankAccounts, isInitialBankAccountsLoading, page, setPage, totalCount, onEditAccount }) => {

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
                                <th>Cancell Cheque</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialBankAccountsLoading ? (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <tr key={index}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" margin="0 0 0 6px" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : bankAccounts.length > 0 ? (
                                    bankAccounts.map((account, index) => (
                                        <tr key={index}>
                                            <td>{account.account_name}</td>
                                            <td>{account.account_no}</td>
                                            <td>{account.ifsc_code}</td>
                                            <td>{account.beneficiary_name}</td>
                                            <td><a target="_blank" href={`${documentBaseURL}/cheque/${account.cancelled_cheque}`} rel="noopener noreferrer"><i className="fa-solid fa-file-lines"></i></a></td>
                                            <td>
                                                <p className={account.status ? 'active' : ''}>{account.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn" onClick={() => onEditAccount(account)}><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                ) :(
                                    <tr>
                                        <td className="empty_message">No bank account available.</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </AllAccountsWrapper>
        </>
    );
}

export default AllAccountsPage;