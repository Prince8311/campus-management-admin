import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentWrapper } from "../../../Styles/SettingStyle";
import CreateSectionModal from "../../../Components/Modals/Setting/CreateSection";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import DeleteConfirmationModal from "../../../Components/Modals/DeleteConfirmation";

const StudentPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isCreateSectionOpen, setIsCreateSectionOpen] = useState(false);
    const userType = 'Student';
    const [sectionType, setSectionType] = useState('');
    const [profileFormSections, setProfileFormSections] = useState([]);
    const [documentFormSections, setDocumentFormSections] = useState([]);
    const [isInitialProfileLoading, setIsInitialProfileLoading] = useState(true);
    const [isInitialDocumentLoading, setIsInitialDocumentLoading] = useState(true);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deletePayload, setDeletePayload] = useState({});

    const handleOpenCreateSection = (section) => {
        setIsCreateSectionOpen(true);
        setSectionType(section);
    };

    const fetchProfileFormSections = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialProfileLoading(true);
        }
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
            setIsInitialProfileLoading(false);
        }
    }

    const fetchDocumentsFormSection = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialDocumentLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStudentFormSection, {
                params: { type: 'document' }
            });
            if (response?.data.status === 200) {
                setDocumentFormSections(response?.data.sections);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialDocumentLoading(false);
        }
    }

    useEffect(() => {
        fetchProfileFormSections(true);
        fetchDocumentsFormSection(true);
    }, []);

    const handleOpenFieldRedirectionPage = (id, name, sectionType) => {
        const sectionData = {
            userType: userType,
            sectionType: sectionType,
            sectionId: id,
            sectionName: name
        };
        localStorage.setItem("sectionData", JSON.stringify(sectionData));
        navigate("/admin/settings/profile-settings/section-fields");
    }

    const handleDeleteSection = (id, section, type) => {
        const payload = {
            sectionId: id,
            section: section
        };
        setSectionType(type);
        setDeletePayload(payload);
        setOpenDeleteModal(true);
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
                                isInitialProfileLoading ? (
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
                                                    <a><i className="fa-solid fa-thumbtack"></i></a>
                                                    <div className="inner_content">
                                                        <h6>{section.name}</h6>
                                                        <span>{section.total_fields} {section.total_fields > 1 ? 'fields' : 'field'}</span>
                                                    </div>
                                                </div>
                                                <div className="inner_btn">
                                                    <button className={`details ${section.isRemoval ? '' : 'not_removal'}`} onClick={() => handleOpenFieldRedirectionPage(section.id, section.name, 'profile_info')}>View Details</button>
                                                    {
                                                        section.isRemoval &&
                                                        <button className="delete" onClick={() => handleDeleteSection(section.id, section.name, 'profile_info')}><i className="fa-solid fa-trash"></i></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_messege">
                                        <img src="/images/no-fields.svg" alt="" />
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
                                isInitialDocumentLoading ? (
                                    <></>
                                ) : documentFormSections.length > 0 ? (
                                    documentFormSections.map((section, i) =>
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
                                                    <button className={`details ${section.isRemoval ? '' : 'not_removal'}`} onClick={() => handleOpenFieldRedirectionPage(section.id, section.name, 'document')}>View Details</button>
                                                    {
                                                        section.isRemoval &&
                                                        <button className="delete" onClick={() => handleDeleteSection(section.id, section.name, 'document')}><i className="fa-solid fa-trash"></i></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="empty_messege">
                                        <img src="/images/no-fields.svg" alt="" />
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
                    sectionType={sectionType}
                    setSectionType={setSectionType}
                    refreshProfileSections={() => fetchProfileFormSections(false)}
                    refreshDocumentSections={() => fetchDocumentsFormSection(false)}
                />
                <DeleteConfirmationModal
                    isModalOpen={openDeleteModal}
                    setIsModalOpen={setOpenDeleteModal}
                    deleteObject="Form section"
                    payload={deletePayload}
                    endPoint={api.deleteStaffFormSection}
                    refreshData={() => {
                        if (sectionType === 'profile_info') {
                            fetchProfileFormSections(false);
                        } else if (sectionType === 'document') {
                            fetchDocumentsFormSection(false);
                        }
                    }}
                />
            </StudentWrapper>
        </>
    );
}

export default StudentPage;