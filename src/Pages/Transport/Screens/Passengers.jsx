import { useEffect, useState } from "react";
import PassengerAddModal from "../../../Components/Modals/Transport/PassengerAdd";
import { PassengersWrapper } from "../../../Styles/TransportStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints, profileImageBaseURL } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import Pagination from "../../../Components/Pagination";

const PassengersPage = () => {
    const api = getApiEndpoints();
    const [passengers, setPassengers] = useState([]);
    const [isInitialPassengersLoading, setIsInitialPassengersLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);
    const [isAddPassenger, setIsAddPassenger] = useState(false);
    const [selectedPassenger, setSelectedPassenger] = useState(null);

    const fetchPassengers = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialPassengersLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchPassenger, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                console.log('Passengers:', response.data);
                setPassengers(response?.data.passengers);
                setTotalCount(response.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialPassengersLoading(false);
        }
    }

    useEffect(() => {
        fetchPassengers(true, page);
    }, [page]);

    const getInitials = (name) => {
        if (!name) return "";
        const parts = name.trim().split(" ").filter(Boolean);
        const first = parts[0]?.[0] || "";
        const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
        return (first + last).toUpperCase();
    };

    const handleOpenAddPassengerModal = () => {
        setSelectedPassenger(null);
        setIsAddPassenger(true);
    }

    const handleOpenEditPassengerModal = (passenger) => {
        setSelectedPassenger(passenger);
        setIsAddPassenger(true);
    }

    return (
        <>
            <PassengersWrapper>
                <div className="head_sec">
                    <h6>Passengers Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Passengers name..." />
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenAddPassengerModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Passenger</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Passengers Name</th>
                                <th>Type</th>
                                <th>Stopage</th>
                                <th>Route</th>
                                <th>Assigned Vehicle</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialPassengersLoading ? (
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
                                ) : passengers.length > 0 ? (
                                    passengers.map((passenger, index) =>
                                        <tr key={index}>
                                            <td>
                                                <div className="left_table_sec">
                                                    {
                                                        passenger.image ? (
                                                            <img
                                                                src={`${profileImageBaseURL}/${passenger.directory}/${passenger.image}`}
                                                                alt={passenger.name}
                                                            />
                                                        ) : (
                                                            <h5>{getInitials(passenger.name)}</h5>
                                                        )
                                                    }
                                                </div>
                                                <div className="right_table_sec">
                                                    <h6>{passenger.name}</h6>
                                                    <p>#{passenger.enroll_id}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="type_sec">
                                                    {passenger.user_type}
                                                </div>
                                            </td>
                                            <td>{passenger.transport_details.stopage}</td>
                                            <td>{passenger.transport_details.route}</td>
                                            <td>{passenger.transport_details.vehicle}</td>
                                            <td>
                                                <a className="edit_btn" onClick={() => handleOpenEditPassengerModal(passenger)}><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No passengers available.</td>
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

                <PassengerAddModal
                    isAddPassenger={isAddPassenger}
                    setIsAddPassenger={setIsAddPassenger}
                    selectedPassenger={selectedPassenger}
                    setSelectedPassenger={setSelectedPassenger}
                    refreshData={() => fetchPassengers(false, page)}
                />
            </PassengersWrapper>
        </>
    );
}

export default PassengersPage;
