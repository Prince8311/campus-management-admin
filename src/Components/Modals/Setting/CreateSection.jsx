import { CreateSectionWrapper } from "../../../Styles/SettingModalStyle";

const CreateSectionPage = ({ isCreateSectionOpen, setIsCreateSectionOpen }) => {

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
                                <input type="text" required />
                                <span>Section name*</span>
                            </div>
                            <p><span>*</span>Note: You can't delete or edit profile section after creating</p>
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

export default CreateSectionPage;