import { ResidentsWrapper } from "../../../Styles/HostelStyle";

const HostelResidentsPage = () => {
    return (
        <>
            <ResidentsWrapper>
                <div className="page_head">
                    <h2>Hostel Residents Directory</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Resident</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        <li className="active">Student</li>
                        <li>Staff</li>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>
                                    Room
                                    <label>
                                        <i className="fa-solid fa-circle-info"></i>
                                        <a>Bed No. - Room No. - Building No.</a>
                                    </label>
                                </th>
                                <th>Class</th>
                                <th>Contact No.</th>
                                <th>Status</th>
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
                                        <p>545454H1</p>
                                    </div>
                                </td>
                                <td>H1-056</td>
                                <td>1 - A</td>
                                <td>9749708386</td>
                                <td>
                                    <p className="oncampus">On Campus</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="left_table_sec">
                                        <h5>SM</h5>
                                    </div>
                                    <div className="right_table_sec">
                                        <h6>Sourish Mondal</h6>
                                        <p>545454H2</p>
                                    </div>
                                </td>
                                <td>H2-056</td>
                                <td>1 - B</td>
                                <td>9134000456</td>
                                <td>
                                    <p className="onsick">On Sick</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ResidentsWrapper>
        </>
    );
}

export default HostelResidentsPage;