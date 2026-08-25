import { useState } from "react";
import { DiscountWrapper } from "../../../Styles/FinanceStyle";
import DiscountModal from "../../../Components/Modals/FinanceManagement/Discount";

const DiscountPage = () => {
    const [isOpenDiscountModal, setIsDiscountModal] = useState(false);

    const handleOPenDiscountModal = () => {
        setIsDiscountModal(true);
    }

    return (
        <>
            <DiscountWrapper>
                <div className="page_head">
                    <h2>Discounts</h2>
                    <div className="add_btn">
                        <button onClick={handleOPenDiscountModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Discount</p>
                        </button>
                    </div>
                </div>
                <div className="discount_boxes">
                    <div className="discount_box">
                        <div className="box_inner">
                            <div className="top_part">
                                <div className="part_content">
                                    <a><i className="fa-solid fa-tag"></i></a>
                                    <div className="content_item">
                                        <h6>Staff Child</h6>
                                        <p>Discount :<span>50%</span></p>
                                    </div>
                                </div>
                                <div className="fee_sec">
                                    Fees Type : <span>Tution Fee</span>
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

                <DiscountModal
                    isOpenDiscountModal={isOpenDiscountModal}
                    setIsDiscountModal={setIsDiscountModal}
                />
            </DiscountWrapper>
        </>
    );
}

export default DiscountPage;