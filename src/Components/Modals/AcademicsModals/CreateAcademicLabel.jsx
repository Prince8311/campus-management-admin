import { CreateAcademicLabelWrapper } from "../../../Styles/ModalStyle";

const CreateAcademicLabelModal = ({isCreateAcademicLabelOpen, setIsCreateAcademicLabelOpen}) => {

    function closeModal() {
        setIsCreateAcademicLabelOpen(false);
    }

    return (
        <>
            <CreateAcademicLabelWrapper className={isCreateAcademicLabelOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateAcademicLabelOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Academic Level</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Academic Level Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <a><span>*</span>Note: You can't delete or edit Academic Level after creating</a>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CreateAcademicLabelWrapper>
        </>
    );
}

export default CreateAcademicLabelModal;