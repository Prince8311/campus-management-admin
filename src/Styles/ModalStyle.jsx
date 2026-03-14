import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ButtonLoaderWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center !important;

    svg {
        position: relative;
        width: 50px;
        height: 20px;

        rect {
            fill: ${colors.customColors.whiteColor};
        }
    }
`;

export const SkeletonBoxWrapper = styled('div')`
    position: relative;
    border-radius: 4px;
    background: ${colors.customColors.lightBackground2};
    animation: pulse 1.4s infinite ease-in-out;

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
    }
`;

export const CreateAcademicLabelWrapper = styled('div')`
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

                .input_box {
                    position: relative;
                    width: 100%;

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

                a {
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

export const CreateClassWrapper = styled('div')`
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

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 15px;

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
                                            pointer-events: none;
                                            color: ${colors.customColors.blackColor3};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

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