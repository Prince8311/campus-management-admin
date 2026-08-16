import { useRef, useState, useEffect } from "react";
import { AddBankAccountWrapper } from "../../../Styles/Modals/FinanceModalsStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";
import { toast } from "react-toastify";

const AddBankAccountModal = ({ isAddBankAccountModalOpen, setIsAddBankAccountModalOpen, refreshData }) => {
    const api = getApiEndpoints();
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [beneficiaryName, setBeneficiaryName] = useState('');
    const [cancelledCheque, setCancelledCheque] = useState(null);
    const fileInputRef = useRef(null);

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const allowedExtensions = '.jpg,.jpeg,.png';
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid =
        accountName.trim() &&
        accountNumber.trim() &&
        ifscCode.trim() &&
        beneficiaryName.trim() &&
        cancelledCheque;

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

    function closeModal() {
        setIsAddBankAccountModalOpen(false);
    };
    function resetForm() {
        setAccountName('');
        setAccountNumber('');
        setIfscCode('');
        setBeneficiaryName('');
        clearLicenseFile();
        setIsAddBankAccountModalOpen(false);
    }

    const handleSave = async (e) => {
        e.preventDefault();
        const inputs = {
            accountName: accountName,
            accountNo: accountNumber,
            ifscCode: ifscCode,
            beneficiaryName: beneficiaryName
        };
        const formData = new FormData();
        formData.append('inputs', JSON.stringify(inputs));
        formData.append('cancelled_cheque', cancelledCheque);
        try {
            const response = await axiosInstance.post(api.addBankAccount, formData);
            if (response.data.status === 200) {
                console.log('bank Account added successfully:', response.data);
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
                        <h4>Add Bank Account</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box full">
                                <span>Account Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                />
                            </div>
                            <div className="input_box full">
                                <span>Account Number <p>*</p></span>
                                <input
                                    type="number"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                    className="no-spinner"
                                />
                            </div>
                            <div className="input_box half">
                                <span>IFSC Code <p>*</p></span>
                                <input
                                    type="text"
                                    value={ifscCode}
                                    onChange={(e) => setIfscCode(e.target.value)}
                                />
                            </div>
                            <div className="input_box half">
                                <span>Beneficiary Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={beneficiaryName}
                                    onChange={(e) => setBeneficiaryName(e.target.value)}
                                />
                            </div>
                            <div className="input_box full">
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
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormValid || isButtonLoading} onClick={handleSave}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
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