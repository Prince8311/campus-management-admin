import FormField from "../../../Components/FormField";
import { AddStaffWrapper } from "../../../Styles/StaffStyle";

const AddStaffPage = () => {
    return (
        <>
            <AddStaffWrapper>
                <div className="page_head">
                    <h2><i className="fa-solid fa-user"></i>Add Staff</h2>
                </div>
                <div className="page_item">
                    <div className="item_box">
                        <div className="box_top active">
                            <div className="top_left">
                                <h4>Bulk Upload</h4>
                            </div>
                            <div className="top_right">
                                <div className="download_btn">
                                    <span><i className="fa-solid fa-cloud-arrow-down"></i></span>
                                    <p>Sample List</p>
                                </div>
                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="upload_form_sec">
                            <div className="bulk_upload_inner">
                                <div className="bulk_upload_sec">
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
                        <div className="box_top active">
                            <div className="top_left">
                                <h4>Add Staff Manually</h4>
                            </div>
                            <div className="top_right">
                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="upload_form_sec">
                            <div className="profile_image_sec">
                                <div className="sec_inner">
                                    <h6>Manually Staff Student</h6>
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
                                <div className="details_box">
                                    <div className="details_top active">
                                        <h3>Basic Details</h3>
                                        <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                                    </div>
                                    <div className="details_bottom">
                                        <div className="details_inner">
                                            <FormField />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddStaffWrapper>
        </>
    );
}

export default AddStaffPage;