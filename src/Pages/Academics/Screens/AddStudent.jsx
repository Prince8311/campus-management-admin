import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../../../Components/FormField";
import { AddStudentWrapper } from "../../../Styles/AcademicStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { UserData } from "../../../Context/PageContext";
import CircleLoader from "../../../Components/Loader/CircleLoader";

const AddStudentPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const { userDetails } = UserData();
    const [displayBulkUpload, setDisplayBulkUpload] = useState(true);
    const [displayManualUpload, setDisplayManualUpload] = useState(false);
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [form, setForm] = useState([]);
    const [activeDropdownId, setActiveDropdownId] = useState(null);
    const [formData, setFormData] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isBulkUploading, setIsBulkUploading] = useState(false);

    const fetchStudentForm = async () => {
        setIsFormLoading(true);
        try {
            const response = await axiosInstance.get(api.studentUploadForm);
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
        link.setAttribute("download", "Student-Sample-List.csv");
        link.style.visibility = "hidden";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

    const handleFormSubmit = () => {
        const formattedData = [];
        Object.entries(formData).forEach(([sectionId, fields]) => {
            Object.entries(fields).forEach(([fieldName, value]) => {
                formattedData.push({
                    section_id: sectionId,
                    field_name: fieldName,
                    value: value
                });
            });
        });
        console.log(formattedData);
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

    const createFieldMap = () => {
        const map = {};

        form.forEach(section => {
            section.fields.forEach(field => {
                const cleanName = field.name.trim();
                map[cleanName] = {
                    section_id: section.id,
                    field_name: field.name
                };
            });
        });

        return map;
    };

    const handleCSVUpload = async () => {
        if (!selectedFile) {
            toast.warn("Please select a file first");
            return;
        }

        setIsBulkUploading(true);
        const reader = new FileReader();

        reader.onload = async (event) => {
            try {

                const text = event.target.result?.trim();
                if (!text) {
                    toast.warn("No data in the file");
                    setIsBulkUploading(false);
                    return;
                }

                const rows = text.split("\n").map(row => row.split(","));
                if (rows.length <= 1) {
                    toast.warn("No data in the file");
                    setIsBulkUploading(false);
                    return;
                }

                const dataRows = rows.slice(1).filter(row =>
                    row.some(cell => cell.trim() !== "")
                );

                if (dataRows.length === 0) {
                    toast.warn("No data in the file");
                    setIsBulkUploading(false);
                    return;
                }

                const headers = rows[0].map(h => h.replace("*", "").trim());
                const fieldMap = createFieldMap();

                const formattedData = dataRows.map(row => {
                    const studentData = [];

                    headers.forEach((header, index) => {
                        if (fieldMap[header]) {
                            studentData.push({
                                section_id: fieldMap[header].section_id,
                                field_name: fieldMap[header].field_name,
                                value: row[index]?.trim() || ""
                            });
                        }
                    });

                    return { student_fields: studentData };
                });

                const payload = {
                    students: formattedData,
                    session: userDetails?.session?.name,
                    isBulkUpload: true
                };

                console.log("Payload", payload);
                const response = await axiosInstance.post(api.addStudent, payload);

                if (response?.data.status === 200) {
                    toast.success(response.data?.message || "Students uploaded successfully");
                    handleRemoveFile();
                }
            } catch (error) {
                toast.error(error.response?.data?.message || error.message);
            } finally {
                setIsBulkUploading(false);
            }
        };

        reader.onerror = () => {
            toast.error("Failed to read file");
            setIsBulkUploading(false);
        };

        reader.readAsText(selectedFile);
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
                                            {
                                                selectedFile ? (
                                                    <div className="upload_file_sec">
                                                        <div className="file_sec_inner">
                                                            <img src="/images/excel-icon.webp" alt="" />
                                                            <div className="file_items">
                                                                <p>{selectedFile.name}</p>
                                                                <div className="btns">
                                                                    <button disabled={isBulkUploading} onClick={handleCSVUpload}>
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