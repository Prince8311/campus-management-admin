import { useState } from "react";
import AddBookModal from "../../../Components/Modals/LibraryManagement/AddBook";
import { BookCatelogWrapper } from "../../../Styles/LibraryStyle";

const BookCatelogPage = () => {
    const [isAddBookModal, setIsAddBookModal] = useState(false);

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
                            <tr>
                                <td>105</td>
                                <td>Mega Math</td>
                                <td>Dr. Joydeep Barik</td>
                                <td>100</td>
                                <td>
                                    <p>Not Available</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>105</td>
                                <td>Mega Math</td>
                                <td>Dr. Joydeep Barik</td>
                                <td>100</td>
                                <td>
                                    <p className="yes">Available</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddBookModal
                    isAddBookModal={isAddBookModal}
                    setIsAddBookModal={setIsAddBookModal}
                />
            </BookCatelogWrapper>
        </>
    );
}

export default BookCatelogPage;