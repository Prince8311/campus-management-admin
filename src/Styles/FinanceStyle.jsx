import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const FeeCollectionWrapper = styled('div')`
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

    .tab_sec {
        position: relative;
        margin-top: 20px;
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

    .class_levels {
        position: relative;
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;

        .class_level_box {
            position: relative;
            width: 100%;
            margin-bottom: 25px;
            display: flex;
            flex-direction: column;

            .box_head {
                position: relative;
                width: 100%;
                padding: 0 20px;

                span {
                    position: relative;
                    font-size: 14px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                    font-style: italic;
                }
            }

            .box_items {
                position: relative;
                width: 100%;
                padding: 0 15px;
                display: flex;
                flex-direction: column;

                .class_item {
                    position: relative;
                    margin-top: 15px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 8px;
                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                    .top_part {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 10px 16px;
                        cursor: pointer;

                        .left_info {
                            position: relative;

                            li {
                                position: relative;
                                list-style: none;
                                display: flex;
                                flex-direction: column;

                                p {
                                    position: relative;
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    font-style: italic;
                                }

                                span {
                                    position: relative;
                                    margin-top: 1px;
                                    font-size: 15px;
                                    color: ${colors.customColors.blackColor};
                                    font-weight: 600;
                                }
                            }
                        }

                        .right_info {
                            position: relative;
                            margin-left: auto;
                            display: flex;

                            li {
                                position: relative;
                                list-style: none;
                                display: flex;
                                flex-direction: column;
                                padding: 0 14px;

                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    width: 1px;
                                    height: 100%;
                                    background: linear-gradient(to bottom, transparent, ${colors.customColors.borderColor1}, transparent);
                                }

                                &:last-of-type {
                                    padding-right: 0;

                                    &::before {
                                        display: none;
                                    }
                                }

                                p {
                                    position: relative;
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    font-style: italic;

                                    label {
                                        position: relative;
                                        margin-left: 3px;
                                        z-index: 5;

                                        i {
                                            font-size: 9px;
                                            cursor: pointer;
                                        }

                                        a {
                                            position: absolute;
                                            right: -10px;
                                            top: -42px;
                                            width: 135px;
                                            padding: 7px 10px;
                                            background: ${colors.customColors.whiteColor};
                                            box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};
                                            border-radius: 5px;
                                            font-size: 9px;
                                            pointer-events: none;
                                            opacity: 0;
                                            visibility: hidden;
                                            transition: all 0.5s ease;

                                            &::after {
                                                content: '';
                                                position: absolute;
                                                bottom: -4px;
                                                right: 10.5px;
                                                width: 8px;
                                                height: 8px;
                                                background: ${colors.customColors.whiteColor};
                                                transform: rotate(45deg);
                                                box-shadow: 4px 4px 5px ${colors.boxShadowColors.shadowColor1};
                                            }
                                        }

                                        &:hover {
                                            a {
                                                opacity: 1;
                                                visibility: visible;
                                                transition: all 0.5s ease;
                                            }
                                        }
                                    }
                                }

                                span {
                                    position: relative;
                                    font-size: 14px;
                                    font-weight: 500;

                                    b {
                                        font-weight: 500;
                                        font-size: 11px;
                                    }

                                    &.applied {
                                        color: ${colors.customColors.blueColor2};
                                    }

                                    &.discount {
                                        color: ${colors.customColors.yellowColor1};
                                    }

                                    &.paid {
                                        color: ${colors.customColors.greenColor};
                                    }

                                    &.due {
                                        color: ${colors.customColors.redColor};
                                    }
                                }
                            }
                        }

                        .icon {
                            position: relative;
                            margin-left: 40px;
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};

                            i {
                                position: relative;
                                font-size: 14px;
                                color: ${colors.customColors.blackColor2};
                            }
                        }
                    }
                }
            }
        }
    }
`;