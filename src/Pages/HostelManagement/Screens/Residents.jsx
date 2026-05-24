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
            if (response?.data.status === 200) {
                console.log("Hostel Residents", response);
                setResidents(response?.data.residents);
                setTotalCount(response?.data.totalCount);
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

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    // Converts status to className (e.g., 'On Campus' -> 'on_campus')
    const getStatusClass = (status) => {
        if (!status) return "";
        return status.toLowerCase().replace(/\s+/g, "_");
    };

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
                {
                    activeTab === "Student" && (
                        <div className="table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>
                                            Room
                                            <label>
                                                <i className="fa-solid fa-circle-info"></i>
                                                <a>Building No. - Room No. - Bed No.</a>
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
                                    {
                                        isInitialResidentsLoading ? (
                                            Array.from({ length: 2 }).map((_, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <SkeletonLoader width="30px" height="30px" />
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <SkeletonLoader width="100%" height="15px" />
                                                            <SkeletonLoader width="150px" height="12px" margin="5px 0 0 0" />
                                                        </div>
                                                    </td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td>
                                                        <SkeletonLoader width="15px" height="15px" />
                                                        <SkeletonLoader width="15px" height="15px" margin="0 6px 0 6px" />
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : residents.length > 0 ? (
                                            residents.map((resident, i) =>
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <h5>{getInitials(resident.resident_name)}</h5>
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>{resident.resident_name}</h6>
                                                            <p>#{resident.user_id}</p>
                                                        </div>
                                                    </td>
                                                    <td>{resident.room_details.building_name}-{resident.room_details.room_no}-{resident.room_details.bed_no}</td>
                                                    <td>{resident.class_section}</td>
                                                    <td>{resident.resident_details.phone}</td>
                                                    <td>{resident.food_preference}</td>
                                                    <td>
                                                        <p className={getStatusClass(resident.status)}>{resident.status}</p>
                                                    </td>
                                                    <td>
                                                        <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                                        <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                        <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No residents available.</td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    )
                }
                {
                    activeTab === "Staff" && (
                        <div className="table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>
                                            Room
                                            <label>
                                                <i className="fa-solid fa-circle-info"></i>
                                                <a>Building No. - Room No. - Bed No.</a>
                                            </label>
                                        </th>
                                        <th>Role</th>
                                        <th>Contact No.</th>
                                        <th>Food Preference</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialResidentsLoading ? (
                                            Array.from({ length: 2 }).map((_, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <SkeletonLoader width="30px" height="30px" />
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <SkeletonLoader width="100%" height="15px" />
                                                            <SkeletonLoader width="150px" height="12px" margin="5px 0 0 0" />
                                                        </div>
                                                    </td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td><SkeletonLoader width="100%" height="13px" /></td>
                                                    <td>
                                                        <SkeletonLoader width="15px" height="15px" />
                                                        <SkeletonLoader width="15px" height="15px" margin="0 6px 0 6px" />
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : residents.length > 0 ? (
                                            residents.map((resident, i) =>
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <h5>{getInitials(resident.resident_name)}</h5>
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>{resident.resident_name}</h6>
                                                            <p>#{resident.user_id}</p>
                                                        </div>
                                                    </td>
                                                    <td>{resident.room_details.building_name}-{resident.room_details.room_no}-{resident.room_details.bed_no}</td>
                                                    <td>{resident.role}</td>
                                                    <td>{resident.resident_details.phone}</td>
                                                    <td>{resident.food_preference}</td>
                                                    <td>
                                                        <p className={getStatusClass(resident.status)}>{resident.status}</p>
                                                    </td>
                                                    <td>
                                                        <a className="view_btn"><i className="fa-solid fa-eye"></i></a>
                                                        <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                        <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No residents available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }

                <AddResidentModal
                    isAddResidentOpen={isAddResidentOpen}
                    setIsAddResidentOpen={setIsAddResidentOpen}
                    activeTab={activeTab}
                    refreshResidents={() => fetchResidents(false)}
                />
            </ResidentsWrapper>
        </>
    );
}

export default HostelResidentsPage;