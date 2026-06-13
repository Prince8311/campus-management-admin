import { useEffect, useState } from "react";
import { StudentAttendenceWrapper } from "../../../Styles/AcademicStyle";
import AttendenceModal from "../../../Components/Modals/Academics/Attendence";
import StudentWeeklyAttendanceGraph from "../Charts/WeeklyAttendence";
import StudentDailyAttendance from "../Charts/DailyAttendence";
import Calender from "../../../Components/Calender";
import AttendenceConfigarationModal from "../../../Components/Modals/Academics/AttendenceConfigaration";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const StudentAttendencePage = () => {
    const api = getApiEndpoints();
    const [isAttendenceModalOpen, setIsAttendenceModalOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isConfigarationModalOpen, setIsConfigarationModalOpen] = useState(false);
    const [intialConfigarationsLoading, setIntialConfigarationsLoading] = useState(false);
    const [configurationList, setConfigurationList] = useState([]);

    const getFormattedCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = today.toLocaleString('en-US', { month: 'long' });
        const year = today.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const [filterDate, setFilterDate] = useState(getFormattedCurrentDate());

    const fetchAttendanceConfigurationList = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIntialConfigarationsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.attendanceConfigurationList);
            if (response?.data.status === 200) {
                setConfigurationList(response?.data.data);
                console.log("listttttttttttttt", response?.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIntialConfigarationsLoading(false);
        }
    }

    useEffect(() => {
        fetchAttendanceConfigurationList(true);
    }, []);

    const handleOpenAttendenceModal = () => {
        setIsAttendenceModalOpen(true);
    };

    const handleOpenConfigarationModal = () => {
        setIsConfigarationModalOpen(true);
    };

    return (
        <>
            <StudentAttendenceWrapper>
                <div className="page_head">
                    <h2>Student Attendance</h2>
                    {/* {
                        configurationList.length > 0 &&
                        <div className="configuration_btn">
                            <button onClick={handleOpenConfigarationModal}>
                                <i className="fa-solid fa-sliders"></i>
                                <p>Attendence Configaration</p>
                            </button>
                        </div>
                    } */}
                    <div className="configuration_btn">
                        <button onClick={handleOpenConfigarationModal}>
                            <i className="fa-solid fa-sliders"></i>
                            <p>Attendence Configuration</p>
                        </button>
                    </div>
                </div>
                {
                    configurationList.length > 0 ? (
                        <>
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
                                    <div className="heading_option_part">
                                        <div className="inner_part">
                                            <a className="part_box">
                                                <span><i className="fa-solid fa-users"></i></span>
                                                <h6>Class Wise</h6>
                                            </a>
                                            <a className="part_box active">
                                                <span><i className="fa-regular fa-clock"></i></span>
                                                <h6>Period Wise</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="student_search_sec">
                                    <div className="search_sec">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        <input type="text" placeholder="Search for class/section or class teacher" />
                                    </div>
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
                                                <th>Total Students</th>
                                                <th>Present</th>
                                                <th>Absent</th>
                                                <th>Percentage</th>
                                                <th>Marked by</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10 - D</td>
                                                <td>100</td>
                                                <td><i className="fa-solid fa-minus"></i></td>
                                                <td><i className="fa-solid fa-minus"></i></td>
                                                <td>
                                                    <p className="">Not Marked</p>
                                                </td>
                                                <td>
                                                    <div className="left_table_sec">
                                                        <h5>JB</h5>
                                                    </div>
                                                    <div className="right_table_sec">
                                                        <h6>Joydeep Barik</h6>
                                                        <p>9749708386</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="secondtable_sec">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Class & Section</th>
                                                <th>Period</th>
                                                <th>Total Students</th>
                                                <th>Present</th>
                                                <th>Absent</th>
                                                <th>Percentage</th>
                                                <th>Marked by</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>10 - D</td>
                                                <td>First <span>(10:00 am - 11:45 am)</span></td>
                                                <td>100</td>
                                                <td><i className="fa-solid fa-minus"></i></td>
                                                <td><i className="fa-solid fa-minus"></i></td>
                                                <td>
                                                    <p className="">Not Marked</p>
                                                </td>
                                                <td>
                                                    <div className="left_table_sec">
                                                        <h5>JB</h5>
                                                    </div>
                                                    <div className="right_table_sec">
                                                        <h6>Joydeep Barik</h6>
                                                        <p>9749708386</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="empty_screen">
                            <div className="empty_img">
                                <img src="/images/empty-configuration.png" alt="" />
                            </div>
                            <div className="empty_screen_content">
                                <h4>No Attendance Configuration Found</h4>
                                <a>Set up your tracking preferences—Class-wise or Period-wise—to begin recording attendance.</a>
                                <button>
                                    <i className="fa-solid fa-sliders"></i>
                                    <p>Attendence Configuration</p>
                                </button>
                            </div>
                            <div className="empty_screen_bottom_sec">
                                <span><i className="fa-solid fa-circle-info"></i></span>
                                <div className="bottom_item">
                                    <h6>Why do I see this?</h6>
                                    <p>Attendance tracking requires a one-time global configuration for your institution. You can choose to track attendance for each period or once per class session.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                <AttendenceModal
                    isAttendenceModalOpen={isAttendenceModalOpen}
                    setIsAttendenceModalOpen={setIsAttendenceModalOpen}
                    selectedDate={filterDate}
                />

                <AttendenceConfigarationModal
                    isConfigarationModalOpen={isConfigarationModalOpen}
                    setIsConfigarationModalOpen={setIsConfigarationModalOpen}
                />
            </StudentAttendenceWrapper>
        </>
    );
}

export default StudentAttendencePage;