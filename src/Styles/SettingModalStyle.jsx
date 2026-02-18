import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const CreateSectionWrapper = styled('div')`
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
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 550px;
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
                max-height: 300px;
                display: flex;
                flex-direction: column;

                .input_box {
                    position: relative;

                    input {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 5px 20px;
                        outline: none;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor1};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
                        left: 15px;
                        padding: 0 5px;
                        font-size: 12px;
                        background: ${colors.customColors.whiteColor};
                        line-height: 1;
                        color: ${colors.customColors.blackColor2};
                        pointer-events: none;
                        transform: translateY(-50%);
                        transition: all 0.5s ease;
                    }

                    input:focus ~ span,
                    input:valid ~ span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }
                }

                p {
                    position: relative;
                    margin-top: 20px;
                    font-size: 12px;
                    color: ${colors.customColors.redColor};

                    span {
                        color: ${colors.customColors.redColor};
                        margin-right: 5px;
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
                background: ${colors.customColors.blueColor1};
                color: ${colors.customColors.whiteColor};
            }
        }
    }
`;

export const CreateFieldsWrapper = styled('div')`
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
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 750px;
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
                max-height: 300px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .input_box {
                    position: relative;
                    width: 48%;

                    input {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 5px 20px;
                        outline: none;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor1};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        top: 50%;
                        left: 15px;
                        padding: 0 5px;
                        font-size: 12px;
                        background: ${colors.customColors.whiteColor};
                        line-height: 1;
                        color: ${colors.customColors.blackColor2};
                        pointer-events: none;
                        transform: translateY(-50%);
                        transition: all 0.5s ease;
                    }

                    input:focus ~ span,
                    input:valid ~ span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }
                }

                .select_box {
                    position: relative;
                    width: 48%;

                    input {
                        display: none;
                    }

                    .dropdown_btn {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 5px 20px;
                        cursor: pointer;

                        span {
                            position: absolute;
                            top: 50%;
                            left: 15px;
                            padding: 0 5px;
                            font-size: 12px;
                            background: ${colors.customColors.whiteColor};
                            line-height: 1;
                            color: ${colors.customColors.blackColor2};
                            pointer-events: none;
                            transform: translateY(-50%);
                            transition: all 0.5s ease;
                        }

                        p {
                            position: relative;
                            max-width: calc(100% - 15px);
                            padding-right: 15px;
                            font-size: 12px;
                            line-height: 1.5;
                            color: ${colors.customColors.blackColor1};
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        i {
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            transition: all 0.5s ease;

                            &.active {
                                transform: rotate(-180deg);
                                transition: all 0.5s ease;
                            }
                        }
                    }

                    input:focus ~ .dropdown_btn,
                    input:valid ~ .dropdown_btn {
                        border: 1px solid ${colors.customColors.blueColor1};
                        transition: 0.5s;
                    }

                    input:focus ~ .dropdown_btn span,
                    input:valid ~ .dropdown_btn span {
                        transform: translateY(-25px);
                        font-size: 10px;
                        color: ${colors.themeColor};
                        font-weight: 500;
                        transition: all 0.5s ease;
                    }

                    .dropdown {
                        position: absolute;
                        top: 100%;
                        left: 0px;
                        width: 100%;
                        z-index: 15;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 5px;
                        box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor3};
                        max-height: 0px;
                        overflow: hidden;
                        transition: all 0.5s ease;

                        &.active {
                            max-height: 200px;
                            transition: all 0.5s ease;
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

                                    &.empty_message {
                                        pointer-events: none;
                                        opacity: 0.5;
                                    }
                                }

                                p {
                                    position: relative;
                                    width: 100%;
                                    font-size: 12px;
                                    padding: 3px 10px;
                                    color: ${colors.customColors.blackColor3};
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
            align-items: center;
            border-top: 1px solid ${colors.customColors.borderColor};

            .toggle_bar {
                position: relative;
                width: 50px;
                display: flex;
                justify-content: flex-start;

                input[type="checkbox"] {
                    display: none;
                }

                label {
                    position: relative;
                    width: 40px;
                    height: 21px;
                    background: ${colors.customColors.whiteColor2};
                    border-radius: 25px;
                    padding: 3px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.5s ease;

                    span {
                        position: relative;
                        width: 15px;
                        height: 100%;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 50%;
                        transition: all 0.5s ease;
                    }
                }

                input[type="checkbox"]:checked ~ label {
                    background: ${colors.customColors.blueColor1};
                    transition: all 0.5s ease;
                }

                input[type="checkbox"]:checked ~ label span {
                    transform: translateX(19px);
                    transition: all 0.5s ease;
                }
            }

            p {
                position: relative;
                margin-left: 10px;
                font-size: 13px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }

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
            }
        }
    }
`;