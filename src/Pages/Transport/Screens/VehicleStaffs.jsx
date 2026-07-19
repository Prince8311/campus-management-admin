import { useEffect, useState } from "react";
import { VehicleStaffWrapper } from "../../../Styles/TransportStyle";
import AddStaffModal from "../../../Components/Modals/Transport/AddStaff";
import { toast } from "react-toastify";
import { documentBaseURL, getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const VehicleStaffsPage = () => {
    const api = getApiEndpoints();
    const [isStaffAddModal, setIsStaffAddModal] = useState(false);
    const [vehicleStaffs, setVehicleStaffs] = useState([]);
    const [isInitialVehicleStaffsLoading, setIsInitialVehicleStaffsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);

    const handleDownloadLicense = async (fileName) => {
        if (!fileName) {
            toast.error("License file not available");
            return;
        }

        try {
            const fileUrl = `${documentBaseURL}/driving-license/${fileName}`;
            const response = await fetch(fileUrl);

            if (!response.ok) {
                throw new Error("Failed to download file");
            }

            const fileBlob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(fileBlob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            toast.error(error.message || "Unable to download license file");
        }
    };

    const fetchVehicleStaffs = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialVehicleStaffsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchVehicleStaffs, {
                params: {
                    page: pageNumber
                }
            });
            if (response?.data.status === 200) {
                // console.log("staffs", response);
                setVehicleStaffs(response?.data.staffs);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialVehicleStaffsLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicleStaffs(true, page);
    }, [page]);

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
                            <input type="text" placeholder="Search by Staff names..." />
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
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialVehicleStaffsLoading ? (
                                    Array.from({ length: 2 }).map((_, index) => (
                                        <tr key={index}>
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
                                ) : vehicleStaffs.length > 0 ? (
                                    vehicleStaffs.map((staff, index) => (
                                        <tr key={index}>
                                            <td>
                                                {staff.name}
                                            </td>
                                            <td>
                                                {staff.contact_no}
                                            </td>
                                            <td>{staff.role}</td>
                                            <td>
                                                {
                                                    staff.license_file ? (
                                                        <a onClick={() => handleDownloadLicense(staff.license_file)}>
                                                            <i className="fa-solid fa-file-arrow-down"></i>
                                                        </a>
                                                    ) : (
                                                        <>-</>
                                                    )
                                                }
                                            </td>
                                            <td>
                                                <p className={staff.status ? 'active' : ''}>{staff.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="empty_message">No Staff available.</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

                <AddStaffModal
                    isStaffAddModal={isStaffAddModal}
                    setIsStaffAddModal={setIsStaffAddModal}
                    refreshData={() => fetchVehicleStaffs(false, page)}
                />
            </VehicleStaffWrapper>
        </>
    );
}

export default VehicleStaffsPage;