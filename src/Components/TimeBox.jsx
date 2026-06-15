import { useEffect, useRef, useState } from "react";
import { TimeBoxWrapper } from "../Styles/LayoutStyle";

const itemHeight = 35;
const focusIndex = 2; // 4th visible item
const hours = Array.from({ length: 17 }, (_, i) => i - 1);
const minutes = Array.from({ length: 15 }, (_, i) => (i - 2) * 5);
const periods = ["PM", "AM", "PM", "AM", "PM", "AM", "PM"];

const TimeBox = ({ onTimeChange, selectedTime = "" }) => {
    const [hasInteracted, setHasInteracted] = useState(false);

    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const periodRef = useRef(null);

    const [activeHour, setActiveHour] = useState(0);
    const [activeMinute, setActiveMinute] = useState(0);
    const [activePeriod, setActivePeriod] = useState(0);

    const getScrollTopByIndex = (index) => Math.max(index - focusIndex, 0) * itemHeight;
    const getFocusableIndex = (items, isMatch) => {
        const maxFocusableIndex = items.length - 3;
        const focusableIndex = items.findIndex((item, index) => (
            index >= focusIndex
            && index <= maxFocusableIndex
            && isMatch(item)
        ));

        if (focusableIndex !== -1) return focusableIndex;

        return items.findIndex(isMatch);
    };

    const focusTime = (time) => {
        const match = String(time || '').trim().match(/^(\d{1,2}):(\d{2})\s?(AM|PM)$/i);
        if (!match) return false;

        const selectedHour = Number(match[1]);
        const selectedMinute = Number(match[2]);
        const selectedPeriod = match[3].toUpperCase();

        const hourIndex = getFocusableIndex(hours, (hour) => ((hour + 12) % 12 || 12) === selectedHour);
        const minuteIndex = getFocusableIndex(minutes, (minute) => (minute + 60) % 60 === selectedMinute);
        const periodIndex = getFocusableIndex(periods, (period) => period === selectedPeriod);

        if (hourIndex === -1 || minuteIndex === -1 || periodIndex === -1) return false;

        hourRef.current?.scrollTo({ top: getScrollTopByIndex(hourIndex) });
        minuteRef.current?.scrollTo({ top: getScrollTopByIndex(minuteIndex) });
        periodRef.current?.scrollTo({ top: getScrollTopByIndex(periodIndex) });

        setActiveHour(hourIndex);
        setActiveMinute(minuteIndex);
        setActivePeriod(periodIndex);

        return true;
    };

    const updateActive = (scrollTop, items, setActive) => {
        const firstVisible = Math.round(scrollTop / itemHeight);
        const focusedIndexPosition = firstVisible + focusIndex;

        const safeIndex = Math.min(
            Math.max(focusedIndexPosition, 0),
            items.length - 3
        );
        setActive(safeIndex);
    };

    const setupScroll = (containerRef, items, setActive) => {
        const container = containerRef.current;
        if (!container) return;

        const minScrollTop = 0;
        const maxScrollTop = (items.length - 3 - focusIndex) * itemHeight;

        const onWheel = (e) => {
            e.preventDefault();
            setHasInteracted(true);
            const direction = e.deltaY > 0 ? 1 : -1;

            let newScrollTop = container.scrollTop + direction * itemHeight;
            newScrollTop = Math.max(minScrollTop, Math.min(newScrollTop, maxScrollTop));

            container.scrollTo({
                top: newScrollTop,
                behavior: "smooth",
            });

            updateActive(newScrollTop, items, setActive);
        };

        container.addEventListener("wheel", onWheel, { passive: false });

        return () => container.removeEventListener("wheel", onWheel);
    };

    useEffect(() => {
        const hasFocusedTime = focusTime(selectedTime || "12:00 AM");

        if (!hasFocusedTime) {
            if (hourRef.current) hourRef.current.scrollTop = 0;
            if (minuteRef.current) minuteRef.current.scrollTop = 0;
            if (periodRef.current) periodRef.current.scrollTop = 0;
            setActiveHour(0);
            setActiveMinute(0);
            setActivePeriod(0);
        }

        const cleanHour = setupScroll(hourRef, hours, setActiveHour);
        const cleanMinute = setupScroll(minuteRef, minutes, setActiveMinute);
        const cleanPeriod = setupScroll(periodRef, periods, setActivePeriod);

        return () => {
            cleanHour?.();
            cleanMinute?.();
            cleanPeriod?.();
        };
    }, [selectedTime]);

    useEffect(() => {
        if (!hasInteracted) return;
        const rawHour = (hours[activeHour] + 12) % 12 || 12;
        const safeHour = String(rawHour).padStart(2, "0");
        const safeMinute = minutes[activeMinute];
        const finalMinute = String((safeMinute + 60) % 60).padStart(2, "0");
        const period = periods[activePeriod] === "AM" ? "AM" : "PM";

        const finalTime = `${safeHour}:${finalMinute} ${period}`;
        onTimeChange(finalTime);
    }, [activeHour, activeMinute, activePeriod]);

    return (
        <TimeBoxWrapper>
            <div className="time_box_inner">
                {/* HOURS */}
                <ul className="scroll_list">
                    <div className="scroll_part" ref={hourRef}>
                        {hours.map((h, index) => (
                            <li
                                key={index}
                                className={activeHour === index ? "active" : ""}
                            >
                                {String(h).padStart(2, "0")}
                            </li>
                        ))}
                    </div>
                    <div className="focus_part"></div>
                </ul>

                {/* MINUTES */}
                <ul className="scroll_list">
                    <div className="scroll_part" ref={minuteRef}>
                        {minutes.map((m, index) => (
                            <li
                                key={index}
                                className={activeMinute === index ? "active" : ""}
                            >
                                {String((m + 60) % 60).padStart(2, "0")}
                            </li>
                        ))}
                    </div>
                    <div className="focus_part"></div>
                </ul>

                {/* AM / PM */}
                <ul className="scroll_list">
                    <div className="scroll_part" ref={periodRef}>
                        {periods.map((p, index) => (
                            <li
                                key={index}
                                className={activePeriod === index ? "active" : ""}
                            >
                                {p}
                            </li>
                        ))}
                    </div>
                    <div className="focus_part"></div>
                </ul>
            </div>
        </TimeBoxWrapper>
    );
};

export default TimeBox;
