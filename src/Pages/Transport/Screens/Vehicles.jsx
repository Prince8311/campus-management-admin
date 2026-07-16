import { useState, useEffect } from "react";
import { VehicleWrapper } from "../../../Styles/TransportStyle";
import AddVehicleModal from "../../../Components/Modals/Transport/AddVehicle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";

const VehiclesPage = () => {

    const api = getApiEndpoints();
    const [vehicles, setVehicles] = useState([]);
    const [isInitialInstitutionsLoading, setIsInitialInstitutionsLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');

    const [isAddVehicleModal, setIsAddVehicleModal] = useState(false);
    const [page, setPage] = useState(1);

    const fetchVehicles = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialInstitutionsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchVehicles, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                console.log('Vehicles:', response.data);
                setVehicles(response?.data.vehicles);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialInstitutionsLoading(false);
        }
    }

    useEffect(() => {
        fetchVehicles(true, page);
    }, [page]);

    const handleOpenAddVehicleModal = () => {
        setIsAddVehicleModal(true);
    };

    return (
        <>
            <VehicleWrapper>
                <div className="head_sec">
                    <h6>Vehicles Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Vehicles..." />
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenAddVehicleModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Vehicle</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Vehicles Name</th>
                                <th>Vehicles Number</th>
                                <th>Type</th>
                                <th>Capacity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialInstitutionsLoading ? (
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
                                ) : vehicles.length > 0 ? (
                                    vehicles.map((vehicle, index) => (
                                        <tr key={index}>
                                            <td>{vehicle.name}</td>
                                            <td>{vehicle.number}</td>
                                            <td>{vehicle.type}</td>
                                            <td>{vehicle.capacity}</td>
                                            <td>
                                                <p className={vehicle.status ? 'active' : ''}>{vehicle.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="empty_message">No vehicles available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {
                    totalCount > 10 &&
                    <Pagination currentPage={page} totalItems={totalCount} itemsPerPage={10} onPageChange={(newPage) => setPage(newPage)} />
                }

                <AddVehicleModal
                    isAddVehicleModal={isAddVehicleModal}
                    setIsAddVehicleModal={setIsAddVehicleModal}
                    refreshData={() => fetchVehicles(false)}
                />
            </VehicleWrapper>
        </>
    );
}

export default VehiclesPage;