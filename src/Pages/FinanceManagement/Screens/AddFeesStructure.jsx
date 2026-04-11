import { useEffect, useState } from "react";
import { AddFeesStructureWrapper } from "../../../Styles/FinanceStyle";
import { toast } from "react-toastify";
import axiosInstance from "../../../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../../../Services/Api/ApiConfig";
import SkeletonLoader from "../../../Components/Loader/SkeletonLoader";
import { UserData } from "../../../Context/PageContext";
import AddPaymentAmoutDateModal from "../../../Components/Modals/FinanceManagement/AddPaymentAmountDate";

const AddFeesStructure = () => {
    const api = getApiEndpoints();
    const { userDetails } = UserData();
    const feesStructureType = sessionStorage.getItem("feesStructureType");
    const receiptPrefix = userDetails.institution?.receipt_prefix;
    const applicableTypes = ['New Students', 'Existing Students', 'Applicable for all'];
    const defaultTaxValue = 0;
    const [isAcademicsLoading, setIsAcademicsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [academicData, setAcademicData] = useState([]);
    const [openLevels, setOpenLevels] = useState({});
    const [selectedClasses, setSelectedClasses] = useState([]);
    const getKey = (cls, section) => `${cls}-${section}`;
    const [feeTypes, setFeeTypes] = useState([]);
    const [showFeeTypesDropdown, setShowFeeTypesDropdown] = useState(false);
    const [selectedFeeType, setSelectedFeeType] = useState('');
    const [showApplicableTypesDropdown, setShowApplicableTypesDropdown] = useState(false);
    const [selectedApplicableType, setSelectedApplicableType] = useState('');
    const [taxValue, setTaxValue] = useState(defaultTaxValue);

    const [showAddPaymentAmountModal, setShowAddPaymentAmountModal] = useState(false);
    const [scheduledPaymets, setScheduledPaymets] = useState([]);
    const [editingPayment, setEditingPayment] = useState(null);
    const isFeesStepValid =
        Boolean(receiptPrefix) &&
        Boolean(selectedFeeType) &&
        Boolean(selectedApplicableType) &&
        taxValue !== "" &&
        scheduledPaymets.length > 0;

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

    const updateClassSelection = (cls, updatedSections) => {
        const allSections = cls.sections.map(section => `${cls.class}-${section}`);
        const isAllSelected = allSections.every(sec => updatedSections.includes(sec));

        let filtered = updatedSections.filter(
            item => !item.startsWith(`${cls.class}-`) && item !== `${cls.class}`
        );

        if (isAllSelected) {
            filtered.push(`${cls.class}`);
        } else {
            filtered.push(...updatedSections.filter(item => item.startsWith(`${cls.class}-`)));
        }

        return [...new Set(filtered)];
    };

    const handleLevelChange = (level, checked) => {
        let updated = [...selectedClasses];

        level.classes.forEach(cls => {
            const classKey = `${cls.class}`;

            if (checked) {
                updated = updated.filter(item => !item.startsWith(`${cls.class}-`));
                updated.push(classKey);
            } else {
                updated = updated.filter(
                    item => item !== classKey && !item.startsWith(`${cls.class}-`)
                );
            }
        });

        setSelectedClasses([...new Set(updated)]);
    };

    const handleOpenAddAmountDateModal = () => {
        setShowAddPaymentAmountModal(true);
    }

    const handleClassChange = (cls, checked) => {
        let updated = [...selectedClasses];
        const classKey = `${cls.class}`;
        const sectionKeys = cls.sections.map(section => `${cls.class}-${section}`);

        if (checked) {
            updated = updated.filter(item => !item.startsWith(`${cls.class}-`));
            updated.push(classKey);
        } else {
            updated = updated.filter(
                item => item !== classKey && !item.startsWith(`${cls.class}-`)
            );
        }

        setSelectedClasses(updated);
    };

    const handleSectionChange = (cls, section, checked) => {
        const key = `${cls.class}-${section}`;
        let updated = [...selectedClasses];
        const classKey = `${cls.class}`;
        const allSections = cls.sections.map(sec => `${cls.class}-${sec}`);

        if (updated.includes(classKey)) {
            updated = updated.filter(item => item !== classKey);

            updated.push(...allSections.filter(sec => sec !== key));
        } else {
            if (checked) {
                updated.push(key);
            } else {
                updated = updated.filter(item => item !== key);
            }
        }

        updated = updateClassSelection(cls, updated);
        setSelectedClasses([...new Set(updated)]);
    };

    const isLevelChecked = (level) =>
        level.classes.some(cls =>
            selectedClasses.includes(`${cls.class}`) ||
            cls.sections.some(section =>
                selectedClasses.includes(`${cls.class}-${section}`)
            )
        );

    const isClassChecked = (cls) =>
        selectedClasses.includes(`${cls.class}`) ||
        cls.sections.some(section =>
            selectedClasses.includes(`${cls.class}-${section}`)
        );

    const isSectionChecked = (cls, section) =>
        selectedClasses.includes(`${cls.class}`) ||
        selectedClasses.includes(`${cls.class}-${section}`);

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

    useEffect(() => {
        if (!showAddPaymentAmountModal) {
            setEditingPayment(null);
        }
    }, [showAddPaymentAmountModal]);

    const buildApiPayload = (selectedClasses) => {
        const result = {};

        selectedClasses.forEach(item => {
            if (item.includes("-")) {
                // Section-level (e.g. "1-A")
                const [cls, section] = item.split("-");

                if (!result[cls]) {
                    result[cls] = {
                        class: cls,
                        sections: []
                    };
                }

                // Avoid overriding ALL
                if (result[cls].sections !== "ALL") {
                    result[cls].sections.push(section);
                }

            } else {
                // Full class (e.g. "1")
                result[item] = {
                    class: item,
                    sections: "ALL"
                };
            }
        });

        return Object.values(result);
    };

    const selectedClassSummary = buildApiPayload(selectedClasses);
    const subtotalFee = scheduledPaymets.reduce((total, item) => total + Number(item.amount || 0), 0);
    const parsedTaxValue = Number(taxValue || 0);
    const appliedTaxAmount = (subtotalFee * parsedTaxValue) / 100;
    const totalPayableAmount = subtotalFee + appliedTaxAmount;

    const formatCurrency = (amount) => `₹${Number(amount || 0).toFixed(2)}`;

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
                                                    disabled={selectedClasses.length === 0}
                                                    onClick={() => {
                                                        setStep(2)
                                                        console.log(selectedClasses)
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
                                    <div className="input_box receipt_prefix">
                                        <span>Receipt prefix <p>*</p></span>
                                        <input type="text" value={receiptPrefix} required readOnly />
                                    </div>
                                    <div className="select_box">
                                        <span>Fees type <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={() => {
                                                setShowFeeTypesDropdown(!showFeeTypesDropdown)
                                                setShowApplicableTypesDropdown(false)
                                            }}>
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
                                        <span>Apply For <p>*</p></span>
                                        <div className="dropdown_sec">
                                            <div className="dropdown_btn" onClick={() => {
                                                setShowApplicableTypesDropdown(!showApplicableTypesDropdown)
                                                setShowFeeTypesDropdown(false)
                                            }}>
                                                <p>{selectedApplicableType}</p>
                                                <i className={`fa-solid fa-angle-down ${showApplicableTypesDropdown ? 'active' : ''}`}></i>
                                            </div>
                                            <div className={`dropdown ${showApplicableTypesDropdown ? 'active' : ''}`}>
                                                <div className="dropdown_inner">
                                                    <ul>
                                                        {
                                                            applicableTypes.map((type, i) =>
                                                                <li
                                                                    key={i}
                                                                    className={selectedApplicableType === type ? 'active' : ''}
                                                                    onClick={() => {
                                                                        setSelectedApplicableType(type)
                                                                        setShowApplicableTypesDropdown(false)
                                                                    }}
                                                                >
                                                                    {type}
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input_box">
                                        <span>Tax % (if applicable) <p>*</p></span>
                                        <div className="input_wrapper">
                                            <input
                                                type="text"
                                                value={taxValue}
                                                onChange={(e) => setTaxValue(e.target.value)}
                                            />
                                            <span className="percent_symbol">%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="fees_date_sec">
                                    <div className="fees_head">
                                        <p>Payments & schduled dates : </p>
                                    </div>
                                    <div className="sec_items">
                                        {
                                            scheduledPaymets.map((item, index) => (
                                                <div className="item_box" key={item.id}>
                                                    <div className="box_inner">
                                                        <div className="inner_top">
                                                            <h6>#Installment - {index + 1}</h6>
                                                            <li>
                                                                <p>{item.paymentDate} -</p>
                                                                <span>₹{item.amount}</span>
                                                            </li>
                                                        </div>
                                                        <div className="inner_btn">
                                                            <button
                                                                className="edit"
                                                                onClick={() => {
                                                                    setEditingPayment(item);
                                                                    setShowAddPaymentAmountModal(true);
                                                                }}
                                                            >
                                                                <i className="fa-regular fa-pen-to-square"></i>Edit
                                                            </button>

                                                            <button
                                                                className="delete"
                                                                onClick={() => {
                                                                    setScheduledPaymets(prev =>
                                                                        prev.filter(p => p.id !== item.id)
                                                                    );
                                                                }}
                                                            >
                                                                <i className="fa-solid fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {
                                            (
                                                feesStructureType === 'Recurring Fee' ||
                                                (feesStructureType === 'One Time Fee' && scheduledPaymets.length < 1)
                                            ) &&
                                            <div className="add_btn">
                                                <div className="btn_inner" onClick={handleOpenAddAmountDateModal}>
                                                    <img src="/images/add-installment.svg" alt="" />
                                                    <p>Add Installment</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="btn_sec">
                                <button onClick={() => setStep(step - 1)}><i className="fa-solid fa-angle-left"></i> Back to Previous</button>
                                <button disabled={!isFeesStepValid} onClick={() => setStep(3)}>Save & Next <i className="fa-solid fa-angle-right"></i></button>
                            </div>
                        </div>
                    }
                    {
                        step === 3 &&
                        <div className="review_sec">
                            <div className="sec_head">
                                <span>Final Review</span>
                            </div>
                            <div className="sec_items">
                                <div className="details_sec">
                                    <div className="brief_box">
                                        <div className="box_inner">
                                            <div className="box_head">
                                                <h3>Academics</h3>
                                                <a><i className="fa-regular fa-pen-to-square"></i>Edit</a>
                                            </div>
                                            <div className="box_bottom academics">
                                                {
                                                    selectedClassSummary.length > 0 ? (
                                                        selectedClassSummary.map((item) => (
                                                            <li key={item.class}>
                                                                <span>Class {item.class}:</span>
                                                                <p>{item.sections === "ALL" ? "All Sections" : item.sections.join(", ")}</p>
                                                            </li>
                                                        ))
                                                    ) : (
                                                        <li>
                                                            <span>Class:</span>
                                                            <p>No classes selected</p>
                                                        </li>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="brief_box">
                                        <div className="box_inner">
                                            <div className="box_head">
                                                <h3>Fees Details</h3>
                                                <a><i className="fa-regular fa-pen-to-square"></i>Edit</a>
                                            </div>
                                            <div className="box_bottom fees">
                                                <li>
                                                    <span>Fees type :</span>
                                                    <p>{selectedFeeType || "--"}</p>
                                                </li>
                                                <li>
                                                    <span>Applied for :</span>
                                                    <p>{selectedApplicableType || "--"}</p>
                                                </li>
                                                <li>
                                                    <span>Receipt prefix :</span>
                                                    <p>{receiptPrefix || "--"}</p>
                                                </li>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="installment_box">
                                        <div className="box_inner">
                                            <div className="box_head">
                                                <h3>Installments</h3>
                                                <a><i className="fa-regular fa-pen-to-square"></i>Edit</a>
                                            </div>
                                            <div className="box_bottom">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Serial No.</th>
                                                            <th>Scheduled Date</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            scheduledPaymets.length > 0 ? (
                                                                scheduledPaymets.map((item, index) => (
                                                                    <tr key={item.id}>
                                                                        <td>#{index + 1}</td>
                                                                        <td>{item.paymentDate}</td>
                                                                        <td>{formatCurrency(item.amount)}</td>
                                                                    </tr>
                                                                ))
                                                            ) : (
                                                                <tr>
                                                                    <td colSpan="3">No installments added</td>
                                                                </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment_brief_sec">
                                    <div className="sec_inner">
                                        <div className="payment_row">
                                            <li>
                                                <span>Subtotal Fee</span>
                                                <p>{formatCurrency(subtotalFee)}</p>
                                            </li>
                                            <li>
                                                <span>Applied Tax ({parsedTaxValue}%)</span>
                                                <p>{formatCurrency(appliedTaxAmount)}</p>
                                            </li>
                                        </div>
                                        <div className="payment_total">
                                            <li>
                                                <span>TOTAL PAYABLE</span>
                                                <p>{formatCurrency(totalPayableAmount)}</p>
                                            </li>
                                            <a>
                                                <img src="/images/check-badge.svg" alt="" />
                                                <p>Calculation Verified</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_sec">
                                    <button onClick={() => setStep(step - 1)}><i className="fa-solid fa-angle-left"></i> Back to Previous</button>
                                    <button><i className="fa-solid fa-cloud-arrow-up"></i> Publish</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <AddPaymentAmoutDateModal
                    showAddPaymentAmountModal={showAddPaymentAmountModal}
                    setShowAddPaymentAmountModal={setShowAddPaymentAmountModal}
                    onSave={(data) => {
                        if (editingPayment) {
                            setScheduledPaymets(prev =>
                                prev.map(item =>
                                    item.id === editingPayment.id ? { ...item, ...data } : item
                                )
                            );
                            setEditingPayment(null);
                        } else {
                            setScheduledPaymets(prev => [
                                ...prev,
                                { id: Date.now(), ...data }
                            ]);
                        }
                    }}
                    editingPayment={editingPayment}
                />
            </AddFeesStructureWrapper>
        </>
    );
}

export default AddFeesStructure;
