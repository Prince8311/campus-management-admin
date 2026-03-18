import { useState } from "react";
import AddStateCitiesModal from "../../../Components/Modals/Setting/AddStateCities";
import { StateCitiesWrapper } from "../../../Styles/SettingStyle";
import SelectAddressModal from "../../../Components/Modals/Setting/SelectAddress";

const StateCityPage = () => {
    const [isShowAddCityModal, setIsShowAddCityModal] = useState(false);
    const [isShowAddressModal, setIsShowAddressModal] = useState(false);

    const handleOpenAddCityModal = () => {
        setIsShowAddCityModal(true);
    };

    const handleOpenAddressModal = () => {
        setIsShowAddressModal(true);
    };

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
                            <tr>
                                <td>Andhra Pradesh</td>
                                <td>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                </td>
                                <td>
                                    <a className="edit_btn">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Andhra Pradesh</td>
                                <td>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                </td>
                                <td>
                                    <a className="edit_btn">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>Andhra Pradesh</td>
                                <td>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                    <li>Guntur</li>
                                </td>
                                <td>
                                    <a className="edit_btn">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a className="delete_btn"><i className="fa-solid fa-trash-can"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <AddStateCitiesModal
                    isShowAddCityModal={isShowAddCityModal}
                    setIsShowAddCityModal={setIsShowAddCityModal}
                />
                <SelectAddressModal
                    isShowAddressModal={isShowAddressModal}
                    setIsShowAddressModal={setIsShowAddressModal}
                />
            </StateCitiesWrapper >
        </>
    );
}

export default StateCityPage;