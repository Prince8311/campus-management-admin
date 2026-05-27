import { ManageTeacherWrapper } from "../../../Styles/ModalStyle";

const ManageTeacher = ({ isManageTeacherModalOpen, setIsManageTeacherModalOpen, manageTeacherType }) => {
    
    function closeModal() {
        setIsManageTeacherModalOpen(false);
    }

    const getHeading = () => {
        switch (manageTeacherType) {
            case "add_class_teacher":
                return "Add Class Teacher for 10 - D";

            case "manage_teacher":
                return "Manage Subject Teacher";

            case "manage_co_teacher":
                return "Manage Co Teacher for 10 - D";

            default:
                return "Manage Teacher";
        }
    };
    
    return (
        <>
            <ManageTeacherWrapper className={isManageTeacherModalOpen ? "active" : ""}>
                <div className={`modal_box ${isManageTeacherModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>{getHeading()}</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="table_sec">
                        <div className="sec_inner">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Teacher Name</th>
                                        <th>Enrollment Number</th>
                                        <th>Attendance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="left_table_sec">
                                                <h5>JB</h5>
                                            </div>
                                            <div className="right_table_sec">
                                                <h6>Joydeep Barik</h6>
                                            </div>
                                        </td>
                                        <td>100</td>
                                        <td>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="left_table_sec">
                                                <h5>JB</h5>
                                            </div>
                                            <div className="right_table_sec">
                                                <h6>Joydeep Barik</h6>
                                            </div>
                                        </td>
                                        <td>100</td>
                                        <td>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </div>
            </ManageTeacherWrapper>
        </>
    );
}

export default ManageTeacher;