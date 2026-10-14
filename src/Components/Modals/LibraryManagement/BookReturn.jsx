import { useState } from "react";
import { BookReturnWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import { getApiEndpoints, libraryBookImageBaseURL } from "../../../Services/Api/ApiConfig";
import Calender from "../../Calender";
import TimeBox from "../../TimeBox";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import ButtonLoader from "../../Loader/ButtonLoader";

const monthIndexes = {
    jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
    jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
};

const parseLibraryDateTime = (value) => {
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

const BookReturnModal = ({ member, book, refreshData, refreshIssueList, onClose }) => {
    const api = getApiEndpoints();
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [returnDateTimeDropdown, setReturnDateTimeDropdown] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const getInitials = (name) => {
        const parts = (name || '').trim().split(' ').filter(Boolean);
        return ((parts[0]?.[0] || '') + (parts.length > 1 ? parts[parts.length - 1]?.[0] : '')).toUpperCase();
    };

    const handleReturnDateChange = (date) => {
        const abbreviatedDate = date.replace(
            /January|February|March|April|May|June|July|August|September|October|November|December/,
            (month) => month.slice(0, 3)
        );
        const selectedDate = parseLibraryDateTime(abbreviatedDate);
        const issuedAt = parseLibraryDateTime(book?.issued_at);
        const today = new Date();
        const selectedDay = selectedDate && new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        const issuedDay = issuedAt && new Date(issuedAt.getFullYear(), issuedAt.getMonth(), issuedAt.getDate());
        const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if ((issuedDay && selectedDay < issuedDay) || selectedDay > currentDay) {
            toast.error('Return date must be between the issued date and today.');
            return;
        }

        setReturnDate(abbreviatedDate);
        setReturnTime('');
        setReturnDateTimeDropdown('time');
    };

    const toggleReturnDateTime = () => {
        setReturnDateTimeDropdown((current) => current ? null : 'date');
    };

    const returnDateTime = [returnDate, returnTime].filter(Boolean).join(' - ');
    const issuedAt = parseLibraryDateTime(book?.issued_at);
    const selectedReturnDateTime = returnDate && returnTime
        ? parseLibraryDateTime(returnDateTime)
        : null;
    const isBeforeIssuedAt = Boolean(issuedAt && selectedReturnDateTime && selectedReturnDateTime < issuedAt);
    const isAfterCurrentTime = Boolean(selectedReturnDateTime && selectedReturnDateTime > new Date());
    const validationError = isBeforeIssuedAt
        ? `Return date & time cannot be before ${book.issued_at}.`
        : isAfterCurrentTime
            ? 'Return date & time cannot be after the current time.'
            : '';
    const isReturnDateTimeValid = Boolean(selectedReturnDateTime && !validationError);

    const returnBook = async (e) => {
        e.preventDefault();
        if (!isReturnDateTimeValid || isButtonLoading) {
            if (validationError) toast.error(validationError);
            return;
        }
        setIsButtonLoading(true);
        const payload = {
            issueId: book.id,
            returnedOn: returnDateTime
        };
        try {
            const response = await axiosInstance.post(api.returnBook, payload);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                refreshData?.();
                refreshIssueList?.();
                onClose();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <BookReturnWrapper>
                <div className="modal_box" role="dialog" aria-modal="true" aria-labelledby="book_return_title">
                    <div className="modal_head">
                        <h4 id="book_return_title">Book Return</h4>
                        <div className="close_sec">
                            <button type="button" aria-label="Close book return" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="member_detalis_sec">
                                <div className="img_sec">
                                    {member?.image ? (
                                        <img src={member.image} alt={member?.name || 'Library member'} />
                                    ) : (
                                        <h6>{getInitials(member?.name) || <i className="fa-regular fa-user"></i>}</h6>
                                    )}
                                </div>
                                <div className="details_content">
                                    <div className="member_name">
                                        <h5>{member?.name || '-'}</h5>
                                        <span>{member?.user_type || 'Member'}</span>
                                    </div>
                                    <p>Library Id : <strong>{member?.library_id || '-'}</strong></p>
                                </div>
                            </div>
                            <div className="book_details_sec">
                                <div className="book_content">
                                    <div className="book_img">
                                        {book?.cover_image ? (
                                            <img src={`${libraryBookImageBaseURL}/${book.cover_image}`} alt={book?.name || 'Book cover'} />
                                        ) : (
                                            <i className="fa-solid fa-book" aria-hidden="true"></i>
                                        )}
                                    </div>
                                    <div className="details_content">
                                        <span className="book_id">Book Id : {book?.book_id || 'BK7X29A4'}</span>
                                        <h5>{book?.name || '-'}</h5>
                                        <p className="author_name"><i className="fa-solid fa-pen-nib" aria-hidden="true"></i>Author: <strong>{book?.author || '-'}</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="date_box halfwidth">
                                <span>Return Date &amp; Time <p>*</p></span>
                                <div className="dropdown">
                                    <div className="date_btn" onClick={toggleReturnDateTime}>
                                        <p>{returnDateTime || ''}</p>
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    {returnDateTimeDropdown === 'date' && (
                                        <div className="calendar_dropdown">
                                            <Calender setFinalSelectedDate={handleReturnDateChange} />
                                        </div>
                                    )}
                                    {returnDateTimeDropdown === 'time' && (
                                        <div className="time_dropdown">
                                            <TimeBox
                                                selectedTime={returnTime}
                                                onTimeChange={setReturnTime}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {validationError && <p className="validation_error">{validationError}</p>}
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={returnBook} disabled={!isReturnDateTimeValid || isButtonLoading}>
                            {
                                isButtonLoading ? <ButtonLoader /> : 'Return'
                            }
                        </button>
                    </div>
                </div>
            </BookReturnWrapper>
        </>
    );
}

export default BookReturnModal;
