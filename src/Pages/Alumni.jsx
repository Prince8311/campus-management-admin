import { AlumniWrapper } from "../Styles/AlumniStyle";

const AlumniPage = () => {
    return (
        <>
            <AlumniWrapper>
                <div className="page_head">
                    <h2>Passed Out / Exited Students</h2>
                </div>
                <div className="filter_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="filter_sec">
                        <div className="filter_btn">
                            <p>Select Batch</p>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <div className="filter_dropdown"></div>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Passed Out</li>
                        <li>Exited</li>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
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
                                    </div>
                                </td>
                                <td>9749708386</td>
                                <td>
                                    <p className="active">Passed</p>
                                </td>
                                <td>
                                    <p className="">Inactive</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </AlumniWrapper>
        </>
    );
}

export default AlumniPage;