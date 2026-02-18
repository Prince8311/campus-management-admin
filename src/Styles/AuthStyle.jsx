import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const AuthWrapper = styled('div')`
    width: 100%;
    height: 100vh;
    padding: 50px 100px;
    background: ${colors.customColors.whiteColor};

    .page_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .top_part {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            h4 {
                position: relative;
                font-family: 'Oleo Script', cursive;
                font-size: 23px;
                color: ${colors.customColors.blackColor1};
            }

            img {
                position: relative;
                margin-top: 10px;
                width: 150px;
            }

            h5 {
                position: relative;
                margin-top: 5px;
                font-size: 18px;
                font-weight: 600;
                color: ${colors.customColors.blueColor2};
            }

            p {
                position: relative;
                font-size: 12px;
                line-height: 1.2;
                color: ${colors.customColors.blackColor1};
            }
        }

        .bottom_part {
            position: relative;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .form_sec {
                position: relative;
                width: 400px;
                display: flex;
                flex-direction: column;

                .input_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    margin-top: 15px;

                    input {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        border: none;
                        outline: none;
                        font-size: 12px;
                        padding: 0 15px;
                        color: ${colors.customColors.blackColor1};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 6px;
                        transition: all 0.5s ease;

                        &:focus,
                        &:valid {
                            border: 1px solid ${colors.customColors.blueColor1};
                            transition: all 0.5s ease;
                        }
                    }

                    span {
                        position: absolute;
                        font-size: 12px;
                        padding: 0 5px;
                        top: 50%;
                        left: 10px;
                        line-height: 1;
                        background: ${colors.customColors.whiteColor};
                        transform: translateY(-50%);
                        color: ${colors.customColors.blackColor2};
                        pointer-events: none;
                        transition: all 0.6s ease;
                    }

                    a {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 50px;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;

                        i {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    input:focus ~ span,
                    input:valid ~ span {
                        top: 0;
                        left: 5px;
                        font-size: 10px;
                        font-weight: 500;
                        color: ${colors.customColors.blueColor2};
                        transition: all 0.6s ease;
                    }
                }

                .login_option {
                    position: relative;
                    margin-top: 5px;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;

                    a {
                        position: relative;
                        padding-right: 5px;
                        font-size: 11px;
                        text-decoration: underline;
                        color: ${colors.customColors.blueColor2};
                        cursor: pointer;
                    }
                }

                .form_btn {
                    position: relative;
                    margin-top: 20px;
                    width: 100%;

                    button {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        border: none;
                        cursor: pointer;
                        background: ${colors.customColors.lightBackground2};
                        border-radius: 6px;
                        font-size: 13px;
                        letter-spacing: 0.5px;
                        color: ${colors.customColors.blackColor2};
                    }
                }
            }

            .accept_part {
                position: relative;
                margin-top: 15px;

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor2};

                    a {
                        position: relative;
                        color: ${colors.customColors.blackColor};
                    }
                }
            }
        }
    }
`;