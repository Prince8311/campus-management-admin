import { useEffect, useRef, useState } from "react";
import { FormFieldWrapper } from "../Styles/LayoutStyle";
import Calender from "./Calender";

const FormField = ({ label, type }) => {
    const dropdownRef = useRef(null);
    const [isDropUp, setIsDropUp] = useState(false);

    const checkPosition = () => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const spaceFromBottom = window.innerHeight - rect.bottom;

            if (spaceFromBottom <= 70) {
                setIsDropUp(true);
            } else {
                setIsDropUp(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("resize", checkPosition);
        window.addEventListener("scroll", checkPosition);

        return () => {
            window.removeEventListener("resize", checkPosition);
            window.removeEventListener("scroll", checkPosition);
        };
    }, []);

    return (
        <>
            <FormFieldWrapper>
                <div className="field_inner">
                    <span>{label} <p>*</p></span>
                    {
                        type === 'textbox' &&
                        <div className="input_box">
                            <input type="text" />
                        </div>
                    }
                    {
                        type === 'number' &&
                        <div className="input_box">
                            <input type="number" />
                        </div>
                    }
                    {
                        type === 'dropdown' &&
                        <div className="select_box">
                            <div className="select_btn">
                                <p>Type</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className={`dropdown ${isDropUp ? "drop-up" : ""}`} ref={dropdownRef}>
                                <div className="dropdown_inner">
                                    <ul>
                                        <li>A-</li>
                                        <li>A+</li>
                                        <li>B+</li>
                                        <li>B-</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        type === 'multi-select-dropdown' &&
                        <div className="multi_select_box">
                            <div className="select_btn">
                                <p>MultiType</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className="dropdown">
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
                        </div>
                    }
                    {
                        type === 'date' &&
                        <div className="date_box">
                            <div className="date_btn">
                                <p>Date</p>
                                <i className="fa-regular fa-calendar"></i>
                            </div>
                            <div className="dropdown">
                                <Calender />
                            </div>
                        </div>
                    }
                </div>
            </FormFieldWrapper>
        </>
    );
}

export default FormField;