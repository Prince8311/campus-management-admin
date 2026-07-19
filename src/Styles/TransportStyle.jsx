import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const TransportMainWrapper = styled('div')`
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

                            cursor: grab;
                            user-select: none;

                            &.dragging {
                                opacity: 0.65;
                                border-color: ${colors.themeColor};
                                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
                            }
    .heading_option_part {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;
                                align-items: center;
                                justify-content: space-between;

                                .delete_btn {
                                    position: relative;
                                    width: 26px;
                                    height: 26px;
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    cursor: pointer;
                                    background: ${colors.customColors.redColorLight};
            border-bottom: 2px solid ${colors.themeColor};
                                    i {
                                        font-size: 11px;
                                        color: ${colors.customColors.redColor};
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

export const PassengersWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .head_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        h6 {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: ${colors.customColors.blackColor1};
        }

        .filter_search_sec {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;

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

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    padding: 0 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    border: none;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding:  0 15px;

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
                        width: 22%;
                    }

                    &:nth-of-type(2) {
                        width: 16%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 18%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 18%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 16%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 10%;
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
                            width: 22%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 16%;
                            align-items: center;
                            justify-content: center;

                            .type_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;

                                h5 {
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor1};
                                }

                                p {
                                    font-size: 10px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor2};
                                }
                            }
                        }

                        &:nth-of-type(3) {
                            width: 18%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 18%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 16%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 10%;
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
`;

export const VehicleWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .head_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        h6 {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: ${colors.customColors.blackColor1};
        }

        .filter_search_sec {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;

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

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    padding: 0 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    border: none;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding:  0 15px;

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
                        width: 25%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 18%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 10%;
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
                            width: 25%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 18%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 12%;
                            align-items: center;
                            justify-content: center;

                            p {
                                position: relative;
                                font-size: 10px;
                                font-weight: 500;
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 4px 15px;
                                color: ${colors.customColors.yellowColor1};
                                background: ${colors.customColors.yellowColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                                &.deactive {
                                    color: ${colors.customColors.redColor};
                                    background: ${colors.customColors.redColorLight};
                                }
                            }
                        }

                        &:nth-of-type(6) {
                            width: 10%;
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
`;

export const VehicleStaffWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .head_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        h6 {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: ${colors.customColors.blackColor1};
        }

        .filter_search_sec {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;

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

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    padding: 0 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    border: none;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding:  0 15px;

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
                        width: 23%;
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
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 10%;
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
                            width: 23%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;

                            i {
                                color: ${colors.customColors.blueColor1};
                                font-size: 17px;
                                cursor: pointer;
                            }
                        }
                        &:nth-of-type(5) {
                            width: 12%;
                            align-items: center;
                            justify-content: center;

                            p {
                                position: relative;
                                font-size: 10px;
                                font-weight: 500;
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 4px 15px;
                                color: ${colors.customColors.yellowColor1};
                                background: ${colors.customColors.yellowColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                                &.deactive {
                                    color: ${colors.customColors.redColor};
                                    background: ${colors.customColors.redColorLight};
                                }
                            }
                        }

                        &:nth-of-type(6) {
                            width: 10%;
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
`;

export const VehicleRoutesWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .head_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        h6 {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: ${colors.customColors.blackColor1};
        }

        .filter_search_sec {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;

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

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    padding: 0 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    border: none;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding:  0 15px;

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
                        width: 25%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 25%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 10%;
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
                            width: 25%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 25%;
                            align-items: center;
                            justify-content: center;

                            .name_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                p {
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor1};
                                }

                                span {
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    border-radius: 50%;
                                    padding: 6px;
                                    margin-left: 5px;
                                    background: ${colors.customColors.lightBackground2};
                                }
                            }
                        }

                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 10%;
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
`;

export const StopagesWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .head_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        h6 {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            color: ${colors.customColors.blackColor1};
        }

        .filter_search_sec {
            position: relative;
            display: flex;
            align-items: center;
            margin-left: auto;

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

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    padding: 0 35px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    border: none;
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
        padding:  0 15px;

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
                        width: 28%;
                    }

                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 10%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 10%;
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
                            width: 28%;
                            align-items: center;
                        }

                        &:nth-of-type(3) {
                            width: 15%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 15%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 15%;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 10%;
                            align-items: flex-start;
                            justify-content: center;

                            p {
                                position: relative;
                                font-size: 10px;
                                font-weight: 500;
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 4px 15px;
                                color: ${colors.customColors.yellowColor1};
                                background: ${colors.customColors.yellowColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                            }
                        }

                        &:nth-of-type(6) {
                            width: 10%;
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
`;

export const AddRoutesWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_items {
        position: relative;
        width: 100%;
        display: flex;

        .left_items {
            position: relative;
            width: calc(100% - 350px);
            height: calc(100vh - 130px);
            display: flex;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .item_inner {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .page_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;

                    .icon {
                        position: relative;
                        margin-right: 15px;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};

                        i {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    h2 {
                        position: relative;
                        font-size: 21px;
                        font-weight: 600;
                        color: ${colors.customColors.blackColor};
                        font-family: "SUSE", sans-serif;
                    }
                }

                .top_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 7px;
                    margin-top: 20px;

                    .input_box {
                        position: relative;
                        width: 33.33%;
                        margin-bottom: 10px;
                        padding: 0 8px;

                        input {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 5px 15px;
                            outline: none;
                            border: none;
                            margin-top: 3px;
                            background: ${colors.customColors.lightBackground3};
                        }

                        span {
                            position: relative;
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            font-weight: 400;
                            color: ${colors.customColors.blackColor2};

                            p {
                                color: ${colors.customColors.redColor};
                                margin-left: 2px;
                            }
                        }
                    }

                    .select_box {
                        position: relative;
                        width: 33.33%;
                        margin-bottom: 10px;
                        padding: 0 8px;

                        span {
                            position: relative;
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            font-weight: 400;
                            color: ${colors.customColors.blackColor2};

                            p {
                                color: ${colors.customColors.redColor};
                                margin-left: 2px;
                            }
                        }

                        .dropdown_sec {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            flex-direction: column;
                            margin-top: 3px;

                            .dropdown_btn {
                                position: relative;
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                border-radius: 5px;
                                padding: 5px 15px;
                                cursor: pointer;
                                background: ${colors.customColors.lightBackground3};

                                p {
                                    position: relative;
                                    width: calc(100% - 25px);
                                    display: flex;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor1};
                                }

                                i {
                                    position: relative;
                                    margin-left: auto;
                                    display: flex;
                                    justify-content: flex-end;
                                    cursor: pointer;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                    transition: all 0.5s ease;
                                    
                                    &.active {
                                        transform: rotate(-180deg);
                                        transition: all 0.5s ease;
                                    }
                                }
                            }

                            .dropdown {
                                position: absolute;
                                top: 100%;
                                left: 0px;
                                width: 100%;
                                z-index: 15;
                                background: ${colors.customColors.whiteColor};
                                border-radius: 5px;
                                box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1};
                                max-height: 0px;
                                overflow: hidden;
                                transition: all 0.5s ease;

                                &.active {
                                    max-height: 200px;
                                    transition: all 0.5s ease;
                                }

                                &.staff_dropdown {
                                    &.active {
                                        max-height: 260px;
                                    }

                                    .dropdown_inner {
                                        padding: 8px;
                                    }
                                }

                                .dropdown_inner {
                                    position: relative;
                                    width: 100%;
                                    padding: 10px;
                                    display: flex;
                                    flex-direction: column;

                                    ul {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        flex-direction: column;
                                        max-height: 160px;
                                        overflow-y: auto;
                                        scrollbar-width: none;
                                        -ms-overflow-style: none;

                                        &::-webkit-scrollbar {
                                            display: none;
                                        }

                                        li {
                                            position: relative;
                                            width: 100%;
                                            list-style: none;
                                            padding: 7px 15px;
                                            cursor: pointer;
                                            font-size: 12px;
                                            color: ${colors.customColors.blackColor1};
                                            border-radius: 4px;
                                            transition: all 0.5s ease;

                                            &:hover {
                                                background: ${colors.themeColor};
                                                color: ${colors.customColors.whiteColor};
                                                transition: all 0.5s ease;
                                            }

                                            &.active {
                                                background: ${colors.customColors.lightBackground};
                                                color: ${colors.customColors.blackColor};

                                                &:hover {
                                                    color: ${colors.customColors.blackColor};
                                                }
                                            }

                                            &.empty_message {
                                                padding: 5px 10px;
                                                color: ${colors.customColors.blackColor3};
                                                pointer-events: none;
                                            }

                                            &.vehicle_item {
                                                display: block;

                                                p {
                                                    display: inline;
                                                    margin-left: 2px;
                                                    font-size: 10px;
                                                }
                                            }
                                        }
                                    }
                                }

                                .staff_groups {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    gap: 8px;
                                    max-height: 230px;
                                    overflow-y: auto;
                                    scrollbar-width: none;
                                    -ms-overflow-style: none;

                                    &::-webkit-scrollbar {
                                        display: none;
                                    }

                                    .staff_group {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        flex-direction: column;
                                        border: 1px solid ${colors.customColors.borderColor};
                                        border-radius: 5px;
                                        overflow: hidden;

                                        .group_header {
                                            position: relative;
                                            width: 100%;
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;
                                            padding: 6px 12px;
                                            background: ${colors.customColors.lightBackground};
                                            cursor: pointer;
                                            user-select: none;

                                            b {
                                                font-size: 11px;
                                                font-weight: 500;
                                                color: ${colors.customColors.blackColor};
                                                text-transform: capitalize;
                                                font-style: italic;
                                            }

                                            i {
                                                font-size: 11px;
                                                color: ${colors.customColors.blackColor2};
                                                transition: transform 0.3s ease;

                                                &.open {
                                                    transform: rotate(-180deg);
                                                }
                                            }
                                        }

                                        .group_list {
                                            position: relative;
                                            width: 100%;
                                            max-height: 0;
                                            overflow: hidden;
                                            transition: max-height 0.35s ease;

                                            &.open {
                                                max-height: 170px;
                                                overflow-y: auto;
                                                scrollbar-width: none;
                                                -ms-overflow-style: none;

                                                &::-webkit-scrollbar {
                                                    display: none;
                                                }
                                            }

                                            ul {
                                                position: relative;
                                                width: 100%;
                                                display: flex;
                                                flex-direction: column;
                                                padding: 5px;

                                                li {
                                                    position: relative;
                                                    width: 100%;
                                                    list-style: none;
                                                    padding: 6px 12px 6px 6px;
                                                    cursor: pointer;
                                                    font-size: 12px;
                                                    color: ${colors.customColors.blackColor1};
                                                    display: flex;
                                                    align-items: center;
                                                    gap: 8px;
                                                    transition: background 0.2s ease;

                                                    &:hover {
                                                        background: ${colors.customColors.lightBackground3};
                                                    }

                                                    &.selected {
                                                        background: ${colors.customColors.lightBackground};
                                                        color: ${colors.customColors.blackColor};
                                                    }

                                                    .check_icon {
                                                        width: 14px;
                                                        height: 14px;
                                                        border-radius: 3px;
                                                        border: 1.5px solid ${colors.customColors.blackColor3};
                                                        display: flex;
                                                        align-items: center;
                                                        justify-content: center;
                                                        flex-shrink: 0;

                                                        &.checked {
                                                            background: ${colors.themeColor};
                                                            border-color: ${colors.themeColor};

                                                            i {
                                                                font-size: 8px;
                                                                color: ${colors.customColors.whiteColor};
                                                            }
                                                        }
                                                    }

                                                    &.empty_message {
                                                        color: ${colors.customColors.blackColor3};
                                                        pointer-events: none;
                                                        font-size: 11px;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .date_box {
                        position: relative;
                        width: 33.33%;
                        margin-bottom: 10px;
                        padding: 0 8px;

                        span {
                            position: relative;
                            display: flex;
                            align-items: center;
                            font-size: 12px;
                            font-weight: 400;
                            color: ${colors.customColors.blackColor2};

                            p {
                                color: ${colors.customColors.redColor};
                                margin-left: 2px;
                            }
                        }

                        .date_btn {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            display: flex;
                            align-items: center;
                            border-radius: 5px;
                            padding: 5px 15px;
                            background: ${colors.customColors.lightBackground3};
                            cursor: pointer;
                            margin-top: 3px;

                            p {
                                position: relative;
                                width: calc(100% - 25px);
                                display: flex;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor1};
                            }

                            i {
                                position: relative;
                                width: 25px;
                                display: flex;
                                justify-content: flex-end;
                                cursor: pointer;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                            }
                        }
                    }
                }

                .stopage_sections {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;

                    .sec_head {
                        position: relative;
                        width: 100%;
                        display: flex;
                        padding: 0 15px;

                        h6 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }
                    }

                    .sec_content {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding:  0 15px;
                        
                        .content_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 6px;
                            margin-top: 15px;
                            z-index: 1;
                            user-select: none;
                            transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 220ms ease;

                            &.dropdown_open {
                                z-index: 60;
                            }

                            &.dragging {
                                opacity: 0.65;
                                border-color: ${colors.themeColor};
                                box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
                                cursor: grabbing;
                            }

                            .box_drag {
                                position: relative;
                                width: 28px;
                                display: flex;
                                background: ${colors.customColors.lightBackground1};
                                align-items: center;
                                justify-content: center;
                                border-radius: 6px 0px 0px 6px;
                                cursor: grab;

                                span {
                                    position: relative;
                                    font-size: 16px;
                                    color: ${colors.customColors.blackColor2};
                                }
                            }

                            .box_content {
                                position: relative;
                                width: calc(100% - 28px);
                                display: flex;
                                flex-direction: column;
                                padding: 15px;

                                &.no_drag {
                                    width: 100%;
                                }

                                .box_head {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;

                                    a {
                                        position: relative;
                                        width: max-content;
                                        padding: 4px 10px;
                                        border-radius: 25px;
                                        background: ${colors.customColors.blueColor2};
                                        font-size: 11px;
                                        text-decoration: none;
                                        color: ${colors.customColors.whiteColor};
                                    }

                                    .delete_btn {
                                        position: absolute;
                                        top: -15px;
                                        right: -15px;
                                        width: 28px;
                                        height: 28px;
                                        border-radius: 0 6px 0 6px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        cursor: pointer;
                                        background: ${colors.customColors.redColorLight};

                                        i {
                                            font-size: 11px;
                                            color: ${colors.customColors.redColor};
                                        }
                                    }
                                }

                                .box_items {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-wrap: wrap;
                                    justify-content: space-between;
                                    margin-top: 10px;

                                    .select_box {
                                        position: relative;
                                        width: 45%;
                                        margin-bottom: 8px;
                                        z-index: 49;

                                        span {
                                            position: relative;
                                            display: flex;
                                            align-items: center;
                                            font-size: 12px;
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor2};

                                            p {
                                                color: ${colors.customColors.redColor};
                                                margin-left: 2px;
                                            }
                                        }

                                        .dropdown_sec {
                                            position: relative;
                                            width: 100%;
                                            height: 37px;
                                            flex-direction: column;
                                            margin-top: 3px;

                                            .dropdown_btn {
                                                position: relative;
                                                width: 100%;
                                                height: 100%;
                                                display: flex;
                                                align-items: center;
                                                border-radius: 5px;
                                                padding: 5px 15px;
                                                cursor: pointer;
                                                background: ${colors.customColors.lightBackground3};

                                                p {
                                                    position: relative;
                                                    width: calc(100% - 25px);
                                                    display: flex;
                                                    font-size: 12px;
                                                    color: ${colors.customColors.blackColor1};
                                                }

                                                i {
                                                    position: relative;
                                                    margin-left: auto;
                                                    display: flex;
                                                    justify-content: flex-end;
                                                    cursor: pointer;
                                                    font-size: 12px;
                                                    color: ${colors.customColors.blackColor2};
                                                    transition: all 0.5s ease;
                                                    
                                                    &.active {
                                                        transform: rotate(-180deg);
                                                        transition: all 0.5s ease;
                                                    }
                                                }
                                            }

                                            .dropdown {
                                                position: absolute;
                                                top: 100%;
                                                left: 0px;
                                                width: 100%;
                                                z-index: 15;
                                                background: ${colors.customColors.whiteColor};
                                                border-radius: 5px;
                                                box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1};
                                                max-height: 0px;
                                                overflow: hidden;
                                                transition: all 0.5s ease;

                                                &.active {
                                                    max-height: 200px;
                                                    transition: all 0.5s ease;
                                                }

                                                &.drop_up {
                                                    top: auto;
                                                    bottom: 100%;
                                                    box-shadow: 5px -4px 15px ${colors.boxShadowColors.shadowColor1};
                                                }

                                                .dropdown_inner {
                                                    position: relative;
                                                    width: 100%;
                                                    padding: 10px;
                                                    display: flex;
                                                    flex-direction: column;

                                                    ul {
                                                        position: relative;
                                                        width: 100%;
                                                        display: flex;
                                                        flex-direction: column;
                                                        max-height: 160px;
                                                        overflow-y: auto;
                                                        scrollbar-width: none;
                                                        -ms-overflow-style: none;

                                                        &::-webkit-scrollbar {
                                                            display: none;
                                                        }

                                                        li {
                                                            position: relative;
                                                            width: 100%;
                                                            list-style: none;
                                                            padding: 7px 15px;
                                                            cursor: pointer;
                                                            font-size: 12px;
                                                            color: ${colors.customColors.blackColor1};
                                                            border-radius: 4px;
                                                            transition: all 0.5s ease;

                                                            &:hover {
                                                                background: ${colors.themeColor};
                                                                color: ${colors.customColors.whiteColor};
                                                                transition: all 0.5s ease;
                                                            }

                                                            &.active {
                                                                background: ${colors.customColors.lightBackground};
                                                                color: ${colors.customColors.blackColor};

                                                                &:hover {
                                                                    color: ${colors.customColors.blackColor};
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    .date_box {
                                        position: relative;
                                        width: 25%;
                                        margin-bottom: 8px;

                                        span {
                                            position: relative;
                                            display: flex;
                                            align-items: center;
                                            font-size: 12px;
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor2};

                                            p {
                                                color: ${colors.customColors.redColor};
                                                margin-left: 2px;
                                            }
                                        }

                                        .date_btn {
                                            position: relative;
                                            width: 100%;
                                            height: 37px;
                                            display: flex;
                                            align-items: center;
                                            border-radius: 5px;
                                            padding: 5px 15px;
                                            background: ${colors.customColors.lightBackground3};
                                            cursor: pointer;
                                            margin-top: 3px;

                                            p {
                                                position: relative;
                                                width: calc(100% - 25px);
                                                display: flex;
                                                font-size: 12px;
                                                color: ${colors.customColors.blackColor1};
                                            }

                                            i {
                                                position: relative;
                                                width: 25px;
                                                display: flex;
                                                justify-content: flex-end;
                                                cursor: pointer;
                                                font-size: 12px;
                                                color: ${colors.customColors.blackColor2};
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .add_sec {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-top: 20px;

                            span {
                                position: relative;
                                padding: 7px 25px;
                                border-radius: 8px;
                                background: ${colors.customColors.whiteColor};
                                font-size: 13px;
                                border: 1px dashed ${colors.customColors.blueColor2};
                                color: ${colors.customColors.blueColor2};
                                font-weight: 500;
                                cursor: pointer;

                                i {
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                }

            }
        }

        .right_items {
            position: relative;
            width: 350px;
            height: calc(100vh - 130px);
            display: flex;
            padding: 10px;

            .item_inner {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 6px;
                box-shadow: 5px 5px 10px ${colors.boxShadowColors.shadowColor1},
                        -4px -4px 10px ${colors.boxShadowColors.shadowColor1};
            }
        }
    }

    .btn_sec {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: flex-end;

        button {
            position: relative;
            width: 160px;
            height: 35px;
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;
            border-radius: 6px;
            overflow: hidden;
            border: none;
            background: ${colors.customColors.blueColor1};
            color: ${colors.customColors.whiteColor};
            transition: all 0.5s ease;

            &:hover {
                border-radius: 25px;
                transition: all 0.5s ease;
            }
        }
    }
`;
