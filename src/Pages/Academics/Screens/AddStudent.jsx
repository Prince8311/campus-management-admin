import { AddStudentWrapper } from "../../../Styles/AcademicStyle";

const AddStudentPage = () => {
    return (
        <>
            <AddStudentWrapper>
                <div className="page_head">
                    <h2><i className="fa-solid fa-user-graduate"></i>Add Student</h2>
                </div>
                <div className="page_item">
                    <div className="item_box">
                        <div className="box_top active">
                            <div className="top_left">
                                <h4>Bulk Upload</h4>
                            </div>
                            <div className="top_right">
                                <span><i className="fa-solid fa-download"></i></span>
                                <p>Sample List</p>
                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="upload_form_sec">
                            <div className="profile_image_sec">
                                <div className="bulk_upload_sec">
                                    <a href=""><i className="fa-solid fa-cloud-arrow-up"></i></a>
                                    <p>Drag and drop your file here or <span>browse</span></p>
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
                                <h4>Add Student Manually</h4>
                            </div>
                            <div className="top_right">
                                <div className="icon"><i className="fa-solid fa-angle-right"></i></div>
                            </div>
                        </div>
                        <div className="upload_form_sec">
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
                                            <a>Upload</a>
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
                                            <div className="input_box">
                                                <span>Class <p>*</p></span>
                                                <input type="text" />
                                            </div>
                                            <div className="input_box">
                                                <span>Number <p>*</p></span>
                                                <input type="number" className="no-spinner" />
                                            </div>
                                            <div className="select_box">
                                                <span>Type <p>*</p></span>
                                                <div className="dropdown_sec">
                                                    <div className="dropdown_btn">
                                                        <p>Type</p>
                                                        <i className="fa-solid fa-angle-down"></i>
                                                    </div>
                                                    <div className="dropdown"></div>
                                                </div>
                                            </div>
                                            <div className="date_box">
                                                <span>Class <p>*</p></span>
                                                <div className="dropdown_sec">
                                                    <div className="dropdown_btn">
                                                        <p>Date</p>
                                                        <i className="fa-regular fa-calendar"></i>
                                                    </div>
                                                    <div className="dropdown"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn_sec">
                    <button><i className="fa-solid fa-plus"></i>Add Student</button>
                </div>
            </AddStudentWrapper>
        </>
    );
}

export default AddStudentPage;