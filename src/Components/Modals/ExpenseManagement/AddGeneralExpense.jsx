import { AddGreneralExpenseWrapper } from "../../../Styles/Modals/ExpenseManagementStyle";

const AddGeneralExpenseModal = ({isAddGeneralExpense, setIsAddGeneralExpense}) => {

    function closeModal() {
        setIsAddGeneralExpense(false);
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
                            <div className="input_box fullwidth">
                                <span>Item Name <p>*</p></span>
                                <input type="text" />
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
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddGreneralExpenseWrapper>
        </>
    );
}

export default AddGeneralExpenseModal;