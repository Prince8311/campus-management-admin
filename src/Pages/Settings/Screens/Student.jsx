import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentWrapper } from "../../../Styles/SettingStyle";
import CreateSectionModal from "../../../Components/Modals/Setting/CreateSection";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";

const StudentPage = () => {
    const api = getApiEndpoints();
    const navigate = useNavigate();
    const [isCreateSectionOpen, setIsCreateSectionOpen] = useState(false);
    const [userType, setUserType] = useState('');
    const [sectionType, setSectionType] = useState('');
    const [loadProfileFormSections, setLoadProfileFormSections] = useState(false);
    const [isProfileFormSectionsLoading, setIsProfileFormSectionsLoading] = useState(false);

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
                console.log(response);
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
                            <div className="preview_sec">
                                <div className="preview_btn">
                                    <i className="fa-solid fa-eye"></i>
                                    <p>Preview</p>
                                </div>
                            </div>
                            <div className="add_btn">
                                <button onClick={() => handleOpenCreateSection('profile_info')}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            <div className="sec_item" onClick={handleOpenFieldRedirectionPage}>
                                <div className="item_inner">
                                    <a><i class="fa-solid fa-thumbtack"></i></a>
                                    <div className="inner_content">
                                        <h6>Admin</h6>
                                        <span>20 fields</span>
                                    </div>
                                    <p><i className="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_box">
                        <div className="box_top_sec">
                            <div className="box_head">
                                <h6>Documents</h6>
                                <p>Create and edit document sections in students' profile</p>
                            </div>
                            <div className="preview_sec">
                                <div className="preview_btn">
                                    <i className="fa-solid fa-eye"></i>
                                    <p>Preview</p>
                                </div>
                            </div>
                            <div className="add_btn">
                                <button onClick={() => handleOpenCreateSection('document')}>
                                    <i className="fa-solid fa-plus"></i>
                                    <p>Create Section</p>
                                </button>
                            </div>
                        </div>
                        <div className="box_bottom_sec">
                            <div className="sec_item">
                                <div className="item_inner">
                                    <a><i class="fa-solid fa-thumbtack"></i></a>
                                    <div className="inner_content">
                                        <h6>Admin</h6>
                                        <span>20 fields</span>
                                    </div>
                                    <p><i className="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
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
                />
            </StudentWrapper>
        </>
    );
}

export default StudentPage;