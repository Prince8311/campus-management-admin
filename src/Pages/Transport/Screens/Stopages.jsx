import { useEffect, useState } from "react";
import StopageAddModal from "../../../Components/Modals/Transport/StopageAdd";
import { StopagesWrapper } from "../../../Styles/TransportStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const StopagesPage = () => {
    const api = getApiEndpoints();
    const [stopages, setStopages] = useState([]);
    const [isInitialStopagesLoading, setIsInitialStopagesLoading] = useState(false);
    const [totalCount, setTotalCount] = useState('');
    const [page, setPage] = useState(1);
    const [showStopageAddModal, setShowStopageAddModal] = useState(false);

    const fetchStopages = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialStopagesLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStopages, {
                params: {
                    page: pageNumber
                }
            });
            if (response.data.status === 200) {
                console.log('Stopages:', response.data);
                setStopages(response?.data.stopages);
                setTotalCount(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialStopagesLoading(false);
        }
    }

    useEffect(() => {
        fetchStopages(true, page);
    }, [page]);

    const handleOpenAddStopageModal = () => {
        setShowStopageAddModal(true);
    }
    return (
        <>
            <StopagesWrapper>
                <div className="head_sec">
                    <h6>Stopages Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by Stopage names..." />
                        </div>
                        <div className="add_btn">
                            <button onClick={handleOpenAddStopageModal}>
                                <i className="fa-solid fa-plus"></i>
                                <p>Add Stopage</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>Stopage Name</th>
                                <th>Location</th>
                                <th>Distance</th>
                                <th>Passengers</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialStopagesLoading ? (
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
                                ) : stopages.length > 0 ? (
                                    stopages.map((stopage, index) =>
                                        <tr key={index}>
                                            <td>
                                                {stopage.name}
                                            </td>
                                            <td>
                                                {stopage.location}
                                            </td>
                                            <td>{stopage.distance}km</td>
                                            <td>-</td>
                                            <td><p className={stopage.status ? 'active' : ''}>{stopage.status ? 'Active' : 'Inactive'}</p></td>
                                            <td>
                                                <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td className="empty_message">No stopages available.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <StopageAddModal
                    showStopageAddModal={showStopageAddModal}
                    setShowStopageAddModal={setShowStopageAddModal}
                    refreshData={() => fetchStopages(true, page)}
                />
            </StopagesWrapper>
        </>
    );
}

export default StopagesPage;