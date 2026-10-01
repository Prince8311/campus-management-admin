import { useRef, useState } from "react";
import { AddBookWrapper } from "../../../Styles/Modals/LibraryManagementStyle";

const AddBookModal = ({isAddBookModal, setIsAddBookModal}) => {
    const [previewUrl, setPreviewUrl] = useState('');
    const fileInputRef = useRef(null);

    function closeModal() {
        setIsAddBookModal(false);
    }

    function handleFileChange(event) {
        const file = event.target.files?.[0];

        if (!file) return;

        if (!file.type.startsWith('image/')) {
            return;
        }

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setPreviewUrl(URL.createObjectURL(file));
    }

    function handleRemoveImage(event) {
        event.preventDefault();
        event.stopPropagation();

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setPreviewUrl('');

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    function openFileSelector() {
        fileInputRef.current?.click();
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
                                            <i className="fa-solid fa-cloud-arrow-down"></i>
                                        )}

                                        {previewUrl ? (
                                            <p>Book cover selected</p>
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
                                <input type="text"/>
                            </div>
                            <div className="input_box full">
                                <span>Author Name <p>*</p></span>
                                <input type="text"/>
                            </div>
                            <div className="input_box half">
                                <span>Stock<p>*</p></span>
                                <input type="text"/>
                            </div>
                            <div className="input_box half">
                                <span>Self Number<p>*</p></span>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddBookWrapper>
        </>
    );
}

export default AddBookModal;