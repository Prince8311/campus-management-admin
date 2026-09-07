import { useEffect, useState } from 'react';
import { FineModalWrapper } from '../../../Styles/Modals/FinanceModalsStyle';
import { getApiEndpoints } from '../../../Services/Api/ApiConfig';
import axiosInstance from '../../../Services/Middleware/AxiosInstance';
import SkeletonLoader from '../../Loader/SkeletonLoader';

const scopes = ['Academic Level wise', 'Class wise', 'Global'];
const terms = ['Per hours', 'Per day', 'Per week', 'Per month'];
const emptyForm = { scope: '', target: '', term: '', feeType: '', graceDays: '0', amount: '' };

const FineModal = ({ isOpenFineModal, setIsOpenFineModal, fineDraft, onSaveDraft }) => {
    const [form, setForm] = useState(emptyForm);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [retry, setRetry] = useState(0);
    const [feeTypes, setFeeTypes] = useState([]);
    const [feeTypesLoading, setFeeTypesLoading] = useState(false);
    const [feeTypesError, setFeeTypesError] = useState('');
    const [feeTypesRetry, setFeeTypesRetry] = useState(0);
    const { fetchAcademicLevels, fetchClasses, fetchFeeTypes } = getApiEndpoints();
    const needsTarget = form.scope === scopes[0] || form.scope === scopes[1];
    const update = (field, value) => setForm(previous => ({ ...previous, [field]: value }));

    useEffect(() => {
        setForm(isOpenFineModal && fineDraft ? { ...emptyForm, ...fineDraft } : emptyForm);
        setOpenDropdown(null);
    }, [isOpenFineModal, fineDraft]);

    useEffect(() => {
        setOptions([]);
        setError('');
        setLoading(false);
        if (!isOpenFineModal || !needsTarget) return;
        let active = true;
        const academic = form.scope === scopes[0];
        setLoading(true);
        axiosInstance.get(academic ? fetchAcademicLevels : fetchClasses, academic ? undefined : { params: { isForm: true } }).then(response => {
            if (!active) return;
            const data = academic ? response.data.levels : response.data.data;
            if (response.data.status !== 200 || !Array.isArray(data)) throw new Error('Invalid options');
            setOptions(data.map(item => academic ? { value: String(item.id), label: item.level_name } : { value: String(item), label: String(item) }));
        }).catch(() => {
            if (active) setError('Unable to load options. Please try again.');
        }).finally(() => { if (active) setLoading(false); });
        return () => { active = false; };
    }, [isOpenFineModal, form.scope, needsTarget, fetchAcademicLevels, fetchClasses, retry]);

    useEffect(() => {
        setFeeTypes([]);
        setFeeTypesError('');
        setFeeTypesLoading(false);
        if (!isOpenFineModal) return;
        let active = true;
        setFeeTypesLoading(true);
        axiosInstance.get(fetchFeeTypes).then(response => {
            if (!active) return;
            if (response.data.status !== 200 || !Array.isArray(response.data.types)) throw new Error('Invalid fee types');
            setFeeTypes(response.data.types.map(type => ({ value: type, label: type })));
        }).catch(() => {
            if (active) setFeeTypesError('Unable to load fee types. Please try again.');
        }).finally(() => { if (active) setFeeTypesLoading(false); });
        return () => { active = false; };
    }, [isOpenFineModal, fetchFeeTypes, feeTypesRetry]);

    const valid = scopes.includes(form.scope) && (form.scope === 'Global' || options.some(option => option.value === form.target)) && terms.includes(form.term) &&
        feeTypes.some(option => option.value === form.feeType) && !feeTypesLoading && !feeTypesError &&
        /^\d+$/.test(form.graceDays) && Number.isSafeInteger(Number(form.graceDays)) &&
        /^\d+(\.\d{1,2})?$/.test(form.amount) && Number.isFinite(Number(form.amount)) && Number(form.amount) > 0 && (!needsTarget || (!loading && !error));
    const close = () => setIsOpenFineModal(false);
    const dropdown = (field, label, choices, halfwidth = false) => (
        <div className={`select_box ${halfwidth ? 'halfwidth' : 'fullwidth'}`}>
            <span id={`fine-${field}`}>{label} <p>*</p></span>
            <div className="dropdown_sec">
                <button type="button" className="dropdown_btn" aria-labelledby={`fine-${field}`} aria-expanded={openDropdown === field} onClick={() => setOpenDropdown(previous => previous === field ? null : field)}>
                    <p>{choices.find(option => option.value === form[field])?.label || ''}</p>
                    <i className={`fa-solid fa-angle-down ${openDropdown === field ? 'active' : ''}`} aria-hidden="true"></i>
                </button>
                <div className={`dropdown ${openDropdown === field ? 'active' : ''}`}>
                    <div className="dropdown_inner"><ul>
                        {(field === 'target' && loading) || (field === 'feeType' && feeTypesLoading) ? Array.from({ length: 2 }, (_, index) => <li key={index}><SkeletonLoader width="100%" height="13px" /></li>) : choices.length ? choices.map(option => (
                            <li key={option.value} className={form[field] === option.value ? 'active' : ''}>
                                <button type="button" onClick={() => {
                                    if (field === 'scope' && option.value !== form.scope) setForm(previous => ({ ...previous, scope: option.value, target: '' }));
                                    else update(field, option.value);
                                    setOpenDropdown(null);
                                }}>{option.label}</button>
                            </li>
                        )) : <li className="empty_message">{field === 'feeType' ? feeTypesError || 'No fee types available' : error || 'No options available'}</li>}
                    </ul></div>
                </div>
            </div>
        </div>
    );

    return (
        <FineModalWrapper className={isOpenFineModal ? 'active' : ''}>
            <div className={`modal_box ${isOpenFineModal ? 'active' : ''}`} role="dialog" aria-modal="true" aria-labelledby="fine-title">
                <div className="modal_head">
                    <h4 id="fine-title">Setup Fine</h4>
                    <div className="close_sec"><button type="button" aria-label="Close fine setup" onClick={close}><i className="fa-solid fa-xmark" /></button></div>
                </div>
                <div className="modal_body"><div className="body_inner">
                    {dropdown('scope', 'Setup By', scopes.map(value => ({ value, label: value })), needsTarget)}
                    {needsTarget && dropdown('target', form.scope === scopes[0] ? 'Academic Level' : 'Class', options, true)}
                    {form.scope === 'Global' && <p className="fine_help">Applies to all academic levels and classes for the selected fee type.</p>}
                    {needsTarget && error && <p className="fine_help" role="alert">{error} <button type="button" onClick={() => setRetry(previous => previous + 1)}>Retry</button></p>}
                    {dropdown('term', 'Fine Terms', terms.map(value => ({ value, label: value })), true)}
                    {dropdown('feeType', 'Fee Type', feeTypes, true)}
                    {feeTypesError && <p className="fine_help" role="alert">{feeTypesError} <button type="button" onClick={() => setFeeTypesRetry(previous => previous + 1)}>Retry</button></p>}
                    <div className="input_box fullwidth">
                        <span id="fine-grace">Grace Period (days) <p>*</p></span>
                        <input type="text" inputMode="numeric" aria-labelledby="fine-grace" value={form.graceDays} onChange={event => update('graceDays', event.target.value)} />
                    </div>
                    <p className="fine_help">Extra days after the installment due date without a fine. For example, 7 days extends September 5 through September 12. Enter 0 for no extension.</p>
                    <div className="input_box fullwidth">
                        <span id="fine-amount">Fine Amount (&#8377;) <p>*</p></span>
                        <input type="text" inputMode="decimal" aria-labelledby="fine-amount" value={form.amount} onChange={event => update('amount', event.target.value)} />
                    </div>
                    <p className="fine_help">The amount applies per selected term after the grace period. This setup is a local draft until saving is connected.</p>
                </div></div>
                <div className="modal_btn"><button type="button" disabled={!valid} onClick={() => { if (valid) { onSaveDraft(form); close(); } }}>Save Draft</button></div>
            </div>
        </FineModalWrapper>
    );
};
export default FineModal;
