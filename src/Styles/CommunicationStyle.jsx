import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const MessagingWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .balance_section {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 5px;
        margin-top: 20px;

        .balance_box {
            position: relative;
            width: 320px;
            height: 100px;
            padding: 0 10px;
            display: flex;

            .box_inner {
                position: relative;
                width: 100%;
                height: 100%;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};
                margin-bottom: 20px;
                padding: 15px;
                padding-left: 25px;
                display: flex;
                flex-direction: column;

                .inner_top {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;

                    p {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        font-style: italic;
                        color: ${colors.customColors.blackColor1};
                    }

                    a {
                        position: relative;
                        font-size: 22px;
                        color: ${colors.customColors.blackColor1};
                        margin-left: auto;
                        text-decoration: none;
                    }
                }

                span {
                    position: relative;
                    margin-top: 2px;
                    font-size: 24px;
                    font-weight: 600;
                    color: ${colors.customColors.blackColor};
                }

                .box_btn {
                    position: absolute;
                    top: 10px;
                    right: -1px;
                    display: flex;

                    button {
                        position: relative;
                        padding: 7px 18px;
                        background: ${colors.customColors.orangeColor};
                        border: none;
                        color: ${colors.customColors.whiteColor};
                        font-size: 12px;
                        font-weight: 600;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 12% 50% );
                        padding-left: 28px;
                        padding-right: 20px;
                        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

                        i {
                            margin-left: 8px;
                            font-size: 11px;
                        }
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 20px;
                width: 3px;
                height: calc(100% - 20px);
                background: ${colors.customColors.blueColor4};
                border-radius: 25px;
            }

            &:nth-of-type(2) {
                &::before {
                    background: ${colors.customColors.greenColor};
                }
            }

            &:nth-of-type(3) {
                &::before {
                    background: ${colors.customColors.redColor};
                }
            }
        }
    }

    .filter_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        padding: 0 15px;
        padding-top: 20px;
        border-top: 1px solid ${colors.customColors.borderColor};

        .search_head {
            position: relative;
            width: 100%;
            display: flex;

            h5 {
                position: relative;
                font-size: 15px;
                color: ${colors.customColors.blackColor1};
                font-weight: 500;
                line-height: 1;
            }
        }

        .search_item {
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
                margin-left: auto;

                .filter_btn {
                    position: relative;
                    width: 125px;
                    height: 35px;
                    border: 1px solid ${colors.customColors.blueColor1};
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px 15px;
                    cursor: pointer;

                    p {
                        position: relative;
                        margin-left: 6px;
                        font-size: 12px;
                        color: ${colors.customColors.blueColor1};
                        font-weight: 500;
                    }

                    i {
                        position: relative;
                        color: ${colors.customColors.blueColor1};
                        font-size: 13px;
                    }
                }
            }

            .add_btn {
                position: relative;
                margin-left: 15px;

                button {
                    position: relative;
                    width: 150px;
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

    .tab_sec {
        position: relative;
        margin-top: 40px;
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

    .page_content {
        position: relative;
        margin-top: 25px;
        width: 100%;
        padding: 0 15px;
        display: flex;
        flex-direction: column;

        .content_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-bottom: 10px;
            margin-bottom: 10px;

            &:last-of-type {
                margin-bottom: 0;

                &::before {
                    display: none;
                }
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(to right, ${colors.customColors.borderColor}, #fff);
            }

            .box_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: flex-end;

                h5 {
                    position: relative;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1;
                    color: ${colors.customColors.blackColor};
                }

                span {
                    position: relative;
                    padding: 4px 15px;
                    border-radius: 25px;
                    background: ${colors.customColors.yellowColorLight};
                    color: ${colors.customColors.orangeColor};
                    font-size: 10px;
                    font-weight: 400;
                    margin-left: 10px;
                }

                a {
                    position: relative;
                    padding: 4px 10px;
                    font-size: 11px;
                    color: ${colors.customColors.whiteColor};
                    font-weight: 400;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-left: 10px;
                    cursor: pointer;
                    background: ${colors.customColors.blueColor1};

                    i {
                        font-size: 12px;
                        margin-left: 6px;
                    }
                }
            }

            .box_body {
                position: relative;
                margin-top: 10px;
                width: 100%;

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }
            }

            .box_bottom {
                position: relative;
                margin-top: 10px;
                width: 100%;
                display: flex;
                align-items: center;

                p {
                    position: relative;
                    font-size: 11px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor2};

                    b {
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        font-style: italic;
                        margin-right: 4px;
                    }

                    i {
                        font-size: 10px;
                        margin-right: 5px;
                    }
                }

                span {
                    position: relative;
                    margin: 0 12px;
                    display: flex;
                    align-items: center;

                    i {
                        font-size: 4px;
                        color: ${colors.customColors.blackColor2};
                    }
                }
            }
        }
    }
`;

export const InstitutionWalletWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        padding: 0 15px;
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
        margin-top: 20px;
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

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                width: 150px;
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

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 20px;
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
                        width: 30%;
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
                            width: 30%;
                            align-items: center;
                        }

                        &:nth-of-type(2) {
                            align-items: center;
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 20%;
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
                                &.pending {
                                    color: ${colors.customColors.orangeColor};
                                    background: ${colors.customColors.yellowColorLight};
                                }
                            }
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