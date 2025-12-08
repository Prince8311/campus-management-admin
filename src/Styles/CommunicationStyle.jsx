import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const MessagingWrapper = styled('div')`
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

    .filter_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 20px;
        padding: 0 15px;

        .search_sec {
            position: relative;
            height: 35px;
            padding: 5px 0;
            display: flex;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 6px;

            i {
                position: relative;
                width: 40px;
                height: 100%;
                font-size: 13px;
                color: ${colors.customColors.blackColor3};
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid ${colors.customColors.borderColor};
            }

            input {
                position: relative;
                width: 300px;
                height: 100%;
                border: none;
                outline: none;
                padding: 0 15px;
                font-size: 12px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .filter_sec {
            position: relative;
            margin-left: 20px;

            .filter_btn {
                position: relative;
                width: 125px;
                height: 35px;
                border: 1px solid ${colors.customColors.blueColor1};
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px 15px;
                cursor: pointer;

                p {
                    position: relative;
                    margin-left: 6px;
                    font-size: 12px;
                    color: ${colors.customColors.blueColor1};
                    font-weight: 500;
                }

                i {
                    position: relative;
                    color: ${colors.customColors.blueColor1};
                    font-size: 13px;
                }
            }
        }

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                width: 150px;
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

    .page_content {
        position: relative;
        margin-top: 25px;
        width: 100%;
        padding: 0 15px;

        .content_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            .box_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: flex-end;

                h5 {
                    position: relative;
                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1;
                    color: ${colors.customColors.blackColor};
                }

                a {
                    position: relative;
                    margin-left: 10px;
                    display: flex;
                    align-items: center;
                    background: ${colors.customColors.greenColor};
                    padding: 5px 14px;
                    font-size: 12px;
                    font-weight: 500;
                    border-radius: 5px;
                    color: ${colors.customColors.whiteColor};

                    i {
                        position: relative;
                        margin-right: 5px;
                    }
                }
            }

            .box_body {
                position: relative;
                margin-top: 10px;
                width: 100%;

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }
            }

            .box_bottom {
                position: relative;
                margin-top: 10px;
                width: 100%;
                display: flex;
                align-items: center;

                p {
                    position: relative;
                    font-size: 11px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor2};

                    b {
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        font-style: italic;
                        margin-right: 4px;
                    }

                    i {
                        font-size: 10px;
                        margin-right: 5px;
                    }
                }

                span {
                    position: relative;
                    margin: 0 12px;
                    display: flex;
                    align-items: center;

                    i {
                        font-size: 4px;
                        color: ${colors.customColors.blackColor2};
                    }
                }
            }
        }
    }
`;