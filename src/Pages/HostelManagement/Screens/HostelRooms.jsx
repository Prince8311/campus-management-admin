import { useState, useEffect } from "react";
import { HostelRoomWrapper } from "../../../Styles/HostelStyle";
import AddRoomsModal from "../../../Components/Modals/HostelManagement/AddRooms";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const HostelRoomsPage = () => {
    const api = getApiEndpoints();
    const [isAddRoomOpen, setIsAddRoomOpen] = useState(false);
    const tabs = [
        { label: "Living Rooms", value: "Living Room" },
        { label: "Sick Rooms", value: "Sick Room" }
    ];
    const [selectedTab, setSelectedTab] = useState(tabs[0].value);
    const [page, setPage] = useState(1);
    const [rooms, setRooms] = useState([]);
    const [isInitialBuildingsLoading, setIsInitialBuildingsLoading] = useState(true);
    const [totalCount, setTotalCount] = useState('');

    const handleOpenAddRoomModal = () => {
        setIsAddRoomOpen(true);
    };

    const fetchRooms = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialBuildingsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchHostelRoom, {
                params: {
                    page: pageNumber,
                    category: selectedTab
                }
            });
            if (response?.data.status === 200) {
                console.log("Hostel Rooms", response);
                setRooms(response?.data.rooms);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialBuildingsLoading(false);
        }
    }

    useEffect(() => {
        fetchRooms(true, page);
    }, [selectedTab, page]);

    return (
        <>
            <HostelRoomWrapper>
                <div className="page_head">
                    <h2>Hostel Rooms Directory</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenAddRoomModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Room</p>
                        </button>
                    </div>
                </div>
                <div className="tab_sec">
                    <div className="tab_inner">
                        {
                            tabs.map((tab) => (
                                <li
                                    key={tab.value}
                                    className={selectedTab === tab.value ? "active" : ""}
                                    onClick={() => setSelectedTab(tab.value)}
                                >
                                    {tab.label}
                                </li>
                            ))
                        }
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Room No.</th>
                                <th>Building</th>
                                <th>Floor No.</th>
                                <th>Bed Count</th>
                                <th>Occupied</th>
                                <th>Type</th>
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
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px 0 0" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : rooms.length > 0 ? (
                                    rooms.map((room, i) =>
                                        <tr key={i}>
                                            <td>{room.room_no}</td>
                                            <td>{room.building_name}</td>
                                            <td>{room.floor_no}</td>
                                            <td>{room.bed_count}</td>
                                            <td>{room.occupied}</td>
                                            <td>{room.type}</td>
                                            <td>
                                                <p className={room.status ? 'active' : ''}>{room.status ? 'Active' : 'Inactive'}</p>
                                            </td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No Hostel Room available.</td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>

                <AddRoomsModal
                    isAddRoomOpen={isAddRoomOpen}
                    setIsAddRoomOpen={setIsAddRoomOpen}
                    refreshRooms={() => fetchRooms(false)}
                />
            </HostelRoomWrapper>
        </>
    );
}

export default HostelRoomsPage;