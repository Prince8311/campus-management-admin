import { useState } from "react";
import { StudentAttendenceWrapper } from "../../../Styles/AcademicStyle";
import AttendenceModal from "../../../Components/Modals/Academics/Attendence";
import StudentWeeklyAttendanceGraph from "../Charts/WeeklyAttendence";
import StudentDailyAttendance from "../Charts/DailyAttendence";
import Calender from "../../../Components/Calender";

const StudentAttendencePage = () => {
    const [isAttendenceModalOpen, setIsAttendenceModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const getFormattedCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = today.toLocaleString('en-US', { month: 'long' });
        const year = today.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const [filterDate, setFilterDate] = useState(getFormattedCurrentDate());

    const handleOpenAttendenceModal = () => {
        setIsAttendenceModalOpen(true);
    };

    return (
        <>
            <StudentAttendenceWrapper>
                <div className="page_head">
                    <h2>Student Attendance</h2>
                    <div className="filter_sec">
                        <div className="filter_btn" onClick={() => setIsCalendarOpen(prev => !prev)}>
                            <i className="fa-solid fa-filter"></i>
                            <p>{filterDate || "Filter by date"}</p>
                        </div>
                        {
                            isCalendarOpen && (
                                <div className="dropdown">
                                    <Calender setFinalSelectedDate={setFilterDate} />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="overview_section">
                    <div className="sec_head">
                        <h6>Overview Report</h6>
                    </div>
                    <div className="graph_sec">
                        <div className="graph_first_box">
                            <h4>Weekly Report <span>(10 May - 17 May)</span></h4>
                            <div className="graph_box">
                                <StudentWeeklyAttendanceGraph />
                            </div>
                        </div>
                        <div className="graph_second_box">
                            <h4>Daily Report <span>(10 May)</span></h4>
                            <div className="graph_box">
                                <StudentDailyAttendance />
                            </div>
                        </div>
                        <div className="another_sec">
                            <div className="sec_box">
                                <p>Total Students</p>
                                <span>1500</span>
                            </div>
                            <div className="sec_box">
                                <p>Present Students</p>
                                <span>1000</span>
                            </div>
                            <div className="sec_box">
                                <p>Absent Students</p>
                                <span>500</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="report_details_sec">
                    <div className="report_head">
                        <h6>Report Details</h6>
                    </div>
                    <div className="student_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search for class/section or class teacher" />
                        </div>
                    </div>
                    <div className="tab_sec">
                        <div className="tab_inner">
                            <li className="active">Primary</li>
                            <li>Middle</li>
                            <li>Secondary</li>
                        </div>
                    </div>
                    <div className="table_sec">
                        <table>
                            <thead>
                                <tr>
                                    <th>Class & Section</th>
                                    <th>Class Teacher</th>
                                    <th>Total Students</th>
                                    <th>Present</th>
                                    <th>Absent</th>
                                    <th>Percentage</th>
                                    <th>Mark</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10 - D</td>
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
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td>
                                        <p className="">Not Marked</p>
                                    </td>
                                    <td>
                                        <a className="edit_btn" onClick={handleOpenAttendenceModal}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <AttendenceModal
                    isAttendenceModalOpen={isAttendenceModalOpen}
                    setIsAttendenceModalOpen={setIsAttendenceModalOpen}
                    selectedDate={filterDate}
                />
            </StudentAttendenceWrapper>
        </>
    );
}

export default StudentAttendencePage;