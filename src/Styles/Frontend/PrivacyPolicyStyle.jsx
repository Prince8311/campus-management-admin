import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const PrivacyPolicyPageWrapper = styled('div')`
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

            p {
                position: relative;
                width: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor1};
                font-weight: 400;
                margin-top: 10px;
            }
        }
    }

    .page_items_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
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
                            }
                        }
                    }

                    a {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                        margin-top: 5px;
                        text-decoration: none;
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

                            p {
                                position: relative;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor1};
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