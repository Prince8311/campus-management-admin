import { useEffect, useState } from "react";
import { LibraryMenberWrapper } from "../../../Styles/LibraryStyle";
import MemberDetailsModal from "../../../Components/Modals/LibraryManagement/MemberDetails";
import NewLibraryMemberModal from "../../../Components/Modals/LibraryManagement/NewLibraryMember";
import BookIssueModal from "../../../Components/Modals/LibraryManagement/BookIssue";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";

const LibraryMembersPage = () => {
    const api = getApiEndpoints();
    const [members, setMembers] = useState([]);
    const [isInitialMembersLoading, setIsInitialMembersLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);
    const [isOpenMemberDetailsModal, setIsOpenMemberDetailsModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isOpenNewMemberModal, setIsOpenNewMemberModal] = useState(false);
    const [isOpenBookIssueModal, setIsOpenBookIssueModal] = useState(false);

    const fetchMembers = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialMembersLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchLibraryMembers, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                setMembers(response?.data.members);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialMembersLoading(false);
        }
    }

    useEffect(() => {
        fetchMembers(true, page);
    }, [page]);

    const handleOpenStudentDetailsModal = (member) => {
        setSelectedMember({
            id: member.id,
            name: member.name,
            user_type: member.user_type,
            library_id: member.library_id,
            image: member.image
                ? `${profileImageBaseURL}/${member.directory}/${member.image}`
                : null,
        });
        setIsOpenMemberDetailsModal(true);
    }

    const handleOpenNewMemberModal = () => {
        setIsOpenNewMemberModal(true);
    }

    const handleOpenBookIssueModal = () => {
        setIsOpenBookIssueModal(true);
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
            <LibraryMenberWrapper>
                <div className="page_head">
                    <h2>Library Member List</h2>
                    <div className="btns_sec">
                        <button className="issueBook" onClick={handleOpenBookIssueModal}><i className="fa-solid fa-book"></i>Issue Book</button>
                        <button className="addMember" onClick={handleOpenNewMemberModal}><i className="fa-solid fa-plus"></i>Add New Member</button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Library Id</th>
                                <th>Total Book Issued</th>
                                <th>Returned</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialMembersLoading ? (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <tr key={index}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px 0 0" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : members.length > 0 ? (
                                    members.map((member, index) =>
                                        <tr key={index}>
                                            <td>
                                                <div className="left_table_sec">
                                                    {
                                                        member.image ? (
                                                            <img
                                                                src={`${profileImageBaseURL}/${member.directory}/${member.image}`}
                                                                alt={member.name}
                                                            />
                                                        ) : (
                                                            <h5>{getInitials(member.name)}</h5>
                                                        )
                                                    }
                                                </div>
                                                <div className="right_table_sec">
                                                    <h6>{member.name}</h6>
                                                    <p>#{member.enroll_id} <i className="fa-solid fa-circle"></i> <span>{member.user_type}</span></p>
                                                </div>
                                            </td>
                                            <td>{member.library_id}</td>
                                            <td>{member.total_issued > 0 ? member.total_issued : '-'}</td>
                                            <td>{member.returned > 0 ? member.returned : '-'}</td>
                                            <td>
                                                <a className="view_btn" onClick={() => handleOpenStudentDetailsModal(member)}><i className="fa-solid fa-eye"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No members available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {
                    totalCount > 10 &&
                    <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={10} onPageChange={(newPage) => setPage(newPage)} />
                }

                <NewLibraryMemberModal
                    isOpenNewMemberModal={isOpenNewMemberModal}
                    setIsOpenNewMemberModal={setIsOpenNewMemberModal}
                    members={members}
                    refreshData={() => fetchMembers(false, page)}
                />
                <MemberDetailsModal
                    isOpenMemberDetailsModal={isOpenMemberDetailsModal}
                    setIsOpenMemberDetailsModal={setIsOpenMemberDetailsModal}
                    member={selectedMember}
                    refreshData={() => fetchMembers(false, page)}
                />
                <BookIssueModal
                    isOpenBookIssueModal={isOpenBookIssueModal}
                    setIsOpenBookIssueModal={setIsOpenBookIssueModal}
                    refreshData={() => fetchMembers(false, page)}
                />
            </LibraryMenberWrapper>
        </>
    );
}

export default LibraryMembersPage;
