import { useEffect, useState } from "react";
import { VehicleStaffWrapper } from "../../../Styles/TransportStyle";
import AddStaffModal from "../../../Components/Modals/Transport/AddStaff";
import { toast } from "react-toastify";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const VehicleStaffsPage = () => {
    const api = getApiEndpoints();
    const [isStaffAddModal, setIsStaffAddModal] = useState(false);
    const [vehicleStaffs, setVehicleStaffs] = useState([]);
    const [isInitialVehicleStaffsLoading, setIsInitialVehicleStaffsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);

    const fetchVehicleStaffs = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialVehicleStaffsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchVehicleStaffs);
            if (response?.data.status === 200) {
                console.log("staffs", response);
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
                                    <p className="active">Active</p>
                                </td>
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