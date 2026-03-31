import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const TermsConditionsPageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-top: 20px;

    .page_head_sec {
        position: relative;
        width: 100%;
        padding: 15px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            h2 {
                position: relative;
                width: 100%;
                font-size: 23px;
                color: ${colors.customColors.blackColor};
                font-weight: 600;
            }

            a {
                position: relative;
                width: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor1};
                font-weight: 400;
                margin-top: 10px;
                text-decoration: none;
            }

            .heading_items {
                position: relative;
                margin-top: 35px;
                width: 100%;
                display: flex;
                flex-direction: column;

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    list-style: none;
                    margin-bottom: 15px;

                    i {
                        position: relative;
                        width: 30px;
                        height: 25px;
                        display: flex;
                        -moz-box-align: center;
                        align-items: center;
                        -moz-box-pack: center;
                        justify-content: center;
                        font-size: 11px;
                        color: ${colors.customColors.blueColor1};
                    }
                    
                    p {
                        position: relative;
                        width: calc(100% - 30px);
                        font-size: 13px;
                        line-height: 20px;
                        color: ${colors.customColors.blackColor1};
                    }
                }
            }
        }
    }

    .page_items_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        padding-top: 15px;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .content_box {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-bottom: 25px;

                &:last-of-type {
                    margin-bottom: 0;
                }

                h3 {
                    position: relative;
                    width: 100%;
                    font-size: 16px;
                    color: ${colors.customColors.blueColor1};
                    font-weight: 500;
                    line-height: 1.2;
                }

                .box_item {
                    position: relative;
                    width: 100%;
                    display: flex;
                    margin-top: 10px;
                    flex-direction: column;

                    p {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor1};
                        margin-bottom: 5px;
                    }

                    ul {
                        position: relative;
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                        padding-left: 15px;

                        li {
                            position: relative;
                            list-style: none;
                            display: flex;
                            align-items: center;
                            margin-bottom: 5px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            i {
                                position: relative;
                                font-size: 5px;
                                color: ${colors.customColors.blackColor1};
                                margin-right: 8px;
                            }

                            span {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor1};

                                a {
                                    color: ${colors.customColors.blackColor};
                                    text-decoration: none;
                                    margin-right: 5px;
                                    font-size: 13px;
                                }
                            }
                        }
                    }

                    a {
                        position: relative;
                        color: ${colors.customColors.blackColor1};
                        text-decoration: none;
                        margin-top: 5px;
                        font-size: 12px;
                    }
                }

                .sub_item_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    margin-top: 10px;
                    flex-direction: column;

                    .sub_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-bottom: 15px;

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        h4 {
                            position: relative;
                            width: 100%;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blueColor2};
                        }

                        .sub_box_item {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-top: 10px;
                            flex-direction: column;

                            ul {
                                position: relative;
                                display: flex;
                                flex-direction: column;
                                padding-left: 15px;

                                li {
                                    position: relative;
                                    list-style: none;
                                    display: flex;
                                    align-items: center;
                                    margin-bottom: 5px;

                                    &:last-of-type {
                                        margin-bottom: 0;
                                    }

                                    i {
                                        position: relative;
                                        font-size: 5px;
                                        color: ${colors.customColors.blackColor1};
                                        margin-right: 8px;
                                    }

                                    span {
                                        position: relative;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;