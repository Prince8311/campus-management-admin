import { useEffect, useState } from "react";
import { StaffInformationWrapper } from "../../../Styles/StaffStyle";
import SelectStaffTypeModal from "../../../Components/Modals/Staff/SelectStaffType";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";
import StaffDetailsModal from "../../../Components/Modals/Staff/StaffDetails";

const StaffInformationPage = () => {
    const api = getApiEndpoints();
    const [isStaffTypeOpen, setIsStaffTypeOpen] = useState(false);
    const tabs = [
        { label: "Teaching Staff", value: "teaching" },
        { label: "Non Teaching Staff", value: "non-teaching" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const [page, setPage] = useState(1);
    const [staffs, setStaffs] = useState([]);
    const [isInitialStaffsLoading, setIsInitialStaffsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');
    const [isStaffDetailsModal, setIsStaffDetailsModal] = useState(false);

    const handleOpenStaffTypeModal = () => {
        setIsStaffTypeOpen(true);
    };

    const handleOpenStaffDetailsModal = () => {
        setIsStaffDetailsModal(true);
    }

    const fetchStaffs = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialStaffsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStaffs, {
                params: {
                    staffType: selectedTab,
                    page: pageNumber,
                }
            });
            if (response.data.status === 200) {
                console.log("Staffs", response.data);
                setStaffs(response?.data.staffs);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialStaffsLoading(false);
        }
    }

    useEffect(() => {
        fetchStaffs(true, page);
    }, [selectedTab, page]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    return (
        <>
            <StaffInformationWrapper>
                <div className="page_head">
                    <h2>Staff Directory</h2>
                </div>
                <div className="student_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by Mobile Number" />
                    </div>
                    <div className="add_btn">
                        <button onClick={handleOpenStaffTypeModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Staff</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {tabs.map((tab) => (
                            <li
                                key={tab.value}
                                className={selectedTab === tab.value ? "active" : ""}
                                onClick={() => setSelectedTab(tab.value)}
                            >
                                {tab.label}
                            </li>
                        ))}
                    </div>
                </div>
                {
                    selectedTab === "teaching" && (
                        <div className="table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Teacher Name</th>
                                        <th>Contact No.</th>
                                        <th>Subject</th>
                                        <th>Class Teacher</th>
                                        <th>Employment Status</th>
                                        <th>App Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialStaffsLoading ? (
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
                                                        <SkeletonLoader width="15px" height="15px" margin="0 0 0 6px" />
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : staffs.length > 0 ? (
                                            staffs.map((staff, i) =>
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <h5>{getInitials(staff.name)}</h5>
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>{staff.name}</h6>
                                                            <p>#{staff.staff_id}</p>
                                                        </div>
                                                    </td>
                                                    <td>{staff.phone}</td>
                                                    <td>{staff.subject}</td>
                                                    <td><i className="fa-solid fa-minus"></i></td>
                                                    <td>
                                                        <p className={staff.status ? 'active' : ''}>{staff.status ? 'Active' : 'Inactive'}</p>
                                                    </td>
                                                    <td>
                                                        <p>Joined</p>
                                                    </td>
                                                    <td>
                                                        <a className="edit_btn" onClick={handleOpenStaffDetailsModal}><i className="fa-solid fa-pen-to-square"></i></a>
                                                        <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr>
                                                <td className="empty_message">No staffs available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
                {
                    selectedTab === "non-teaching" && (
                        <div className="second_table_sec">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Staff Name</th>
                                        <th>Contact No.</th>
                                        <th>Role</th>
                                        <th>Employment Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        isInitialStaffsLoading ? (
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
                                                    <td>
                                                        <SkeletonLoader width="15px" height="15px" />
                                                        <SkeletonLoader width="15px" height="15px" margin="0 6px 0 6px" />
                                                        <SkeletonLoader width="15px" height="15px" />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : staffs.length > 0 ? (
                                            staffs.map((staff, i) =>
                                                <tr key={i}>
                                                    <td>
                                                        <div className="left_table_sec">
                                                            <h5>{getInitials(staff.name)}</h5>
                                                        </div>
                                                        <div className="right_table_sec">
                                                            <h6>{staff.name}</h6>
                                                            <p>{staff.staff_id}</p>
                                                        </div>
                                                    </td>
                                                    <td>{staff.phone}</td>
                                                    <td>{staff.user_role}</td>
                                                    <td>
                                                        <p className={staff.status ? 'active' : ''}>{staff.status ? 'Active' : 'Inactive'}</p>
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
                                                <td className="empty_message">No staffs available.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }

                {
                    totalCount > 10 &&
                    <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={10} onPageChange={(newPage) => setPage(newPage)} />
                }

                <SelectStaffTypeModal
                    isStaffTypeOpen={isStaffTypeOpen}
                    setIsStaffTypeOpen={setIsStaffTypeOpen}
                />

                <StaffDetailsModal 
                    isStaffDetailsModal={isStaffDetailsModal}
                    setIsStaffDetailsModal={setIsStaffDetailsModal}
                    staffType={selectedTab}
                />
            </StaffInformationWrapper>
        </>
    );
}

export default StaffInformationPage;