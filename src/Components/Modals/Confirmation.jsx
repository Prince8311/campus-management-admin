import { ConfirmationWrapper } from "../../Styles/SettingModalStyle";

const ConfirmationModal = () => {
    return (
        <>
            <ConfirmationWrapper>
                <div className="modal_box">
                    <div className="modal_body">
                        <div className="body_inner">
                            <p>Your messege send successfully</p>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button className="cancel">Cancel</button>
                        <button className="confirm"> Confirm </button>
                    </div>
                </div>
            </ConfirmationWrapper>
        </>
    );
}

export default ConfirmationModal;