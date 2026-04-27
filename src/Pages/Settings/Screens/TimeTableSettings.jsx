import { useEffect, useState } from "react";
import { TimeTableSettingsWrapper } from "../../../Styles/SettingStyle";
import AddTimeSlotModal from "../../../Components/Modals/Setting/AddTimeSlot";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";

const TimeTableSettingsPage = () => {
    const api = getApiEndpoints();
    const [timeSlots, setTimeSlots] = useState([]);
    const [isInitialTimeSlotsLoading, setIsInitialTimeSlotsLoading] = useState(true);
    const [isAddTimeSlotOpen, setIsAddTimeSlotOpen] = useState(false);

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
        setIsAddTimeSlotOpen(true);
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
                                                <a><i className="fa-regular fa-clock"></i></a>
                                                <h6>First Period</h6>
                                            </div>
                                        </div>
                                        <div className="bottom_btn">
                                            <div className="time_sec">
                                                <p>10:00AM - 10:45AM</p>
                                            </div>
                                            <button className="details"><i className="fa-regular fa-pen-to-square"></i>Edit</button>
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
                                        <button>Customize Repetition</button>
                                    </div>
                                </div>
                                <div className="btn_box">
                                    <button><i class="fa-solid fa-cloud-arrow-down"></i>Generate</button>
                                </div>
                            </div>
                        </div>
                        <div className="rght_item_sec">
                            <div className="time_levels">
                                <div className="time_level_box">
                                    <div className="box_head">
                                        <span>Monday</span>
                                    </div>
                                    <div className="box_items">
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10.:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="time_level_box">
                                    <div className="box_head">
                                        <span>Tuesday</span>
                                    </div>
                                    <div className="box_items">
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10.:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10.:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="class_item">
                                            <div className="item_inner">
                                                <div className="top_part">
                                                    <div className="content_part">
                                                        <a><i className="fa-regular fa-clock"></i></a>
                                                        <h6>First Period</h6>
                                                    </div>
                                                    <div className="subject_sec">
                                                        <p>10:00AM - 10:45AM</p>
                                                        <li>
                                                            <a>Sourish Mondal</a>
                                                            <h6>Math</h6>
                                                        </li>
                                                    </div>
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

                <AddTimeSlotModal
                    isAddTimeSlotOpen={isAddTimeSlotOpen}
                    setIsAddTimeSlotOpen={setIsAddTimeSlotOpen}
                    refreshSlots={() => fetchTimeSlots(false)}
                />
            </TimeTableSettingsWrapper>
        </>
    );
}

export default TimeTableSettingsPage;