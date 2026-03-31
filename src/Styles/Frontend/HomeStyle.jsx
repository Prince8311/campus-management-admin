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

    .registration_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .image_sec {
                position: relative;
                width: 650px;
                display: flex;
            }

            .sec_items {
                position: relative;
                width: calc(100% - 650px);
                padding-left: 50px;
                display: flex;

                .item_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    border-radius: 10px;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};

                    .form_head {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        h3 {
                            position: relative;
                            font-size: 21px;
                            color: ${colors.customColors.blackColor};
                            font-weight: 600;
                            line-height: 1.2;
                        }

                        p {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            font-weight: 400;
                            margin-top: 3px;
                        }
                    }

                    .form_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-top: 15px;

                        .input_box {
                            position: relative;
                            width: 100%;
                            margin-bottom: 10px;

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
                        }

                        .text_box {
                            position: relative;
                            width: 100%;

                            textarea {
                                position: relative;
                                width: 100%;
                                height: 80px;
                                font-size: 12px;
                                border-radius: 5px;
                                padding: 10px 15px;
                                outline: none;
                                border: none;
                                resize: none;
                                margin-top: 3px;
                                background: ${colors.customColors.lightBackground3};
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
                        }

                        .btn_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-top: 25px;

                            button {
                                position: relative;
                                width: 100%;
                                height: 37px;
                                background: linear-gradient(135deg, #2ea6d6, #0d7fa6);
                                color: ${colors.customColors.whiteColor};
                                font-size: 12px;
                                font-weight: 500;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }

    .demo_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .demo_items {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 50px;
                background: linear-gradient(135deg, #0d7fa6, #2ea6d6);
                border-radius: 25px;

                .demo_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    h3 {
                        position: relative;
                        font-size: 31px;
                        color: ${colors.customColors.whiteColor};
                        font-weight: 600;
                        line-height: 1.2;
                    }

                    p {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.whiteColor};
                        font-weight: 400;                        
                        margin-top: 6px;
                    }
                }

                .demo_btn {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 25px;

                    button {
                        position: relative;
                        padding: 8px 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 6px;
                        background: ${colors.customColors.whiteColor};
                        border: none;
                        font-size: 13px;
                        font-weight: 400;
                        color: ${colors.customColors.blackColor};
                        cursor: pointer;
                        transition: all 0.5s ease;

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }

                        &:last-of-type {
                            border: 1px solid ${colors.customColors.borderColor1};
                            background: transparent;
                            color: ${colors.customColors.whiteColor};
                            margin-left: 25px;
                        }
                    }
                }
            }
        }
    }

    .about_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .about_content_left {
                position: relative;
                width: calc(100% - 550px);
                padding-right: 40px;
                display: flex;

                .left_items {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .item_head {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        h4 {
                            position: relative;
                            font-size: 21px;
                            color: ${colors.customColors.blackColor};
                            font-weight: 500;
                            line-height: 1;
                        }

                        p {
                            position: relative;
                            width: 100%;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            margin-top: 10px;
                        }
                    }

                    .bottom_items {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 30px;

                        .item_box {
                            position: relative;
                            width: 48%;
                            display: flex;
                            flex-direction: column;
                            padding: 20px;
                            border-radius: 10px;
                            background: ${colors.customColors.whiteColor};
                            box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};

                            p {
                                position: relative;
                                font-size: 14px;
                                color: ${colors.customColors.blackColor1};
                                font-weight: 500;
                            }

                            span {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                                font-weight: 400;
                                margin-top: 7px;
                            }
                        }
                    }
                }
            }

            .about_content_right {
                position: relative;
                width: 550px;
                display: flex;

                .right_item {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    border-radius: 10px;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
                }
            }
        }
    }

    .contact_sec {
        position: relative;
        width: 100%;
        padding: 50px 0;
        display: flex;
        justify-content: center;
        background: ${colors.customColors.lightBackground3};

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .content_left {
                position: relative;
                width: calc(100% - 500px);
                display: flex;
                padding-right: 40px;
                
                .left_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .inner_head {
                        position: relative;
                        width: 100%;
                        display: flex;

                        h4 {
                            position: relative;
                            font-size: 21px;
                            color: ${colors.customColors.blackColor};
                            font-weight: 500;
                            line-height: 1;
                        }
                    }

                    .inner_items {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;

                        .item_box {
                            position: relative;
                            width: 100%;
                            display: flex;
                            margin-bottom: 15px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            a {
                                position: relative;
                                width: 40px;
                                height: 40px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: ${colors.customColors.whiteColor};
                                color: ${colors.customColors.blueColor1};
                                border-radius: 5px;
                                text-decoration: none;
                                font-size: 15px;

                                &.email {
                                    color: ${colors.customColors.blueColor1};
                                }
                                &.call {
                                    color: ${colors.customColors.greenColor};
                                }
                                &.location {
                                    color: ${colors.customColors.blueColor2};
                                }
                            }

                            .content {
                                position: relative;
                                width: calc(100% - 40px);
                                display: flex;
                                padding-left: 15px;
                                flex-direction: column;

                                span {
                                    font-size: 11px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor2};
                                    letter-spacing: 1px;
                                }

                                p {
                                    position: relative;
                                    width: 350px;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor};
                                    font-weight: 500;
                                    line-height: 1.5;
                                    margin-top: auto;
                                }
                            }
                        }
                    }
                }
            }

            .content_right {
                position: relative;
                width: 500px;
                display: flex;

                .right_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .input_box {
                        position: relative;
                        width: 100%;
                        margin-bottom: 15px;

                        input {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 5px 15px;
                            outline: none;
                            border: none;
                            background: ${colors.customColors.whiteColor};
                        }
                    }

                    .text_box {
                        position: relative;
                        width: 100%;

                        textarea {
                            position: relative;
                            width: 100%;
                            height: 80px;
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 10px 15px;
                            outline: none;
                            border: none;
                            resize: none;
                            background: ${colors.customColors.whiteColor};
                        }
                    }

                    .btn_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        margin-top: 25px;

                        button {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            background: ${colors.customColors.blackColor};
                            color: ${colors.customColors.whiteColor};
                            font-size: 12px;
                            font-weight: 500;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
`;