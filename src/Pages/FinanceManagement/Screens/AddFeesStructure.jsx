import { useEffect, useState } from "react";
import { AddFeesStructureWrapper } from "../../../Styles/FinanceStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { UserData } from "../../../Context/PageContext";

const AddFeesStructure = () => {
    const api = getApiEndpoints();
    const feesStructureType = sessionStorage.getItem("feesStructureType");
    const [isAcademicsLoading, setIsAcademicsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [academicData, setAcademicData] = useState([]);
    const [openLevels, setOpenLevels] = useState({});
    const [selectedSections, setSelectedSections] = useState([]);
    const getKey = (cls, section) => `${cls}-${section}`;
    const [feeTypes, setFeeTypes] = useState([]);
    const [showFeeTypesDropdown, setShowFeeTypesDropdown] = useState(false);
    const [selectedFeeType, setSelectedFeeType] = useState('');

    const fetchAcademics = async () => {
        setIsAcademicsLoading(true);
        try {
            const response = await axiosInstance.get(api.fetchAcademics);
            if (response?.data.status === 200) {
                console.log("academic", response);
                setAcademicData(response?.data.academics);
            }
        } catch (error) {
            setAcademicData([]);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setIsAcademicsLoading(false);
        }
    }

    useEffect(() => {
        fetchAcademics();
    }, []);

    const toggleLevel = (index) => {
        setOpenLevels((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleLevelChange = (level, checked) => {
        let updated = [...selectedSections];
        level.classes.forEach((cls) => {
            cls.sections.forEach((section) => {
                const key = getKey(cls.class, section);
                if (checked) {
                    if (!updated.includes(key)) {
                        updated.push(key);
                    }
                } else {
                    updated = updated.filter(item => item !== key);
                }
            });
        });
        setSelectedSections(updated);
    };

    const handleClassChange = (cls, checked) => {
        let updated = [...selectedSections];
        cls.sections.forEach((section) => {
            const key = getKey(cls.class, section);
            if (checked) {
                if (!updated.includes(key)) {
                    updated.push(key);
                }
            } else {
                updated = updated.filter(item => item !== key);
            }
        });
        setSelectedSections(updated);
    };

    const handleSectionChange = (cls, section, checked) => {
        const key = getKey(cls.class, section);
        let updated = [...selectedSections];
        if (checked) {
            updated.push(key);
        } else {
            updated = updated.filter(item => item !== key);
        }
        setSelectedSections(updated);
    };

    const isLevelChecked = (level) =>
        level.classes.some(cls =>
            cls.sections.some(section =>
                selectedSections.includes(getKey(cls.class, section))
            )
        );

    const isClassChecked = (cls) =>
        cls.sections.some(section =>
            selectedSections.includes(getKey(cls.class, section))
        );

    const isSectionChecked = (cls, section) =>
        selectedSections.includes(getKey(cls.class, section));

    const fetchFeeTypes = async () => {
        try {
            const response = await axiosInstance.get(api.fetchFeesTypes);
            if (response?.data.status === 200) {
                setFeeTypes(response?.data.types);
            }
        } catch (error) {
            setFeeTypes([]);
            toast.error(error.response?.data.message || error.message);
        }
    }

    useEffect(() => {
        fetchFeeTypes();
    }, []);

    return (
        <>
            <AddFeesStructureWrapper>
                <div className="page_head">
                    <h2>{feesStructureType}</h2>
                </div>
                <div className="progress_section">
                    <div className={`sec_box ${(step === 1 || step === 2 || step === 3) ? 'active' : ''}`}>
                        <p>1</p>
                    </div>
                    <div class={`line ${(step === 2 || step === 3) ? 'active' : ''}`}></div>
                    <div className={`sec_box ${(step === 2 || step === 3) ? 'active' : ''}`}>
                        <p>2</p>
                    </div>
                    <div class={`line ${(step === 3) ? 'active' : ''}`}></div>
                    <div className={`sec_box ${step === 3 ? 'active' : ''}`}>
                        <p>3</p>
                    </div>
                </div>
                <div className="fees_structure_level_sec">
                    {
                        step === 1 &&
                        <div className="criteria_sec">
                            <div className="sec_head">
                                <span>Select classes you want to create structure for</span>
                            </div>
                            {
                                isAcademicsLoading ? (
                                    <div className="sec_item">
                                        <div className="class_item">
                                            <SkeletonLoader width="100%" height="175px" />
                                        </div>
                                    </div>
                                ) : (
                                    academicData?.some(level =>
                                        level?.classes?.length > 0 &&
                                        level.classes.some(cls => cls?.sections?.length > 0)
                                    ) ? (
                                        <>
                                            <div className="sec_item">
                                                {
                                                    academicData
                                                        ?.filter(level => level?.classes?.length > 0)
                                                        .map((academics, index) =>
                                                            <div className="class_item" key={index}>
                                                                <div className={`top_part ${openLevels[index] ? 'active' : ''}`}>
                                                                    <div className="left_info">
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`level-${index}`}
                                                                            checked={isLevelChecked(academics)}
                                                                            onChange={(e) => handleLevelChange(academics, e.target.checked)}
                                                                        />
                                                                        <label htmlFor={`level-${index}`}>
                                                                            <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                            <p>{academics.level_name}</p>
                                                                        </label>
                                                                    </div>
                                                                    <div className="icon" onClick={() => toggleLevel(index)}><i className={`fa-solid fa-angle-right ${openLevels[index] ? 'active' : ''}`}></i></div>
                                                                </div>
                                                                <div className={`bottom_part ${openLevels[index] ? 'active' : ''}`}>
                                                                    <div className="bottom_inner">
                                                                        {
                                                                            academics.classes
                                                                                ?.filter(cls => cls?.sections?.length > 0)
                                                                                .map((cls, idx) =>
                                                                                    <div className="class_box" key={idx}>
                                                                                        <div className="box_top">
                                                                                            <div className="top_left">
                                                                                                <input
                                                                                                    type="checkbox"
                                                                                                    id={`class-${index}-${idx}`}
                                                                                                    checked={isClassChecked(cls)}
                                                                                                    onChange={(e) => handleClassChange(cls, e.target.checked)}
                                                                                                />
                                                                                                <label htmlFor={`class-${index}-${idx}`}>
                                                                                                    <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                                                    <p>Class - {cls.class}</p>
                                                                                                </label>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="box_bottom">
                                                                                            <div className="bottom_inner">
                                                                                                <ul>
                                                                                                    {
                                                                                                        cls?.sections?.length > 0 && (
                                                                                                            cls.sections.map((section, i) =>
                                                                                                                <li key={i}>
                                                                                                                    <input
                                                                                                                        type="checkbox"
                                                                                                                        id={`${academics.level_name}-${cls.class}-${section}`}
                                                                                                                        checked={isSectionChecked(cls, section)}
                                                                                                                        onChange={(e) =>
                                                                                                                            handleSectionChange(cls, section, e.target.checked)
                                                                                                                        }
                                                                                                                    />
                                                                                                                    <label htmlFor={`${academics.level_name}-${cls.class}-${section}`}>
                                                                                                                        <span className="check_box"><img src="/images/check-icon.png" alt="check" /></span>
                                                                                                                        <p>Section {section}</p>
                                                                                                                    </label>
                                                                                                                </li>
                                                                                                            )
                                                                                                        )
                                                                                                    }
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                }
                                            </div>
                                            <div className="btn_sec">
                                                <button
                                                    disabled={selectedSections.length === 0}
                                                    onClick={() => {
                                                        setStep(2)
                                                        console.log(selectedSections)
                                                    }}>Save & Next <i className="fa-solid fa-angle-right"></i></button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="empty_box">
                                            <img src="/images/no-fields.svg" alt="" />
                                            <p>No Class & sections are available. <span>Create Now</span></p>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    }
                    {
                        step === 2 &&
                        <div className="fees_sec">
                            <div className="sec_head">
                                <span>Provide fees types, tax and due dates to create this structure.</span>
                            </div>
                            <div className="sec_item">
                                <div className="fees_type_sec">
                                    <div className="select_box">
                                        <span>Fees type <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={() => setShowFeeTypesDropdown(!showFeeTypesDropdown)}>
                                                <p>{selectedFeeType}</p>
                                                <i className={`fa-solid fa-angle-down ${showFeeTypesDropdown ? 'active' : ''}`}></i>
                                            </div>
                                            <div className={`dropdown ${showFeeTypesDropdown ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <ul>
                                                        {
                                                            feeTypes.length > 0 ? (
                                                                feeTypes.map((type, i) =>
                                                                    <li
                                                                        key={i}
                                                                        className={selectedFeeType === type ? 'active' : ''}
                                                                        onClick={() => {
                                                                            setSelectedFeeType(type)
                                                                            setShowFeeTypesDropdown(false)
                                                                        }}
                                                                    >
                                                                        {type}
                                                                    </li>
                                                                )
                                                            ) : (
                                                                <li className="empty_message">No types availble</li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="select_box">
                                        <span>Receipt prefix <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn">
                                                <p>SSA</p>
                                                <i className="fa-solid fa-angle-down"></i>
                                            </div>
                                            <div className="dropdown">
                                                <div className="dropdown_inner">
                                                    <ul>
                                                        <li></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box">
                                        <span>Tax % (if applicable) <p>*</p></span>
                                        <div className="input_wrapper">
                                            <input type="text" defaultValue="0" />
                                            <span className="percent_symbol">%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fees_date_sec">
                                    <div className="fees_head">
                                        <p>Payment schduled dates : </p>
                                    </div>
                                    <div className="sec_items">
                                        <div className="date_box">
                                            <div className="date_btn">
                                                <p>21 March, 2026</p>
                                                <i className="fa-regular fa-calendar"></i>
                                            </div>
                                            <div className="dropdown">

                                            </div>
                                        </div>
                                        {
                                            feesStructureType === 'Recurring Fee' &&
                                            <div className="add_btn">
                                                <button><i class="fa-solid fa-plus"></i>Add more</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="btn_sec">
                                <button onClick={() => setStep(step - 1)}><i className="fa-solid fa-angle-left"></i> Previous</button>
                                <button onClick={() => setStep(3)}>Save & Next <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                    }
                    {
                        step === 3 &&
                        <div className="amount_sec">
                            <div className="sec_head">
                                <span>Add amount to the installments</span>
                            </div>
                            <div className="sec_items">
                                <div className="installments_sec">
                                    <div className="installment_box">
                                        <p>1. 31 May, 2026</p>
                                        <div className="amount">
                                            <span>₹</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="installment_box">
                                        <p>1. 31 May, 2026</p>
                                        <div className="amount">
                                            <span>₹</span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="tax_sec">
                                        <a>Total fee : <span>₹50000</span></a>
                                        <a>Tax applied : <span>₹1020</span></a>
                                    </div>
                                    <div className="grand_total_sec">
                                        <p>Total fee including tax : <span>₹100000</span></p>
                                    </div>
                                </div>
                                <div className="btn_sec">
                                    <button onClick={() => setStep(step - 1)}><i className="fa-solid fa-angle-left"></i> Previous</button>
                                    <button><i className="fa-solid fa-cloud-arrow-up"></i> Publish</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </AddFeesStructureWrapper>
        </>
    );
}

export default AddFeesStructure;