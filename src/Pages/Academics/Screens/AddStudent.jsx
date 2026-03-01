import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../../Components/FormField";
import { AddStudentWrapper } from "../../../Styles/AcademicStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const AddStudentPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [displayBulkUpload, setDisplayBulkUpload] = useState(true);
    const [displayManualUpload, setDisplayManualUpload] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [form, setForm] = useState([]);
    const [activeDropdownId, setActiveDropdownId] = useState(null);
    const [formData, setFormData] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const fetchStudentForm = async () => {
        setIsFormLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchStudentUploadForm);
            if (response?.data.status === 200) {
                console.log("Form", response?.data);
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
        fetchStudentForm();
    }, []);

    const toggleBulkUploadForm = () => {
        setDisplayBulkUpload(true);
        setDisplayManualUpload(false);
    }

    const toggleManualUploadForm = () => {
        setDisplayManualUpload(true);
        setDisplayBulkUpload(false);
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
        link.setAttribute("download", "Student-Sample-List.csv");
        link.style.visibility = "hidden";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleFieldChange = (fieldId, sectionId, value) => {
        setFormData(prev => ({
            ...prev,
            [fieldId]: {
                section_id: sectionId,
                value: value
            }
        }));
    };

    const handleFormSubmit = () => {
        const formattedData = Object.entries(formData).map(([fieldId, data]) => ({
            section_id: data.section_id,
            field_id: fieldId,
            value: data.value
        }));

        console.log(formattedData);
    };

    const redirectToProfileSettingPage = () => {
        navigate("/admin/settings/profile-settings/student");
    }

    return (
        <>
            <AddStudentWrapper>
                <div className="page_head">
                    <h2><i className="fa-solid fa-user-graduate"></i>Add Student</h2>
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
                                            <div className="bulk_upload_sec">
                                                <input
                                                    type="file"
                                                    accept=".csv"
                                                    id="fileUpload"
                                                    hidden
                                                />
                                                <label htmlFor="fileUpload" className="upload_label">
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                    <p>Drag and drop your file here or <span>browse files</span></p>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="another_way_sec">
                                    <a>OR</a>
                                </div>
                                <div className="item_box">
                                    <div className={`box_top ${displayManualUpload ? 'active' : ''}`} onClick={toggleManualUploadForm}>
                                        <div className="top_left">
                                            <h4>Add Student Manually</h4>
                                        </div>
                                        <div className="top_right">
                                            <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                    <div className={`upload_form_sec ${displayManualUpload ? 'active' : ''}`}>
                                        <div className="profile_image_sec">
                                            <div className="sec_inner">
                                                <h6>Manually Add Student</h6>
                                                <div className="sec_content">
                                                    <div className="content_left">
                                                        <img src="/images/profile-image.png" alt="" />
                                                    </div>
                                                    <div className="content_right">
                                                        <p>Upload passport size photo</p>
                                                        <span>(File size: max 10MB | Formats: .PNG, .JPG)</span>
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
                                                                            value={formData[field.id] || ""}
                                                                            onChange={handleFieldChange}
                                                                            activeDropdownId={activeDropdownId}
                                                                            setActiveDropdownId={setActiveDropdownId}
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
                                            <button onClick={handleFormSubmit}><i className="fa-solid fa-plus"></i>Add Student</button>
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
            </AddStudentWrapper>
        </>
    );
}

export default AddStudentPage;