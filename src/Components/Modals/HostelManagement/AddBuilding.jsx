import { useState } from "react";
import { AddBuildingWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddBuildingModal = ({ isAddBuildingOpen, setIsAddBuildingOpen, refreshBuildings }) => {
    const api = getApiEndpoints();
    const [buildName, setBuildName] = useState('');
    const [totalFloor, setTotalFloor] = useState('');
    const [livingRoom, setLivingRoom] = useState('');
    const [sickRoom, setSickRoom] = useState('');
    const [isStatus, setIsStatus] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const isFormValid = buildName.trim() !== '' && totalFloor.trim() !== '' && livingRoom.trim() !== '' && sickRoom.trim() !== '';

    const closeModal = () => {
        setIsAddBuildingOpen(false);
        setBuildName('');
        setTotalFloor('');
        setLivingRoom('');
        setSickRoom('');
        setIsStatus(false);
    };

    const handleCreateBuilding = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: buildName,
            totalFloors: totalFloor,
            livingRoom: livingRoom,
            sickRoom: sickRoom,
            status: isStatus
        };
        try {
            const response = await axiosInstance.post(api.createHostelBuilding, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                refreshBuildings();
                closeModal();
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
        }
    }

    return (
        <>
            <AddBuildingWrapper className={isAddBuildingOpen ? "active" : ''}>
                <div className={`modal_box ${isAddBuildingOpen ? "active" : ''}`}>
                    <div className="modal_head">
                        <h4>Add Hostel Building</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box fullwidth">
                                <span>Building Name <p>*</p></span>
                                <input type="text" value={buildName} onChange={(e) => setBuildName(e.target.value)} />
                            </div>
                            <div className="input_box fullwidth">
                                <span>Total Living Rooms <p>*</p></span>
                                <input type="text" value={livingRoom} onChange={(e) => setLivingRoom(e.target.value)} />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Total Sick Rooms <p>*</p></span>
                                <input type="text" value={sickRoom} onChange={(e) => setSickRoom(e.target.value)} />
                            </div>
                            <div className="input_box halfwidth">
                                <span>Total Floors <p>*</p></span>
                                <input type="text" value={totalFloor} onChange={(e) => setTotalFloor(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <p>Status</p>
                        <div className="toggle_bar">
                            <input
                                type="checkbox"
                                id="toggle"
                                checked={isStatus}
                                onChange={(e) => setIsStatus(e.target.checked)}
                            />
                            <label htmlFor="toggle">
                                <span></span>
                            </label>
                        </div>
                        <button
                            disabled={!isFormValid || isButtonLoading}
                            onClick={handleCreateBuilding}
                        >
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>Save</>
                                )
                            }
                        </button>
                    </div>
                </div>
            </AddBuildingWrapper>
        </>
    );
}

export default AddBuildingModal;