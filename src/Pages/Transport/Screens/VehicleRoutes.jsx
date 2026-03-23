import { useNavigate } from "react-router-dom";
import { VehicleRoutesWrapper } from "../../../Styles/TransportStyle";

const VehicleRoutesPage = () => {
    const navigate = useNavigate();

    const handleRedirectionAddRoutesPage = () => {
        navigate("/admin/add-routes");
    }
    return (
        <>
            <VehicleRoutesWrapper>
                <div className="head_sec">
                    <h6>VehiclesRoutes Directory</h6>
                    <div className="filter_search_sec">
                        <div className="search_sec">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by VehiclesRoutes..." />
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
                                <th>Staff</th>
                                <th>Stopages</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    North
                                </td>
                                <td>
                                    Mahindra - XUV
                                </td>
                                <td>
                                    <div className="name_sec">
                                        <p>Joydeep Barik</p>
                                        <span>+10</span>
                                    </div>
                                </td>
                                <td>20</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </VehicleRoutesWrapper>
        </>
    );
}

export default VehicleRoutesPage;