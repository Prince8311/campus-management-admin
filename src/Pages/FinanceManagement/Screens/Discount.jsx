import { DiscountWrapper } from "../../../Styles/FinanceStyle";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import StaffChildDiscount from './StaffChildDiscount';

const DiscountPage = ({ discounts, isdiscountLoading, onEditDiscount, specialDiscounts, onToggleSpecialDiscount, onEditSpecialDiscount }) => {
    return (
        <>
            <DiscountWrapper>
                <div className="special_discounts_row">
                    <StaffChildDiscount value={specialDiscounts.staff} onToggle={() => onToggleSpecialDiscount('staff')} onEdit={() => onEditSpecialDiscount('staff')} />
                    <StaffChildDiscount value={specialDiscounts.advance} isAdvance onToggle={() => onToggleSpecialDiscount('advance')} onEdit={() => onEditSpecialDiscount('advance')} />
                </div>
                <h5 className="regular_discounts_title">Regular Discounts</h5>
                <div className="discount_boxes">
                    {
                        isdiscountLoading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <div className="discount_box" key={index}>
                                    <SkeletonLoader width="100%" height="145px" />
                                </div>
                            ))
                        ) : discounts.length > 0 ? (
                            discounts.map((discount, index) => {
                                const unit = discount.unit ?? discount.discount_unit ?? discount.discountUnit;
                                const type = unit === 'Rupees' ? 'Flat' : (discount.type ?? discount.discount_type ?? discount.discountType);
                                const limit = discount.discount_limit ?? discount.discountLimit;
                                const hasLimit = unit === 'Percentage' && type === 'Approx' && limit !== null && limit !== undefined && String(limit).trim() !== '';
                                const amount = unit === 'Rupees' ? `₹${discount.amount}` : `${discount.amount}%`;
                                return (
                                    <div className="discount_box" key={discount.id ?? index}>
                                        <div className="box_inner">
                                            <div className="card_heading">
                                                <span className="discount_icon" aria-hidden="true"><i className="fa-solid fa-tag"></i></span>
                                                <h6 title={discount.name}>{discount.name}</h6>
                                            </div>
                                            <div className="offer">
                                                <div className="offer_value">
                                                    <span className="offer_label">{type === 'Flat' ? 'Flat discount' : 'Discount'}</span>
                                                    <p><strong>{amount}</strong><span className="offer_suffix"> off</span></p>
                                                </div>
                                                {hasLimit && (
                                                    <div className="offer_limit">
                                                        <span className="offer_label">Maximum saving</span>
                                                        <p><span className="limit_prefix">up to </span><strong>₹{limit}</strong></p>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card_footer">
                                                <div className="fee_sec">
                                                    <span className="fee_label">Applied to:</span>
                                                    <span className="fee_name">{discount.fee_type ?? discount.feeType}</span>
                                                </div>
                                                <div className="btns_sec">
                                                    <button type="button" className="edit" onClick={() => onEditDiscount(discount)}><i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>Edit</button>
                                                    <button type="button" className="delete" aria-label={`Delete ${discount.name}`}><i className="fa-solid fa-trash" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No discounts available.</p>
                            </div>
                        )
                    }
                </div>

            </DiscountWrapper>
        </>
    );
}

export default DiscountPage;
