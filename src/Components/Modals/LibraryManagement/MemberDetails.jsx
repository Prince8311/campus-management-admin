import { MemberDetailsWrapper } from "../../../Styles/Modals/LibraryManagementStyle";

const MemberDetailsModal = ({isOpenMemberDetailsModal, setIsOpenMemberDetailsModal}) => {

    function closeModal() {
        setIsOpenMemberDetailsModal(false);
    }
    return (
        <>
            <MemberDetailsWrapper className={isOpenMemberDetailsModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenMemberDetailsModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Joydeep Barik</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="member_detalis_sec">
                        <div className="img_sec">
                            <img src="/images/profile-image.png" alt="" />
                        </div>
                        <div className="details_content">
                            <h5>Joydeep Barik <span>[Student]</span></h5>
                            <p>Library Id : 5789412586</p>
                        </div>
                    </div>
                    <div className="table_section">
                        <div className="sec_inner">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Book Name</th>
                                        <th>Issued At</th>
                                        <th>Returned On</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Mega Math</td>
                                        <td>04-10-2026</td>
                                        <td>15-10-2026</td>
                                        <td>
                                            <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={closeModal}>Cancel</button>
                        <button>Save Changes </button>
                    </div>
                </div>
            </MemberDetailsWrapper>
        </>
    );
}

export default MemberDetailsModal;