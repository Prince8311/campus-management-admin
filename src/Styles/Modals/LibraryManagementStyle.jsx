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
                            width: 120px;
                            height: 100px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 10px;
                            border: 2px dashed ${colors.customColors.borderColor};
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
                                font-size: 15px;
                            }

                            p {
                                position: relative;
                                z-index: 1;
                                color: ${colors.customColors.blackColor2};
                                font-size: 11px;
                                margin-top: 2px;
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