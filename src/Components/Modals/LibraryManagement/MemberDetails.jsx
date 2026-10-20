import { useEffect, useState } from "react";
import { MemberDetailsWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import LibraryCardPreview from "./LibraryCardPreview";
import { toast } from "react-toastify";
import { getApiEndpoints, libraryBookImageBaseURL } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../Loader/SkeletonLoader";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import Pagination from "../../Pagination";
import BookReturnModal from "./BookReturn";
import BookIssueModal from "./BookIssue";

const MemberDetailsModal = ({ isOpenMemberDetailsModal, setIsOpenMemberDetailsModal, member, refreshData }) => {
    const api = getApiEndpoints();
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [issuedBooks, setIssuedBooks] = useState([]);
    const [isLoadingIssuedBooks, setIsLoadingIssuedBooks] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);
    const [returnBook, setReturnBook] = useState(null);
    const [isOpenBookIssueModal, setIsOpenBookIssueModal] = useState(false);

    function closeModal() {
        setIsCardOpen(false);
        setReturnBook(null);
        setIsOpenBookIssueModal(false);
        setIsOpenMemberDetailsModal(false);
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const renderDateTime = (value, variant) => {
        if (!value) return '-';

        const [date, time] = value.split(' - ');

        return (
            <div className={`date_time ${variant}`}>
                <span>{time || '-'}</span>
                <p>{date}</p>
            </div>
        );
    };

    const fetchIssuedBooks = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsLoadingIssuedBooks(true);
        }
        try {
            const response = await axiosInstance.get(api.issueBookHistory, {
                params: {
                    memberId: member?.id,
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                console.log("Issued Books Response:", response.data);
                setIssuedBooks(response?.data.issueHistory);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsLoadingIssuedBooks(false);
        }
    }

    useEffect(() => {
        if (isOpenMemberDetailsModal) {
            fetchIssuedBooks(true, page);
        }
    }, [isOpenMemberDetailsModal, page]);

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
                        <div className="member_action_btns">
                            <button type="button" className="issue_book_btn" onClick={() => setIsOpenBookIssueModal(true)}>
                                <i className="fa-solid fa-book-open"></i>
                                Issue Book
                            </button>
                            <button type="button" className="generate_card_btn" onClick={() => setIsCardOpen(true)}>
                                <i className="fa-regular fa-id-card"></i>
                                View library card
                            </button>
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
                                    {
                                        isLoadingIssuedBooks ? (
                                            Array.from({ length: 2 }).map((_, index) => (
                                                <tr key={index}>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td>
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : issuedBooks.length > 0 ? (
                                            issuedBooks.map((book, index) =>
                                                <tr key={index}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            {
                                                                book.cover_image ? (
                                                                    <img
                                                                        src={`${libraryBookImageBaseURL}/${book.cover_image}`}
                                                                        alt={member.name}
                                                                    />
                                                                ) : (
                                                                    <h5>{getInitials(book.name)}</h5>
                                                                )
                                                            }
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>{book.name}</h6>
                                                            <p>Author: {book.author}</p>
                                                        </div>
                                                    </td>
                                                    <td>{renderDateTime(book.issued_at, 'issued')}</td>
                                                    <td>{renderDateTime(book.returned_on, 'returned')}</td>
                                                    <td>
                                                        {book.returned_on ? (
                                                            <span className="returned_status" title="Book already returned" aria-label="Book already returned">
                                                                <i className="fa-solid fa-circle-check"></i>
                                                            </span>
                                                        ) : (
                                                            <a className="edit_btn" title="Return book" aria-label="Return book" role="button" tabIndex={0} onClick={() => setReturnBook(book)} onKeyDown={(event) => {
                                                                if (event.key === 'Enter' || event.key === ' ') {
                                                                    event.preventDefault();
                                                                    setReturnBook(book);
                                                                }
                                                            }}>
                                                                <i className="fa-solid fa-arrow-rotate-left"></i>
                                                            </a>
                                                        )}
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No issue list available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {
                        totalCount > 10 &&
                        <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={10} onPageChange={(newPage) => setPage(newPage)} />
                    }
                </div>
            </MemberDetailsWrapper>
            <LibraryCardPreview
                open={isOpenMemberDetailsModal && isCardOpen}
                onClose={() => setIsCardOpen(false)}
                memberName={member?.name}
                memberId={member?.id}
                libraryId={member?.library_id}
                userType={member?.user_type}
            />

            {isOpenMemberDetailsModal && returnBook && (
                <BookReturnModal
                    member={member}
                    book={returnBook}
                    refreshData={refreshData}
                    refreshIssueList={() => fetchIssuedBooks(false, page)}
                    onClose={() => setReturnBook(null)}
                />
            )}
            <BookIssueModal
                isOpenBookIssueModal={isOpenMemberDetailsModal && isOpenBookIssueModal}
                setIsOpenBookIssueModal={setIsOpenBookIssueModal}
                preselectedMember={member}
                refreshData={() => {
                    refreshData?.();
                    fetchIssuedBooks(false, page);
                }}
            />
        </>
    );
}

export default MemberDetailsModal;
