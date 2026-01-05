import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const SchoolSthrengthWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .heading_option_part {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;
        margin-top: 20px;

        .inner_part {
            position: relative;
            width: max-content;
            padding: 6px;
            background: ${colors.customColors.lightBackground};
            border-radius: 6px;
            display: flex;

            .part_box {
                position: relative;
                padding: 8px 20px;
                cursor: pointer;
                border-radius: 4px;
                text-decoration: none;
                
                &.active {
                    background: ${colors.customColors.blueColor1};
                }

                h6 {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                }
                
                &.active h6 {
                    color: ${colors.customColors.whiteColor};
                }
            }
        }
    }

    .page_contents {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
`;

export const StudentReportWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .tab_sec {
        position: relative;
        padding: 0 15px;
        width: 100%;

        .tab_inner {
            position: relative;
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid ${colors.themeColor};

            a {
                position: relative;
                text-decoration: none;
                height: 100%;
                padding: 0 20px;
                padding-top: 2px;
                display: flex;
                align-items: center;
                font-size: 12.5px;
                color: ${colors.customColors.blackColor1};
                border-radius: 6px 6px 0 0;
                cursor: pointer;
                transition: all 0.5s ease;
                
                &:hover {
                    color: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
                
                &.active {
                    color: ${colors.customColors.whiteColor};
                    background: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .tab_items {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
`;

export const ClassWiseWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .class_filter_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 15px;

        .filter_sec {
            position: relative;

            .filter_btn {
                position: relative;
                width: 100px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                i {
                    position: relative;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }

                p {
                    position: relative;
                    margin-left: auto;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;

        table {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 20%;
                    }

                    &:nth-of-type(2) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 20%;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 20%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }
`;

export const StudentWiseWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .student_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .search_sec {
            position: relative;
            height: 35px;
            padding: 5px 0;
            display: flex;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 6px;

            i {
                position: relative;
                width: 40px;
                height: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor3};
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid ${colors.customColors.borderColor};
            }

            input {
                position: relative;
                width: 300px;
                height: 100%;
                border: none;
                outline: none;
                padding: 0 15px;
                font-size: 12px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .filter_sec {
            position: relative;
            margin-left: auto;

            .filter_btn {
                position: relative;
                width: 100px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                i {
                    position: relative;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }

                p {
                    position: relative;
                    font-size: 12px;
                    margin-left: auto;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;
        padding-bottom: 25px;
        overflow-x: auto;

        table {
            position: relative;
            width: max-content;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 500;

                    &:nth-of-type(1) {
                        width: 250px;
                    }

                    &:nth-of-type(2) {
                        width: 210px;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 250px;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 150px;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(6) {
                        width: 200px;
                        justify-content: center;
                    }
                    &:nth-of-type(7) {
                        width: 220px;
                        justify-content: center;
                    }
                    &:nth-of-type(8) {
                        width: 250px;
                        justify-content: center;
                    }
                    &:nth-of-type(9) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(10) {
                        width: 180px;
                        justify-content: center;
                    }
                    &:nth-of-type(11) {
                        width: 250px;
                        justify-content: center;
                    }
                    &:nth-of-type(12) {
                        width: 250px;
                        justify-content: center;
                    }
                    &:nth-of-type(13) {
                        width: 250px;
                        justify-content: center;
                    }
                    &:nth-of-type(14) {
                        width: 260px;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 250px;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 210px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 250px;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(6) {
                            width: 200px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(7) {
                            width: 220px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(8) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(9) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(10) {
                            width: 180px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(11) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(12) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(13) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(14) {
                            width: 260px;
                            align-items: center;
                            justify-content: center;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }
`;

export const StaffReportWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .tab_sec {
        position: relative;
        padding: 0 15px;
        width: 100%;

        .tab_inner {
            position: relative;
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid ${colors.themeColor};

            a {
                position: relative;
                text-decoration: none;
                height: 100%;
                padding: 0 20px;
                padding-top: 2px;
                display: flex;
                align-items: center;
                font-size: 12.5px;
                color: ${colors.customColors.blackColor1};
                border-radius: 6px 6px 0 0;
                cursor: pointer;
                transition: all 0.5s ease;
                
                &:hover {
                    color: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
                
                &.active {
                    color: ${colors.customColors.whiteColor};
                    background: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .tab_items {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
`;

export const TeachingStaffWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .staff_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .search_sec {
            position: relative;
            height: 35px;
            padding: 5px 0;
            display: flex;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 6px;

            i {
                position: relative;
                width: 40px;
                height: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor3};
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid ${colors.customColors.borderColor};
            }

            input {
                position: relative;
                width: 300px;
                height: 100%;
                border: none;
                outline: none;
                padding: 0 15px;
                font-size: 12px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .filter_sec {
            position: relative;
            margin-left: auto;

            .filter_btn {
                position: relative;
                width: 100px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                i {
                    position: relative;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }

                p {
                    position: relative;
                    font-size: 12px;
                    margin-left: auto;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;
        padding-bottom: 25px;
        overflow-x: auto;

        table {
            position: relative;
            width: max-content;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 500;

                    &:nth-of-type(1) {
                        width: 250px;
                    }

                    &:nth-of-type(2) {
                        width: 150px;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 210px;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 250px;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(6) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(7) {
                        width: 180px;
                        justify-content: center;
                    }
                    &:nth-of-type(8) {
                        width: 180px;
                        justify-content: center;
                    }
                    &:nth-of-type(9) {
                        width: 120px;
                        justify-content: center;
                    }
                    &:nth-of-type(10) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(11) {
                        width: 200px;
                        justify-content: center;
                    }
                    &:nth-of-type(12) {
                        width: 120px;
                        justify-content: center;
                    }
                    &:nth-of-type(13) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(14) {
                        width: 110px;
                        justify-content: center;
                    }
                    &:nth-of-type(15) {
                        width: 130px;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 250px;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 210px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(6) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(7) {
                            width: 180px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(8) {
                            width: 180px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(9) {
                            width: 120px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(10) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(11) {
                            width: 200px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(12) {
                            width: 120px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(13) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(14) {
                            width: 110px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(15) {
                            width: 130px;
                            align-items: center;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                               &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                    margin-right: 10px;
                               }

                               &.delete_btn {
                                    color: ${colors.customColors.redColor};
                               }
                            }
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }

    .different_table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;

        table {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 25%;
                    }

                    &:nth-of-type(2) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 20%;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 25%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }
`;

export const NonTeachingStaffWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .staff_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .search_sec {
            position: relative;
            height: 35px;
            padding: 5px 0;
            display: flex;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 6px;

            i {
                position: relative;
                width: 40px;
                height: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor3};
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid ${colors.customColors.borderColor};
            }

            input {
                position: relative;
                width: 300px;
                height: 100%;
                border: none;
                outline: none;
                padding: 0 15px;
                font-size: 12px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .filter_sec {
            position: relative;
            margin-left: auto;

            .filter_btn {
                position: relative;
                width: 100px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                i {
                    position: relative;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }

                p {
                    position: relative;
                    font-size: 12px;
                    margin-left: auto;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;
        padding-bottom: 25px;
        overflow-x: auto;

        table {
            position: relative;
            width: max-content;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 500;

                    &:nth-of-type(1) {
                        width: 250px;
                    }

                    &:nth-of-type(2) {
                        width: 150px;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 210px;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 210px;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 250px;
                        justify-content: center;
                    }
                    &:nth-of-type(6) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(7) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(8) {
                        width: 180px;
                        justify-content: center;
                    }
                    &:nth-of-type(9) {
                        width: 120px;
                        justify-content: center;
                    }
                    &:nth-of-type(10) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(11) {
                        width: 180px;
                        justify-content: center;
                    }
                    &:nth-of-type(12) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(13) {
                        width: 150px;
                        justify-content: center;
                    }
                    &:nth-of-type(14) {
                        width: 110px;
                        justify-content: center;
                    }
                    &:nth-of-type(15) {
                        width: 130px;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 250px;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 210px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 210px;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 250px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(6) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(7) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(8) {
                            width: 180px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(9) {
                            width: 120px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(10) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(11) {
                            width: 180px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(12) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(13) {
                            width: 150px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(14) {
                            width: 110px;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(15) {
                            width: 130px;
                            align-items: center;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                               &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                    margin-right: 10px;
                               }

                               &.delete_btn {
                                    color: ${colors.customColors.redColor};
                               }
                            }
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }

    .different_table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;

        table {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                }

                th {
                    position: relative;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 25%;
                    }

                    &:nth-of-type(2) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 20%;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                display: flex;
                flex-direction: column;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;
                    display: flex;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 25%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }
                }
            }
        }
    }
`;

export const AcademicsWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .tab_sec {
        position: relative;
        margin-top: 25px;
        width: 100%;

        .tab_inner {
            position: relative;
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid ${colors.themeColor};

            a {
                position: relative;
                text-decoration: none;
                height: 100%;
                padding: 0 20px;
                padding-top: 2px;
                display: flex;
                align-items: center;
                font-size: 12.5px;
                color: ${colors.customColors.blackColor1};
                border-radius: 6px 6px 0 0;
                cursor: pointer;
                transition: all 0.5s ease;
                
                &:hover {
                    color: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
                
                &.active {
                    color: ${colors.customColors.whiteColor};
                    background: ${colors.themeColor};
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .page_contents {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
`;

export const StudentWiseAcademicWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;
        padding-bottom: 25px;
        overflow-x: auto;

        table {
            position: relative;
            width: max-content;
            border-collapse: collapse;
            table-layout: fixed;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                th {
                    position: relative;
                    height: 100%;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 500;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;

                    &:nth-of-type(1) {
                        width: 250px;
                        text-align: left; 
                    }

                    &:nth-of-type(2) {
                        width: 120px;
                    }

                    &:nth-of-type(3) {
                        width: 180px;
                        text-align: left;
                    }

                    &:nth-of-type(4) {
                        width: 180px;
                    }

                    &:nth-of-type(5) {
                        width: 180px;
                    }
                    &:nth-of-type(6) {
                        width: 200px;
                    }
                    &:nth-of-type(7) {
                        width: 200px;
                    }
                    &:nth-of-type(8) {
                        width: 150px;
                    }
                    &:nth-of-type(9) {
                        width: 210px;
                    }
                    &:nth-of-type(10) {
                        width: 210px;
                    }
                    &:nth-of-type(11) {
                        width: 210px;
                    }
                    &:nth-of-type(12) {
                        width: 150px;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    &:last-of-type {
                        font-weight: 600;
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;
                        text-align: center;
                        vertical-align: middle;
                        word-break: break-word;

                        &:nth-of-type(1) {
                            width: 250px;
                            text-align: left;
                        }

                        &:nth-of-type(2) {
                            width: 120px;
                        }

                        &:nth-of-type(3) {
                            width: 180px;
                        }

                        &:nth-of-type(4) {
                            width: 180px;

                            i {
                                color: ${colors.customColors.blackColor3};
                            }
                        }

                        &:nth-of-type(5) {
                            width: 180px;

                            i {
                                color: ${colors.customColors.blackColor3};
                            }
                        }
                        &:nth-of-type(6) {
                            width: 200px;

                            i {
                                color: ${colors.customColors.blackColor3};
                            }
                        }
                        &:nth-of-type(7) {
                            width: 200px;

                            i {
                                color: ${colors.customColors.blackColor3};
                            }
                        }
                        &:nth-of-type(8) {
                            width: 150px;

                            i {
                                color: ${colors.customColors.blackColor3};
                            }
                        }
                        &:nth-of-type(9) {
                            width: 210px;
                        }
                        &:nth-of-type(10) {
                            width: 210px;
                        }
                        &:nth-of-type(11) {
                            width: 210px;
                        }
                        &:nth-of-type(12) {
                            width: 150px;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    &:first-of-type td:nth-of-type(3) {
                        text-align: left;
                    }
                }
            }
        }
    }
`;

export const TeacherWiseAcademicWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding: 0 15px;

        table {
            position: relative;
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;

            thead {
                position: relative;
                width: 100%;
                height: 40px;
                background: ${colors.themeColor};
                border-radius: 10px 10px 0px 0px;
                border: 1px solid ${colors.themeColor};

                tr {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                th {
                    position: relative;
                    height: 100%;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 500;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;

                    &:nth-of-type(1) {
                        width: 20%;
                        text-align: left; 
                    }

                    &:nth-of-type(2) {
                        width: 10%;
                    }

                    &:nth-of-type(3) {
                        width: 15%;
                    }

                    &:nth-of-type(4) {
                        width: 25%;
                    }

                    &:nth-of-type(5) {
                        width: 15%;
                    }
                    &:nth-of-type(6) {
                        width: 15%;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.whiteColor2};
                border-top: none;
                border-radius: 0px 0px 10px 10px;
                overflow: hidden;

                tr {
                    position: relative;
                    width: 100%;
                    min-height: 40px;

                    &:nth-of-type(even) {
                        background: ${colors.customColors.blueColorLight};
                    }

                    td {
                        position: relative;
                        padding: 12px 25px;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;
                        text-align: center;
                        vertical-align: middle;
                        word-break: break-word;

                        &:nth-of-type(1) {
                            width: 20%;
                            text-align: left;
                        }

                        &:nth-of-type(2) {
                            width: 10%;
                        }

                        &:nth-of-type(3) {
                            width: 15%;
                        }

                        &:nth-of-type(4) {
                            width: 25%;
                        }

                        &:nth-of-type(5) {
                            width: 15%;
                        }
                        &:nth-of-type(6) {
                            width: 15%;
                        }

                        &.empty_message {
                            position: relative;
                            width: 100%;
                            padding: 12px 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    &:last-of-type td:nth-of-type(4) {
                        text-align: center;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
`;