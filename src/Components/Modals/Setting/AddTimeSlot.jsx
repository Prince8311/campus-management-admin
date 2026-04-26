import { useState, useRef, useEffect } from "react";
import { AddTimeSlotWrapper } from "../../../Styles/SettingModalStyle";
import TimeBox from "../../TimeBox";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const AddTimeSlotModal = ({ isAddTimeSlotOpen, setIsAddTimeSlotOpen, refreshSlots }) => {
    const api = getApiEndpoints();
    const [slotName, setSlotName] = useState('');
    const [showStartTimeBox, setShowStartTimeBox] = useState(false);
    const [showEndTimeBox, setShowEndTimeBox] = useState(false);
    const [slotTiming, setSlotTiming] = useState({ start: '', end: '' });
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (startTimeRef.current && !startTimeRef.current.contains(event.target)) {
                setShowStartTimeBox(false);
            }
            if (endTimeRef.current && !endTimeRef.current.contains(event.target)) {
                setShowEndTimeBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function closeModal() {
        setSlotName('');
        setSlotTiming({ start: '', end: '' });
        setIsAddTimeSlotOpen(false);
    }

    const isFormValid = slotName.trim() && slotTiming.start && slotTiming.end;

    const handleSubmit = async () => {
        if (!isFormValid) return;

        const payload = {
            name: slotName,
            start: slotTiming.start,
            end: slotTiming.end
        };

        setIsButtonLoading(true);
        try {
            const response = await axiosInstance.post(api.createTimeSlot, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsButtonLoading(false);
            setSlotName('');
            setSlotTiming({ start: '', end: '' });
        }

    }

    return (
        <>
            <AddTimeSlotWrapper className={isAddTimeSlotOpen ? 'active' : ''}>
                <div className={`modal_box ${isAddTimeSlotOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Add Time Slot</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="input_box">
                                <span>Slot Name <p>*</p></span>
                                <input type="text" value={slotName} onChange={(e) => setSlotName(e.target.value)} />
                            </div>
                            <div className="input_box">
                                <span>Slot Timing <p>*</p></span>
                                <div className="time_sec">
                                    <div className="sec_box" ref={startTimeRef}>
                                        <div className="time_btn" onClick={() => {
                                            setShowStartTimeBox(!showStartTimeBox);
                                            setShowEndTimeBox(false);
                                        }}>
                                            <p>{slotTiming.start}</p>
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        {
                                            showStartTimeBox && (
                                                <div className="dropdown">
                                                    <TimeBox onTimeChange={(time) => setSlotTiming(prev => ({ ...prev, start: time }))} />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <a>to</a>
                                    <div className="sec_box" ref={endTimeRef}>
                                        <div className="time_btn" onClick={() => {
                                            setShowEndTimeBox(!showEndTimeBox);
                                            setShowStartTimeBox(false);
                                        }}>
                                            <p>{slotTiming.end}</p>
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        {
                                            showEndTimeBox && (
                                                <div className="dropdown">
                                                    <TimeBox onTimeChange={(time) => setSlotTiming(prev => ({ ...prev, end: time }))} />
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button onClick={handleSubmit} disabled={!isFormValid || isButtonLoading}>
                            {isButtonLoading ? <ButtonLoader /> : 'Save'}
                        </button>
                    </div>
                </div>
            </AddTimeSlotWrapper>
        </>
    );
}

export default AddTimeSlotModal;