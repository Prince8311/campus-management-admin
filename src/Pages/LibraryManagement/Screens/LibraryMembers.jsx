import { LibraryMenberWrapper } from "../../../Styles/LibraryStyle";

const LibraryMembersPage = () => {
    return (
        <>
            <LibraryMenberWrapper>
                <div className="page_head">
                    <h2>Library Member List</h2>
                    <div className="btns_sec">
                        <button className="issueBook"><i className="fa-solid fa-book"></i>IssueBook</button>
                        <button className="addMember"><i className="fa-solid fa-plus"></i>Add New Member</button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Library Id</th>
                                <th>Book Name</th>
                                <th>Issued at</th>
                                <th>Submitted On</th>
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
                                        <p>#gt4525 <i className="fa-solid fa-circle"></i> <span>[10 - A]</span></p>
                                    </div>
                                </td>
                                <td>54105</td>
                                <td>Mega Math</td>
                                <td>15-08-2026</td>
                                <td>20-08-2026</td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </LibraryMenberWrapper>
        </>
    );
}

export default LibraryMembersPage;