import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const SessionWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
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
                transition: all 0.5s ease;

                i {
                    margin-right: 8px;
                    font-size: 12px;
                }

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .heading_option_part {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 20px;
        padding: 0 15px;

        .inner_part {
            position: relative;
            width: max-content;
            padding: 6px;
            background: ${colors.customColors.lightBackground};
            border-radius: 6px;
            display: flex;

            .part_box {
                position: relative;
                padding: 8px 20px;
                cursor: pointer;
                border-radius: 4px;
                text-decoration: none;
                
                &.active {
                    background: ${colors.customColors.blueColor1};
                }

                h6 {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                }
                
                &.active h6 {
                    color: ${colors.customColors.whiteColor};
                }
            }
        }
    }

    .session_levels {
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

            .session_item {
                position: relative;
                width: 25%;
                max-width: 302.75px;
                padding: 10px;

                .item_inner {
                    position: relative;
                    width: 100%;
                    padding: 12px;
                    padding-left: 15px;
                    background: ${colors.customColors.whiteColor};
                    border: 1px solid ${colors.customColors.borderColor};
                    border-left: 4px solid ${colors.customColors.blueColor1};
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                    .inner_top {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding-bottom: 8px;
                        border-bottom: 1px solid ${colors.customColors.borderColor};

                        .inner_content {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;

                            a {
                                position: relative;
                                width: 28px;
                                height: 28px;
                                border-radius: 50%;
                                background: ${colors.customColors.blueColorLight};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                                color: ${colors.customColors.blueColor1};
                                text-decoration: none;
                                cursor: pointer;
                            }

                            h6 {
                                position: relative;
                                max-width: calc(100% - 85px);
                                font-size: 13.5px;
                                font-style: italic;
                                font-weight: 500;
                                padding-left: 12px;
                                color: ${colors.customColors.blackColor};
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            span {
                                position: relative;
                                width: max-content;
                                display: flex;
                                font-size: 10px;
                                margin-top: 2px;
                                border-radius: 25px;
                                padding: 3px 15px;
                                margin-left: auto;
                                font-weight: 500;
                                
                                &.ongoing {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                                &.upcoming {
                                    color: ${colors.customColors.yellowColor1};
                                    background: ${colors.customColors.yellowColorLight};
                                }
                                &.concluded {
                                    color: ${colors.customColors.blackColor2};
                                    background: ${colors.customColors.whiteColor2};
                                }
                            }
                        }

                        .session_name {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-top: 5px;

                            p {
                                position: relative;
                                font-size: 10px;
                                color: ${colors.customColors.blackColor2};
                            }
                        }
                    }

                    .inner_btn {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 8px;
                        justify-content: flex-end;

                        button {
                            position: relative;
                            width: max-content;
                            height: 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: none;
                            padding: 0 12px;

                            &.edit {
                                background: ${colors.customColors.blueColorLight};
                                color: ${colors.customColors.blueColor1};
                                font-size: 10px;
                                cursor: pointer;
                                font-weight: 500;
                                border-bottom-left-radius: 4px;
                                border-top-left-radius: 4px;

                                i {
                                    font-size: 11px;
                                    margin-right: 8px;
                                }
                            }

                            &.delete {
                                background: ${colors.customColors.redColorLight};
                                color:  ${colors.customColors.redColor};
                                font-size: 10px;
                                cursor: pointer;
                                border-top-right-radius: 4px;
                                border-bottom-right-radius: 4px;
                            }
                        }
                    }
                }
            }
        }
    }
`;