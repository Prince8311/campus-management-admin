import { useState, useEffect } from "react";
import { DiscountWrapper } from "../../../Styles/FinanceStyle";
import DiscountModal from "../../../Components/Modals/FinanceManagement/Discount";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";

const DiscountPage = () => {
    const api = getApiEndpoints();
    const [isOpenDiscountModal, setIsDiscountModal] = useState(false);
    const [isdiscountLoading, setIsdiscountLoading] = useState(false);
    const [discounts, setDiscounts] = useState([]);

    const fetchDiscounts = async () => {
        setIsdiscountLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchFeeDiscounts);
            if (response?.data.status === 200) {
                const discountList = response.data.discounts || response.data.data || [];
                setDiscounts(Array.isArray(discountList) ? discountList : []);
            }
        } catch (error) {
            setDiscounts([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsdiscountLoading(false);
        }
    }
    useEffect(() => {
        fetchDiscounts();
    }, []);

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
                    {
                        isdiscountLoading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <div className="discount_box" key={index}>
                                    <SkeletonLoader width="100%" height="145px" />
                                </div>
                            ))
                        ) : discounts.length > 0 ? (
                            discounts.map((discount, index) => (
                                <div className="discount_box" key={index}>
                                    <div className="box_inner">
                                        <div className="top_part">
                                            <div className="part_content">
                                                <a><i className="fa-solid fa-tag"></i></a>
                                                <div className="content_item">
                                                    <h6>{discount.name}</h6>
                                                    <p>Discount :<span>{discount.amount}%</span></p>
                                                </div>
                                            </div>
                                            <div className="fee_sec">
                                                Fees Type : <span>{discount.fee_type}</span>
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
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No discounts available.</p>
                            </div>
                        )
                    }
                </div>


                <DiscountModal
                    isOpenDiscountModal={isOpenDiscountModal}
                    setIsDiscountModal={setIsDiscountModal}
                    refreshDiscounts={fetchDiscounts}
                />
            </DiscountWrapper>
        </>
    );
}

export default DiscountPage;