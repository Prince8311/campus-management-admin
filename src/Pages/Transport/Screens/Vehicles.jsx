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
    const [isAddVehicleModal, setIsAddVehicleModal] = useState(false);

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
                            <tr>
                                <td>
                                    TATA-Seria
                                </td>
                                <td>
                                    WB015- 777
                                </td>
                                <td>Bus</td>
                                <td>65</td>
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

                <AddVehicleModal
                    isAddVehicleModal={isAddVehicleModal}
                    setIsAddVehicleModal={setIsAddVehicleModal}
                />
            </VehicleWrapper>
        </>
    );
}

export default VehiclesPage;