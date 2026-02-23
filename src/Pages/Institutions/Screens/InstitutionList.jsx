import { useState } from "react";
import AddInstitutionModal from "../../../Components/Modals/Institutions/AddInstitution";
import { InstitutionListWrapper } from "../../../Styles/InstitutionStyle";

const InstitutionListPage = () => {
    const [isAddInstitutionOpen, setIsAddInstitutionOpen] = useState(false);

    const handleOpenAddInstitutionModal = () => {
        setIsAddInstitutionOpen(true);
    };

    return (
        <>
            <InstitutionListWrapper>
                <div className="page_head">
                    <h2>Listed Institutions</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Institutions name" />
                    </div>
                    <div className="add_btn">
                        <button onClick={handleOpenAddInstitutionModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Institution</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Institution Name</th>
                                <th>Contact No.</th>
                                <th>Students</th>
                                <th>Staffs</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Sri Sai Angels School
                                </td>
                                <td>9749708386</td>
                                <td>1000</td>
                                <td>1000</td>
                                <td>
                                    <p className="active">Active</p>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sri Sai Angels School
                                </td>
                                <td>9749708386</td>
                                <td>2000</td>
                                <td>2000</td>
                                <td>
                                    <p className="">Inactive</p>
                                </td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddInstitutionModal 
                    isAddInstitutionOpen={isAddInstitutionOpen}
                    setIsAddInstitutionOpen={setIsAddInstitutionOpen}
                />
            </InstitutionListWrapper>
        </>
    );
}

export default InstitutionListPage;