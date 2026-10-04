import { useEffect, useRef, useState } from "react";
import { AddBuildingWrapper } from "../../../Styles/Modals/HostelManagementModalStyle";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { toast } from "react-toastify";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddBuildingModal = ({ isAddBuildingOpen, setIsAddBuildingOpen, selectedBuilding, setSelectedBuilding, refreshBuildings }) => {
    const api = getApiEndpoints();
    const [buildName, setBuildName] = useState('');
    const [totalFloor, setTotalFloor] = useState('');
    const [livingRoom, setLivingRoom] = useState('');
    const [sickRoom, setSickRoom] = useState('');
    const [isStatus, setIsStatus] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const initialBuildingStateRef = useRef(null);
    const isEditMode = Boolean(selectedBuilding);
    const isFormValid = buildName.trim() !== '' && totalFloor.trim() !== '' && livingRoom.trim() !== '' && sickRoom.trim() !== '';
    const isFormChanged = isEditMode && initialBuildingStateRef.current ? (
        buildName !== initialBuildingStateRef.current.buildName ||
        totalFloor !== initialBuildingStateRef.current.totalFloor ||
        livingRoom !== initialBuildingStateRef.current.livingRoom ||
        sickRoom !== initialBuildingStateRef.current.sickRoom ||
        isStatus !== initialBuildingStateRef.current.isStatus
    ) : false;

    const normalizeStatus = (value) => value === true || value === 1 || value === '1' || value === 'true' || value === 'active';

    useEffect(() => {
        if (isAddBuildingOpen && selectedBuilding) {
            const initialBuildingState = {
                buildName: String(selectedBuilding.name ?? ''),
                totalFloor: String(selectedBuilding.total_floors ?? ''),
                livingRoom: String(selectedBuilding.living_rooms ?? ''),
                sickRoom: String(selectedBuilding.sick_rooms ?? ''),
                isStatus: normalizeStatus(selectedBuilding.status)
            };

            setBuildName(initialBuildingState.buildName);
            setTotalFloor(initialBuildingState.totalFloor);
            setLivingRoom(initialBuildingState.livingRoom);
            setSickRoom(initialBuildingState.sickRoom);
            setIsStatus(initialBuildingState.isStatus);
            initialBuildingStateRef.current = initialBuildingState;
        } else if (isAddBuildingOpen) {
            setBuildName('');
            setTotalFloor('');
            setLivingRoom('');
            setSickRoom('');
            setIsStatus(false);
            initialBuildingStateRef.current = null;
        }
    }, [isAddBuildingOpen, selectedBuilding]);

    const closeModal = () => {
        setIsAddBuildingOpen(false);
        setBuildName('');
        setTotalFloor('');
        setLivingRoom('');
        setSickRoom('');
        setIsStatus(false);
        initialBuildingStateRef.current = null;
        setSelectedBuilding(null);
    };

    const handleCreateBuilding = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            name: buildName,
            totalFloors: totalFloor,
            livingRoom: livingRoom,
            sickRoom: sickRoom,
            status: isStatus,
            ...(isEditMode ? { id: selectedBuilding.id } : {})
        };
        try {
            const response = await axiosInstance.post(api.addHostelBuilding, payload, {
                params: {
                    intent: isEditMode ? 'update' : 'add'
                }
            });
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
                        <h4>{isEditMode ? 'Edit Hostel Building' : 'Add Hostel Building'}</h4>
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
                            disabled={!isFormValid || isButtonLoading || (isEditMode && !isFormChanged)}
                            onClick={handleCreateBuilding}
                        >
                            {
                                isButtonLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    <>{isEditMode ? 'Update' : 'Save'}</>
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
