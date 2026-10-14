import { useEffect, useState } from "react";
import { BookIssueWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import { toast } from "react-toastify";
import { getApiEndpoints, libraryBookImageBaseURL, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";
import Calender from "../../Calender";
import TimeBox from "../../TimeBox";

const monthIndexes = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
};

const parseIssueDateTime = (value) => {
    const match = String(value || '').trim().match(
        /^(\d{1,2})\s+([A-Za-z]+),\s*(\d{4})(?:\s+-\s+(\d{1,2}):(\d{2})\s+(AM|PM))?$/i
    );

    if (!match) return null;

    const month = monthIndexes[match[2].slice(0, 3).toLowerCase()];
    if (month === undefined) return null;

    let hour = Number(match[4] || 0);
    const minute = Number(match[5] || 0);
    const period = match[6]?.toUpperCase();

    if (period) {
        hour = hour % 12 + (period === 'PM' ? 12 : 0);
    }

    const parsedDate = new Date(Number(match[3]), month, Number(match[1]), hour, minute, 0, 0);
    return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
};

const BookIssueModal = ({ isOpenBookIssueModal, setIsOpenBookIssueModal, refreshData, preselectedMember }) => {
    const api = getApiEndpoints();
    const [members, setMembers] = useState([]);
    const [userSearchInput, setUserSearchInput] = useState('');
    const [selectedMember, setSelectedMember] = useState({});
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [books, setBooks] = useState([]);
    const [bookSearchInput, setBookSearchInput] = useState('');
    const [selectedBook, setSelectedBook] = useState({});
    const [showBookDropdown, setShowBookDropdown] = useState(false);
    const [issueDate, setIssueDate] = useState('');
    const [issueTime, setIssueTime] = useState('');
    const [issueDateTimeDropdown, setIssueDateTimeDropdown] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isMemberLocked = Boolean(preselectedMember?.id);

    function closeModal() {
        setIsOpenBookIssueModal(false);
        setSelectedMember({});
        setUserSearchInput('');
        setShowUserDropdown(false);
        setSelectedBook({});
        setBookSearchInput('');
        setShowBookDropdown(false);
        setIssueDate('');
        setIssueTime('');
        setIssueDateTimeDropdown(null);
    }

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const fetchUsers = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchLibraryMembers, {
                params: {
                    search: userSearchInput,
                    show_all: true
                }
            });
            if (respose?.data.status === 200) {
                setMembers(respose?.data.members);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isOpenBookIssueModal && isMemberLocked) {
            setSelectedMember(preselectedMember);
            setShowUserDropdown(false);
        } else if (isOpenBookIssueModal) {
            fetchUsers();
        }
    }, [isOpenBookIssueModal, userSearchInput, isMemberLocked, preselectedMember]);

    const toggleUserDropdown = () => {
        if (isMemberLocked) return;
        setShowUserDropdown(!showUserDropdown);
        setShowBookDropdown(false);
    };

    const handleSelectMember = (user) => {
        if (selectedMember.id === user.id) return;
        setSelectedMember(user);
        setShowUserDropdown(false);
    }

    const fetchBooks = async () => {
        try {
            const respose = await axiosInstance.get(api.fetchBooks, {
                params: {
                    search: bookSearchInput,
                    show_all: true
                }
            });
            if (respose?.data.status === 200) {
                setBooks(respose?.data.books);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isOpenBookIssueModal) {
            fetchBooks();
        }
    }, [isOpenBookIssueModal]);

    const toggleBookDropdown = () => {
        setShowBookDropdown(!showBookDropdown);
        setShowUserDropdown(false);
    };

    const handleSelectBook = (book) => {
        if (selectedBook.id === book.id) return;
        setSelectedBook(book);
        setShowBookDropdown(false);
    }

    const toggleIssueDateTime = () => {
        setShowUserDropdown(false);
        setShowBookDropdown(false);
        setIssueDateTimeDropdown((current) => current ? null : 'date');
    };

    const handleIssueDateChange = (date) => {
        const abbreviatedDate = date.replace(
            /January|February|March|April|May|June|July|August|September|October|November|December/,
            (month) => month.slice(0, 3)
        );
        const selectedDate = parseIssueDateTime(abbreviatedDate);
        const now = new Date();
        const selectedDay = selectedDate && new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        const currentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        if (selectedDay > currentDay) {
            toast.error('Issue date cannot be after today.');
            return;
        }

        setIssueDate(abbreviatedDate);
        setIssueTime('');
        setIssueDateTimeDropdown('time');
    };

    const issueDateTime = [issueDate, issueTime].filter(Boolean).join(' - ');
    const selectedIssueDateTime = issueDate && issueTime
        ? parseIssueDateTime(issueDateTime)
        : null;
    const isFutureIssueDateTime = Boolean(selectedIssueDateTime && selectedIssueDateTime > new Date());
    const issueDateTimeError = isFutureIssueDateTime
        ? 'Issue date & time cannot be after the current time.'
        : '';
    const isFormValid = Boolean(
        selectedMember.id
        && selectedMember.library_id
        && selectedBook.id
        && issueDate
        && issueTime
        && selectedIssueDateTime
        && !issueDateTimeError
    );

    const handleIssueBook = async (e) => {
        e.preventDefault();
        if (!isFormValid || isButtonLoading) {
            if (issueDateTimeError) toast.error(issueDateTimeError);
            return;
        }
        setIsButtonLoading(true);
        const payload = {
            memberId: selectedMember.id,
            bookId: selectedBook.id,
            issuedAt: issueDateTime,
        };
        try {
            const response = await axiosInstance.post(api.issueBook, payload);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                refreshData();
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <BookIssueWrapper className={isOpenBookIssueModal ? 'active' : ''}>
                <div className={`modal_box ${isOpenBookIssueModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Book Issue</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box halfwidth">
                                <span>Select Member <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className={`dropdown_btn ${isMemberLocked ? 'locked' : ''}`} onClick={toggleUserDropdown}>
                                        <p>{selectedMember.name || ''}</p>
                                        <i className={`fa-solid ${isMemberLocked ? 'fa-lock' : 'fa-angle-down'} ${showUserDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showUserDropdown && !isMemberLocked ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                members.length > 10 &&
                                                <div className="search_sec">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Search by Member Name..."
                                                        value={userSearchInput}
                                                        onChange={(e) => setUserSearchInput(e.target.value)}
                                                    />
                                                </div>
                                            }
                                            <ul>
                                                {
                                                    members.length === 0 &&
                                                    <li className="no_data">No Members Found</li>
                                                }
                                                {members.map((member, i) => (
                                                    <li
                                                        key={i}
                                                        className={`user_box ${selectedMember.id === member.id ? "active" : ""}`}
                                                        onClick={() => handleSelectMember(member)}
                                                    >
                                                        <div className="box_left">
                                                            {member.image ? (
                                                                <img
                                                                    src={`${profileImageBaseURL}/${member.directory}/${member.image}`}
                                                                    alt={member.name}
                                                                />
                                                            ) : (
                                                                <h6>{getInitials(member.name)}</h6>
                                                            )}
                                                        </div>

                                                        <div className="box_right">
                                                            <p>{member.name}</p>
                                                            <span>#{member.enroll_id}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Library ID<p>*</p></span>
                                <input type="text" value={selectedMember.library_id || ""} readOnly />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Select Book<p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={toggleBookDropdown}>
                                        <p>{selectedBook.name || ""}</p>
                                        <i className={`fa-solid fa-angle-down ${showBookDropdown ? "active" : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showBookDropdown ? "active" : ''}`}>
                                        <div className="dropdown_inner">
                                            {
                                                books.length > 10 &&
                                                <div className="search_sec">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                    <input
                                                        type="text"
                                                        placeholder="Search by Book Name..."
                                                        value={bookSearchInput}
                                                        onChange={(e) => setBookSearchInput(e.target.value)}
                                                    />
                                                </div>
                                            }
                                            <ul>
                                                {
                                                    books.length === 0 &&
                                                    <li className="no_data">No Books Found</li>
                                                }
                                                {
                                                    books.map((book, i) =>
                                                        <li
                                                            key={i}
                                                            className={`user_box ${selectedBook.id === book.id ? "active" : ""}`}
                                                            onClick={() => handleSelectBook(book)}
                                                        >
                                                            <div className="box_left">
                                                                {
                                                                    book.cover_image ? (
                                                                        <img
                                                                            src={`${libraryBookImageBaseURL}/${book.cover_image}`}
                                                                            alt={book.name}
                                                                        />
                                                                    ) : (
                                                                        <h5>{getInitials(book.name)}</h5>
                                                                    )
                                                                }
                                                            </div>
                                                            <div className="box_right">
                                                                <p>{book.name}</p>
                                                                <span>Author: {book.author}</span>
                                                            </div>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="date_box halfwidth">
                                <span>Issue Date &amp; Time <p>*</p></span>
                                <div className="dropdown">
                                    <div className="date_btn" onClick={toggleIssueDateTime}>
                                        <p>{issueDateTime || ''}</p>
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    {issueDateTimeDropdown === 'date' && (
                                        <div className="calendar_dropdown">
                                            <Calender setFinalSelectedDate={handleIssueDateChange} />
                                        </div>
                                    )}
                                    {issueDateTimeDropdown === 'time' && (
                                        <div className="time_dropdown">
                                            <TimeBox
                                                selectedTime={issueTime}
                                                onTimeChange={setIssueTime}
                                            />
                                        </div>
                                    )}
                                </div>
                                {issueDateTimeError && <p className="validation_error">{issueDateTimeError}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button
                            onClick={handleIssueBook}
                            disabled={!isFormValid || isButtonLoading}
                        >
                            {
                                isButtonLoading ? <ButtonLoader /> : 'Issue Now'
                            }
                        </button>
                    </div>
                </div>
            </BookIssueWrapper>
        </>
    );
}

export default BookIssueModal;
