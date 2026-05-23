import { useEffect, useState } from "react";
import { ResidentsWrapper } from "../../../Styles/HostelStyle";
import AddResidentModal from "../../../Components/Modals/HostelManagement/AddResident";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const HostelResidentsPage = () => {
    const api = getApiEndpoints();
    const tabs = ["Student", "Staff"];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [isAddResidentOpen, setIsAddResidentOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [residents, setResidents] = useState([]);
    const [isInitialResidentsLoading, setIsInitialResidentsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');

    const handleOpenAddResidentModal = () => {
        setIsAddResidentOpen(true);
    };

    const fetchResidents = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialResidentsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchHostelResidents, {
                params: {
                    page: pageNumber,
                    userType: activeTab
                }
            });
            if(response?.data.status === 200) {
                console.log("Hostel Residents", response);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialResidentsLoading(false);
        }
    };

    useEffect(() => {
        fetchResidents(true, page);
    }, [activeTab, page]);

    return (
        <>
            <ResidentsWrapper>
                <div className="page_head">
                    <h2>Hostel Residents Directory</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenAddResidentModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Resident</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {tabs.map((tab) => (
                            <li
                                key={tab}
                                className={activeTab === tab ? "active" : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </li>
                        ))}
                    </div>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by student " />
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>
                                    Room
                                    <label>
                                        <i className="fa-solid fa-circle-info"></i>
                                        <a>Bed No. - Room No. - Building No.</a>
                                    </label>
                                </th>
                                <th>Class</th>
                                <th>Contact No.</th>
                                <th>Food Preference</th>
                                <th>Status</th>
                                <th>Action</th>
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
                                        <p>545454H1</p>
                                    </div>
                                </td>
                                <td>H1-056</td>
                                <td>1 - A</td>
                                <td>9749708386</td>
                                <td>Veg</td>
                                <td>
                                    <p className="oncampus">On Campus</p>
                                </td>
                                <td>
                                    <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddResidentModal
                    isAddResidentOpen={isAddResidentOpen}
                    setIsAddResidentOpen={setIsAddResidentOpen}
                    activeTab={activeTab}
                />
            </ResidentsWrapper>
        </>
    );
}

export default HostelResidentsPage;