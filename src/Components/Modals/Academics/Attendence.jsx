import { AttendenceWrapper } from "../../../Styles/ModalStyle";

const AttendenceModal = ({ isAttendenceModalOpen, setIsAttendenceModalOpen }) => {
    const closeModal = () => {
        setIsAttendenceModalOpen(false);
    };

    return (
        <>
            <AttendenceWrapper className={isAttendenceModalOpen ? "active" : ""}>
                <div className={`modal_box ${isAttendenceModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Manage Attendence for 10 - D</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </AttendenceWrapper>
        </>
    );
}

export default AttendenceModal;