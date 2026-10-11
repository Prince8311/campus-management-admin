import { useState } from "react";
import { MemberDetailsWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import LibraryCardPreview from "./LibraryCardPreview";

const MemberDetailsModal = ({ isOpenMemberDetailsModal, setIsOpenMemberDetailsModal, member }) => {
    const [isCardOpen, setIsCardOpen] = useState(false);

    function closeModal() {
        setIsCardOpen(false);
        setIsOpenMemberDetailsModal(false);
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    return (
        <>
            <MemberDetailsWrapper className={isOpenMemberDetailsModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenMemberDetailsModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Member Details</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="member_detalis_sec">
                        <div className="img_sec">
                            {member?.image ? (
                                <img
                                    src={member.image}
                                    alt={member?.name || "Library member"}
                                />
                            ) : (
                                <h6>{getInitials(member?.name)}</h6>
                            )}
                        </div>
                        <div className="details_content">
                            <div className="member_name">
                                <h5>{member?.name || "-"}</h5>
                                <span>{member?.user_type || "-"}</span>
                            </div>
                            <p>Library Id : {member?.library_id || "-"}</p>
                        </div>
                        <button type="button" className="generate_card_btn" onClick={() => setIsCardOpen(true)}>
                            <i className="fa-regular fa-id-card"></i>
                            View library card
                        </button>
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
                </div>
            </MemberDetailsWrapper>
            <LibraryCardPreview open={isOpenMemberDetailsModal && isCardOpen} onClose={() => setIsCardOpen(false)} />
        </>
    );
}

export default MemberDetailsModal;
