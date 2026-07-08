import { useState, useEffect } from "react";
import CreateCouponModal from "../Components/Modals/Coupon/CreateCoupon";
import { CouponWrapper } from "../Styles/CouponStyle";
import { toast } from "react-toastify";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import SkeletonLoader from "../Components/Loader/SkeletonLoader";
import Pagination from "../Components/Pagination";
import DeleteConfirmationModal from "../Components/Modals/DeleteConfirmation";

const CouponsPage = () => {
    const api = getApiEndpoints();
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const tabs = ['General', 'Private'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const [page, setPage] = useState(1);
    const [coupons, setCoupons] = useState([]);
    const [isInitialCouponsLoading, setIsInitialCouponsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deletePayload, setDeletePayload] = useState({});

    const fetchCoupons = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialCouponsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchCoupons, {
                params: {
                    page: pageNumber,
                    type: selectedTab.toLowerCase()
                }
            });
            if (response.data.status === 200) {
                console.log('Coupons:', response.data);
                setCoupons(response?.data.data);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialCouponsLoading(false);
        }
    }

    useEffect(() => {
        if (selectedTab) {
            fetchCoupons(true, page);
        }
    }, [selectedTab, page]);

    const handleOpenCouponModal = () => {
        setIsCouponModalOpen(true);
    };

    const handleCouponDelete = (id) => {
        const payload = {
            couponId: id
        };
        setDeletePayload(payload);
        setOpenDeleteModal(true);
    }

    return (
        <>
            <CouponWrapper>
                <div className="page_head">
                    <h2>Coupons Directory</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenCouponModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Create Coupon</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {
                            tabs.map((tab, index) => (
                                <li
                                    key={index}
                                    className={selectedTab === tab ? 'active' : ''}
                                    onClick={() => setSelectedTab(tab)}
                                >
                                    {tab}
                                </li>
                            ))
                        }
                    </div>
                </div>
                {
                    selectedTab === 'General' && (
                        <div className="table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Coupon Code</th>
                                        <th>Offer Value</th>
                                        <th>Validity</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialCouponsLoading ? (
                                            Array.from({ length: 2 }).map((_, index) => (
                                                <tr key={index}>
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
                                        ) : coupons.length > 0 ? (
                                            coupons.map((coupon, index) =>
                                                <tr key={index}>
                                                    <td>{coupon.code}</td>
                                                    <td>{coupon.offer_value}</td>
                                                    <td>{coupon.validity_date}</td>
                                                    <td>
                                                        <p className={coupon.status ? 'active' : ''}>{coupon.status ? 'Active' : 'Inactive'}</p>
                                                    </td>
                                                    <td>
                                                        <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                        <a className="delete_btn" onClick={() => handleCouponDelete(coupon.id)}><i className="fa-solid fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No coupons available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
                {
                    selectedTab === 'Private' && (
                        <div className="second_table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Coupon Code</th>
                                        <th>Offer Value</th>
                                        <th>Validity</th>
                                        <th>Institution</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialCouponsLoading ? (
                                            Array.from({ length: 2 }).map((_, index) => (
                                                <tr key={index}>
                                                    <td><SkeletonLoader width="100%" height="20px" /></td>
                                                    <td><SkeletonLoader width="100%" height="20px" /></td>
                                                    <td><SkeletonLoader width="100%" height="20px" /></td>
                                                    <td><SkeletonLoader width="100%" height="20px" /></td>
                                                    <td><SkeletonLoader width="100%" height="20px" /></td>
                                                    <td>
                                                        <SkeletonLoader width="15px" height="15px" margin="0 0 0 6px" />
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : coupons.length > 0 ? (
                                            coupons.map((coupon, index) => 
                                                <tr key={index}>
                                                    <td>{coupon.code}</td>
                                                    <td>{coupon.offer_value}</td>
                                                    <td>{coupon.validity_date}</td>
                                                    <td>{coupon.institution?.inst_name}</td>
                                                    <td>
                                                        <p className={coupon.status ? 'active' : ''}>{coupon.status ? 'Active' : 'Inactive'}</p>
                                                    </td>
                                                    <td>
                                                        <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                        <a className="delete_btn" onClick={() => handleCouponDelete(coupon.id)}><i className="fa-solid fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No coupons available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }

                <CreateCouponModal
                    isCouponModalOpen={isCouponModalOpen}
                    setIsCouponModalOpen={setIsCouponModalOpen}
                />

                <DeleteConfirmationModal
                    isModalOpen={openDeleteModal}
                    setIsModalOpen={setOpenDeleteModal}
                    deleteObject="Coupon"
                    payload={deletePayload}
                    endPoint={api.deleteCoupon}
                    refreshData={() => fetchCoupons(false)}
                />
            </CouponWrapper>
        </>
    );
}

export default CouponsPage;