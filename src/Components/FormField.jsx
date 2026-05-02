import { useEffect, useRef, useState } from "react";
import { FormFieldWrapper } from "../Styles/LayoutStyle";
import Calender from "./Calender";
import axiosInstance from "../Services/Middleware/AxiosInstance";
import { getApiEndpoints } from "../Services/Api/ApiConfig";
import { toast } from "react-toastify";

const FormField = ({ id, sectionId, label, type, isrequired, source, items, value, onChange, activeDropdownId, setActiveDropdownId, formData }) => {
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isDropUp, setIsDropUp] = useState(false);
    const isOpen = activeDropdownId === id;
    const textRef = useRef(null);
    const [displayText, setDisplayText] = useState('');
    const [serverItems, setServerItems] = useState([]);
    const selectedClass = formData?.[sectionId]?.["Class / Standard"];

    const checkPosition = () => {
        if (!dropdownRef.current || !wrapperRef.current) return;

        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const dropdownHeight = dropdownRef.current.offsetHeight;

        // 1️⃣ Viewport check
        const spaceBelowViewport = window.innerHeight - wrapperRect.bottom;
        const isNearViewportBottom = spaceBelowViewport <= 70;

        // 2️⃣ details_box overflow check (simulate dropdown opening downward)
        const detailsBox = wrapperRef.current.closest(".details_box");
        let isOverflowingDetailsBox = false;

        if (detailsBox) {
            const detailsBoxRect = detailsBox.getBoundingClientRect();

            // Simulated dropdown bottom if opened downward
            const simulatedDropdownBottom = wrapperRect.bottom + dropdownHeight;

            if (simulatedDropdownBottom > detailsBoxRect.bottom) {
                isOverflowingDetailsBox = true;
            }
        }

        setIsDropUp(isNearViewportBottom || isOverflowingDetailsBox);
    };

    useEffect(() => {
        if (isOpen) {
            requestAnimationFrame(() => {
                checkPosition();
            });
        }
    }, [isOpen]);

    const handleToggle = () => {
        if (isOpen) {
            setActiveDropdownId(null);
        } else {
            setActiveDropdownId(id);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                wrapperRef.current &&
                !wrapperRef.current.contains(e.target)
            ) {
                setActiveDropdownId(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMultiSelect = (item) => {
        let updatedValues = [];
        const currentValues = value || [];

        if (currentValues.includes(item)) {
            updatedValues = currentValues.filter(v => v !== item);
        } else {
            updatedValues = [...currentValues, item];
        }

        onChange(sectionId, label, updatedValues);
    };

    useEffect(() => {
        if (!value || value.length === 0) {
            setDisplayText("");
            return;
        }

        if (!textRef.current) return;

        const containerWidth = textRef.current.offsetWidth;
        const temp = document.createElement("span");
        temp.style.visibility = "hidden";
        temp.style.whiteSpace = "nowrap";
        temp.style.position = "absolute";
        document.body.appendChild(temp);

        let visibleItems = [];
        let hiddenCount = 0;

        for (let i = 0; i < value.length; i++) {
            const testText = [...visibleItems, value[i]].join(", ");
            temp.innerText = testText;

            if (temp.offsetWidth > containerWidth) {
                hiddenCount = value.length - visibleItems.length;
                break;
            } else {
                visibleItems.push(value[i]);
            }
        }

        document.body.removeChild(temp);

        if (hiddenCount > 0) {
            setDisplayText(`${visibleItems.join(", ")} (+${hiddenCount})`);
        } else {
            setDisplayText(visibleItems.join(", "));
        }

    }, [value]);

    useEffect(() => {
        const fetchServerItems = async () => {
            if (source !== "server" || !items) return;
            try {
                const endpoints = getApiEndpoints();
                const url = endpoints[items];

                if (!url) {
                    console.error("Invalid API key:", items);
                    return;
                }

                let params = {};

                if (label === "Section") {
                    if (!selectedClass) return;
                    params = { class: selectedClass, isForm: true };
                } else {
                    params = { isForm: true };
                }

                const res = await axiosInstance.get(url, { params });

                console.log("svsdbdthj", res);

                const data = res?.data?.data || [];
                setServerItems(data);
            } catch (error) {
                toast.error(error.response?.data.message || error.message);
            }
        };

        fetchServerItems();
    }, [source, items, label, selectedClass]);

    const finalItems = source === "server" ? serverItems : items;

    return (
        <>
            <FormFieldWrapper>
                <div className="field_inner">
                    <span>{label} {isrequired && <p>*</p>}</span>
                    {
                        type === 'textbox' &&
                        <div className="input_box">
                            <input type="text" value={value} onChange={(e) => onChange(sectionId, label, e.target.value)} />
                        </div>
                    }
                    {
                        type === 'number' &&
                        <div className="input_box">
                            <input type="number" value={value} onChange={(e) => onChange(sectionId, label, e.target.value)} />
                        </div>
                    }
                    {
                        type === 'dropdown' &&
                        <div className="select_box" ref={wrapperRef}>
                            <div className="select_btn" onClick={handleToggle}>
                                <p>{value}</p>
                                <i className={`fa-solid fa-angle-down ${isOpen ? 'rotate' : ''}`}></i>
                            </div>
                            {
                                isOpen &&
                                <div className={`dropdown ${isDropUp ? "drop_up" : ""}`} ref={dropdownRef}>
                                    <div className="dropdown_inner">
                                        <ul>
                                            {
                                                finalItems && finalItems.length > 0 ? (
                                                    finalItems.map((item, i) =>
                                                        <li
                                                            className={item === value ? 'selected' : ''}
                                                            onClick={() => {
                                                                if (item === value) return;
                                                                onChange(sectionId, label, item);
                                                                setActiveDropdownId(null);
                                                            }}
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                ) : (
                                                    <li className="empty_message">No items available</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        type === 'multi-select-dropdown' &&
                        <div className="multi_select_box" ref={wrapperRef}>
                            <div className="select_btn" onClick={handleToggle}>
                                <p ref={textRef}>{displayText}</p>
                                <i className={`fa-solid fa-angle-down ${isOpen ? 'rotate' : ''}`}></i>
                            </div>
                            {
                                isOpen &&
                                <div className={`dropdown ${isDropUp ? "drop_up" : ""}`} ref={dropdownRef}>
                                    <div className="dropdown_inner">
                                        <ul>
                                            {
                                                finalItems && finalItems.length > 0 ? (
                                                    finalItems.map((item, i) => {
                                                        const isSelected = value?.includes(item);

                                                        return (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleMultiSelect(item)}
                                                                className={isSelected ? "selected" : ""}
                                                            >
                                                                <p>{item}</p>
                                                                <span>
                                                                    {isSelected && (
                                                                        <img src="/images/check-icon.png" alt="selected" />
                                                                    )}
                                                                </span>
                                                            </li>
                                                        );
                                                    })
                                                ) : (
                                                    <li className="empty_message">No items available</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                    {
                        type === 'date' &&
                        <div className="date_box" ref={wrapperRef}>
                            <div className="date_btn" onClick={handleToggle}>
                                <p>{value}</p>
                                <i className="fa-regular fa-calendar"></i>
                            </div>
                            {
                                isOpen &&
                                <div className={`dropdown ${isDropUp ? "drop_up" : ""}`} ref={dropdownRef}>
                                    <Calender
                                        setFinalSelectedDate={(date) => {
                                            onChange(sectionId, label, date);
                                            setActiveDropdownId(null);
                                        }}
                                    />
                                </div>
                            }
                        </div>
                    }
                </div>
            </FormFieldWrapper>
        </>
    );
}

export default FormField;