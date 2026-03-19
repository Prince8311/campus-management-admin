import { useEffect, useState } from "react";
import AddStateCitiesModal from "../../../Components/Modals/Setting/AddStateCities";
import { StateCitiesWrapper } from "../../../Styles/SettingStyle";
import SelectAddressModal from "../../../Components/Modals/Setting/SelectAddress";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import EditStateCitiesModal from "../../../Components/Modals/Setting/EditStateCities";

const StateCityPage = () => {
    const api = getApiEndpoints();
    const [isShowAddCityModal, setIsShowAddCityModal] = useState(false);
    const [isShowAddressModal, setIsShowAddressModal] = useState(false);
    const [showEditCityModal, setShowEditCityModal] = useState(false);
    const [page, setPage] = useState(1);
    const [stateData, setStateData] = useState([]);
    const [isInitialDataLoading, setIsInitialDataLoading] = useState(true);
    const [totalStateData, setTotalStateData] = useState('');

    const handleOpenAddCityModal = () => {
        setIsShowAddCityModal(true);
    };

    const handleOpenAddressModal = () => {
        setIsShowAddressModal(true);
    };

    const handleOpenEditCityModal = () => {
        setShowEditCityModal(true);
    };

    const fetchStateCities = async (showSkeleton = false, pageNumber = 1) => {
        if (showSkeleton) {
            setIsInitialDataLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchStatesCities, {
                params: { page: pageNumber }
            });
            if (response?.data.status === 200) {
                console.log(response);
                setStateData(response?.data.stateCities);
                setTotalStateData(response?.data.totalCount);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialDataLoading(false);
        }
    }

    useEffect(() => {
        fetchStateCities(true);
    }, [page]);

    return (
        <>
            <StateCitiesWrapper>
                <div className="state_search_sec">
                    <div className="search_sec">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search by State & Cities..." />
                    </div>
                    <div className="add_btn">
                        <button onClick={handleOpenAddressModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add Address</p>
                        </button>
                        <button onClick={handleOpenAddCityModal}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add City</p>
                        </button>
                    </div>
                </div>
                <div className="table_sec">
                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Cities</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isInitialDataLoading ? (
                                    Array.from({ length: 2 }).map((_, i) => (
                                        <tr key={i}>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td><SkeletonLoader width="100%" height="13px" /></td>
                                            <td>
                                                <SkeletonLoader width="15px" height="15px" margin="0 6px 0 0" />
                                                <SkeletonLoader width="15px" height="15px" />
                                            </td>
                                        </tr>
                                    ))
                                ) : stateData.length > 0 ? (
                                    stateData.map((state, index) =>
                                        <tr key={index}>
                                            <td>{state.state}</td>
                                            <td>
                                                {
                                                    state.cities && state.cities.length > 0 ?
                                                        state.cities.map((city, i) =>
                                                            <li key={i}>{city}</li>
                                                        )
                                                        :
                                                        <p>No cities available</p>
                                                }
                                            </td>
                                            <td>
                                                <a className="edit_btn" onClick={handleOpenEditCityModal}><i className="fa-solid fa-pen-to-square"></i></a>
                                                <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                            </td>
                                        </tr>)
                                ) : (
                                    <tr>
                                        <td className="empty_message">No states and cities available.</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

                <AddStateCitiesModal
                    isShowAddCityModal={isShowAddCityModal}
                    setIsShowAddCityModal={setIsShowAddCityModal}
                    refreshData={() => fetchStateCities(false)}
                />
                <SelectAddressModal
                    isShowAddressModal={isShowAddressModal}
                    setIsShowAddressModal={setIsShowAddressModal}
                />
                <EditStateCitiesModal
                    showEditCityModal={showEditCityModal}
                    setShowEditCityModal={setShowEditCityModal}
                />
            </StateCitiesWrapper >
        </>
    );
}

export default StateCityPage;