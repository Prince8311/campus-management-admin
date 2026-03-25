import { useEffect, useState } from "react";
import { AddNewFeesTypeWrapper } from "../../../Styles/Modals/FinanceModalsStyle";

const AddNewFeesTypeModal = ({isAddNewFeesTypeOpen, setIsAddNewFeesTypeOpen}) => {
    const [items, setItems] = useState([]);
    const [itemInput, setItemInput] = useState('');

    function closeModal() {
        setIsAddNewFeesTypeOpen(false);
    }

    return (
        <>
            <AddNewFeesTypeWrapper className={isAddNewFeesTypeOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddNewFeesTypeOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add New Fees Structure</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="item_box">
                                <span>Fee Type<p>*</p><a>(Please press enter after typing each item name.)</a></span>
                                <div className="box_content">
                                    <li>
                                        <p>Tution</p>
                                        <span>
                                            <i className="fa-solid fa-circle-xmark"></i>
                                        </span>
                                    </li>
                                    {/* <input
                                        type="text"
                                        placeholder="Type item name"
                                        value={itemInput}
                                        onChange={(e) => setItemInput(e.target.value)}
                                        onKeyDown={handleItemKeyDown}
                                        className={items.length > 0 ? 'active' : ''}
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddNewFeesTypeWrapper>
        </>
    );
}

export default AddNewFeesTypeModal;