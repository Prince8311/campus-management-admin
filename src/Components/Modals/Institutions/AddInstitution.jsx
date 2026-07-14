import { useState, useEffect, useRef } from "react";
import { AddInstitutionWrapper } from "../../../Styles/InstitutionModalStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddInstitutionModal = ({ isAddInstitutionOpen, setIsAddInstitutionOpen, selectedInstitution, setSelectedInstitution, selectedAddress, setShowAddressModal, setSelectedAddress, selectState, setSelectState, selectCity, setSelectCity, lat, setLat, lng, setLng, refreshData }) => {
    const api = getApiEndpoints();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isEditMode = Boolean(selectedInstitution?.id || selectedInstitution?.institution_id || selectedInstitution?.inst_id);
    const isFormValid = name.trim() !== '' && email.trim() !== '' && phone.trim() !== '' && selectedAddress.trim() !== '';
    const originalData = useRef(null);
    const [hasChanges, setHasChanges] = useState(false);
    const [isStatus, setIsStatus] = useState(false);

    function closeModal() {
        setIsAddInstitutionOpen(false);
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setSelectedAddress('');
        setSelectState('');
        setSelectCity('');
        setSelectedInstitution(null);
        originalData.current = null;
        setHasChanges(false);
    }

    const handleAddInstitution = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            institutionName: name,
            phone: phone,
            email: email,
            location: selectedAddress,
            state: selectState,
            city: selectCity,
            latitude: lat === '' ? selectedInstitution.latitude : lat,
            longitude: lng === '' ? selectedInstitution.longitude : lng,
            status: isStatus
        };
        if (isEditMode) {
            payload.id = selectedInstitution?.id;
        }
        try {
            const response = await axiosInstance.post(api.addInstitution, payload, {
                params: {
                    intent: isEditMode ? 'update' : 'add'
                }
            });
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                setIsAddInstitutionOpen(false);
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            resetForm();
            setIsButtonLoading(false);
        }
    }

    useEffect(() => {
        if (selectedInstitution) {
            console.log('Selected Institution:', selectedInstitution);
            setName(selectedInstitution.inst_name || selectedInstitution.name || '');
            setEmail(selectedInstitution.email || selectedInstitution.inst_email || '');
            setPhone(selectedInstitution.phone || selectedInstitution.contact || '');
            setIsStatus(selectedInstitution.status || false);
            // store original snapshot for change detection
            originalData.current = {
                name: (selectedInstitution.inst_name || selectedInstitution.name || '').toString(),
                email: (selectedInstitution.email || selectedInstitution.inst_email || '').toString(),
                phone: (selectedInstitution.phone || selectedInstitution.contact || '').toString(),
                address: (selectedAddress || selectedInstitution.location || selectedInstitution.address || '').toString(),
                state: (selectState || selectedInstitution.state || '').toString(),
                city: (selectCity || selectedInstitution.city || '').toString(),
                lat: (lat === '' ? (selectedInstitution.latitude ?? '') : lat).toString(),
                lng: (lng === '' ? (selectedInstitution.longitude ?? '') : lng).toString()
            };
            setHasChanges(false);
        } else {
            setName('');
            setEmail('');
            setPhone('');
        }
    }, [selectedInstitution]);

    // detect changes compared to originalData
    useEffect(() => {
        if (!isEditMode || !originalData.current) {
            setHasChanges(false);
            return;
        }

        const changed = (
            (originalData.current.name || '') !== (name || '') ||
            (originalData.current.email || '') !== (email || '') ||
            (originalData.current.phone || '') !== (phone || '') ||
            (originalData.current.address || '') !== (selectedAddress || '') ||
            (originalData.current.state || '') !== (selectState || '') ||
            (originalData.current.city || '') !== (selectCity || '') ||
            (originalData.current.lat || '') !== (lat === '' ? (selectedInstitution?.latitude ?? '') : lat).toString() ||
            (originalData.current.lng || '') !== (lng === '' ? (selectedInstitution?.longitude ?? '') : lng).toString()
        );

        setHasChanges(Boolean(changed));
    }, [name, email, phone, selectedAddress, selectState, selectCity, lat, lng, isEditMode, selectedInstitution]);

    return (
        <>
            <AddInstitutionWrapper className={isAddInstitutionOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddInstitutionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>{isEditMode ? 'Edit Institution' : 'Add Institution'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Institution Name <p>*</p></span>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} readOnly={isEditMode} />
                            </div>
                            <div className="input_box">
                                <span>Email Address <p>*</p></span>
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} readOnly={isEditMode} />
                            </div>
                            <div className="input_box">
                                <span>Contact No. <p>*</p></span>
                                <input
                                    type="tel"
                                    pattern="[0-9]*"
                                    className="no-spinner"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="input_box" onClick={() => setShowAddressModal(true)}>
                                <span>Location <a>(Google map location)</a><p>*</p></span>
                                <textarea readOnly value={selectedAddress}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        {isEditMode && (
                            <div className="toggle_bar">
                                <input
                                    type="checkbox"
                                    id="toggle"
                                    checked={isStatus}
                                    onChange={(e) => setIsStatus(e.target.checked)}
                                />
                                <label htmlFor="toggle">
                                    <span></span>
                                </label>
                            </div>
                        )}
                        <button onClick={handleAddInstitution} disabled={!isFormValid || isButtonLoading || (isEditMode && !hasChanges)}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>{isEditMode ? 'Update' : 'Save'}</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </AddInstitutionWrapper>
        </>
    )
};

export default AddInstitutionModal;