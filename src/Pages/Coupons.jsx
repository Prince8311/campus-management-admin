import { useState } from "react";
import CreateCouponModal from "../Components/Modals/Coupon/CreateCoupon";
import { CouponWrapper } from "../Styles/CouponStyle";

const CouponsPage = () => {
    const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
    const tabs = ['General', 'Private'];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const handleOpenCouponModal = () => {
        setIsCouponModalOpen(true);
    };

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
                            <tr>
                                <td>Sourish-05</td>
                                <td>15%</td>
                                <td>10 days</td>
                                <td>
                                    <p className="active">Active</p>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                            <tr>
                                <td>Sourish-05</td>
                                <td>15%</td>
                                <td>10 days</td>
                                <td>ABC Institution</td>
                                <td>
                                    <p className="active">Active</p>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <CreateCouponModal
                    isCouponModalOpen={isCouponModalOpen}
                    setIsCouponModalOpen={setIsCouponModalOpen}
                />
            </CouponWrapper>
        </>
    );
}

export default CouponsPage;