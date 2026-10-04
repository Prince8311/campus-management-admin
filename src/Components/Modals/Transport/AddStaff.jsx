import { useEffect, useState, useRef } from "react";
import { AddStaffWrapper } from "../../../Styles/Modals/TransportModalsStyle";
import { toast } from "react-toastify";
import { documentBaseURL, getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddStaffModal = ({ isStaffAddModal, setIsStaffAddModal, selectedStaff, setSelectedStaff, refreshData }) => {
    const api = getApiEndpoints();
    const roles = ["Driver", "Conductor", "Cleaner"];
    const [selectedRole, setSelectedRole] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isStatus, setIsStatus] = useState(false);
    const [staffName, setStaffName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [licenseFile, setLicenseFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef(null);
    const initialStaffStateRef = useRef(null);

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    const allowedExtensions = '.jpg,.jpeg,.png,.pdf';
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isDriverRole = selectedRole === 'Driver';
    const isEditMode = Boolean(selectedStaff);

    const isFormValid =
        staffName.trim() &&
        selectedRole &&
        contactNo.trim() &&
        email.trim() &&
        (!isDriverRole || licenseFile || previewUrl);

    const isFormChanged = isEditMode && initialStaffStateRef.current ? (
        staffName !== initialStaffStateRef.current.staffName ||
        selectedRole !== initialStaffStateRef.current.selectedRole ||
        contactNo !== initialStaffStateRef.current.contactNo ||
        email !== initialStaffStateRef.current.email ||
        isStatus !== initialStaffStateRef.current.isStatus ||
        licenseFile !== null
    ) : false;

    const normalizeStatus = (value) => value === true || value === 1 || value === '1' || value === 'true' || value === 'active';

    useEffect(() => {
        if (isStaffAddModal && selectedStaff) {
            const initialStaffState = {
                staffName: String(selectedStaff.name ?? ''),
                selectedRole: String(selectedStaff.role ?? ''),
                contactNo: String(selectedStaff.contact_no ?? ''),
                email: String(selectedStaff.email ?? ''),
                isStatus: normalizeStatus(selectedStaff.status)
            };

            setStaffName(initialStaffState.staffName);
            setSelectedRole(initialStaffState.selectedRole);
            setContactNo(initialStaffState.contactNo);
            setEmail(initialStaffState.email);
            setIsStatus(initialStaffState.isStatus);
            setLicenseFile(null);
            setPreviewUrl(selectedStaff.license_file
                ? `${documentBaseURL}/driving-license/${selectedStaff.license_file}`
                : null
            );
            initialStaffStateRef.current = initialStaffState;
        } else if (isStaffAddModal) {
            setSelectedRole('');
            setIsDropdownOpen(false);
            setIsStatus(false);
            setStaffName('');
            setContactNo('');
            setEmail('');
            setLicenseFile(null);
            setPreviewUrl(null);
            setIsDragOver(false);
            initialStaffStateRef.current = null;
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    }, [isStaffAddModal, selectedStaff]);

    const clearLicenseFile = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setLicenseFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    function closeModal() {
        resetForm();
        setIsStaffAddModal(false);
        setSelectedStaff(null);
    }

    function resetForm() {
        setSelectedRole('');
        setIsDropdownOpen(false);
        setIsStatus(false);
        setStaffName('');
        setContactNo('');
        setEmail('');
        clearLicenseFile();
        setIsDragOver(false);
        initialStaffStateRef.current = null;
    }

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setIsDropdownOpen(false);

        if (role !== 'Driver') {
            clearLicenseFile();
        }
    }

    const handleFileChange = (file) => {
        if (file && allowedTypes.includes(file.type)) {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
            setLicenseFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else if (file) {
            alert('Invalid file type. Please upload a JPG, PNG, JPEG, or PDF file.');
        }
    };

    const handleInputChange = (e) => {
        handleFileChange(e.target.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        handleFileChange(e.dataTransfer.files[0]);
    };

    const handleRemoveFile = (e) => {
        e.preventDefault();
        clearLicenseFile();
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const inputs = {
            name: staffName,
            role: selectedRole,
            phone: contactNo,
            email: email,
            status: isStatus,
            ...(isEditMode ? { id: selectedStaff.id } : {})
        };
        const formData = new FormData();
        formData.append('inputs', JSON.stringify(inputs));
        if (isDriverRole && licenseFile) {
            formData.append('license_file', licenseFile);
        }
        try {
            const response = await axiosInstance.post(api.addVehicleStaff, formData, {
                params: {
                    intent: isEditMode ? 'update' : 'add',
                }
            });
            if (response.data.status === 200) {
                toast.success(response.data.message);
                closeModal();
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    };

    return (
        <>
            <AddStaffWrapper className={isStaffAddModal ? 'active' : ''}>
                <div className={`modal_box ${isStaffAddModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>{isEditMode ? 'Edit Vehicle Staff' : 'Add Vehicle Staff'}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Staff Name <p>*</p></span>
                                <input
                                    type="text"
                                    value={staffName}
                                    onChange={(e) => setStaffName(e.target.value)}
                                />
                            </div>
                            <div className="select_box">
                                <span>Staff Role <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleDropdown}>
                                        <p>{selectedRole}</p>
                                        <i className={`fa-solid fa-angle-down ${isDropdownOpen ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    roles.map((role, index) => (
                                                        <li key={index} onClick={() => handleRoleSelect(role)}>{role}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Contact No. <p>*</p></span>
                                <input
                                    type="number"
                                    value={contactNo}
                                    onChange={(e) => setContactNo(e.target.value)}
                                />
                            </div>
                            <div className="input_box fullwidth">
                                <span>Email <p>*</p></span>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {isDriverRole && <div className="upload_box">
                                <span>Driving License <p>*</p></span>
                                <div
                                    className={`document_upload_sec ${isDragOver ? 'drag_over' : ''} ${previewUrl ? 'file_selected' : ''}`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    {previewUrl ? (
                                        <div className="file_preview">
                                            {(licenseFile?.type === 'application/pdf' || (!licenseFile && selectedStaff?.license_file?.toLowerCase().endsWith('.pdf'))) ? (
                                                <iframe
                                                    src={previewUrl}
                                                    title="License Preview"
                                                    className="pdf_preview"
                                                />
                                            ) : (
                                                <img src={previewUrl} alt="License Preview" className="image_preview" />
                                            )}
                                            <a className="remove_file" onClick={handleRemoveFile}><i className="fa-solid fa-trash-can"></i></a>
                                        </div>
                                    ) : isDragOver ?
                                        (<label htmlFor="fileUpload" className="upload_label">
                                            <i className="fa-brands fa-elementor"></i>
                                            <p>Drop your file here.</p>
                                        </label>
                                        ) : (
                                            <label htmlFor="fileUpload" className="upload_label">
                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                                <p>Drag and drop your file here or <span>browse files</span></p>
                                                <b>Supported: JPG, JPEG, PNG, PDF</b>
                                            </label>
                                        )}
                                    <input
                                        ref={fileInputRef}
                                        id="fileUpload"
                                        type="file"
                                        accept={allowedExtensions}
                                        style={{ display: 'none' }}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="modal_btn">
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
                        <button disabled={!isFormValid || isButtonLoading || (isEditMode && !isFormChanged)} onClick={handleSave}>
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
            </AddStaffWrapper>
        </>
    );
}

export default AddStaffModal;
