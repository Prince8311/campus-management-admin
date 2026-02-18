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
                        <div className="box_bottom">
                            <div className="bottom_inner">
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
                        <div className="box_bottom">
                            <div className="bottom_inner">
                                <div className="manually_upload_sec">
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
                                    <input type="text" required />
                                    <span>Class*</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Enrolment ID*</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>First Name*</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Middle Name</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Last Name</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Date of Admission*</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Class Roll Number</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Date of Birth</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Gender</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Blood Group</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Pick-up point (Transport Fee)</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Sats Number</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Bus Number</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Student Aadhaar Number</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>Class admitted at first admission</span>
                                </div>
                                <div className="input_box">
                                    <input type="text" required />
                                    <span>PEN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddStudentWrapper>
        </>
    );
}

export default AddStudentPage;