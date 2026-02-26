import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentWrapper } from "../../../Styles/SettingStyle";
import CreateSectionModal from "../../../Components/Modals/Setting/CreateSection";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const StudentPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isCreateSectionOpen, setIsCreateSectionOpen] = useState(false);
    const [userType, setUserType] = useState('');
    const [sectionType, setSectionType] = useState('');
    const [profileFormSections, setProfileFormSections] = useState([]);
    const [loadProfileFormSections, setLoadProfileFormSections] = useState(false);
    const [isProfileFormSectionsLoading, setIsProfileFormSectionsLoading] = useState(false);
    const [documentFormSections, setDocumentFormSections] = useState([]);
    const [loadDocumentFormSections, setLoadDocumentFormSections] = useState(false);
    const [isDocumentFormSectionsLoading, setIsDocumentsFormSectionsLoading] = useState(false);

    const handleOpenCreateSection = (section) => {
        setIsCreateSectionOpen(true);
        setUserType('Student');
        setSectionType(section);
    };

    const fetchProfileFormSections = async () => {
        setIsProfileFormSectionsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchStudentFormSection, {
                params: { type: 'profile_info' }
            });
            if (response?.data.status === 200) {
                console.log("Profile Fetch", response.data);
                setProfileFormSections(response?.data.sections);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setLoadProfileFormSections(false);
            setIsProfileFormSectionsLoading(false);
        }
    }

    useEffect(() => {
        fetchProfileFormSections();
    }, [loadProfileFormSections]);

    const fetchDocumentsFormSection = async () => {
        setIsDocumentsFormSectionsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchStudentFormSection, {
                params: { type: 'document' }
            });
            if (response?.data.status === 200) {
                console.log("Documents Fetch", response.data);
                setDocumentFormSections(response?.data.sections);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setLoadDocumentFormSections(false);
            setIsDocumentsFormSectionsLoading(false);
        }
    }

    useEffect(() => {
        fetchDocumentsFormSection();
    }, [loadDocumentFormSections]);

    const handleOpenFieldRedirectionPage = () => {
        navigate("/admin/settings/profile-settings/section-fields");
    }

    return (
        <>
            <StudentWrapper>
                <div className="wrapper_content">
                    <div className="content_box">
                        <div className="box_top_sec">
                            <div className="box_head">
                                <h6>Profile Information</h6>
                                <p>Create and edit profile sections in students' profile</p>
                            </div>
                            <div className="add_btn">
                                <button onClick={() => handleOpenCreateSection('profile_info')}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            {
                                isProfileFormSectionsLoading ? (
                                    Array.from({ length: 4 }).map((_, i) => (
                                        <div key={i} className="sec_item">
                                            <SkeletonLoader width="100%" height="100px" />
                                        </div>
                                    ))
                                ) : profileFormSections.length > 0 ? (
                                    profileFormSections.map((section, i) =>
                                        <div key={i} className="sec_item">
                                            <div className="item_inner">
                                                <div className="inner_top">
                                                    <a><i class="fa-solid fa-thumbtack"></i></a>
                                                    <div className="inner_content">
                                                        <h6>{section.name}</h6>
                                                        <span>{section.total_fields} {section.total_fields > 1 ? 'fields' : 'field'}</span>
                                                    </div>
                                                </div>
                                                <div className="inner_btn">
                                                    <button className="details" onClick={handleOpenFieldRedirectionPage}>View Details</button>
                                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_messege">
                                        <p>No Section available.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_top_sec">
                            <div className="box_head">
                                <h6>Documents</h6>
                                <p>Create and edit document sections in students' profile</p>
                            </div>
                            <div className="add_btn">
                                <button onClick={() => handleOpenCreateSection('document')}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            {
                                isDocumentFormSectionsLoading ? (
                                    <></>
                                ) : documentFormSections.length > 0 ? (
                                    documentFormSections.map((section, i) =>
                                        <div key={i} className="sec_item" onClick={handleOpenFieldRedirectionPage}>
                                            <div className="item_inner">
                                                <div className="inner_top">
                                                    <a><i class="fa-solid fa-thumbtack"></i></a>
                                                    <div className="inner_content">
                                                        <h6>Admin</h6>
                                                        <span>20 fields</span>
                                                    </div>
                                                </div>
                                                <div className="inner_btn">
                                                    <button className="details">View Details</button>
                                                    <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_messege">
                                        <p>No Section available.</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <CreateSectionModal
                    isCreateSectionOpen={isCreateSectionOpen}
                    setIsCreateSectionOpen={setIsCreateSectionOpen}
                    userType={userType}
                    setUserType={setUserType}
                    sectionType={sectionType}
                    setSectionType={setSectionType}
                    setLoadProfileFormSections={setLoadProfileFormSections}
                    setLoadDocumentFormSections={setLoadDocumentFormSections}
                />
            </StudentWrapper>
        </>
    );
}

export default StudentPage;