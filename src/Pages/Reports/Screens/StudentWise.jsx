import { StudentWiseWrapper } from "../../../Styles/ReportsStyle";

const StudentWisePage = () => {
    return (
        <>
            <StudentWiseWrapper>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <i className="fa-solid fa-filter"></i>
                            <p>Filter by</p>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Contact NO.</th>
                                <th>Enroll ID</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Category</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Age</th>
                                <th>Enroll Type</th>
                                <th>Adm. Date</th>
                                <th>Adm. Type</th>
                                <th>Father's Name</th>
                                <th>Father's Mob. No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A D PUNYA PATEL</td>
                                <td>9986631700</td>
                                <td>170/2023-24</td>
                                <td>4</td>
                                <td>B</td>
                                <td>OBC</td>
                                <td>Female</td>
                                <td>2016-01-29</td>
                                <td>10</td>
                                <td>N/A</td>
                                <td>2023-05-26</td>
                                <td>Old Student</td>
                                <td>A M DEEPU</td>
                                <td>9986631700</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </StudentWiseWrapper>
        </>
    );
}

export default StudentWisePage;