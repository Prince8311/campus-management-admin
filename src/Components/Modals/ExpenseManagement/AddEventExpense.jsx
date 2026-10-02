import { AddEventExpenseWrapper } from "../../../Styles/Modals/ExpenseManagementStyle";

const AddEventExpenseModal = ({isAddEventExpense, setIsAddEventExpense, nameLabel = "Event Name"}) => {

    function closeModal() {
        setIsAddEventExpense(false);
    }
    return(
        <>
            <AddEventExpenseWrapper className={isAddEventExpense ? 'active' : ''}>
                <div className={`modal_box ${isAddEventExpense ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Event Expense</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>{nameLabel} <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </AddEventExpenseWrapper>
        </>
    );
}

export default AddEventExpenseModal;
