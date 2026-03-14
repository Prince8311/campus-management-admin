import { CreateSubjectsWrapper } from "../../../Styles/SettingModalStyle";

const CreateSubjectsModal = ({isCreateSubjectOpen, setIsCreateSubjectOpen}) => {

    function closeModal() {
        setIsCreateSubjectOpen(false);
    }

    return (
        <>
            <CreateSubjectsWrapper className={isCreateSubjectOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSubjectOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create new Subject</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Subject Name <p>*</p></span>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CreateSubjectsWrapper>
        </>
    );
}

export default CreateSubjectsModal;