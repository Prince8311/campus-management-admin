import { StudentAttendenceWrapper } from "../../../Styles/AcademicStyle";

const StudentAttendencePage = () => {
    return (
        <>
            <StudentAttendenceWrapper>
                <div className="page_head">
                    <h2>Student Attendance</h2>
                </div>
                <div className="overview_section">
                    <div className="sec_head">
                        <h6>Overview Report</h6>
                    </div>
                    <div></div>
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
                                    <th>Class Teacher</th>
                                    <th>Total Students</th>
                                    <th>Present</th>
                                    <th>Absent</th>
                                    <th>Percentage</th>
                                    <th>Action</th>
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
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td><i className="fa-solid fa-minus"></i></td>
                                    <td>
                                        <p className="">Not Marked</p>
                                    </td>
                                    <td>
                                        <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </StudentAttendenceWrapper>
        </>
    );
}

export default StudentAttendencePage;