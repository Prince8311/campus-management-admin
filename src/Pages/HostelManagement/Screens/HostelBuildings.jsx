import { useState, useEffect } from "react";
import { HostelBuildingsWrapper } from "../../../Styles/HostelStyle";
import AddBuildingModal from "../../../Components/Modals/HostelManagement/AddBuilding";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const HostelBuildingsPage = () => {
    const api = getApiEndpoints();
    const [isAddBuildingOpen, setIsAddBuildingOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [buildings, setBuildings] = useState([]);
    const [isInitialBuildingsLoading, setIsInitialBuildingsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');

    const handleOpenAddBuildingModal = () => {
        setIsAddBuildingOpen(true);
    };

    const fetchBuildings = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialBuildingsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchHostelBuilding, {
                params: {
                    page: pageNumber,
                }
            });
            if (response?.data.status === 200) {
                console.log("Hostel Buildings", response);
                setBuildings(response?.data.buildings);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialBuildingsLoading(false);
        }
    };

    useEffect(() => {
        fetchBuildings(true, page);
    }, []);

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
                                <th>Sl. No.</th>
                                <th>Building Name</th>
                                <th>Floors</th>
                                <th>Living Rooms</th>
                                <th>Sick Rooms</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialBuildingsLoading ? (
                                    Array.from({ length: 2 }).map((_, i) => (
                                        <tr key={i}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" />
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px 0 0" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : buildings.length > 0 ? (
                                    buildings.map((building, i) =>
                                        <tr key={i}>
                                            <td>{building.id}</td>
                                            <td>{building.name}</td>
                                            <td>{building.total_floors}</td>
                                            <td>{building.living_rooms}</td>
                                            <td>{building.sick_rooms}</td>
                                            <td>
                                                <p className={building.status ? 'active' : ''}>{building.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No Hostel Building available.</td>
                                    </tr>
                                )
                            }

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