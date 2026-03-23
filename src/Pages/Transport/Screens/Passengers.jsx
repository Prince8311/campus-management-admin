import { useState } from "react";
import PassengerAddModal from "../../../Components/Modals/Transport/PassengerAdd";
import { PassengersWrapper } from "../../../Styles/TransportStyle";

const PassengersPage = () => {
    const [isAddPassenger, setIsAddPassenger] = useState(false);

    const handleOpenAddPassengerModal = () => {
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
                                <th>Pickup/drop Point</th>
                                <th>Route Name</th>
                                <th>Assigned Vehicle</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Joydeep Barik
                                </td>
                                <td>
                                    <div className="type_sec">
                                        <h5>Student</h5>
                                        <p>Class - 1 A</p>
                                    </div>
                                </td>
                                <td>Kolkata</td>
                                <td>West</td>
                                <td>TATA - Seria</td>
                                <td>
                                    <a className="edit_btn"><i className="fa-solid fa-pen-to-square"></i></a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <PassengerAddModal
                    isAddPassenger={isAddPassenger}
                    setIsAddPassenger={setIsAddPassenger}
                />
            </PassengersWrapper>
        </>
    );
}

export default PassengersPage;