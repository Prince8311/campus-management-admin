import { useEffect, useState } from "react";
import { TimeTableSettingsWrapper } from "../../../Styles/SettingStyle";
import AddTimeSlotModal from "../../../Components/Modals/Setting/AddTimeSlot";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import CustomizeSubjectRepetitionModal from "../../../Components/Modals/Setting/CustomizeSubjectRepetition";

const TimeTableSettingsPage = () => {
    const api = getApiEndpoints();
    const [timeSlots, setTimeSlots] = useState([]);
    const [isInitialTimeSlotsLoading, setIsInitialTimeSlotsLoading] = useState(true);
    const [isAddTimeSlotOpen, setIsAddTimeSlotOpen] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [isCustomizeSubjectOpen, setIsCustomizeSubjectOpen] = useState(false);

    const fetchTimeSlots = async (showSkeleton = false) => {
        if (showSkeleton) {
            setIsInitialTimeSlotsLoading(true);
        }
        try {
            const response = await axiosInstance.get(api.fetchTimeSlots);
            if (response?.data.status === 200) {
                setTimeSlots(response.data.time_slots);
                console.log("Time Slots:", response.data);
            }
        } catch (error) {
            setTimeSlots([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsInitialTimeSlotsLoading(false);
        }
    };

    useEffect(() => {
        fetchTimeSlots(true);
    }, []);

    const handleOpenAddTimeSlot = () => {
        setSelectedTimeSlot(null);
        setIsAddTimeSlotOpen(true);
    };

    const handleOpenEditTimeSlot = (slot) => {
        setSelectedTimeSlot(slot);
        setIsAddTimeSlotOpen(true);
    };

    const handleOpenCustomizeSubject = () => {
        setIsCustomizeSubjectOpen(true);
    };

    const calculateDuration = (startTime, endTime) => {
        if (!startTime || !endTime) return "0h 0m";

        const parseTime = (time) => {
            const match = time.trim().match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
            if (!match) return null;

            let hours = Number(match[1]);
            const minutes = Number(match[2]);
            const period = match[3].toUpperCase();

            if (period === "PM" && hours !== 12) hours += 12;
            if (period === "AM" && hours === 12) hours = 0;

            return hours * 60 + minutes;
        };

        const startMinutes = parseTime(startTime);
        const endMinutes = parseTime(endTime);

        if (startMinutes === null || endMinutes === null) return "0h 0m";

        const durationMinutes = endMinutes >= startMinutes
            ? endMinutes - startMinutes
            : (24 * 60 - startMinutes) + endMinutes;

        const hours = Math.floor(durationMinutes / 60);
        const minutes = durationMinutes % 60;

        if (hours && minutes) return `${hours}h ${minutes}m`;
        if (hours) return `${hours}h`;
        if (minutes) return `${minutes}m`;

        return "0m";
    };

    return (
        <>
            <TimeTableSettingsWrapper>
                <div className="page_head">
                    <h2>Institution Time Slots</h2>
                    <div className="add_btn">
                        <button onClick={handleOpenAddTimeSlot}>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Slot</p>
                        </button>
                    </div>
                </div>
                <div className="slot_levels">
                    {
                        isInitialTimeSlotsLoading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="slot_box">
                                    <SkeletonLoader width="100%" height="110px" />
                                </div>
                            ))
                        ) : timeSlots.length > 0 ? (
                            timeSlots.map((slot, i) => (
                                <div className="slot_box" key={i}>
                                    <div className="box_inner">
                                        <div className="top_part">
                                            <div className="part_content">
                                                <a><i className="fa-solid fa-calendar-week"></i></a>
                                                <li>
                                                    <h6>{slot.name}</h6>
                                                    <p>{slot.start} - {slot.end}</p>
                                                </li>
                                            </div>
                                        </div>
                                        <div className="bottom_btn">
                                            <div className="time_sec">
                                                <p><span>Duration:</span> {calculateDuration(slot.start, slot.end)}</p>
                                            </div>
                                            <button className="details" onClick={() => handleOpenEditTimeSlot(slot)}><i className="fa-regular fa-pen-to-square"></i>Edit</button>
                                            <button className="delete"><i className="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty_box">
                                <img src="/images/no-fields.svg" alt="" />
                                <p>No Data available.</p>
                            </div>
                        )
                    }

                </div>
                {
                    timeSlots.length > 0 && (
                        <div className="page_bottom_sec">
                            <div className="schedule_head">
                                <h2>Set Time Table Section Wise</h2>
                            </div>
                            <span className="bottom_desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit sequi vero, in saepe iure ducimus amet hic quis magnam perferendis quaerat unde dolore ratione nostrum id quo laudantium temporibus! Deserunt similique saepe facilis suscipit accusamus ea delectus hic perspiciatis pariatur? Laboriosam natus quod, optio consequatur minima cumque corrupti. Eaque!
                            </span>
                            <div className="page_items_sec">
                                <div className="left_item_sec">
                                    <div className="left_item_inner">
                                        <div className="select_box">
                                            <span>Select Class <p>*</p></span>
                                            <div className="dropdown_sec">
                                                <div className="dropdown_btn">
                                                    <p>Class 1</p>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </div>
                                                <div className="dropdown">
                                                    <div className="dropdown_inner">
                                                        <ul>
                                                            <li>Class 1</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="select_box">
                                            <span>Select Section <p>*</p></span>
                                            <div className="dropdown_sec">
                                                <div className="dropdown_btn">
                                                    <p>Section A</p>
                                                    <i className="fa-solid fa-angle-down"></i>
                                                </div>
                                                <div className="dropdown">
                                                    <div className="dropdown_inner">
                                                        <ul>
                                                            <li>Section A</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="subject_sec">
                                            <a>Class Subject</a>
                                            <div className="subject_items">
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                                <div className="item">
                                                    <span>Math</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="weekday_sec">
                                            <h5>Instritution Weekdays</h5>
                                            <div className="day_type_sec">
                                                <div className="day_box">
                                                    <p>Full Day</p>
                                                    <ul>
                                                        <li><span className="active">Mon</span></li>
                                                        <li><span>Tue</span></li>
                                                        <li><span>Wed</span></li>
                                                        <li><span>Thus</span></li>
                                                        <li><span>Fri</span></li>
                                                        <li><span>Sat</span></li>
                                                        <li><span>Sun</span></li>
                                                    </ul>
                                                </div>
                                                <div className="day_box">
                                                    <p>Half Day</p>
                                                    <ul>
                                                        <li><span>Mon</span></li>
                                                        <li><span>Tue</span></li>
                                                        <li><span className="active">Wed</span></li>
                                                        <li><span>Thus</span></li>
                                                        <li><span>Fri</span></li>
                                                        <li><span>Sat</span></li>
                                                        <li><span>Sun</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="toggle_sec">
                                            <p>Customize subject repetition</p>
                                            <div className="toggle_bar">
                                                <input
                                                    type="checkbox"
                                                    id="toggle"
                                                />
                                                <label htmlFor="toggle">
                                                    <span></span>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="text_sec">
                                            <div className="text_top_sec">
                                                <p>Mathematics - maximum 5</p>
                                            </div>
                                            <div className="text_bottom_sec">
                                                <button onClick={handleOpenCustomizeSubject}>Customize Repetition</button>
                                            </div>
                                        </div>
                                        <div className="btn_box">
                                            <button><i className="fa-solid fa-file-pen"></i>Generate</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_item_sec">
                                    <div className="time_levels">
                                        <div className="time_level_box">
                                            <div className="box_head">
                                                <li>
                                                    <i className="fa-solid fa-calendar-day"></i>
                                                    <span>Monday</span>
                                                </li>
                                                <button><i className="fa-solid fa-floppy-disk"></i>Save</button>
                                            </div>
                                            <div className="box_items">
                                                <div className="class_item">
                                                    <div className="item_inner">
                                                        <div className="timing">
                                                            <i className="fa-regular fa-clock"></i>
                                                            <p>10:00AM - 10:45AM</p>
                                                        </div>
                                                        <div className="content_part">
                                                            <img src="/images/period.png" alt="" />
                                                            <li>
                                                                <h6>Math</h6>
                                                                <span>First Period</span>
                                                            </li>
                                                        </div>
                                                        <div className="teacher_info">
                                                            <i className="fa-solid fa-user"></i>
                                                            <a>Sourish Mondal</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="class_item">
                                                    <div className="item_inner">
                                                        <div className="timing">
                                                            <i className="fa-regular fa-clock"></i>
                                                            <p>10:00AM - 10:45AM</p>
                                                        </div>
                                                        <div className="content_part">
                                                            <img src="/images/period.png" alt="" />
                                                            <li>
                                                                <h6>Math</h6>
                                                                <span>First Period</span>
                                                            </li>
                                                        </div>
                                                        <div className="teacher_info">
                                                            <i className="fa-solid fa-user"></i>
                                                            <a>Sourish Mondal</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="class_item">
                                                    <div className="item_inner">
                                                        <div className="timing">
                                                            <i className="fa-regular fa-clock"></i>
                                                            <p>10:00AM - 10:45AM</p>
                                                        </div>
                                                        <div className="content_part">
                                                            <img src="/images/period.png" alt="" />
                                                            <li>
                                                                <h6>Math</h6>
                                                                <span>First Period</span>
                                                            </li>
                                                        </div>
                                                        <div className="teacher_info">
                                                            <i className="fa-solid fa-user"></i>
                                                            <a>Sourish Mondal</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btns_sec">
                                            <button><i className="fa-solid fa-arrow-rotate-left"></i>Re-Generate</button>
                                            <button><i className="fa-solid fa-floppy-disk"></i>Save</button>
                                        </div>
                                    </div>
                                    <div className="empty_box">
                                        <img src="/images/no-fields.svg" alt="" />
                                        <p>No Data available.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <AddTimeSlotModal
                    isAddTimeSlotOpen={isAddTimeSlotOpen}
                    setIsAddTimeSlotOpen={setIsAddTimeSlotOpen}
                    selectedTimeSlot={selectedTimeSlot}
                    setSelectedTimeSlot={setSelectedTimeSlot}
                    refreshSlots={() => fetchTimeSlots(false)}
                />
                <CustomizeSubjectRepetitionModal
                    isCustomizeSubjectOpen={isCustomizeSubjectOpen}
                    setIsCustomizeSubjectOpen={setIsCustomizeSubjectOpen}
                />
            </TimeTableSettingsWrapper>
        </>
    );
}

export default TimeTableSettingsPage;
