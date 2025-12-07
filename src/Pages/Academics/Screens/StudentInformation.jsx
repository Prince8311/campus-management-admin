import { StudentInformationWrapper } from "../../../Styles/AcademicStyle";

const StudentInformationPage = () => {
    return (
        <>
            <StudentInformationWrapper>
                <div className="page_head">
                    <h2>Student Directory</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Select Class</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Student</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Contact No.</th>
                                <th>Enrollment Status</th>
                                <th>App Status</th>
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
                                        <p>360 / 2025-26</p>
                                    </div>
                                </td>
                                <td>Class V</td>
                                <td>9749708386</td>
                                <td>Active</td>
                                <td></td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </StudentInformationWrapper>
        </>
    );
}

export default StudentInformationPage;