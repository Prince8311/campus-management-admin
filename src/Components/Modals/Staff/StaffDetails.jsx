import { useEffect, useState } from "react";
import { StaffDetailsWrapper } from "../../../Styles/Modals/StaffModalsStyle";
import FormField from "../../FormField";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";

const StaffDetailsModal = ({ isStaffDetailsModal, setIsStaffDetailsModal, staffType }) => {
    const api = getApiEndpoints();
    const [isFormLoading, setIsFormLoading] = useState(false);
    const [form, setForm] = useState([]);
    const [activeDropdownId, setActiveDropdownId] = useState(null);

    const fetchStaffForm = async () => {
        setIsFormLoading(true);
        try {
            const response = await axiosInstance.get(api.staffUploadForm, {
                params: { staffType: staffType }
            });
            if (response?.data.status === 200) {
                setForm(response?.data.form);
                console.log("Staff Form:", response?.data.form);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
            setForm([]);
        } finally {
            setIsFormLoading(false);
        }
    }

    useEffect(() => {
        if (isStaffDetailsModal) {
            fetchStaffForm();
        }
    }, [isStaffDetailsModal]);

    const closeModal = () => {
        setIsStaffDetailsModal(false);
    };
    return (
        <>
            <StaffDetailsWrapper className={isStaffDetailsModal ? "active" : ""}>
                <div className={`modal_box ${isStaffDetailsModal ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Staff Details</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="modal_sec">
                        <div className="sec_inner">
                            <div className="profile_sec">
                                <div className="image_sec">
                                    <img src="/images/profile-image.png" alt="" />
                                    <a><i className="fa-regular fa-pen-to-square"></i></a>
                                </div>
                            </div>
                            <div className="staff_details_sec">
                                {
                                    form.map((section, index) => (
                                        <div key={index} className="details_box">
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
                                                                activeDropdownId={activeDropdownId}
                                                                setActiveDropdownId={setActiveDropdownId}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button><i className="fa-regular fa-floppy-disk"></i>Save Changes</button>
                    </div>
                </div>
            </StaffDetailsWrapper>
        </>
    );
}

export default StaffDetailsModal;