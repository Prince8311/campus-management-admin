import { useEffect, useRef, useState } from "react";
import { CalenderBox } from "../Styles/LayoutStyle";

const Calender = ({ hideYear = false, setFinalSelectedDate }) => {
    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);
    const pickerRef = useRef(null);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const months = Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("default", { month: "long" })
    );

    const currentYear = new Date().getFullYear();

    const years = [];
    for (let y = 1950; y <= currentYear + 4; y++) {
        years.push(y);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowMonthYearPicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const renderDates = () => {
        const dates = [];

        const isToday = (d) =>
            d === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
        const isSelected = (d) => selectedDate === d;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const formatDate = (day) => {
            const fullDate = new Date(year, month, day);
            const dayNum = fullDate.getDate();
            const monthName = fullDate.toLocaleString("en-US", { month: "long" });
            const yearNum = fullDate.getFullYear();

            return hideYear
                ? `${dayNum} ${monthName}`
                : `${dayNum} ${monthName}, ${yearNum}`;
        };

        // Step 1: Fill previous month dates
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            dates.push(
                <li className="date prev-month" key={`prev-${i}`}>
                    <b>{prevMonthDays - i}</b>
                </li>
            );
        }

        // Step 2: Fill current month dates
        for (let i = 1; i <= daysInMonth; i++) {
            const classes = ["date", "current-month"];
            const todayMatch = isToday(i);
            const selectedMatch = isSelected(i);
            if (todayMatch) classes.push("today");
            if (selectedMatch) classes.push("selected");
            dates.push(
                <li className={classes.join(" ")} key={`curr-${i}`} onClick={() => { setSelectedDate(i); setFinalSelectedDate(formatDate(i)) }}>
                    <b>{i}</b>
                </li>
            );
        }

        // Step 3: Fill next month dates only in the last row if needed
        const remainder = dates.length % 7;
        const nextDaysCount = remainder === 0 ? 0 : 7 - remainder;

        for (let i = 1; i <= nextDaysCount; i++) {
            dates.push(
                <li className="date next-month" key={`next-${i}`}>
                    <b>{i}</b>
                </li>
            );
        }

        return dates;
    };

    const handleMonthSelect = (monthIndex) => {
        setCurrentDate(new Date(year, monthIndex, 1));
    };

    const handleYearSelect = (selectedYear) => {
        setCurrentDate(new Date(selectedYear, month, 1));
    };

    return (
        <>
            <CalenderBox>
                <div className="calender_inner">
                    <div className="calender_head">
                        <a onClick={handlePrevMonth}><i className="fa-solid fa-angle-left"></i></a>
                        <div className="month_year_sec" ref={pickerRef}>
                            <b onClick={(e) => setShowMonthYearPicker(prev => !prev)}>
                                {currentDate.toLocaleString("default", { month: "long" })} {!hideYear && <>, {year}</>}
                            </b>
                            {
                                showMonthYearPicker &&
                                <div className="month_year_picker">
                                    <div className="picker_inner">
                                        <ul className={`months_list ${hideYear ? 'only_month' : ''}`}>
                                            {months.map((m, index) => (
                                                <li
                                                    key={m}
                                                    className={`picker_item ${month === index ? "active" : ""}`}
                                                    onClick={() => handleMonthSelect(index)}
                                                >
                                                    {m}
                                                </li>
                                            ))}
                                        </ul>
                                        {
                                            !hideYear &&
                                            <ul className="years_list">
                                                {years.map((y) => (
                                                    <li
                                                        key={y}
                                                        className={`picker_item ${year === y ? "active" : ""}`}
                                                        onClick={() => handleYearSelect(y)}
                                                    >
                                                        {y}
                                                    </li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                        <a onClick={handleNextMonth}><i className="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="calender_days">
                        {dayNames.map((day) => (
                            <li className="day" key={day}>{day}</li>
                        ))}
                    </div>
                    <div className="calender_dates">
                        {renderDates()}
                    </div>
                </div>
            </CalenderBox>
        </>
    );
}

export default Calender;