import { NonTeachingStaffWrapper } from "../../../Styles/ReportsStyle";

const NonTeachingStaffPage = () => {
    return (
        <>
            <NonTeachingStaffWrapper>
                <div className="staff_search_sec">
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
                                <th>Emp. ID</th>
                                <th>Job Title</th>
                                <th>Mobile Number</th>
                                <th>Email ID</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Aadhar No.</th>
                                <th>PAN No.</th>
                                <th>Designation</th>
                                <th>Joining Date</th>
                                <th>Emp. Type</th>
                                <th>Qualification</th>
                                <th>Exp.</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A D PUNYA PATEL</td>
                                <td>ABH_102</td>
                                <td>ACCOUNTS SECTION</td>
                                <td>9986631700</td>
                                <td>amjidanaaz@gmail.com</td>
                                <td>1969-09-22</td>
                                <td>Female</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>PET</td>
                                <td>2024-05-06</td>
                                <td>office admin</td>
                                <td>MCOM</td>
                                <td>5.6</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="different_table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Educational Qualification</th>
                                <th>N/A</th>
                                <th>Female</th>
                                <th>Male</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Degree</td>
                                <td>18</td>
                                <td>11</td>
                                <td>8</td>
                                <td>37</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </NonTeachingStaffWrapper>
        </>
    );
}

export default NonTeachingStaffPage;