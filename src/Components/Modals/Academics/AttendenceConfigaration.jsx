import { useEffect, useRef, useState } from "react";
import { AttendenceConfigarationWrapper } from "../../../Styles/ModalStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import ButtonLoader from "../../Loader/ButtonLoader";

const AttendenceConfigarationModal = ({ isConfigurationModalOpen, setIsConfigurationModalOpen, configurationList }) => {
    const api = getApiEndpoints();
    const [isMultipleClassSelectOpen, setIsMultipleClassSelectOpen] = useState(false);
    const [selectedAttendaceType, setSelectedAttendaceType] = useState('date_wise');
    const [classes, setClasses] = useState([]);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [pendingSelectedClasses, setPendingSelectedClasses] = useState([]);
    const multipleClassRef = useRef(null);

    const getClassKey = (classItem) => {
        if (typeof classItem === 'object') {
            return classItem.id?.toString() || classItem.class?.toString() || classItem.name?.toString() || classItem.class_name?.toString() || JSON.stringify(classItem);
        }
        return classItem?.toString();
    };

    const getClassLabel = (classItem) => {
        if (typeof classItem === 'object') {
            return classItem.name || classItem.class || classItem.class_name || classItem.label || JSON.stringify(classItem);
        }
        return classItem?.toString();
    };

    const handleToggleClass = (classItem) => {
        const classKey = getClassKey(classItem);
        setPendingSelectedClasses((current) =>
            current.includes(classKey)
                ? current.filter((item) => item !== classKey)
                : [...current, classKey]
        );
    };

    const handleApplyClasses = () => {
        setSelectedClasses(pendingSelectedClasses);
        setIsMultipleClassSelectOpen(false);
    };

    const handleRemoveSelectedClass = (classKey) => {
        setSelectedClasses((current) => current.filter((item) => item !== classKey));
    };

    const getSelectedLabel = (classKey) => {
        const classItem = classes.find((item) => getClassKey(item) === classKey);
        return getClassLabel(classItem || classKey);
    };

    function closeModal() {
        setIsConfigurationModalOpen(false);
    }

    const fetchClasses = async () => {
        try {
            const response = await axiosInstance.get(api.fetchClasses, {
                params: {
                    isForm: true
                }
            });
            if (response?.data.status === 200) {
                console.log(response.data);
                setClasses(response?.data.data);
            }
        } catch (error) {
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        if (isConfigurationModalOpen) {
            fetchClasses();
        }
    }, [isConfigurationModalOpen]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isMultipleClassSelectOpen && multipleClassRef.current && !multipleClassRef.current.contains(event.target)) {
                setIsMultipleClassSelectOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMultipleClassSelectOpen]);

    function toggleMultipleClassSelect(event) {
        event.preventDefault();
        setPendingSelectedClasses(selectedClasses);
        setIsMultipleClassSelectOpen((prev) => !prev);
    }

    return (
        <>
            <AttendenceConfigarationWrapper className={isConfigurationModalOpen ? "active" : ""}>
                <div className={`modal_box ${isConfigurationModalOpen ? "active" : ""}`}>
                    <div className="modal_head">
                        <h4>Attendence Configaration</h4>
                        <div className="close_sec">
                            <a onClick={closeModal}>
                                <i className="fa-solid fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="modal_body">
                        <div className="body_inner">
                            <div className="inner_top">
                                <p>Set attendance tracking methodology for specific classes and sections.</p>
                            </div>
                            <div className="class_attendence_sec">
                                <h6>Target Classes</h6>
                                <div className="attendence_box_sec">
                                    {selectedClasses.length === 0 ? (
                                        <p>No classes selected. Click "Add More" to begin.</p>
                                    ) : (
                                        <div className="select_class_sec">
                                            {selectedClasses.map((classKey) => (
                                                <span key={classKey}>
                                                    Class {getSelectedLabel(classKey)}
                                                    <i
                                                        className="fa-regular fa-circle-xmark"
                                                        onClick={() => handleRemoveSelectedClass(classKey)}
                                                    />
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="box_left_sec" ref={multipleClassRef}>
                                        <a onClick={toggleMultipleClassSelect}><i className="fa-solid fa-plus"></i>Add More</a>
                                        {
                                            isMultipleClassSelectOpen && (
                                                <div className="multiple_class_sec">
                                                    <div className="class_sec_inner">
                                                        {
                                                            classes.length > 0 ? (
                                                                <>
                                                                    {
                                                                        classes.map((classItem, i) => {
                                                                            const classKey = getClassKey(classItem);
                                                                            return (
                                                                                <li key={classKey || i}>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id={`class${classKey}`}
                                                                                        name="subject_type"
                                                                                        checked={pendingSelectedClasses.includes(classKey)}
                                                                                        onChange={() => handleToggleClass(classItem)}
                                                                                    />
                                                                                    <label htmlFor={`class${classKey}`}>
                                                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                                        <p>Class {getClassLabel(classItem)}</p>
                                                                                    </label>
                                                                                </li>
                                                                            );
                                                                        })
                                                                    }
                                                                    <div className="btn_sec">
                                                                        <button type="button" onClick={handleApplyClasses}>Apply</button>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="empty_box">
                                                                    <img src="/images/no-fields.svg" alt="empty" />
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="Methodology_sec">
                                <div className="top_sec">
                                    <h5>Tracking Methodology</h5>
                                    <a>REQUIRED</a>
                                </div>
                                <div className="bottom_sec">
                                    <div className={`bottom_box ${selectedAttendaceType === 'date_wise' ? 'active' : ''}`} onClick={() => setSelectedAttendaceType('date_wise')}>
                                        <div className="box_inner">
                                            <span><i className="fa-solid fa-calendar"></i></span>
                                            <div className="box_item">
                                                <h6>Date Wise</h6>
                                                <p>Single record per student per day. Best for K-12 primary education.</p>
                                            </div>
                                            <a><i className="fa-regular fa-circle-check"></i></a>
                                        </div>
                                    </div>
                                    <div className={`bottom_box ${selectedAttendaceType === 'class_wise' ? 'active' : ''}`} onClick={() => setSelectedAttendaceType('class_wise')}>
                                        <div className="box_inner">
                                            <span><i className="fa-solid fa-clock"></i></span>
                                            <div className="box_item">
                                                <h6>Class Wise</h6>
                                                <p>Multiple records based on timetable periods. Best for Universities.</p>
                                            </div>
                                            <a><i className="fa-regular fa-circle-check"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="security_sec">
                                <div className="sec_content">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <p>Applying this configuration will affect how teachers view the attendance portal for the selected classes starting from the next calendar day. Existing records will remain archived under previous rules.</p>
                                </div>
                            </div>
                            <div className="table_sec">
                                <h5>Configuration List</h5>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Class</th>
                                            <th>Datewise</th>
                                            <th>Periodwise</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Class 1</td>
                                            <td>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="toggle"
                                                    />
                                                    <label htmlFor="toggle">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="toggle_bar">
                                                    <input
                                                        type="checkbox"
                                                        id="toggle"
                                                    />
                                                    <label htmlFor="toggle">
                                                        <span></span>
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button>Cancel</button>
                        <button>Save Changes</button>
                    </div>
                </div>
            </AttendenceConfigarationWrapper>
        </>
    );
}

export default AttendenceConfigarationModal;