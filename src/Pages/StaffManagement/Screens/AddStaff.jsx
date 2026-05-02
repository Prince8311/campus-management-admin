import { useEffect, useState } from "react";
import FormField from "../../../Components/FormField";
import { AddStaffWrapper } from "../../../Styles/StaffStyle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { UserData } from "../../../Context/PageContext";
import CircleLoader from "../../../Components/Loader/CircleLoader";

const AddStaffPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { userDetails } = UserData();
    const staffType = sessionStorage.getItem("staffType");
    const [displayBulkUpload, setDisplayBulkUpload] = useState(true);
    const [displayManualUpload, setDisplayManualUpload] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [form, setForm] = useState([]);
    const [activeDropdownId, setActiveDropdownId] = useState(null);
    const [formData, setFormData] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isBulkUploading, setIsBulkUploading] = useState(false);

    const fetchStaffForm = async () => {
        setIsFormLoading(true);
        try {
            const response = await axiosInstance.get(api.staffUploadForm, {
                params: { staffType: staffType }
            });
            if (response?.data.status === 200) {
                setForm(response?.data.form);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
            setForm([]);
        } finally {
            setIsFormLoading(false);
        }
    }

    useEffect(() => {
        fetchStaffForm();
    }, []);

    const toggleBulkUploadForm = () => {
        setDisplayBulkUpload(true);
        setDisplayManualUpload(false);
    }

    const toggleManualUploadForm = () => {
        setDisplayManualUpload(true);
        setDisplayBulkUpload(false);
    }

    const redirectToProfileSettingPage = () => {
        navigate("/admin/settings/profile-settings/student");
    }

    const downloadSampleExcel = () => {
        if (!form.length) return;

        // Collect all field names
        const headers = [];

        form.forEach(section => {
            section.fields.forEach(field => {
                headers.push(field.is_required ? `${field.name}*` : field.name);
            });
        });

        // Convert headers to CSV format
        const csvContent = headers.join(",") + "\n";

        // Create blob
        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;"
        });

        // Create download link
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", "Staff-Sample-List.csv");
        link.style.visibility = "hidden";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (!file) return;

        if (!file.name.endsWith(".csv")) {
            toast.warn("Only CSV files are allowed");
            return;
        }

        setSelectedFile(file);
        console.log("Dropped file:", file);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.name.endsWith(".csv")) {
            toast.warn("Only CSV files are allowed");
            return;
        }

        setSelectedFile(file);
        console.log("Selected file:", file);
    };

    const handleFieldChange = (sectionId, fieldName, value) => {
        setFormData(prev => {
            const updated = {
                ...prev,
                [sectionId]: {
                    ...(prev[sectionId] || {}),
                    [fieldName]: value
                }
            };
            if (fieldName === "Class / Standard") {
                updated[sectionId]["Section"] = "";
            }

            return updated;
        });
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        const fileInput = document.getElementById("fileUpload");
        if (fileInput) {
            fileInput.value = "";
        }
    };

    return (
        <>
            <AddStaffWrapper>
                <div className="page_head">
                    <h2><i className="fa-solid fa-user"></i>Add Staff</h2>
                </div>
                <div className="page_item">
                    {
                        isFormLoading ? (
                            <>
                                <SkeletonLoader width="100%" height="175px" />
                                <SkeletonLoader width="200px" height="30px" margin="25px 0" />
                                <SkeletonLoader width="100%" height="55px" />
                            </>
                        ) : form.length > 0 ? (
                            <>
                                <div className="item_box">
                                    <div className={`box_top ${displayBulkUpload ? 'active' : ''}`} onClick={toggleBulkUploadForm}>
                                        <div className="top_left">
                                            <h4>Bulk Upload</h4>
                                        </div>
                                        <div className="top_right">
                                            {
                                                displayBulkUpload &&
                                                <div className="download_btn" onClick={downloadSampleExcel}>
                                                    <span><i className="fa-solid fa-cloud-arrow-down"></i></span>
                                                    <p>Sample List</p>
                                                </div>
                                            }
                                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                    <div className={`upload_form_sec ${displayBulkUpload ? 'active' : ''}`}>
                                        <div className="bulk_upload_inner">
                                            {
                                                selectedFile ? (
                                                    <div className="upload_file_sec">
                                                        <div className="file_sec_inner">
                                                            <img src="/images/excel-icon.webp" alt="" />
                                                            <div className="file_items">
                                                                <p>{selectedFile.name}</p>
                                                                <div className="btns">
                                                                    <button disabled={isBulkUploading}>
                                                                        {
                                                                            isBulkUploading ? (
                                                                                <>Uploading<CircleLoader margin="0 0 0 7px" color="blueColor1" /></>
                                                                            ) : (
                                                                                <><i className="fa-solid fa-cloud-arrow-up"></i>Upload</>
                                                                            )
                                                                        }
                                                                    </button>
                                                                    <button onClick={handleRemoveFile}><i className="fa-solid fa-trash"></i>Remove</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`bulk_upload_sec ${isDragging ? "dragging" : ""}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                                                        <input
                                                            type="file"
                                                            accept=".csv"
                                                            id="fileUpload"
                                                            hidden
                                                            onChange={handleFileSelect}
                                                        />
                                                        {
                                                            isDragging ? (
                                                                <label className="upload_label">
                                                                    <i className="fa-solid fa-arrows-up-down-left-right"></i>
                                                                    <p>Drop your file here</p>
                                                                </label>
                                                            ) : (
                                                                <label htmlFor="fileUpload" className="upload_label">
                                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                                    <p>Drag and drop your file here or <span>browse files</span></p>
                                                                </label>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="another_way_sec">
                                    <a>OR</a>
                                </div>
                                <div className="item_box">
                                    <div className={`box_top ${displayManualUpload ? 'active' : ''}`} onClick={toggleManualUploadForm}>
                                        <div className="top_left">
                                            <h4>Add Staff Manually</h4>
                                        </div>
                                        <div className="top_right">
                                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                    <div className={`upload_form_sec ${displayManualUpload ? 'active' : ''}`}>
                                        <div className="profile_image_sec">
                                            <div className="sec_inner">
                                                <h6>Manually Add Staff</h6>
                                                <div className="sec_content">
                                                    <div className="content_left">
                                                        <img src="/images/profile-image.png" alt="" />
                                                    </div>
                                                    <div className="content_right">
                                                        <p>Upload passport size photo</p>
                                                        <span>( File size: max 10MB | Formats: '.png', '.jpg', '.jpeg' )</span>
                                                        <a><i className="fa-solid fa-cloud-arrow-up"></i>Upload Image</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="student_details_sec">
                                            {
                                                form.map((section, index) =>
                                                    <div className="details_box" key={index}>
                                                        <div className="details_top active">
                                                            <h3>{section.name}</h3>
                                                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                                        </div>
                                                        <div className="details_bottom">
                                                            <div className="details_inner">
                                                                {
                                                                    section.fields.map((field, i) =>
                                                                        <FormField
                                                                            key={i}
                                                                            id={field.id}
                                                                            sectionId={section.id}
                                                                            label={field.name}
                                                                            type={field.type}
                                                                            isrequired={field.is_required}
                                                                            source={field.source}
                                                                            items={field.items}
                                                                            value={formData[section.id]?.[field.name] || ""}
                                                                            onChange={handleFieldChange}
                                                                            activeDropdownId={activeDropdownId}
                                                                            setActiveDropdownId={setActiveDropdownId}
                                                                            formData={formData}
                                                                        />
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="btn_sec">
                                            <button><i className="fa-solid fa-plus"></i>Add Staff</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No sections & fields are available. <span onClick={redirectToProfileSettingPage}>Create Now</span></p>
                            </div>
                        )
                    }
                </div>
            </AddStaffWrapper>
        </>
    );
}

export default AddStaffPage;