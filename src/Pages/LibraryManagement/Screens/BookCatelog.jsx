import { useEffect, useState } from "react";
import AddBookModal from "../../../Components/Modals/LibraryManagement/AddBook";
import { BookCatelogWrapper } from "../../../Styles/LibraryStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";

const BookCatelogPage = () => {
    const api = getApiEndpoints();
    const [books, setBooks] = useState([]);
    const [isInitialBooksLoading, setIsInitialBooksLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);
    const [isAddBookModal, setIsAddBookModal] = useState(false);

    const fetchBooks = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialBooksLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchBooks, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                console.log('Books:', response.data);
                setBooks(response?.data.books);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialBooksLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks(true, page);
    }, [page]);

    const handleModalOpen = () => {
        setIsAddBookModal(true);
    }

    return (
        <>
            <BookCatelogWrapper>
                <div className="page_head">
                    <h2>Book Catelog Directory</h2>
                    <div className="add_btn">
                        <button onClick={handleModalOpen}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Book</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>Stocks</th>
                                <th>Availability</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialBooksLoading ? (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <tr key={index}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" />
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : books.length > 0 ? (
                                    books.map((book, index) =>
                                        <tr key={index}>
                                            <td>{book.book_id}</td>
                                            <td>{book.name}</td>
                                            <td>{book.author}</td>
                                            <td>{book.stock}</td>
                                            <td>
                                                <p className={book.stock > 0 ? "available" : "not_available"}>
                                                    {book.stock > 0 ? "Available" : "Not Available"}
                                                </p>
                                            </td>
                                            <td>
                                                <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    (
                                        <tr>
                                            <td className="empty_message">No books available.</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <AddBookModal
                    isAddBookModal={isAddBookModal}
                    setIsAddBookModal={setIsAddBookModal}
                    refreshData={() => fetchBooks(false, page)}
                />
            </BookCatelogWrapper>
        </>
    );
}

export default BookCatelogPage;