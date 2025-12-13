import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const StaffInformationWrapper = styled('div')`
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

    .student_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 20px;

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
            margin-left: auto;

            button {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;

                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
            }
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

            li {
                position: relative;
                list-style: none;
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

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;

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
                    padding: 0 20px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 17%;
                    }

                    &:nth-of-type(2) {
                        width: 14%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 10%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 10%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 15%;
                        justify-content: center;
                    }

                    &:nth-of-type(7) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(8) {
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
                        padding: 12px 20px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 17%;
                            display: flex;

                            .left_table_sec {
                                position: relative;
                                width: 30px;
                                height: 30px;
                                border-radius: 6px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: 1px solid ${colors.customColors.borderColor1};

                                h5 {
                                    position: relative;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor2};
                                    text-transform: uppercase;
                                }
                            }

                            .right_table_sec {
                                position: relative;
                                width: calc(100% - 30px);
                                padding-left: 10px;
                                display: flex;
                                flex-direction: column;

                                h6 {
                                    font-size: 13px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor1};
                                }

                                p {
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor2};
                                    /* margin-top: 3px; */
                                }
                            }
                        }

                        &:nth-of-type(2) {
                            width: 14%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 10%;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            align-items: center;
                            width: 10%;
                            justify-content: center;
                        }
                        &:nth-of-type(5) {
                            align-items: center;
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 15%;
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
                                color: ${colors.customColors.redColor};
                                background: ${colors.customColors.redColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                            }
                        }

                        &:nth-of-type(7) {
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
                            }
                        }

                        &:nth-of-type(8) {
                            width: 10%;
                            align-items: center;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                               &.view_btn {
                                    color: ${colors.customColors.blueColor1};
                               }

                               &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                    margin: 0 10px;
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