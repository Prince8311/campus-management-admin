import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const SelectFeesStructureTypeWrapper = styled('div')`
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
        width: 650px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;

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
                line-height: 1;
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
            padding: 10px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .inner_box {
                    position: relative;
                    width: 33.33%;
                    display: flex;
                    flex-direction: column;
                    padding: 10px;

                    .box_item {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 18px 10px 10px;
                        border: 1px solid ${colors.customColors.borderColor1};
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        img {
                            position: relative;
                            width: auto;
                            height: 50px;
                        }

                        p {
                            position: relative;
                            margin-top: 8px;
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }

                        span {
                            position: relative;
                            width: 100%;
                            display: flex;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 400;
                            margin-top: 3px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    &:hover .box_item {
                        box-shadow: 0px 0px 10px ${colors.boxShadowColors.shadowColor3};
                        transition: all 0.5s ease;
                    }
                }
                
            }
        }
    }
`;

export const AddNewFeesTypeWrapper = styled('div')`
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
                line-height: 1;
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

                .item_box {
                    position: relative;
                    width: 100%;
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

                        a {
                            position: relative;
                            font-size: 9px;
                            color: ${colors.customColors.blackColor2};
                            margin-left: 2px;
                            text-decoration: none;
                        }
                    }

                    .box_content {
                        position: relative;
                        width: 100%;
                        min-height: 80px;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: flex-start;
                        margin-top: 3px;
                        padding: 7px;
                        background: ${colors.customColors.lightBackground3};
                        border-radius: 5px;

                        li {
                            position: relative;
                            width: max-content;
                            display: flex;
                            align-items: center;
                            list-style: none;
                            padding: 5px 5px 5px 10px;
                            border-radius: 4px;
                            background: ${colors.customColors.blueColor1};
                            margin: 3px;

                            p {
                                position: relative;
                                font-size: 11px;
                                color: ${colors.customColors.whiteColor};
                            }

                            span {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.whiteColor};
                                margin-left: 6px;
                                cursor: pointer;
                            }
                        }

                        input {
                            position: relative;
                            margin: 5px;
                            width: max-content;
                            border: none;
                            outline: none;
                            background: transparent;
                            padding: 0 5px;
                            font-size: 11px;

                            &.active {
                                height: 23px;
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
            align-items: center;
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
                background: ${colors.customColors.blueColor1};
                color: ${colors.customColors.whiteColor};
                margin-left: auto;
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

export const AddPaymentAmoutDateWrapper = styled('div')`
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
                line-height: 1;
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

                .date_box_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 16px;

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

                    .date_box {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        margin-top: 3px;

                        .date_btn {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            border-radius: 5px;
                            padding: 5px 15px;
                            background: ${colors.customColors.lightBackground3};
                            cursor: pointer;

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

                        .dropdown {
                            position: absolute;
                            top: 100%;
                            right: 0;
                            z-index: 99;
                            width: 100%;
                            transition: all 0.5s ease;

                            &.drop_up {
                                top: inherit;
                                bottom: 100%;
                            }
                        }
                    }
                }

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 15px;

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

                    .input_sec {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        border-radius: 5px;
                        margin-top: 3px;
                        display: flex;
                        align-items: center;
                        background: ${colors.customColors.lightBackground3};

                        input {
                            width: calc(100% - 37px);
                            height: 100%;
                            font-size: 12px;
                            border-radius: 5px;
                            outline: none;
                            border: none;
                            padding: 5px 15px;
                            background: transparent;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }

                        .rupee {
                            position: relative;
                            width: 37px;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};

                            &::after {
                                position: absolute;
                                content: '';
                                top: 0;
                                right: 0;
                                height: 100%;
                                width: 1px;
                                background: ${colors.customColors.borderColor};
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
            align-items: center;
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
                background: ${colors.customColors.blueColor1};
                color: ${colors.customColors.whiteColor};
                margin-left: auto;
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