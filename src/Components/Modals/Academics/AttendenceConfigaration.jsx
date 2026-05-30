import { AttendenceConfigarationWrapper } from "../../../Styles/ModalStyle";

const AttendenceConfigarationModal = ({ isConfigarationModalOpen, setIsConfigarationModalOpen }) => {
    function closeModal() {
        setIsConfigarationModalOpen(false);
    }

    return (
        <>
            <AttendenceConfigarationWrapper className={isConfigarationModalOpen ? "active" : ""}>
                <div className={`modal_box ${isConfigarationModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Attendence Configaration</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}>
                                <i className="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_top">
                                <p>Set attendance tracking methodology for specific classes and sections.</p>
                            </div>
                            <div className="class_attendence_sec">
                                <h6>Target Classes</h6>
                                <div className="attendence_box_sec">
                                    <p>No classes selected. Click "Add More" to begin.</p>
                                    <div className="select_class_sec">
                                        <span>Class 10 - A<i class="fa-regular fa-circle-xmark"></i></span>
                                    </div>
                                    <div className="box_left_sec">
                                        <a><i className="fa-solid fa-plus"></i>Add More</a>
                                        <div className="multiple_class_sec">
                                            <div className="class_sec_inner">
                                                <li>
                                                    <input
                                                        type="radio"
                                                        id="class9"
                                                        name="subject_type"
                                                    />
                                                    <label htmlFor="class9">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class 9 - A</p>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        id="class10"
                                                        name="subject_type"
                                                    />
                                                    <label htmlFor="class10">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class 9 - B</p>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        id="class11"
                                                        name="subject_type"
                                                    />
                                                    <label htmlFor="class11">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class 9 - C</p>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        id="class12"
                                                        name="subject_type"
                                                    />
                                                    <label htmlFor="class12">
                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                        <p>Class 9 - D</p>
                                                    </label>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Methodology_sec">
                                <div className="top_sec">
                                    <h5>Tracking Methodology</h5>
                                    <a>REQUIRED</a>
                                </div>
                                <div className="bottom_sec">
                                    <div className="bottom_box active">
                                        <div className="box_inner">
                                            <span><i className="fa-solid fa-calendar"></i></span>
                                            <div className="box_item">
                                                <h6>Date Wise<i className="fa-solid fa-circle-info"></i></h6>
                                                <p>Single record per student per day. Best for K-12 primary education.</p>
                                            </div>
                                            <a><i className="fa-regular fa-circle-check"></i></a>
                                        </div>
                                    </div>
                                    <div className="bottom_box">
                                        <div className="box_inner">
                                            <span><i className="fa-solid fa-clock"></i></span>
                                            <div className="box_item">
                                                <h6>Class Wise<i className="fa-solid fa-circle-info"></i></h6>
                                                <p>Multiple records based on timetable periods. Best for Universities.</p>
                                            </div>
                                            <a><i className="fa-regular fa-circle-check"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="security_sec">
                                <div className="sec_content">
                                    <i class="fa-solid fa-shield-halved"></i>
                                    <p>Applying this configuration will affect how teachers view the attendance portal for the selected classes starting from the next calendar day. Existing records will remain archived under previous rules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </div>
            </AttendenceConfigarationWrapper>
        </>
    );
}

export default AttendenceConfigarationModal;