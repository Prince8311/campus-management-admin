import { useNavigate } from "react-router-dom";
import { SelectStaffTypeWrapper } from "../../../Styles/Modals/StaffModalsStyle";

const SelectStaffTypeModal = ({isStaffTypeOpen, setIsStaffTypeOpen}) => {

    const navigate = useNavigate();

    const redirectAddStaffScreen = (type) => {
        sessionStorage.setItem("staffType", type);
        navigate("/admin/staff-management/add-staff");
        setIsStaffTypeOpen(false);
    }

    function closeModal() {
        setIsStaffTypeOpen(false);
    }

    return (
        <>
            <SelectStaffTypeWrapper className={isStaffTypeOpen ? 'active' : ''}>
                <div className={`modal_box ${isStaffTypeOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Select Staff Type</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_box" onClick={() => redirectAddStaffScreen('teaching')}>
                                <div className="box_item">
                                    <img src="/images/teacher.svg" alt="" />
                                    <p>Teaching</p>
                                </div>
                            </div>
                            <div className="inner_box" onClick={() => redirectAddStaffScreen('non-teaching')}>
                                <div className="box_item">
                                    <img src="/images/non-teaching.svg" alt="" />
                                    <p>Non Teaching</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SelectStaffTypeWrapper>
        </>
    );
}

export default SelectStaffTypeModal;