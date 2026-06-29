import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const SelectStaffTypeWrapper = styled('div')`
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
                    width: 50%;
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
                            margin-top: 12px;
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
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

export const StaffDetailsWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 750px;
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

        .modal_sec {
            position: relative;
            width: 100%;
            height: calc(100% - 144px);
            margin-top: 20px;
            padding: 0 20px;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .sec_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                .profile_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .image_sec {
                        position: relative;
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px dashed ${colors.customColors.borderColor1};
                        padding: 5px;

                        img {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }

                        a {
                            position: absolute;
                            right: 5px;
                            bottom: 10px;
                            width: 25px;
                            height: 25px;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            font-size: 13px;
                            text-decoration: none;
                            background: ${colors.customColors.blueColor2};
                            color: ${colors.customColors.whiteColor};
                        }
                    }
                }

                .staff_details_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .details_box {
                        position: relative;
                        margin-top: 20px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 8px;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                        .details_top {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            padding: 10px 16px;
                            cursor: pointer;
                            border-radius: 8px 8px 0 0;
                            transition: all 0.5s ease;

                            &.active {
                                background: ${colors.customColors.lightBackground1};
                            }

                            h3 {
                                position: relative;
                                font-size: 14px;
                                color: ${colors.customColors.blackColor};
                                font-weight: 500;
                            }

                            .icon {
                                position: relative;
                                width: 35px;
                                height: 35px;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                margin-left: auto;
                                box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};

                                i {
                                    position: relative;
                                    font-size: 14px;
                                    color: ${colors.customColors.blackColor2};
                                }
                            }
                        }

                        .details_bottom {
                            position: relative;
                            width: 100%;
                            padding-top: 12px;
                            padding-bottom: 6px;

                            .details_inner {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                padding: 0 8px;
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
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                border: none;
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                cursor: pointer;

                i {
                    margin-right: 5px;
                    font-size: 13px;
                }
            }
        }
    }
`;