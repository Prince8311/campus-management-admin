import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const HomePageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-top: 20px;

    .banner_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_content {
                position: relative;
                width: calc(100% - 650px);
                padding-right: 40px;
                display: flex;

                .content_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    a {
                        position: relative;
                        width: max-content;
                        padding: 5px 20px;
                        border-radius: 25px;
                        background: ${colors.customColors.greenColorLight};
                        color: ${colors.customColors.greenColor};
                        font-size: 12px;
                        font-weight: 500;
                        text-decoration: none;
                    }

                    h1 {
                        position: relative;
                        width: 100%;
                        font-size: 41px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 700;
                        letter-spacing: 0.3px;
                        margin: 15px 0;

                        span {
                            margin: 0 5px;
                            background: linear-gradient(90deg, #1FA2D6 0%, #2BB673 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }

                    p {
                        position: relative;
                        width: 100%;
                        display: flex;
                        color: ${colors.customColors.blackColor1};
                        font-size: 13px;
                    }

                    .banner_btns {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 25px;
                    
                        button {
                            position: relative;
                            padding: 10px 25px;
                            display: flex;
                            align-items: center;
                            border-radius: 6px;
                            background: linear-gradient(135deg, #2ea6d6, #0d7fa6);
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.whiteColor};
                            border: none;
                            cursor: pointer;
                            transition: all 0.5s ease;

                            &:last-of-type {
                                border: 1px solid ${colors.customColors.borderColor1};
                                color: ${colors.customColors.blackColor};
                                background: ${colors.customColors.whiteColor};
                                margin-left: 25px;
                            }

                            i {
                                margin-right: 6px;
                                font-size: 14px;
                                color: ${colors.customColors.blueColor1};
                            }

                            &:hover {
                                border-radius: 25px;
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }

            .right_content {
                position: relative;
                width: 650px;
                padding: 15px;
                border-radius: 10px;
                background: ${colors.customColors.whiteColor};
                box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
            }
        }
    }

    .scale_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1350px;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 15px;

                h3 {
                    position: relative;
                    font-size: 25px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 600;
                }

                p {
                    position: relative;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor2};
                    font-weight: 400;
                    margin-top: 5px;
                }
            }

            .content_items {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin-top: 40px;

                .item_box {
                    position: relative;
                    width: 25%;
                    padding: 15px;
                    display: flex;

                    .box_inner {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 20px;
                        padding-bottom: 27px;
                        box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                        border-radius: 10px;

                        a {
                            position: relative;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 5px;
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor1};
                            text-decoration: none;
                        }

                        h5 {
                            position: relative;
                            color: ${colors.customColors.blackColor1};
                            font-size: 16px;
                            font-weight: 500;
                            margin: 10px 0;
                        }

                        p {
                            position: relative;
                            color: ${colors.customColors.blackColor2};
                            font-size: 12px;
                            font-weight: 400;
                        }
                    }

                    &:nth-of-type(2) {
                        .box_inner {
                            a {
                                background: ${colors.customColors.greenColorLight};
                                color: ${colors.customColors.greenColor};
                            }
                        }
                    }

                    &:nth-of-type(3) {
                        .box_inner {
                            a {
                                background: ${colors.customColors.yellowColorLight};
                                color: ${colors.customColors.yellowColor};
                            }
                        }
                    }
                }
            }
        }
    }

    .stats_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;
        background: linear-gradient(90deg, #0c1a22, #0f2a33);

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .stat_box {
                position: relative;
                width: 33.33%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                a {
                    position: relative;
                    font-size: 33px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    text-decoration: none;

                    &.blue {
                        color: ${colors.customColors.blueColor1};
                    }
                    &.green {
                        color: ${colors.customColors.greenColor};
                    }
                    &.light {
                        color: ${colors.customColors.blueColor2};
                    }
                }

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.whiteColor};
                    letter-spacing: 1.5px;
                }
            }
        }
    }
`;