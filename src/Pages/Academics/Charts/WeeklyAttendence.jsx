import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StudentWeeklyAttendanceGraph = () => {
    const [series] = useState([
        {
            name: "Total Students",
            data: [120, 120, 120, 120, 120, 120],
            color: "#1C41FF",
        },
        {
            name: "Present Students",
            data: [110, 98, 105, 115, 108, 95],
            color: "#3FE44F",
        },
    ]);

    const [options] = useState({
        chart: {
            height: 215,
            type: "bar",
            toolbar: {
                show: false,
            },
            fontFamily: "Poppins, sans-serif",
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                borderRadius: 8,
                endingShape: "rounded",
            },
        },

        dataLabels: {
            enabled: false,
        },

        stroke: {
            show: true,
            width: 3,
            colors: ["transparent"],
        },

        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 3,
        },

        xaxis: {
            categories: [
                "Mon (1 May)",
                "Tue (2 May)",
                "Wed (3 May)",
                "Thu (4 May)",
                "Fri (5 May)",
                "Sat (6 May)",
            ],

            labels: {
                style: {
                    colors: "#8c8c8c",
                    fontSize: "10px",
                    fontWeight: 500,
                },
            },

            axisBorder: {
                color: "#e0e0e0",
            },
        },

        yaxis: {
            min: 0,
            max: 150,

            labels: {
                style: {
                    colors: "#8c8c8c",
                    fontSize: "10px",
                },
            },
        },

        tooltip: {
            theme: "dark",
            x: {
                show: true,
            },
        },

        legend: {
            show: true,
            position: "top",
            horizontalAlign: "right",
        },
    });

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={215}
        />
    );
};

export default StudentWeeklyAttendanceGraph;