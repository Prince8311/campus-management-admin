import { AttendenceWrapper } from "../../../Styles/ModalStyle";

const AttendenceModal = ({ isAttendenceModalOpen, setIsAttendenceModalOpen }) => {
    const closeModal = () => {
        setIsAttendenceModalOpen(false);
    };

    return (
        <>
            <AttendenceWrapper className={isAttendenceModalOpen ? "active" : ""}>
                <div className={`modal_box ${isAttendenceModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Manage Attendence for 10 - D</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="modal_item_sec">
                        <div className="item_btns">
                            <div className="filter_btn">
                                <i className="fa-regular fa-calendar"></i>
                                <p>15 May 2026</p>
                            </div>
                            <button>Mark all Students</button>
                        </div>
                        <div className="item_box_sec">
                            <div className="item_box">
                                <div className="box_inner">
                                    <p>Total Students</p>
                                    <span>25</span>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <p>Total Present</p>
                                    <span>25</span>
                                </div>
                            </div>
                            <div className="item_box">
                                <div className="box_inner">
                                    <p>Total Absent</p>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table_sec">
                        <div className="sec_inner">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>Roll Number</th>
                                        <th>Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="left_table_sec">
                                                <h5>JB</h5>
                                            </div>
                                            <div className="right_table_sec">
                                                <h6>Joydeep Barik</h6>
                                                <p>9749708386</p>
                                            </div>
                                        </td>
                                        <td>100</td>
                                        <td>
                                            <p>A</p>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                            <p>P</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="left_table_sec">
                                                <h5>JB</h5>
                                            </div>
                                            <div className="right_table_sec">
                                                <h6>Joydeep Barik</h6>
                                                <p>9749708386</p>
                                            </div>
                                        </td>
                                        <td>100</td>
                                        <td>
                                            <p>A</p>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                            <p>P</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </div>
            </AttendenceWrapper>
        </>
    );
}

export default AttendenceModal;