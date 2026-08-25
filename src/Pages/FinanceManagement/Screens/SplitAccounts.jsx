import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { SplitAccountsWrapper } from "../../../Styles/FinanceStyle";

const formatClassSections = (classSections) => {
    if (!Array.isArray(classSections) || classSections.length === 0) {
        return '-';
    }

    const sectionsByClass = classSections.reduce((groups, item) => {
        const className = item.class;
        const section = item.section;

        if (!groups[className]) {
            groups[className] = [];
        }
        groups[className].push(section);
        return groups;
    }, {});

    return Object.entries(sectionsByClass)
        .map(([className, sections]) => `${className}[${sections.join(', ')}]`)
        .join(', ');
};

const SplitAccountsPage = ({ splitAccounts, isInitialSplitAccountsLoading }) => {
    return (
        <SplitAccountsWrapper>
            <div className="bank_account_boxes">
                {isInitialSplitAccountsLoading ? (
                    Array.from({ length: 2 }).map((_, index) => (
                        <div className="account_box" key={index}>
                            <div className="box_inner">
                                <div className="top_part">
                                    <div className="part_content">
                                        <SkeletonLoader width="30px" height="30px" borderRadius="50%" />
                                        <div className="content_item">
                                            <h6>Skeleton Name</h6>
                                            <p>A/C :<span>Skeleton Account Number</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : splitAccounts.length > 0 ? (
                    splitAccounts.map((account, index) => (
                        <div className="account_box" key={account.id || index}>
                            <div className="box_inner">
                                <div className="top_part">
                                    <div className="part_content">
                                        <a><i className="fa-solid fa-building-columns"></i></a>
                                        <div className="content_item">
                                            <h6>{account.account_name}</h6>
                                            <p>A/C :<span>{account.account_no}</span></p>
                                        </div>
                                    </div>
                                    <div className="fee_sec">
                                        Fees Type : <span>{account.fee_type}</span>
                                    </div>
                                    <div className="class_sec">
                                        Classes:
                                        <span>{formatClassSections(account.class_section)}</span>
                                    </div>
                                </div>
                                <div className="bottom_btn">
                                    <div className="btns_sec">
                                        <button className="edit"><i className="fa-regular fa-pen-to-square"></i>Edit</button>
                                        <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty_messege">
                        <img src="/images/no-fields.svg" alt="" />
                        <p>No accounts available.</p>
                    </div>
                )}
            </div>
        </SplitAccountsWrapper>
    );
};

export default SplitAccountsPage;
