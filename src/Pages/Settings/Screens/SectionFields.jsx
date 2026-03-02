import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateFieldsModal from "../../../Components/Modals/Setting/CreateFields";
import { SectionFieldsWrapper } from "../../../Styles/SettingStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const SectionFieldsPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const sectionData = JSON.parse(localStorage.getItem("sectionData"));
    const types = [
        { key: 'textbox', value: 'Textbox' },
        { key: 'number', value: 'Number' },
        { key: 'date', value: 'Date' },
        { key: 'dropdown', value: 'Dropdown' },
        { key: 'multi-select-dropdown', value: 'Multi-select Dropdown' },
    ];
    const [isCreateFieldsOpen, setIsCreateFieldsOpen] = useState(false);
    const [formFields, setFormFields] = useState([]);
    const [isInitialFieldsLoading, setIsInitialFieldsLoading] = useState(true);
    const [selectedFormField, setSelectedFormField] = useState({});
    const [editedName, setEditedName] = useState('');
    const [editedRequired, setEditedRequired] = useState(false);
    const isChanged = editedName !== selectedFormField?.form_field || editedRequired !== selectedFormField?.is_required;

    useEffect(() => {
        if (!sectionData) {
            navigate("/admin/settings/profile-settings/student");
        }
    }, [sectionData, navigate]);

    const fetchFormFields = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialFieldsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStudentFormFields, {
                params: { sectionId: sectionData.sectionId }
            });
            if (response?.data.status === 200) {
                const fields = response?.data.fields || [];
                setFormFields(fields);
                console.log("Fields Fetch", response.data);
                if (fields.length > 0 && !selectedFormField?.id) {
                    setSelectedFormField(fields[0]);
                }
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialFieldsLoading(false);
        }
    }

    useEffect(() => {
        if (sectionData) {
            fetchFormFields(true);
        }
    }, []);

    useEffect(() => {
        if (selectedFormField?.id) {
            setEditedName(selectedFormField.form_field || '');
            setEditedRequired(!!selectedFormField.is_required);
        }
    }, [selectedFormField]);

    const handleOpenCreateFieldsModal = () => {
        setIsCreateFieldsOpen(true);
    }

    return (
        <>
            <SectionFieldsWrapper>
                <div className="wrapper_content">
                    <div className="content_top">
                        <div className="box_head">
                            <h6>{sectionData.userType}</h6>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                            <h6>{sectionData.sectionType === 'profile_info' ? 'Profile Information' : 'Documents'}</h6>
                            <span><i className="fa-solid fa-angle-right"></i></span>
                            <h6>{sectionData.sectionName}</h6>
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenCreateFieldsModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Create Field</p>
                            </button>
                        </div>
                    </div>
                    <div className="content_bottom">
                        {
                            isInitialFieldsLoading ? (
                                <>
                                    <div className="left_content">
                                        <div className="left_content_inner">
                                            {
                                                Array.from({ length: 5 }).map((_, i) => (
                                                    <SkeletonLoader key={i} width="100%" height="40px" margin="0 0 10px 0" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="right_content">
                                        <div className="right_content_inner">
                                            <SkeletonLoader width="125px" height="18px" />
                                            <div className="input_field_sec">
                                                <div className="input_box">
                                                    <SkeletonLoader width="100%" height="37px" />
                                                </div>
                                                <SkeletonLoader width="160px" height="37px" />
                                            </div>
                                            <SkeletonLoader width="100%" height="37px" margin="15px 0 0 0" />
                                        </div>
                                    </div>
                                </>
                            ) : formFields.length > 0 ? (
                                <>
                                    <div className="left_content">
                                        <div className="left_content_inner">
                                            {
                                                formFields.map((field, i) =>
                                                    <li key={i} className={selectedFormField.id === field.id ? 'active' : ''} onClick={() => setSelectedFormField(field)}>
                                                        <p>{field.form_field}</p>
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </li>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="right_content">
                                        <div className="right_content_inner">
                                            <h6>Field Type: <span>{types.find(t => t.key === selectedFormField.field_type)?.value || '-'}</span></h6>
                                            <div className="input_field_sec">
                                                <div className="input_box">
                                                    <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} required />
                                                    <span>Field Name</span>
                                                </div>
                                                <button disabled={!isChanged}>Save</button>
                                            </div>
                                            <div className="item_box">
                                                <div className="box_content">
                                                    <li>
                                                        <p>Student</p>
                                                        <span>
                                                            <i className="fa-solid fa-circle-xmark"></i>
                                                        </span>
                                                    </li>
                                                    <input
                                                        type="text"
                                                        placeholder="Type item name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mandatory_sec">
                                                <p>Make this field mandatory</p>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="status"
                                                        checked={editedRequired}
                                                        onChange={(e) => setEditedRequired(e.target.checked)}
                                                    />
                                                    <label htmlFor="status">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="empty_box">
                                    <img src="/images/no-fields.svg" alt="" />
                                    <p>No fields available</p>
                                </div>
                            )
                        }
                    </div>
                </div>

                <CreateFieldsModal
                    isCreateFieldsOpen={isCreateFieldsOpen}
                    setIsCreateFieldsOpen={setIsCreateFieldsOpen}
                    refreshFormFields={() => fetchFormFields(false)}
                />
            </SectionFieldsWrapper>
        </>
    )
};

export default SectionFieldsPage;