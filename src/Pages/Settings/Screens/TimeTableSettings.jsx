import { TimeTableSettingsWrapper } from "../../../Styles/SettingStyle";

const TimeTableSettingsPage = () => {
    return (
        <>
            <TimeTableSettingsWrapper>
                <div className="page_head">
                    <h2>Institution Time Slots</h2>
                    <div className="add_btn">
                        <button>
                            <i className="fa-solid fa-plus"></i>
                            <p>Add New Slot</p>
                        </button>
                    </div>
                </div>
                <div className="slot_levels">
                    <div className="slot_box">
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
                </div>
                <div className="page_bottom_sec">
                    <div className="schedule_head">
                        <h2>Set Time Table Section Wise</h2>
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit sequi vero, in saepe iure ducimus amet hic quis magnam perferendis quaerat unde dolore ratione nostrum id quo laudantium temporibus! Deserunt similique saepe facilis suscipit accusamus ea delectus hic perspiciatis pariatur? Laboriosam natus quod, optio consequatur minima cumque corrupti. Eaque!</span>
                    <div className="page_items">
                        <div className="item_inner">
                            <div className="select_box">
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Class dropdown</p>
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
                                <div className="dropdown_sec">
                                    <div className="dropdown_btn">
                                        <p>Section dropdown</p>
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
                            <div className="btn_box">
                                <button><i class="fa-solid fa-cloud-arrow-down"></i>Generate</button>
                            </div>
                        </div>
                    </div>
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
                    </div>
                    <div className="btns_sec">
                        <button><i className="fa-solid fa-arrow-rotate-left"></i>Re-Generate</button>
                        <button><i className="fa-solid fa-floppy-disk"></i>Save</button>
                    </div>
                </div>
            </TimeTableSettingsWrapper>
        </>
    );
}

export default TimeTableSettingsPage;