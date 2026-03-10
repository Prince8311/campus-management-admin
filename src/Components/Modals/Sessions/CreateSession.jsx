import { useEffect, useRef, useState } from "react";
import { CreateSessionsWrapper } from "../../../Styles/SessionModalStyle";
import Calender from "../../Calender";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const CreateSessionsModal = ({ isCreateSessionOpen, setIsCreateSessionOpen, refreshSessions }) => {
    const api = getApiEndpoints();
    const [showStatusDropdown, setShowStatusDropdown] = useState(false);
    const statusList = ['Upcoming', 'Ongoing'];
    const [selectedStatus, setSelectedStatus] = useState('');
    const [showStartDateDropdown, setShowStartDateDropdown] = useState(false);
    const [showEndDateDropdown, setShowEndDateDropdown] = useState(false);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sessionName, setSessionName] = useState('');
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);
    const prevStartDate = useRef(startDate);
    const prevEndDate = useRef(endDate);

    const handleSelectStatus = (status) => {
        if (status !== selectedStatus) {
            setSelectedStatus(status);
            setShowStatusDropdown(false);
        }
    }

    function closeModal() {
        setSelectedStatus('');
        setStartDate('');
        setEndDate('');
        setSessionName('');
        setIsCreateSessionOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (startDateRef.current && !startDateRef.current.contains(event.target)) {
                setShowStartDateDropdown(false);
            }
            if (endDateRef.current && !endDateRef.current.contains(event.target)) {
                setShowEndDateDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const parseDate = (dateStr) => {
        if (!dateStr) return null;
        return new Date(dateStr.replace(",", ""));
    };

    useEffect(() => {
        if (startDate && endDate) {
            const start = parseDate(startDate);
            const end = parseDate(endDate);
    
            if (end < start) {
                toast.error("End date cannot be earlier than start date");
    
                if (prevStartDate.current !== startDate) {
                    setStartDate(prevStartDate.current);
                } else if (prevEndDate.current !== endDate) {
                    setEndDate(prevEndDate.current);
                }
    
                return;
            }
    
            const startYear = start.getFullYear();
            const endYear = end.getFullYear();
            const shortEndYear = String(endYear).slice(-2);
    
            setSessionName(`EC ${startYear}-${shortEndYear}`);
        }
    
        prevStartDate.current = startDate;
        prevEndDate.current = endDate;
    
    }, [startDate, endDate]);

    const isFormValid = selectedStatus !== '' && startDate.trim() !== '' && endDate.trim() !== '' && sessionName.trim() !== '';

    const handleCreateSessionField = async (e) => {
        e.preventDefault();
        setIsButtonLoading(true);
        const payload = {
            sessionName: sessionName,
            startDate: startDate,
            endDate: endDate,
            status: selectedStatus
        };
        try {
            const response = await axiosInstance.post(api.createSession, payload);
            if (response?.data.status === 200) {
                toast.success(response?.data.message);
                refreshSessions();
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
            <CreateSessionsWrapper className={isCreateSessionOpen ? 'active' : ''}>
                <div className={`modal_box ${isCreateSessionOpen ? 'active' : ''}`}>
                    <div className="modal_head">
                        <h4>Create New Session</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}><i className="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="select_box">
                                <span>Session Status <p>*</p></span>
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn" onClick={() => setShowStatusDropdown(!showStatusDropdown)}>
                                        <p>{selectedStatus}</p>
                                        <i className={`fa-solid fa-angle-down ${showStatusDropdown ? 'active' : ''}`}></i>
                                    </div>
                                    <div className={`dropdown ${showStatusDropdown ? 'active' : ''}`}>
                                        <div className="dropdown_inner">
                                            <ul>
                                                {
                                                    statusList.map((status, i) =>
                                                        <li key={i} className={selectedStatus === status ? 'active' : ''} onClick={() => handleSelectStatus(status)}>{status}</li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="date_box" ref={startDateRef}>
                                <span>Start Date <p>*</p></span>
                                <div className="date_btn" onClick={() => setShowStartDateDropdown(prev => !prev)}>
                                    <p>{startDate}</p>
                                    <i className="fa-regular fa-calendar"></i>
                                </div>
                                {
                                    showStartDateDropdown &&
                                    <div className="dropdown">
                                        <Calender setFinalSelectedDate={setStartDate} />
                                    </div>
                                }
                            </div>
                            <div className="date_box" ref={endDateRef}>
                                <span>End Date <p>*</p></span>
                                <div className="date_btn" onClick={() => setShowEndDateDropdown(prev => !prev)}>
                                    <p>{endDate}</p>
                                    <i className="fa-regular fa-calendar"></i>
                                </div>
                                {
                                    showEndDateDropdown &&
                                    <div className="dropdown">
                                        <Calender setFinalSelectedDate={setEndDate} />
                                    </div>
                                }
                            </div>
                            <div className="input_box">
                                <span>Session Name<p>*</p></span>
                                <input type="text" value={sessionName} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn" onClick={handleCreateSessionField}>
                        <button disabled={!isFormValid || isButtonLoading}>
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
            </CreateSessionsWrapper>
        </>
    );
}

export default CreateSessionsModal;