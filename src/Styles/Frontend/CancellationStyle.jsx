import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const CancellationRefundPolicyWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 60px;

    .heading_sec {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 799px;
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                position: relative;
                font-size: 11px;
                color: ${colors.customColors.greenColor1};
                font-weight: 500;
                text-transform: uppercase;

                &::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 110%;
                    transform: translateY(-50%);
                    width: 150px;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    right: 110%;
                    transform: translateY(-50%) rotate(180deg);
                    width: 150px;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor}, ${colors.customColors.whiteColor});
                }
            }

            h2 {
                position: relative;
                margin-top: 5px;
                font-size: 23px;
                color: ${colors.customColors.blackColor};
                font-weight: 600;
            }

            ul {
                position: relative;
                margin-top: 5px;
                display: flex;
                align-items: center;

                li {
                    position: relative;
                    list-style: none;
                    display: flex;
                    align-items: center;

                    i {
                        position: relative;
                        font-size: 11px;
                        margin-right: 5px;
                        color: ${colors.customColors.blackColor2};
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                    }
                }

                .gap {
                    position: relative;
                    width: 5px;
                    height: 5px;
                    background-color: ${colors.customColors.greenColor};
                    border-radius: 50%;
                    margin: 0 15px;
                }
            }
        }
    }

    .overview_sec {
        position: relative;
        width: 100%;
        margin-top: 70px;
        display: flex;
        justify-content: center; 

        .sec_inner {
            position: relative;
            width: 799px;
            display: flex;

            ul {
                position: relative;
                width: 30%;
                display: flex;
                flex-direction: column;

                h4 {
                    position: relative;
                    color: ${colors.customColors.blueColor2};
                    white-space: nowrap;
                    font-size: 13px;
                    font-weight: 600;
                }

                span {
                    position: relative;
                    margin-top: 5px;
                    font-size: 11px;
                    color: ${colors.customColors.blackColor2};
                }
            }

            p {
                position: relative;
                width: 70%;
                font-size: 13px;
                color: ${colors.customColors.blackColor1};
                line-height: 1.5;
            }
        }
    }

    .policy_sec {
        position: relative;
        width: 100%;
        margin-top: 50px;
        display: flex;
        justify-content: center;

        .sec_inner {
            position: relative;
            width: 799px;
            display: flex;
            flex-direction: column;

            .institution_part {
                position: relative;
                width: 100%;
                display: flex;

                .left_part {
                    position: relative;
                    width: calc(100% - 360px);
                    padding-right: 12px;

                    .part_inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 20px;
                        box-shadow: 3px 3px 5px ${colors.boxShadowColors.shadowColor2};
                        padding: 25px 30px;
                        display: flex;
                        flex-direction: column;

                        h5 {
                            position: relative;
                            font-size: 17px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                        }

                        p {
                            position: relative;
                            margin-top: 15px;
                            margin-bottom: 20px;
                            font-size: 13px;
                            line-height: 1.6;
                            color: ${colors.customColors.blackColor1};
                        }

                        span {
                            position: relative;
                            width: 100%;
                            margin-top: auto;
                            font-size: 12px;
                            line-height: 1.5;
                            font-weight: 500;
                            font-style: italic;
                            color: ${colors.customColors.redColor};
                            padding: 12px 15px;
                            border-radius: 15px;
                            border: 1px solid ${colors.customColors.redColorLight};
                            background: ${colors.customColors.redColorLight1};
                        }
                    }
                }

                .right_part {
                    position: relative;
                    width: 360px;
                    padding-left: 12px;

                    .part_inner {
                        position: relative;
                        width: 100%;
                        background: ${colors.customColors.blueColor3};
                        padding: 30px;
                        border-radius: 20px;
                        display: flex;
                        flex-direction: column;

                        img {
                            position: relative;

                            &.icon {
                                width: 22px;
                            }

                            &.image {
                                margin-top: 15px;
                                width: 120px;
                                border-radius: 10px;
                                opacity: 0.6;
                            }
                        }

                        h5 {
                            position: relative;
                            margin-top: 15px;
                            font-size: 18px;
                            font-weight: 500;
                            color: ${colors.customColors.whiteColor};
                        }

                        p {
                            position: relative;
                            margin-top: 10px;
                            font-size: 12px;
                            color: ${colors.customColors.whiteColor};
                            opacity: 0.7;
                            line-height: 1.7;
                        }
                    }
                }
            }

            .student_staff_part {
                position: relative;
                margin-top: 24px;
                width: 100%;
                display: flex;
                background: ${colors.customColors.lightBackground};
                padding: 30px;
                border-radius: 20px;

                .left_part {
                    position: relative;
                    width: calc(100% - 300px);
                    padding-right: 30px;
                    display: flex;
                    flex-direction: column;

                    h5 {
                        position: relative;
                        font-size: 17px;
                        font-weight: 500;
                        line-height: 1;
                        color: ${colors.customColors.blackColor};
                    }

                    p {
                        position: relative;
                        margin-top: 15px;
                        margin-bottom: 20px;
                        font-size: 13px;
                        line-height: 1.6;
                        color: ${colors.customColors.blackColor1};
                    }

                    ul {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        background: ${colors.customColors.whiteColor};
                        padding: 17px 20px;
                        border-radius: 15px;

                        p {
                            margin-top: 0;
                            margin-bottom: 0;
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.blueColor3};
                        }

                        span {
                            position: relative;
                            margin-top: 5px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            line-height: 1.5;
                        }
                    }
                }

                .right_part {
                    position: relative;
                    width: 300px;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        border-radius: 15px;
                    }
                }
            }
        }
    }

    .process_sec {
        position: relative;
        margin-top: 45px;
        width: 100%;
        display: flex;
        justify-content: center; 

        .sec_inner {
            position: relative;
            width: 799px;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                h4 {
                    position: relative;
                    font-size: 20px;
                    font-weight: 600;
                    color: ${colors.customColors.blackColor};
                }

                p {
                    position: relative;
                    margin-top: 5px;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor2};
                }
            }

            .sec_content {
                position: relative;
                width: 100%;
                margin-top: 25px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .item_box {
                    position: relative;
                    width: 30%;
                    display: flex;
                    flex-direction: column;

                    span {
                        position: relative;
                        font-size: 40px;
                        font-weight: 600;
                        color: ${colors.customColors.blueColor2};
                        opacity: 0.2;
                    }

                    h6 {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor};
                    }

                    p {
                        position: relative;
                        margin-top: 5px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                        line-height: 1.5;
                    }
                }
            }
        }
    }
`;