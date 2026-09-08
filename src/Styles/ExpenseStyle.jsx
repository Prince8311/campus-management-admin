import styled from "@emotion/styled";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ExpenseManagementWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 10px;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                height: 35px;
                padding: 0 35px;
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

    .tab_sec {
        position: relative;
        margin-top: 25px;
        width: 100%;
        padding: 0 15px;

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
`;

export const GeneralExpenseWrapper = styled('div')`
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
                        width: 30%;
                    }
                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 20%;
                        justify-content: center;
                    }
                    &:nth-of-type(5) {
                        width: 15%;
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
                            width: 30%;
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(5) {
                            width: 15%;
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

export const EventExpenseWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .folder_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 20px;
        padding: 0 10px;

        .folder_box{
            position: relative;
            width: 12%;
            display: flex;
            padding: 5px;
            cursor: pointer;
            border-radius: 3px;

            &:hover {
                background: ${colors.customColors.lightBackground3};
            }

            .box_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 8px 0;

                .img_sec {
                    position: relative;
                    width: 60px;
                    height: auto;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                p {
                    position: relative;
                    font-size: 13px;
                    font-weight: 400;
                    color: ${colors.customColors.blackColor};
                    margin-top: 3px;
                    line-height: 1;
                }

                a {
                    position: relative;
                    width: auto;
                    padding: 3px 15px;
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    font-weight: 500;
                    color: ${colors.customColors.greenColor};
                    background:  ${colors.customColors.greenColorLight};
                    margin-top: 5px;
                    text-decoration: none;
                    border-radius: 25px;

                    i {
                        font-size: 6px;
                        margin-right: 6px;
                    }

                    &.active {
                        color: ${colors.customColors.greenColor};
                        background:  ${colors.customColors.greenColorLight};
                    }
                    &.cancel {
                        color: ${colors.customColors.redColor};
                        background:  ${colors.customColors.redColorLight};
                    }
                    &.conclude {
                        color: ${colors.customColors.yellowColor};
                        background:  ${colors.customColors.yellowColorLight};
                    }
                }
            }
        }
    }
`;