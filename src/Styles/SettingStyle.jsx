import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const RolePermissionWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 20px;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;

                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
            }
        }
    }

    .role_levels {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        .box_items {
            position: relative;
            width: 100%;
            display: flex;
            padding: 5px;
            flex-wrap: wrap;

            .role_item {
                position: relative;
                width: 25%;
                max-width: 302.75px;
                padding: 10px;

                .item_inner {
                    position: relative;
                    width: 100%;
                    padding: 12px 15px 15px 15px;
                    background: ${colors.customColors.whiteColor};
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                    .top_part {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        span {
                            position: relative;
                            font-size: 16px;
                            font-weight: 600;
                            color: ${colors.customColors.blackColor1};
                        }

                        p {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    .bottom_part {
                        position: relative;
                        margin-top: 12px;
                        width: 100%;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;

                        .students {
                            position: relative;
                            display: flex;
                            align-items: center;

                            ul {
                                position: relative;
                                display: flex;
                                align-items: center;

                                li {
                                    position: relative;
                                    list-style: none;
                                    width: 33px;
                                    height: 33px;
                                    display: flex;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    border: 2px solid ${colors.customColors.whiteColor};
                                    margin-left: -16.5px;

                                    &:first-of-type {
                                        margin-left: 0;
                                    }

                                    p {
                                        position: relative; 
                                        width: 100%;
                                        height: 100%;
                                        background: ${colors.themeColor};
                                        color: ${colors.customColors.whiteColor};
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 13px;
                                        font-weight: 500;
                                        letter-spacing: 0.55px;
                                    }

                                    img {
                                        position: relative;
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                    }
                                }
                            }

                            span {
                                position: relative;
                                width: 33px;
                                height: 33px;
                                background: ${colors.customColors.borderColor};
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 10px;
                                font-weight: 500;
                                border: 2px solid ${colors.customColors.whiteColor};
                                margin-left: -16.5px;
                                color: ${colors.customColors.blackColor};
                            }
                        }
                    }
                }
            }
        }
    }
`;