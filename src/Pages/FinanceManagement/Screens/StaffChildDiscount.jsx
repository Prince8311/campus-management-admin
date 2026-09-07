const StaffChildDiscount = ({ value, onToggle, onEdit, isAdvance = false }) => {
    const hasLimit = value.discountUnit === 'Percentage' && value.discountType === 'Approx';
    return (
        <section className="staff_discount_section" aria-label={value.name}>
            <div className="box_inner staff_discount_card">
                <div className="card_heading">
                    <span className="discount_icon" aria-hidden="true"><i className={isAdvance ? 'fa-solid fa-calendar-check' : 'fa-solid fa-user-group'}></i></span>
                    <div className="staff_heading_text">
                        <span className="staff_eyebrow">{isAdvance ? 'PAYMENT BENEFIT' : 'STAFF BENEFIT'}</span>
                        <h6>{isAdvance ? 'Advance Payment Discount' : 'Staff Child Discount'}</h6>
                        <p>{isAdvance ? 'A fee concession for paying in advance.' : 'Exclusive fee concession for children of staff.'}</p>
                    </div>
                    <label className="staff_discount_toggle">
                        <span>{value.enabled ? 'Enabled' : 'Disabled'}</span>
                        <input type="checkbox" role="switch" aria-label={`Enable ${value.name} discount`} checked={value.enabled} onChange={onToggle} />
                        <span className="toggle_track" aria-hidden="true" />
                    </label>
                </div>
                {value.enabled && <div className="staff_configuration">
                    <div className="offer">
                        <div className="offer_value">
                            <span className="offer_label">{value.discountType === 'Flat' ? 'Flat discount' : 'Discount'}</span>
                            <p><strong>{value.discountUnit === 'Rupees' ? '\u20b9' + value.amount : value.amount + '%'}</strong><span className="offer_suffix"> off</span></p>
                        </div>
                        {hasLimit && <div className="offer_limit"><span className="offer_label">Maximum saving</span><p><strong>{'\u20b9' + value.discountLimit}</strong></p></div>}
                    </div>
                    <div className="special_discount_footer">
                        <span>{value.feeType}</span>
                        <div className="btns_sec"><button type="button" className="edit" onClick={onEdit}><i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>Edit</button></div>
                    </div>
                    <div className="staff_configuration_footer">Preview only. Changes are not saved to the server.</div>
                </div>}
            </div>
        </section>
    );
};

export default StaffChildDiscount;
