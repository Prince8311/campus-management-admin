import { useState } from "react";
import { LibraryMenberWrapper } from "../../../Styles/LibraryStyle";
import MemberDetailsModal from "../../../Components/Modals/LibraryManagement/MemberDetails";

const LibraryMembersPage = () => {

    const [isOpenMemberDetailsModal, setIsOpenMemberDetailsModal] = useState(false);

    const handleOpenStudentDetailsModal = () => {
        setIsOpenMemberDetailsModal(true);
    }
    return (
        <>
            <LibraryMenberWrapper>
                <div className="page_head">
                    <h2>Library Member List</h2>
                    <div className="btns_sec">
                        <button className="issueBook"><i className="fa-solid fa-book"></i>Issue Book</button>
                        <button className="addMember"><i className="fa-solid fa-plus"></i>Add New Member</button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Library Id</th>
                                <th>Total Book Issue</th>
                                <th>Returned at</th>
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
                                        <p>#gt4525 <i className="fa-solid fa-circle"></i> <span>[Student]</span></p>
                                    </div>
                                </td>
                                <td>54105</td>
                                <td>Mega Math</td>
                                <td>15-08-2026</td>
                                <td>
                                    <a className="view_btn" onClick={handleOpenStudentDetailsModal}><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <MemberDetailsModal
                    isOpenMemberDetailsModal={isOpenMemberDetailsModal}
                    setIsOpenMemberDetailsModal={setIsOpenMemberDetailsModal}
                />
            </LibraryMenberWrapper>
        </>
    );
}

export default LibraryMembersPage;