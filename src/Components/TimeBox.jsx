import { useEffect, useRef, useState } from "react";
import { TimeBoxWrapper } from "../Styles/LayoutStyle";

const itemHeight = 35;
const focusIndex = 2; // 4th visible item

const TimeBox = ({ onTimeChange }) => {
    const [hasInteracted, setHasInteracted] = useState(false);
    const hours = Array.from({ length: 17 }, (_, i) => i - 1);
    const minutes = Array.from({ length: 15 }, (_, i) => (i - 2) * 5);
    const periods = ["PM", "AM", "PM", "AM", "PM", "AM", "PM"];

    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const periodRef = useRef(null);

    const [activeHour, setActiveHour] = useState(0);
    const [activeMinute, setActiveMinute] = useState(0);
    const [activePeriod, setActivePeriod] = useState(0);

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

        container.scrollTop = 0;
        updateActive(container.scrollTop, items, setActive);

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
        const cleanHour = setupScroll(hourRef, hours, setActiveHour);
        const cleanMinute = setupScroll(minuteRef, minutes, setActiveMinute);
        const cleanPeriod = setupScroll(periodRef, periods, setActivePeriod);

        return () => {
            cleanHour?.();
            cleanMinute?.();
            cleanPeriod?.();
        };
    }, [hours.length, minutes.length, periods.length]);

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
