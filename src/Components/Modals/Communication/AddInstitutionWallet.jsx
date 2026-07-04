import { AddInstitutionWalletWrapper } from "../../../Styles/Modals/CommunicationStyle";

const AddInstitutionWalletModal = ({isAddInstitutionWalletModal, setIsAddInstitutionWalletModal}) => {

    function closeModal () {
        setIsAddInstitutionWalletModal(false);
    }
    return (
        <>
            <AddInstitutionWalletWrapper className={isAddInstitutionWalletModal ? 'active' : ''}>
                <div className={`modal_box ${isAddInstitutionWalletModal ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Instritution Wallet</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Select Instritution Name <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Sri Sai Angels School</p>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="search_sec">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                <input type="text" placeholder="Search by Subject Name..." />
                                            </div>
                                            <ul>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input_box fullWidth">
                                <span>Email <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWidth">
                                <span>Ph No. <p>*</p></span>
                                <input type="text" />
                            </div>
                            <div className="input_box halfWidth">
                                <span>Total Balance <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button> Save</button>
                    </div>
                </div>
            </AddInstitutionWalletWrapper>
        </>
    );
}

export default AddInstitutionWalletModal;