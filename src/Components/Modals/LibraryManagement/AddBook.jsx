import { useRef, useState } from "react";
import { AddBookWrapper } from "../../../Styles/Modals/LibraryManagementStyle";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";

const AddBookModal = ({ isAddBookModal, setIsAddBookModal, refreshData }) => {
    const api = getApiEndpoints();
    const [previewUrl, setPreviewUrl] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const fileInputRef = useRef(null);
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [selfNumber, setSelfNumber] = useState('');
    const [stock, setStock] = useState('');
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormComplete = Boolean(
        coverImage &&
        bookName.trim() &&
        authorName.trim() &&
        stock.trim() &&
        selfNumber.trim()
    );

    function closeModal() {
        setCoverImage(null);
        setPreviewUrl('');
        setBookName('');
        setAuthorName('');
        setSelfNumber('');
        setStock('');
        setIsAddBookModal(false);
    }

    function handleFileChange(event) {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            event.target.value = '';
            toast.error('Please select a valid image file.');
            return;
        }

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setCoverImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    }

    function handleRemoveImage(event) {
        event.preventDefault();
        event.stopPropagation();

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setCoverImage(null);
        setPreviewUrl('');

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    function openFileSelector() {
        fileInputRef.current?.click();
    }

    const handleSave = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const inputs = {
            name: bookName.trim(),
            author: authorName.trim(),
            stock: stock.trim(),
            shelf_no: selfNumber.trim(),
        };
        const formData = new FormData();
        formData.append('inputs', JSON.stringify(inputs));
        formData.append('cover_image', coverImage);
        try {
            const response = await axiosInstance.post(api.addBook, formData, {
                params: {
                    intent: 'add'
                }
            });
            if (response.data.status === 200) {
                toast.success(response.data.message);
                closeModal();
                refreshData();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddBookWrapper className={isAddBookModal ? 'active' : ''}>
                <div className={`modal_box ${isAddBookModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Book</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box full">
                                <div className="book_img_sec">
                                    <div
                                        className={`img_box ${previewUrl ? 'added' : ''}`}
                                        onClick={!previewUrl ? openFileSelector : undefined}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if ((event.key === 'Enter' || event.key === ' ') && !previewUrl) {
                                                event.preventDefault();
                                                openFileSelector();
                                            }
                                        }}
                                    >
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="Book front cover" />
                                        ) : (
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                        )}

                                        {previewUrl ? (
                                            <p></p>
                                        ) : (
                                            <p>Upload front side of the book<a>*</a></p>
                                        )}

                                        {previewUrl && (
                                            <button
                                                type="button"
                                                className="remove_btn"
                                                onClick={handleRemoveImage}
                                                aria-label="Remove uploaded book cover"
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        )}

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            hidden
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="input_box full">
                                <span>Book Name <p>*</p></span>
                                <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                            </div>
                            <div className="input_box full">
                                <span>Author Name <p>*</p></span>
                                <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                            </div>
                            <div className="input_box half">
                                <span>Stock<p>*</p></span>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    onInput={(event) => {
                                        event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '');
                                    }}
                                />
                            </div>
                            <div className="input_box half">
                                <span>Self Number<p>*</p></span>
                                <input type="text" value={selfNumber} onChange={(e) => setSelfNumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button disabled={!isFormComplete || isButtonLoading} onClick={handleSave}>
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </AddBookWrapper>
        </>
    );
}

export default AddBookModal;
