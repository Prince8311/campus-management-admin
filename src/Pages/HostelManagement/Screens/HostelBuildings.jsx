import { useState } from "react";
import { HostelBuildingsWrapper } from "../../../Styles/HostelStyle";
import AddBuildingModal from "../../../Components/Modals/HostelManagement/AddBuilding";

const HostelBuildingsPage = () => {
    const [isAddBuildingOpen, setIsAddBuildingOpen] = useState(false);

    const handleOpenAddBuildingModal = () => {
        setIsAddBuildingOpen(true);
    };

    return (
        <>
            <HostelBuildingsWrapper>
                <div className="page_head">
                    <h2>Hostel Buildings Directory</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenAddBuildingModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Building</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Sl.No.</th>
                                <th>Building Name</th>
                                <th>Living Rooms</th>
                                <th>Sick Rooms</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>H1-056</td>
                                <td>25</td>
                                <td>2</td>
                                <td>
                                    <p className="active">Active</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddBuildingModal
                    isAddBuildingOpen={isAddBuildingOpen}
                    setIsAddBuildingOpen={setIsAddBuildingOpen}
                />
            </HostelBuildingsWrapper>
        </>
    );
}

export default HostelBuildingsPage;