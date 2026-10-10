import { useEffect, useId, useRef, useState } from "react";
import ConfirmationModal from "../Confirmation";
import { AddGreneralExpenseWrapper } from "../../../Styles/Modals/ExpenseManagementStyle";

const demoStockItems = [
    { name: "Rice Bag", quantity: 80, unit: "kg" },
    { name: "Office Notebook", quantity: 24, unit: "pcs" },
    { name: "A4 Paper Bundle", quantity: 45, unit: "pcs" },
    { name: "Cleaning Liquid", quantity: 12, unit: "litre" },
    { name: "Tissue Box", quantity: 36, unit: "box" },
    { name: "Ball Pen", quantity: 60, unit: "pcs" },
    { name: "Hand Sanitizer", quantity: 18, unit: "litre" },
    { name: "Printer Ink", quantity: 8, unit: "pcs" },
];

const AddGeneralExpenseModal = ({ isAddGeneralExpense, setIsAddGeneralExpense }) => {
    const [isStockOpen, setIsStockOpen] = useState(false);
    const [stockSearch, setStockSearch] = useState("");
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const stockRef = useRef(null);
    const stockButtonRef = useRef(null);
    const stockId = useId();
    const filteredStock = demoStockItems.filter((item) =>
        item.name.toLowerCase().includes(stockSearch.trim().toLowerCase())
    );

    useEffect(() => {
        if (!isAddGeneralExpense) {
            setIsStockOpen(false);
            setStockSearch("");
        }
    }, [isAddGeneralExpense]);

    useEffect(() => {
        if (!isStockOpen) return;
        const handleOutsideClick = (event) => {
            if (!stockRef.current?.contains(event.target)) setIsStockOpen(false);
        };
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsStockOpen(false);
                stockButtonRef.current?.focus();
            }
        };
        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isStockOpen]);

    function closeModal() {
        setIsAddGeneralExpense(false);
    }

    function handleSave() {
        setIsStockOpen(false);
        setIsAddGeneralExpense(false);
        setIsConfirmationOpen(true);
    }
    return (
        <>
            <AddGreneralExpenseWrapper className={isAddGeneralExpense ? 'active' : ''}>
                <div className={`modal_box ${isAddGeneralExpense ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add General Expense</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth item_name_box" ref={stockRef}>
                                <span>Item Name <p>*</p></span>
                                <div className="item_name_control">
                                    <input type="text" aria-label="Item Name" />
                                    <button type="button" className="view_stock_btn" ref={stockButtonRef}
                                        aria-expanded={isStockOpen} aria-controls={stockId}
                                        onClick={() => {
                                            setStockSearch("");
                                            setIsStockOpen((open) => !open);
                                        }}>
                                        <i className="fa-solid fa-cubes" aria-hidden="true"></i>
                                        View Stock
                                        <i className={`fa-solid fa-angle-${isStockOpen ? 'up' : 'down'}`} aria-hidden="true"></i>
                                    </button>
                                </div>
                                {isStockOpen && (
                                    <section className="stock_dropdown" id={stockId} aria-label="Available Items (In Stock)">
                                        <div className="stock_header">
                                            <h5>Available Items (In Stock)</h5>
                                            <button type="button" aria-label="Close stock dropdown" onClick={() => {
                                                setIsStockOpen(false);
                                                stockButtonRef.current?.focus();
                                            }}><i className="fa-solid fa-xmark" aria-hidden="true"></i></button>
                                        </div>
                                        <div className="stock_search">
                                            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                                            <input autoFocus type="search" placeholder="Search items..." aria-label="Search stock items"
                                                value={stockSearch} onChange={(event) => setStockSearch(event.target.value)} />
                                        </div>
                                        <ul className="stock_list">
                                            {filteredStock.map((item) => (
                                                <li key={item.name}>
                                                    <div className="stock_item_name">{item.name}</div>
                                                    <div className="stock_quantity"><strong>{item.quantity}</strong><small>{item.unit}</small></div>
                                                </li>
                                            ))}
                                            {filteredStock.length === 0 && <li className="stock_empty">No items found.</li>}
                                        </ul>
                                    </section>
                                )}
                            </div>
                            <div className="select_box halfwidth">
                                <span>Creater Name <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Joydeep Barik</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box halfwidth">
                                <span>Total Amount <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Quantity <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="select_box halfwidth">
                                <span>Quantity Unit <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>kg</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="upload_box">
                                <span>Billing Image<p>*</p></span>
                                <div className="document_upload_sec" >
                                    <label htmlFor="fileUpload" className="upload_label">
                                        <i className="fa-solid fa-cloud-arrow-up"></i>
                                        <p>Drag and drop your file here or <span>browse files</span></p>
                                        <b>Supported: JPG, JPEG, PNG, PDF</b>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button type="button" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </AddGreneralExpenseWrapper>
            <ConfirmationModal
                isModalOpen={isConfirmationOpen}
                setIsModalOpen={setIsConfirmationOpen}
                message="Expense added successfully."
            />
        </>
    );
}

export default AddGeneralExpenseModal;
