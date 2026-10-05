import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const AddBookWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    padding-left: 265px;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 500px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 11px 20px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .input_box {
                    position: relative;
                    margin-bottom: 8px;

                    &.half {
                        width: 48.5%;
                    }

                    &.full {
                        width: 100%;
                    }

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

                    .sec_box {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        border-radius: 5px;
                        padding: 5px 15px;
                        background: ${colors.customColors.lightBackground3};

                        p {
                            position: relative;
                            width: calc(100% - 25px);
                            font-size: 12px;
                            outline: none;
                            background: transparent;
                            padding: 0;
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

                    .book_img_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: center;

                        .img_box {
                            position: relative;
                            width: 115px;
                            height: 140px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 10px;
                            border: 1px dashed ${colors.customColors.borderColor1};
                            border-radius: 6px;
                            cursor: pointer;
                            overflow: hidden;

                            img {
                                position: absolute;
                                inset: 0;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }

                            i {
                                color: ${colors.customColors.blackColor3};
                                font-size: 21px;
                            }

                            p {
                                position: relative;
                                color: ${colors.customColors.blackColor2};
                                font-size: 10px;
                                margin-top: 8px;
                                text-align: center;

                                a {
                                    color: ${colors.customColors.redColor};
                                    margin-left: 2px;
                                    text-decoration: none;
                                }
                            }

                            .remove_btn {
                                position: absolute;
                                top: 0;
                                right: 0;
                                width: 22px;
                                height: 22px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: none;
                                background: ${colors.customColors.redColor};
                                cursor: pointer;
                                border-radius: 5px;
                                z-index: 2;
                                
                                i {
                                    font-size: 12px;
                                    color: ${colors.customColors.whiteColor};
                                }
                            }

                            &.added {
                                border: 2px solid ${colors.customColors.borderColor};
                                background: ${colors.customColors.lightBackground3};
                            }
                        }
                    }
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};

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
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.4;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;

export const MemberDetailsWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 675px;
    height: 100vh;
    border-top-left-radius: 10px;
    background: ${colors.customColors.whiteColor};
    box-shadow: -10px 5px 15px ${colors.boxShadowColors.shadowColor1};
    z-index: 1000;
    transition: all 0.6s ease;

    &.active {
        right: 0;
        transition: all 0.6s ease;
    }

    .modal_box {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .modal_head {
            position: relative;
            width: 100%;
            padding: 20px 30px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 20px;
            }

            .close_sec {
                position: absolute;
                top: 10px;
                left: -20px;
                display: flex;

                a {
                    position: relative;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    color: ${colors.customColors.blackColor2};
                    cursor: pointer;
                    text-decoration: none;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1};
                }
            }
        }

        .member_detalis_sec {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 15px 0;

            .img_sec {
                position: relative;
                width: 140px;
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 4px;
                border: 1px dashed ${colors.customColors.borderColor1};
                border-radius: 5px;

                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .details_content {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-top: 6px;

                h5 {
                    position: relative;
                    font-size: 14px;
                    font-weight: 600;
                    color: ${colors.customColors.blackColor1};

                    span {
                        font-size: 11px;
                        color: ${colors.customColors.blackColor2};
                        font-weight: 500;
                        margin-left: 3px;
                    }
                }

                p {
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 500;
                    margin-top: 3px;
                }
            }
        }

        .table_section {
            position: relative;
            width: 100%;
            padding: 0 20px;

            .sec_inner {
                position: relative;
                width: 100%;
                display: flex;

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
                                width: 35%;
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
                        overflow-y: auto;

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
                                    width: 35%;
                                    display: flex;
                                    align-items: center;
                                }

                                &:nth-of-type(2) {
                                    width: 30%;
                                    align-items: center;
                                    justify-content: center;
                                }

                                &:nth-of-type(3) {
                                    width: 25%;
                                    align-items: center;
                                    justify-content: center;
                                }

                                &:nth-of-type(4) {
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

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};
            margin-top: auto;

            button {
                position: relative;
                padding: 10px 30px;
                font-size: 12px;
                font-weight: 500;
                border: none;
                border-radius: 6px;
                cursor: pointer;

                &:first-of-type {
                    background: ${colors.customColors.lightBackground3};
                    color: ${colors.customColors.blackColor1};
                }

                &:last-of-type {
                    background: ${colors.customColors.blueColor1};
                    color: ${colors.customColors.whiteColor};
                    margin-left: 20px;
                }

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.4;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;