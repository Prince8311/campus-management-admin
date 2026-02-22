import { CreateSectionWrapper } from "../../../Styles/SettingModalStyle";

const CreateSectionModal = ({ isCreateSectionOpen, setIsCreateSectionOpen }) => {

    function closeModal() {
        setIsCreateSectionOpen(false);
    }

    return (
        <>
            <CreateSectionWrapper className={isCreateSectionOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSectionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create Section - Student Profile</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Section Name <p>*</p></span>
                                <input type="text" />
                            </div>
                            <a><span>*</span>Note: You can't delete or edit profile section after creating</a>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Save</button>
                    </div>
                </div>
            </CreateSectionWrapper>
        </>
    );
}

export default CreateSectionModal;