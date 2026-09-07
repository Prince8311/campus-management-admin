import styled from "@emotion/styled";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ExpenseManagementWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 10px;
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
                height: 35px;
                padding: 0 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                border: none;
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

    .tab_sec {
        position: relative;
        margin-top: 25px;
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
`;