import { useEffect, useState } from "react";
import { TimeTableSettingsWrapper } from "../../../Styles/SettingStyle";
import AddTimeSlotModal from "../../../Components/Modals/Setting/AddTimeSlot";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import CustomizeSubjectRepetitionModal from "../../../Components/Modals/Setting/CustomizeSubjectRepetition";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TimeTableSettingsPage = () => {
    const api = getApiEndpoints();
    const [timeSlots, setTimeSlots] = useState([]);
    const [isInitialTimeSlotsLoading, setIsInitialTimeSlotsLoading] = useState(true);
    const [isAddTimeSlotOpen, setIsAddTimeSlotOpen] = useState(false);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [showClassDropdown, setShowClassDropdown] = useState(false);
    const [showSectionDropdown, setShowSectionDropdown] = useState(false);
    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [isCustomizeSubjectOpen, setIsCustomizeSubjectOpen] = useState(false);
    const [fullDays, setFullDays] = useState([]);
    const [halfDays, setHalfDays] = useState([]);
    const [showSubjectRepetition, setShowSubjectRepetition] = useState(false);
    const [subjectRepeatData, setSubjectRepeatData] = useState([]);
    const [reloadTimeTable, setReloadTimeTable] = useState(false);
    const [timeTableData, setTimeTableData] = useState([]);
    const isGenerateDisabled = fullDays.length === 0 && halfDays.length === 0;

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

    const handleSelectWeekDay = (day, dayType) => {
        if (dayType === "full") {
            setFullDays((prevDays) =>
                prevDays.includes(day)
                    ? prevDays.filter((selectedDay) => selectedDay !== day)
                    : [...prevDays, day]
            );
            setHalfDays((prevDays) => prevDays.filter((selectedDay) => selectedDay !== day));
            return;
        }

        setHalfDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((selectedDay) => selectedDay !== day)
                : [...prevDays, day]
        );
        setFullDays((prevDays) => prevDays.filter((selectedDay) => selectedDay !== day));
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

    const fetchClasses = async () => {
        try {
            const response = await axiosInstance.get(api.fetchClasses, {
                params: {
                    isForm: true
                }
            });
            if (response?.data.status === 200) {
                setClasses(response?.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        fetchClasses();
    }, []);

    function toggleClassDropdown() {
        setShowClassDropdown(!showClassDropdown);
        setShowSectionDropdown(false);
    }

    function toggleSectionDropdown() {
        setShowSectionDropdown(!showSectionDropdown);
        setShowClassDropdown(false);
    }

    const handleSelectClass = (classItem) => {
        setSelectedClass(classItem);
        setSelectedSection('');
        setSections([]);
        setSubjects([]);
        setSubjectRepeatData([]);
        setShowSubjectRepetition(false);
        setShowClassDropdown(false);
    }

    const fetchSections = async () => {
        try {
            const response = await axiosInstance.get(api.fetchClassSections, {
                params: {
                    class: selectedClass
                }
            });
            if (response?.data.status === 200) {
                setSections(response?.data.sections);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedClass) {
            fetchSections();
        }
    }, [selectedClass]);

    const handleSelectSection = (section) => {
        setSelectedSection(section);
        setSubjectRepeatData([]);
        setShowSubjectRepetition(false);
        setShowSectionDropdown(false);
    }

    const fetchSectionSubjects = async () => {
        try {
            const response = await axiosInstance.get(api.fetchSubjects, {
                params: {
                    classSectionWise: true,
                    class: selectedClass,
                    section: selectedSection
                }
            });
            if (response?.data.status === 200) {
                setSubjects(response?.data.subjects);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (selectedSection) {
            fetchSectionSubjects();
        }
    }, [selectedSection]);

    const fecthTimeTable = async () => {
        try {
            const response = await axiosInstance.get(api.fetchTimeTable, {
                params: {
                    class: selectedClass,
                    section: selectedSection
                }
            });
            if (response?.data.status === 200) {
                console.log('Time table', response?.data);
                setTimeTableData(response?.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        } finally {
            setReloadTimeTable(false);
        }
    }

    useEffect(() => {
        if (selectedSection) {
            fecthTimeTable();
        }
    }, [selectedSection, reloadTimeTable]);

    const handleGenerateTimeTable = async () => {
        const payload = {
            class: selectedClass,
            section: selectedSection,
            subjectRepeatData: subjectRepeatData,
            fullDays: fullDays,
            halfDays: halfDays
        };

        try {
            const response = await axiosInstance.post(api.generateTimeTable, payload);
            if (response?.data.status === 200) {
                setReloadTimeTable(true);
                toast.success(response?.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    const handleRegenerateTimeTable = async (generateType = 'week', day = null) => {
        const payload = {
            class: selectedClass,
            section: selectedSection,
            subjectRepeatData: subjectRepeatData,
            fullDays: fullDays,
            halfDays: halfDays,
        };

        if (generateType === 'day' && day) {
            payload.day = day;
        }

        try {
            const response = await axiosInstance.post(api.generateTimeTable, payload, {
                params: {
                    intent: 're-generate',
                    'generate-type': generateType,
                },
            });
            if (response?.data.status === 200) {
                setReloadTimeTable(true);
                toast.success(response?.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }

    }

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
                                Configure and manage class schedules by selecting a class and assigning subjects, teachers, and time slots for each section.
                            </span>
                            <div className="page_items_sec">
                                <div className="left_item_sec">
                                    <div className="left_item_inner">
                                        <div className="select_box">
                                            <span>Select Class <p>*</p></span>
                                            <div className="dropdown_sec">
                                                <div className="dropdown_btn" onClick={toggleClassDropdown}>
                                                    <p>{selectedClass ? `Class ${selectedClass}` : ''}</p>
                                                    <i className={`fa-solid fa-angle-down ${showClassDropdown ? 'active' : ''}`}></i>
                                                </div>
                                                <div className={`dropdown ${showClassDropdown ? 'active' : ''}`}>
                                                    <div className="dropdown_inner">
                                                        <ul>
                                                            {
                                                                classes && classes.length > 0 ? (
                                                                    classes.map((item, i) =>
                                                                        <li key={i} className={item === selectedClass ? 'active' : ''} onClick={() => handleSelectClass(item)}>{item}</li>
                                                                    )
                                                                ) : (
                                                                    <li className="empty_message">No class available</li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="select_box">
                                            <span>Select Section <p>*</p></span>
                                            <div className="dropdown_sec">
                                                <div className="dropdown_btn" onClick={toggleSectionDropdown}>
                                                    <p>{selectedSection ? `Section ${selectedSection}` : ''}</p>
                                                    <i className={`fa-solid fa-angle-down ${showSectionDropdown ? 'active' : ''}`}></i>
                                                </div>
                                                <div className={`dropdown ${showSectionDropdown ? 'active' : ''}`}>
                                                    <div className="dropdown_inner">
                                                        <ul>
                                                            {
                                                                sections && sections.length > 0 ? (
                                                                    sections.map((item, i) =>
                                                                        <li key={i} className={item === selectedSection ? 'active' : ''} onClick={() => handleSelectSection(item)}>{item}</li>
                                                                    )
                                                                ) : (
                                                                    <li className="empty_message">No sections available</li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            selectedSection &&
                                            <div className="subject_sec">
                                                <a>Class Subject</a>
                                                <div className="subject_items">
                                                    {
                                                        subjects.length > 0 ? (
                                                            subjects.map((subject, i) =>
                                                                <div className="item" key={i}>
                                                                    <span>{subject}</span>
                                                                </div>
                                                            )
                                                        ) : (
                                                            <p className="empty_message">No subjects assigned.</p>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        }
                                        <div className="weekday_sec">
                                            <h5>Institution Weekdays</h5>
                                            <div className="day_type_sec">
                                                <div className="day_box">
                                                    <p>Full Day</p>
                                                    <ul>
                                                        {
                                                            weekDays.map((day) => (
                                                                <li key={day}>
                                                                    <span
                                                                        className={fullDays.includes(day) ? "active" : ""}
                                                                        onClick={() => handleSelectWeekDay(day, "full")}
                                                                    >
                                                                        {day}
                                                                    </span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="day_box">
                                                    <p>Half Day</p>
                                                    <ul>
                                                        {
                                                            weekDays.map((day) => (
                                                                <li key={day}>
                                                                    <span
                                                                        className={halfDays.includes(day) ? "active" : ""}
                                                                        onClick={() => handleSelectWeekDay(day, "half")}
                                                                    >
                                                                        {day}
                                                                    </span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            selectedSection &&
                                            <div className="toggle_sec">
                                                <p>Customize subject repetition</p>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="toggle"
                                                        checked={showSubjectRepetition}
                                                        onChange={(event) => setShowSubjectRepetition(event.target.checked)}
                                                    />
                                                    <label htmlFor="toggle">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </div>
                                        }
                                        {
                                            showSubjectRepetition && (
                                                <div className="text_sec">
                                                    <div className="text_top_sec">
                                                        {
                                                            subjectRepeatData.length > 0 ? (
                                                                subjectRepeatData.map((repeatItem, i) => (
                                                                    <p key={`${repeatItem.subject}-${repeatItem.type}-${i}`}>
                                                                        {repeatItem.subject} - {repeatItem.type.toLowerCase()} {repeatItem.value}

                                                                        <div className="btns">
                                                                            <a><i className="fa-regular fa-pen-to-square"></i></a>
                                                                            <a><i className="fa-regular fa-trash-can"></i></a>
                                                                        </div>
                                                                    </p>
                                                                ))
                                                            ) : (
                                                                <p>No repetition rules added.</p>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="text_bottom_sec">
                                                        <button onClick={handleOpenCustomizeSubject}>Customize Repetition</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            selectedSection &&
                                            <div className="btn_box">
                                                <button onClick={handleGenerateTimeTable} disabled={isGenerateDisabled}><i className="fa-solid fa-file-pen"></i>Generate</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="right_item_sec">
                                    {
                                        timeTableData.length > 0 ? (
                                            <div className="time_levels">
                                                {
                                                    timeTableData.map((data, index) =>
                                                        <div className="time_level_box" key={index}>
                                                            <div className="box_head">
                                                                <li>
                                                                    <i className="fa-solid fa-calendar-day"></i>
                                                                    <span>{data.day}</span>
                                                                </li>
                                                                <button className="small_btn" onClick={() => handleRegenerateTimeTable('day', data.day)}>
                                                                    <i className="fa-solid fa-arrow-rotate-left"></i>
                                                                </button>
                                                                <button><i className="fa-solid fa-floppy-disk"></i>Save</button>
                                                            </div>
                                                            <div className="box_items">
                                                                {
                                                                    data.schedule.length > 0 ? (
                                                                        data.schedule.map((schedule, i) =>
                                                                            <div className="class_item" key={i}>
                                                                                <div className="item_inner">
                                                                                    <div className="timing">
                                                                                        <i className="fa-regular fa-clock"></i>
                                                                                        <p>{schedule.time}</p>
                                                                                    </div>
                                                                                    <div className="content_part">
                                                                                        <img src="/images/period.png" alt="" />
                                                                                        <li>
                                                                                            <h6>{schedule.subject}</h6>
                                                                                            <span>{schedule.period}</span>
                                                                                        </li>
                                                                                    </div>
                                                                                    <div className="teacher_info">
                                                                                        <i className="fa-solid fa-user"></i>
                                                                                        <a>{schedule.teacher}</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    ) : (
                                                                        <div className="empty_box">
                                                                            <img src="/images/no-fields.svg" alt="" />
                                                                            <p>No Period available.</p>
                                                                        </div>
                                                                    )
                                                                }

                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="btns_sec">
                                                    <button onClick={() => handleRegenerateTimeTable('week')}><i className="fa-solid fa-arrow-rotate-left"></i>Re-Generate</button>
                                                    <button><i className="fa-solid fa-floppy-disk"></i>Save</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="empty_box">
                                                <img src="/images/no-fields.svg" alt="" />
                                                <p>No Data available.</p>
                                            </div>
                                        )
                                    }
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
                    subjects={subjects}
                    subjectRepeatData={subjectRepeatData}
                    setSubjectRepeatData={setSubjectRepeatData}
                />
            </TimeTableSettingsWrapper>
        </>
    );
}

export default TimeTableSettingsPage;
