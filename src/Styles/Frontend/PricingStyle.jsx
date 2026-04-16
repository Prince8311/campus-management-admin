import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const PricingPageWrapper = styled('div')`
   position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-top: 20px;

    .heading_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        scroll-margin-top: 80px;
        /* background: linear-gradient(to bottom, #F6FAFE, #F6FAFE); */

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                position: relative;
                width: max-content;
                padding: 5px 20px;
                border-radius: 25px;
                background: ${colors.customColors.greenColorLight};
                color: ${colors.customColors.greenColor};
                font-size: 11px;
                font-weight: 500;
                text-decoration: none;
            }

            h2 {
                position: relative;
                font-size: 41px;
                margin-top: 10px;
                color: ${colors.customColors.blackColor};
                font-weight: 700;
                letter-spacing: 0.3px;
                line-height: 1.2;

                span {
                    margin: 0 5px;
                    line-height: 1.2;
                    background: linear-gradient(90deg, #1FA2D6 0%, #2BB673 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            p {
                position: relative;
                margin-top: 18px;
                display: flex;
                color: ${colors.customColors.blackColor1};
                font-size: 13px;
            }
        }
    }

    .pricing_content_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_content {
                position: relative;
                width: 400px;
                display: flex;

                .left_inner {
                    position: relative;
                    width: 100%;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                    padding: 20px;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;

                    .left_item_top {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        a {
                            position: relative;
                            width: 40px;
                            height: 40px;
                            border-radius: 5px;
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor1};
                            font-size: 17px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                        }

                        span {
                            position: relative;
                            margin-left: auto;
                            font-size: 15px;
                            font-weight: 500;
                            color: ${colors.customColors.blueColor2};
                        }
                    }

                    .left_items {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;
                        
                        h5 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                        }

                        p {
                            position: relative;
                            margin-top: 5px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        a {
                            position: relative;
                            margin: 15px 0;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            font-size: 10px;
                            font-style: 400;
                            color: ${colors.customColors.blackColor2};
                            text-decoration: none;

                            span {
                                font-size: 19px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor1};
                                margin-right: 5px;
                            }
                        }

                        ul {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            li {
                                position: relative;
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                list-style: none;

                                &:last-of-type {
                                    margin-bottom: 0;
                                }

                                i {
                                    color: ${colors.customColors.greenColor1};
                                    font-size: 12px;
                                    margin-right: 6px;
                                }

                                span {
                                    font-size: 11px;
                                    color: ${colors.customColors.blackColor1};
                                }
                            }
                        }
                    }
                }
            }

            .right_content {
                position: relative;
                width: calc(100% - 400px);
                display: flex;
                padding-left: 20px;

                .right_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .right_top_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;

                        .top_box {
                            position: relative;
                            width: 49%;
                            background: ${colors.customColors.whiteColor};
                            box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                            border-radius: 6px;
                            display: flex;
                            flex-direction: column;
                            padding: 20px;

                            .box_head {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

                                .head_img {
                                    position: relative;
                                    width: 35px;
                                    height: 35px;
                                    background: ${colors.customColors.greenColorLight};
                                    border-radius: 5px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    
                                    img {
                                        position: relative;
                                        width: 14px;
                                    }
                                }

                                h6 {
                                    position: relative;
                                    margin-left: 10px;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor};
                                }
                            }

                            &:last-of-type {
                                .box_head {
                                    .head_img {
                                        background: ${colors.customColors.yellowColorLight};
                                    }
                                }
                            }

                            .box_item {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                margin-top: 15px;

                                p {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor1};
                                }

                                a {
                                    position: relative;
                                    margin-top: 10px;
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    font-size: 10px;
                                    font-style: 400;
                                    color: ${colors.customColors.blackColor2};
                                    text-decoration: none;

                                    span {
                                        font-size: 17px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blueColor2};
                                        margin-right: 5px;
                                    }
                                }

                            }
                        }
                    }

                    .right_bottom_sec {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        padding: 5px 5px 20px 5px;
                        border-radius: 6px;
                        background: linear-gradient(135deg, #2ea6d6, #0d7fa6);

                        .bottom_box {
                            position: relative;
                            width: 100%;
                            background: #0d7fa6;
                            border-radius: 6px;
                            display: flex;
                            padding: 20px;

                            .box_img {
                                position: relative;
                                width: 40px;
                                height: 40px;
                                background: ${colors.customColors.greenColor};
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    position: relative;
                                    width: 16px;
                                }
                            }

                            .box_content {
                                position: relative;
                                width: calc(100% - 240px);
                                padding: 0 20px;
                                display: flex;
                                flex-direction: column;
                                

                                h6 {
                                    position: relative;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.customColors.whiteColor};
                                }

                                p {
                                    position: relative;
                                    margin-top: 3px;
                                    font-size: 12px;
                                    color: ${colors.customColors.whiteColor1};
                                }
                            }

                            .box_price {
                                position: relative;
                                width: 200px;
                                display: flex;
                                flex-direction: column;
                            
                                a {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    text-decoration: none;
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: ${colors.customColors.whiteColor1};

                                    del {
                                        position: relative;
                                        display: flex;
                                        align-items: flex-end;
                                        font-size: 12px;
                                    }

                                    span {
                                        font-size: 23px;
                                        font-weight: 600;
                                        color: ${colors.customColors.greenColor};
                                        margin-left: 10px;
                                    }
                                }

                                p {
                                    position: relative;
                                    margin-top: 3px;
                                    font-size: 11px;
                                    color: ${colors.customColors.whiteColor1};
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .Administrative_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_sec {
                position: relative;
                width: 550px;
                height: 350px;
                background: ${colors.customColors.whiteColor};
                box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                border-radius: 6px;
            }

            .right_sec {
                position: relative;
                width: calc(100% - 550px);
                padding-left: 30px;
                display: flex;
                align-items: center;
                
                .sec_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    
                    h4 {
                        position: relative;
                        font-size: 25px;
                        color: ${colors.customColors.blackColor1};
                        font-weight: 600;

                        span {
                            color: ${colors.customColors.greenColor1};
                        }
                    }

                    p {
                        position: relative;
                        margin-top: 8px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                    }

                    .inner_items {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;

                        .item {
                            position: relative;
                            display: flex;
                            align-items: center;
                            margin-bottom: 20px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            .item_img {
                                position: relative;
                                width: 35px;
                                height: 35px;
                                background: ${colors.customColors.blueColorLight};
                                border-radius: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    position: relative;
                                    width: 14px;
                                }
                            }

                            .item_content {
                                position: relative;
                                width: calc(100% - 35px);
                                padding-left: 20px;
                                display: flex;
                                flex-direction: column;

                                a {
                                    position: relative;
                                    font-size: 13px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
                                    text-decoration: none;
                                }

                                span {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-top: 3px;
                                }
                            }
                        }
                    }
                }


            }
        }
    }

    .faq_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

                h3 {
                    position: relative;
                    font-size: 25px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 600;
                }
            }

            .faq_content_sec {
                position: relative;
                width: 100%;
                display: flex;
                margin-top: 25px;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;

                .faq_box {
                    position: relative;
                    width: 49%;
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    border-radius: 6px;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                    margin-bottom: 25px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    .box_top {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        h6 {
                            position: relative;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor};
                            font-weight: 400;
                        }

                        a {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                            cursor: pointer;
                            text-decoration: none;
                        }


                    }

                    .box_bottom {
                        
                        position: relative;
                        width: 100%;
                        margin-top: 10px;
                        display: flex;


                        p {
                            position: relative;
                            width: 100%;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }
            }
        }
    }
`;