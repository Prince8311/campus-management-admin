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
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 20%;
                    }
                    &:nth-of-type(5) {
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(6) {
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
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                        }
                        &:nth-of-type(5) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(6) {
                            width: 15%;
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
                    width: 70px;
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
                    padding-left: 6px;
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
                        color: ${colors.customColors.blackColor2};
                        background:  ${colors.customColors.lightBackground3};
                    }
                }
            }
        }
    }
`;

export const RetailExpenseWrapper = styled('div')`
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
                padding: 8px 0;

                .img_sec {
                    position: relative;
                    width: 70px;
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
                    padding-left: 6px;
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

                    &.paid {
                        color: ${colors.customColors.greenColor};
                        background:  ${colors.customColors.greenColorLight};
                    }
                    &.due {
                        color: ${colors.customColors.redColor};
                        background:  ${colors.customColors.redColorLight};
                    }
                }
            }
        }
    }
`;

export const StockManagementWrapper = styled('div')`
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
    }

    .stock_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        padding: 0 5px;

        .stock_box {
            position: relative;
            width: 25%;
            max-width: 302.75px;
            max-height: 135px;
            padding: 10px;

            .box_inner {
                position: relative;
                width: 100%;
                padding: 12px;
                padding-left: 15px;
                background: ${colors.customColors.whiteColor};
                border: 1px solid ${colors.customColors.borderColor};
                border-left: 4px solid ${colors.customColors.blueColor1};
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                            -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                .top_part {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${colors.customColors.borderColor};

                    .part_content {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        
                        a {
                            position: relative;
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            background: ${colors.customColors.blueColorLight};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            color: ${colors.customColors.blueColor1};
                            text-decoration: none;
                            cursor: pointer;
                        }
                        
                        h6 {
                            position: relative;
                            padding-left: 12px;
                            max-width: calc(100% - 85px);
                            font-size: 13.5px;
                            font-style: italic;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        span {
                            position: relative;
                            width: max-content;
                            display: flex;
                            font-size: 10px;
                            color: ${colors.customColors.orangeColor};
                            margin-top: 2px;
                            background: ${colors.customColors.yellowColorLight};
                            border-radius: 25px;
                            padding: 3px 15px;
                            margin-left: auto;
                            font-weight: 500;

                            &.inStock {
                                background: ${colors.customColors.greenColorLight};
                                color: ${colors.customColors.greenColor1};
                            }
                            &.outOfStock {
                                background: ${colors.customColors.redColorLight};
                                color: ${colors.customColors.redColor};
                            }
                        }
                    }

                    .teacher_name_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        margin-top: 5px;

                        p {
                            position: relative;
                            display: flex;
                            width: 100%;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor2};

                            b {
                                position: relative;
                                width: 86px;
                                font-weight: 500;
                                margin-right: 4px;
                                font-style: italic;
                                color: ${colors.customColors.blackColor1};
                            }

                            span {
                                position: relative;
                                width: calc(100% - 90px);
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }

                .bottom_btn {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    justify-content: flex-end;

                    button {
                        position: relative;
                        width: max-content;
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        padding: 0 12px;

                        &.details {
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor2};
                            font-size: 10px;
                            cursor: pointer;
                            font-weight: 500;
                            border-bottom-left-radius: 4px;
                            border-top-left-radius: 4px;
                        }

                        &.delete {
                            background: ${colors.customColors.redColorLight};
                            color:  ${colors.customColors.redColor};
                            font-size: 10px;
                            cursor: pointer;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                        }
                    }
                }
            }
        }

        .add_section {
            position: relative;
            width: 25%;
            max-width: 302.75px;
            height: 135px;
            padding: 10px;
            cursor: pointer;

            .add_inner {
                position: relative;
                width: 100%;
                height: 100%;
                padding: 12px;
                padding-left: 15px;
                background: ${colors.customColors.whiteColor};
                border: 1px solid ${colors.customColors.borderColor};
                border-left: 4px solid ${colors.customColors.greenColor};
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                            -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                .text {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 5;

                    a {
                        position: relative;
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor};

                        span {
                            margin-left: 4px;
                            color: ${colors.customColors.blueColor2};
                        }

                        i {
                            position: relative;
                            width: 22px;
                            height: 22px;
                            background: ${colors.customColors.blueColorLight};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            color: ${colors.customColors.blueColor2};
                            border-radius: 50%;
                            margin-right: 6px;
                        }

                    }

                    p {
                        position: relative;
                        margin-top: 6px;
                        width: calc(100% - 115px);
                        font-size: 10px;
                        color: ${colors.customColors.blackColor2};
                    }
                }

                .icon {
                    position: absolute;
                    right: 4px;
                    bottom: 4px;
                    display: flex;

                    img {
                        width: 122px;
                        height: auto;
                    }
                }
            }
        }
    }
`;