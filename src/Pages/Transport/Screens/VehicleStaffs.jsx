import { useState } from "react";
import { VehicleStaffWrapper } from "../../../Styles/TransportStyle";
import AddStaffModal from "../../../Components/Modals/Transport/AddStaff";

const VehicleStaffsPage = () => {
    const [isStaffAddModal, setIsStaffAddModal] = useState(false);

    const handleOpenAddStaffModal = () => {
        setIsStaffAddModal(true);
    };
    return (
        <>
            <VehicleStaffWrapper>
                <div className="head_sec">
                    <h6>Vehicle Staff Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by VehiclesStaff..." />
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenAddStaffModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Vehicle Staff</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Staff Name</th>
                                <th>Contact No.</th>
                                <th>Role</th>
                                <th>Driving License</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Joydeep Barik
                                </td>
                                <td>
                                    9749708386
                                </td>
                                <td>Driver</td>
                                <td><i className="fa-solid fa-file-arrow-down"></i></td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddStaffModal
                    isStaffAddModal={isStaffAddModal}
                    setIsStaffAddModal={setIsStaffAddModal}
                />
            </VehicleStaffWrapper>
        </>
    );
}

export default VehicleStaffsPage;