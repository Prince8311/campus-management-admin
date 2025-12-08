import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const AlumniWrapper = styled('div')`
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

    .filter_search_sec {
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

        .filter_sec {
            position: relative;
            margin-left: 20px;

            .filter_btn {
                position: relative;
                width: 150px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }

                i {
                    position: relative;
                    margin-left: auto;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }
            }
        }
    }

    .tab_sec {
        position: relative;
        margin-top: 20px;
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
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 25%;
                    }

                    &:nth-of-type(2) {
                        width: 22%;
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
                        width: 17%;
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
                            align-items: center;

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
                            }
                        }

                        &:nth-of-type(2) {
                            align-items: center;
                            width: 22%;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 18%;
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

                        &:nth-of-type(4) {
                            width: 18%;
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

                        &:nth-of-type(5) {
                            width: 17%;
                            align-items: center;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                               &.view_btn {
                                    color: ${colors.customColors.blueColor1};
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