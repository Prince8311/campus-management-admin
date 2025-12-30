import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const BillingWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 20px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .payment_schedule_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .payment_head {
            position: relative;
            width: 100%;
            display: flex;

            h6 {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
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
                        font-size: 11px;
                        word-break: break-all;
                        color: ${colors.customColors.whiteColor};
                        padding: 0 25px;
                        font-weight: 600;

                        &:nth-of-type(1) {
                            width: 13%;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 11%;
                            justify-content: center;
                        }
                        &:nth-of-type(7) {
                            width: 10%;
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
                            padding: 12px 25px;
                            display: flex;
                            color: ${colors.customColors.blackColor};
                            font-size: 12px;
                            word-break: break-all;
                            line-height: 1.5;

                            &:nth-of-type(1) {
                                width: 13%;
                                display: flex;
                            }

                            &:nth-of-type(2) {
                                width: 20%;
                                align-items: center;
                                justify-content: center;
                            }

                            &:nth-of-type(3) {
                                align-items: center;
                                width: 12%;
                                justify-content: center;
                            }

                            &:nth-of-type(4) {
                                width: 12%;
                                align-items: center;
                                justify-content: center;
                            }

                            &:nth-of-type(5) {
                                width: 12%;
                                align-items: center;
                                justify-content: center;
                            }
                            &:nth-of-type(6) {
                                width: 11%;
                                align-items: center;
                                justify-content: center;
                            }
                            &:nth-of-type(7) {
                                width: 10%;
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
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                    
                                    &.due {
                                        color: ${colors.customColors.redColor};
                                        background: ${colors.customColors.redColorLight};
                                    }
                                    &.unPaid {
                                        color: ${colors.customColors.yellowColor1};
                                        background: ${colors.customColors.yellowColorLight};
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

                                    &.download {
                                        color: ${colors.customColors.greenColor};
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
    }
`; 