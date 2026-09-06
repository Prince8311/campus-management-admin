import { useEffect, useRef, useState } from 'react';
import SkeletonLoader from '../../../Components/Loader/SkeletonLoader';
import axiosInstance from '../../../Services/Middleware/AxiosInstance';
import { getApiEndpoints } from '../../../Services/Api/ApiConfig';

const StaffChildDiscount = ({ value, onChange }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const fieldsRef = useRef(null);
    useEffect(() => {
        const closeOutside = event => {
            if (!fieldsRef.current?.contains(event.target)) setOpenDropdown(null);
        };
        document.addEventListener('mousedown', closeOutside);
        return () => document.removeEventListener('mousedown', closeOutside);
    }, []);
    useEffect(() => { setOpenDropdown(null); }, [value.enabled]);
    const [feeTypes, setFeeTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [retry, setRetry] = useState(0);
    const { fetchFeeTypes } = getApiEndpoints();
    const showLimit = value.unit === 'Percentage' && value.type === 'Approx';
    const complete = value.name.trim() && value.unit && value.type && value.amount.trim() && value.feeType && (!showLimit || value.limit.trim());
    const update = (field, next) => onChange(previous => ({ ...previous, [field]: next }));

    useEffect(() => {
        if (!value.enabled) return;
        let active = true;
        setLoading(true);
        setError('');
        axiosInstance.get(fetchFeeTypes).then(response => {
            if (!active) return;
            if (response.data.status !== 200 || !Array.isArray(response.data.types)) {
                throw new Error('Unable to load fee types.');
            }
            setFeeTypes(response.data.types);
        }).catch(() => {
            if (active) setError('Unable to load fee types.');
        }).finally(() => {
            if (active) setLoading(false);
        });
        return () => { active = false; };
    }, [value.enabled, fetchFeeTypes, retry]);

    const renderDropdown = (field, label, options, disabled = false) => (
        <div className="select_box halfwidth">
            <span id={`staff-${field}-label`}>{label} <p>*</p></span>
            <div className="dropdown_sec">
                <button type="button" className="dropdown_btn" aria-labelledby={`staff-${field}-label`} disabled={disabled} aria-expanded={openDropdown === field} onClick={() => setOpenDropdown(previous => previous === field ? null : field)}>
                    <p>{value[field]}</p>
                    <i className={`fa-solid fa-angle-down ${openDropdown === field ? 'active' : ''}`} aria-hidden="true"></i>
                </button>
                <div className={`dropdown ${field === 'feeType' ? 'dropUp' : ''} ${!disabled && openDropdown === field ? 'active' : ''}`}>
                    <div className="dropdown_inner">
                        <ul>
                            {field === 'feeType' && loading ? Array.from({ length: 2 }, (_, index) => <li key={index}><SkeletonLoader width="100%" height="13px" /></li>) : options.length ? options.map(option => (
                                <li key={option} className={value[field] === option ? 'active' : ''}>
                                    <button type="button" onClick={() => {
                                        if (field === 'unit') {
                                            if (option !== value.unit) onChange(previous => ({ ...previous, unit: option, type: option === 'Rupees' ? 'Flat' : '', limit: '' }));
                                        } else update(field, option);
                                        setOpenDropdown(null);
                                    }}>{option}</button>
                                </li>
                            )) : <li className="empty_message">{error || 'No fee types available'}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="staff_discount_section" aria-labelledby="staff-discount-title">
            <div className="box_inner staff_discount_card">
                <div className="card_heading">
                    <span className="discount_icon" aria-hidden="true"><i className="fa-solid fa-user-group"></i></span>
                    <div className="staff_heading_text">
                        <span className="staff_eyebrow">STAFF BENEFIT</span>
                        <h6 id="staff-discount-title">Staff Child Discount</h6>
                        <p>Exclusive fee concession for children of staff.</p>
                    </div>
                    <label className="staff_discount_toggle">
                        <span>{value.enabled ? 'Enabled' : 'Disabled'}</span>
                        <input type="checkbox" role="switch" aria-label="Enable staff child discount" checked={value.enabled} onChange={event => update('enabled', event.target.checked)} />
                        <span className="toggle_track" aria-hidden="true" />
                    </label>
                </div>
                {value.enabled && (
                    <div className="staff_configuration">
                        <div className="staff_configuration_heading"><span>Discount settings</span><span className="staff_draft_badge">Unsaved draft</span></div>
                        <div className="staff_discount_fields" ref={fieldsRef}>
                            <div className="input_box fullwidth">
                                <span id="staff-name-label">Discount Name <p>*</p></span>
                                <input aria-labelledby="staff-name-label" type="text" value={value.name} readOnly required />
                            </div>
                            {renderDropdown('unit', 'Discount Unit', ['Rupees', 'Percentage'])}
                            {renderDropdown('type', 'Discount Type', ['Approx', 'Flat'], !value.unit || value.unit === 'Rupees')}
                            <div className="input_box halfwidth">
                                <span id="staff-amount-label">Discount Amount <p>*</p></span>
                                <input aria-labelledby="staff-amount-label" type="text" inputMode="decimal" value={value.amount} onChange={event => update('amount', event.target.value)} required />
                            </div>
                            {showLimit && <div className="input_box halfwidth">
                                <span id="staff-limit-label">Discount Limit <p>*</p></span>
                                <input aria-labelledby="staff-limit-label" type="text" inputMode="decimal" value={value.limit} onChange={event => update('limit', event.target.value)} required />
                            </div>}
                            {renderDropdown('feeType', 'Fee Type', feeTypes)}
                        </div>
                        {error && <p className="staff_discount_description" role="alert">{error} <button type="button" onClick={() => setRetry(previous => previous + 1)}>Retry</button></p>}
                        {complete && <div className="offer">
                            <div className="offer_value">
                                <span className="offer_label">{value.type === 'Flat' ? 'Flat discount' : 'Discount'}</span>
                                <p><strong>{value.unit === 'Rupees' ? `₹${value.amount}` : `${value.amount}%`}</strong><span className="offer_suffix"> off</span></p>
                            </div>
                            {showLimit && <div className="offer_limit"><span className="offer_label">Maximum saving</span><p><span className="limit_prefix">up to </span><strong>₹{value.limit}</strong></p></div>}
                        </div>}
                        <div className="staff_configuration_footer"><i className="fa-regular fa-circle-info" aria-hidden="true"></i><span>Preview only. Changes are not saved.</span></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StaffChildDiscount;
