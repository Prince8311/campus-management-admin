import { useState } from "react";
import { CalenderBox } from "../Styles/LayoutStyle";

const Calender = () => {

    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

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

            return `${dayNum} ${monthName}, ${yearNum}`;
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
                <li className={classes.join(" ")} key={`curr-${i}`}>
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
      

    return(
        <>
            <CalenderBox>
                <div className="calender_inner">
                    <div className="calender_head">
                        <a onClick={handlePrevMonth}><i className="fa-solid fa-angle-left"></i></a>
                        <b>{currentDate.toLocaleString("default", { month: "long" })}, {year}</b>
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