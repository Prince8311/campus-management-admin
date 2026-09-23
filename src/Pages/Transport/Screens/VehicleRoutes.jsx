import { useNavigate } from "react-router-dom";
import { VehicleRoutesWrapper } from "../../../Styles/TransportStyle";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { Pagination } from "@mui/material";


const VehicleRoutesPage = () => {
    const navigate = useNavigate();
    const api = getApiEndpoints();
    const [vehiclesRoutes, setVehiclesRoutes] = useState([]);
    const [isInitialRouteLoading, setIsInitialRouteLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);

    const fetchRoutes = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialRouteLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchRoutes, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                setVehiclesRoutes(response?.data.routes);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialRouteLoading(false);
        }
    }

    useEffect(() => {
        fetchRoutes(true, page);
    }, [page])

    const handleRedirectionAddRoutesPage = () => {
        navigate("/admin/add-routes");
    }
    return (
        <>
            <VehicleRoutesWrapper>
                <div className="head_sec">
                    <h6>Vehicles Routes Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Route names..." />
                        </div>
                        <div className="add_btn">
                            <button onClick={handleRedirectionAddRoutesPage}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Routes</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Route Name</th>
                                <th>Assigned Vehicle</th>
                                <th>Vehicle Number</th>
                                <th>Staffs</th>
                                <th>Stopages</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialRouteLoading ? (
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
                                ) : vehiclesRoutes.length > 0 ? (
                                    vehiclesRoutes.map((route, i) => (
                                        <tr>
                                            <td>{route.name}</td>
                                            <td> {route.vehicle_name} </td>
                                            <td> {route.vehicle_number} </td>
                                            <td>
                                                <div className="name_sec">
                                                    {route?.staffs?.length > 0 ? (
                                                        <>
                                                            <p>{route.staffs[0]}</p>

                                                            {route.staffs.length > 1 && (
                                                                <span>+{route.staffs.length - 1}</span>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <p>--</p>
                                                    )}
                                                </div>
                                            </td>
                                            <td>{route.stopageCount}</td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="empty_message">No vehicles routes available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </VehicleRoutesWrapper>
        </>
    );
}

export default VehicleRoutesPage;