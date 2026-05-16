import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const StudentAttendanceDonut = () => {
    const totalStudents = 320;
    const presentStudents = 280;
    const absentStudents = 40;

    const [series] = useState([
        presentStudents,
        absentStudents,
    ]);

    const [options] = useState({
        chart: {
            width: 225,
            height: 215,
            type: "donut",
            fontFamily: "Poppins, sans-serif",
            toolbar: {
                show: false,
            },
        },

        labels: [
            "Present Students",
            "Absent Students",
        ],

        colors: [
            "#3FE44F",
            "#FF4D4F",
        ],

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },

        fill: {
            type: "gradient",
        },

        plotOptions: {
            pie: {
                donut: {
                    size: "60%",
                    labels: {
                        show: false,
                    },
                },
            },
        },

        tooltip: {
            theme: "dark",
        },
    });

    return (
        <div
            style={{
                position: "relative",
                width: 225,
                height: 215,
            }}
        >
            <ReactApexChart
                options={options}
                series={series}
                type="donut"
                width={225}
                height={215}
            />

            {/* CENTER CONTENT */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}
            >
                <span
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "12px",
                        color: "#8c8c8c",
                    }}
                >
                    Total Students
                </span>

                <span
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "22px",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: "#000",
                        lineHeight: 1.2,
                    }}
                >
                    {totalStudents}
                </span>
            </div>
        </div>
    );
};

export default StudentAttendanceDonut;