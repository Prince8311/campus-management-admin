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
                                <th>Sl.No.</th>
                                <th>Room No.</th>
                                <th>Building</th>
                                <th>Floor No.</th>
                                <th>Bed Count</th>
                                <th>Occupied</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>11A</td>
                                <td>H1-056</td>
                                <td>02</td>
                                <td>25</td>
                                <td>2</td>
                                <td>Ac</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddRoomsModal
                    isAddRoomOpen={isAddRoomOpen}
                    setIsAddRoomOpen={setIsAddRoomOpen}
                />
            </HostelRoomWrapper>
        </>
    );
}

export default HostelRoomsPage;