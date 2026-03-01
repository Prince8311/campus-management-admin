import { useEffect, useRef, useState } from "react";
import { FormFieldWrapper } from "../Styles/LayoutStyle";
import Calender from "./Calender";

const FormField = ({ id, sectionId, label, type, isrequired, value, onChange, activeDropdownId, setActiveDropdownId }) => {
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);
    const [isDropUp, setIsDropUp] = useState(false);
    const isOpen = activeDropdownId === id;

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
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            {
                                isOpen &&
                                <div className={`dropdown ${isDropUp ? "drop_up" : ""}`} ref={dropdownRef}>
                                    <div className="dropdown_inner">
                                        <ul>
                                            <li onClick={() => {
                                                onChange(sectionId, label, "A+");
                                                setActiveDropdownId(null);
                                            }}>
                                                A+
                                            </li>
                                            <li>A+</li>
                                            <li>B+</li>
                                            <li>B-</li>
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
                                <p></p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            {
                                isOpen &&
                                <div className={`dropdown ${isDropUp ? "drop_up" : ""}`} ref={dropdownRef}>
                                    <div className="dropdown_inner">
                                        <ul>
                                            <li>
                                                <p>Option 1</p>
                                                <span></span>
                                            </li>
                                            <li>
                                                <p>Option 2</p>
                                                <span><img src="/images/check-icon.png" alt="" /></span>
                                            </li>
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