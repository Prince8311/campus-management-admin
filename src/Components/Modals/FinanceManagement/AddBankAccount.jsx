import { useRef, useState, useEffect } from "react";
import { AddBankAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";
import { toast } from "react-toastify";

const AddBankAccountModal = ({ isAddBankAccountModalOpen, setIsAddBankAccountModalOpen, refreshData, selectedBankAccount, setSelectedBankAccount }) => {
    const api = getApiEndpoints();
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [beneficiaryName, setBeneficiaryName] = useState('');
    const [isStatus, setIsStatus] = useState(false);
    const [cancelledCheque, setCancelledCheque] = useState(null);
    const fileInputRef = useRef(null);
    const initialAccountStateRef = useRef(null);

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const allowedExtensions = '.jpg,.jpeg,.png';
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const normalizeStatus = (value) => value === true || value === 1 || value === '1' || value === 'true' || value === 'active' || value === 'yes';
    const recordId = selectedBankAccount?.id ?? selectedBankAccount?.bank_account_id ?? selectedBankAccount?.account_id ?? selectedBankAccount?.bankAccountId ?? selectedBankAccount?._id;
    const isEditMode = Boolean(recordId);
    const isFormValid =
        accountName.trim() &&
        accountNumber.trim() &&
        ifscCode.trim() &&
        beneficiaryName.trim() &&
        (isEditMode ? true : cancelledCheque);
    const isFormChanged = isEditMode && initialAccountStateRef.current ? (
        accountName !== initialAccountStateRef.current.accountName ||
        accountNumber !== initialAccountStateRef.current.accountNumber ||
        ifscCode !== initialAccountStateRef.current.ifscCode ||
        beneficiaryName !== initialAccountStateRef.current.beneficiaryName ||
        isStatus !== initialAccountStateRef.current.isStatus
    ) : false;

    const clearLicenseFile = () => {
        setCancelledCheque(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleFileChange = (file) => {
        if (file && allowedTypes.includes(file.type)) {
            setCancelledCheque(file);
        } else if (file) {
            toast.error('Invalid file type. Please upload a JPG, PNG, or JPEG file.');
        }
    };

    const handleInputChange = (e) => {
        handleFileChange(e.target.files[0]);
    };

    useEffect(() => {
        if (selectedBankAccount && recordId) {
            const nextAccountState = {
                accountName: selectedBankAccount.account_name || '',
                accountNumber: selectedBankAccount.account_no || '',
                ifscCode: selectedBankAccount.ifsc_code || '',
                beneficiaryName: selectedBankAccount.beneficiary_name || '',
                isStatus: normalizeStatus(selectedBankAccount.status)
            };
            setAccountName(nextAccountState.accountName);
            setAccountNumber(nextAccountState.accountNumber);
            setIfscCode(nextAccountState.ifscCode);
            setBeneficiaryName(nextAccountState.beneficiaryName);
            setIsStatus(nextAccountState.isStatus);
            setCancelledCheque(null);
            initialAccountStateRef.current = nextAccountState;
        } else {
            setAccountName('');
            setAccountNumber('');
            setIfscCode('');
            setBeneficiaryName('');
            setIsStatus(false);
            clearLicenseFile();
            initialAccountStateRef.current = null;
        }
    }, [selectedBankAccount, recordId]);

    function closeModal() {
        setSelectedBankAccount(null);
        setIsAddBankAccountModalOpen(false);
    };
    function resetForm() {
        setAccountName('');
        setAccountNumber('');
        setIfscCode('');
        setBeneficiaryName('');
        setIsStatus(false);
        clearLicenseFile();
        setSelectedBankAccount(null);
        setIsAddBankAccountModalOpen(false);
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const inputs = {
            accountName: accountName,
            accountNo: accountNumber,
            ifscCode: ifscCode,
            beneficiaryName: beneficiaryName,
            status: isStatus,
            ...(recordId ? { id: recordId } : {})
        };
        const formData = new FormData();
        formData.append('inputs', JSON.stringify(inputs));
        if (recordId) {
            formData.append('id', String(recordId));
        }
        if (!isEditMode && cancelledCheque) {
            formData.append('cancelled_cheque', cancelledCheque);
        }
        try {
            const response = await axiosInstance.post(api.addBankAccount, formData, {
                params: {
                    intent: isEditMode ? 'update' : 'add'
                }
            });
            if (response.data.status === 200) {
                console.log('bank Account saved successfully:', response.data);
                toast.success(response.data.message);
                resetForm();
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddBankAccountWrapper className={isAddBankAccountModalOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddBankAccountModalOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>{isEditMode ? 'Edit Bank Account' : 'Add Bank Account'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Account Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                />
                            </div>
                            <div className="input_box">
                                <span>Account Number <p>*</p></span>
                                <input
                                    type="number"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                    className="no-spinner"
                                />
                            </div>
                            <div className="input_box">
                                <span>IFSC Code <p>*</p></span>
                                <input
                                    type="text"
                                    value={ifscCode}
                                    onChange={(e) => setIfscCode(e.target.value)}
                                />
                            </div>
                            <div className="input_box">
                                <span>Beneficiary Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={beneficiaryName}
                                    onChange={(e) => setBeneficiaryName(e.target.value)}
                                />
                            </div>
                            {!isEditMode && (
                                <div className="input_box">
                                    <span>Cancelled Cheque <p>*</p></span>
                                    <div
                                        className="sec_box"
                                        onClick={() => fileInputRef.current?.click()}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {cancelledCheque ? (
                                            <p style={{ margin: 0, fontSize: '10px', color: '#333', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}> {cancelledCheque.name}
                                            </p>
                                        ) : (
                                            <>
                                                <p></p>
                                                <i className="fa-solid fa-file-arrow-up"></i>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        id="fileUpload"
                                        type="file"
                                        accept={allowedExtensions}
                                        style={{ display: 'none' }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="modal_btn">
                        {isEditMode && (
                            <>
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
                            </>
                        )}
                        <button
                            disabled={
                                !isFormValid ||
                                isButtonLoading ||
                                (isEditMode && !isFormChanged)
                            }
                            onClick={handleSave}
                        >
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
            </AddBankAccountWrapper>
        </>
    );
}

export default AddBankAccountModal;