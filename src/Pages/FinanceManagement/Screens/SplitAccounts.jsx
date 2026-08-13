import { SplitAccountsWrapper } from "../../../Styles/FinanceStyle";

const SplitAccountsPage = () => {
    return (
        <>
            <SplitAccountsWrapper>
                <div className="bank_account_boxes">
                    <div className="account_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-solid fa-building-columns"></i></a>
                                    <div className="content_item">
                                        <h6>Joydeep Barik</h6>
                                        <p>A/C :<span>5760014560017</span></p>
                                    </div>
                                </div>
                                <div className="class_sec">
                                    Classes:
                                    <span>1[A,B], 2[All sections]</span>
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
                </div>
            </SplitAccountsWrapper>
        </>
    );
}

export default SplitAccountsPage;