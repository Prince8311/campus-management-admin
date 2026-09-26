import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const HomePageWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .banner_sec {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 42px 0 140px;
        overflow: hidden;
        scroll-margin-top: 80px;
        background: linear-gradient(180deg, #f3faffeb 0%, #edf7ffdf 48%, #e4f4ff45 100%), url('/images/hero.png') center bottom / cover no-repeat;

        .sec_content {
            position: relative;
            z-index: 1;
            width: 1320px;
            display: flex;
            align-items: center;
            gap: 65px;

            .left_content {
                position: relative;
                width: 45%;
                flex-shrink: 0;

                .content_inner {
                    position: relative;
                    max-width: 510px;

                    .banner_badge {
                        display: inline-block;
                        padding: 5px 14px;
                        border: 1px solid #c9e1ff;
                        border-radius: 25px;
                        background: #eff6ffcc;
                        color: #153b6e;
                        font-size: 11px;
                        font-weight: 500;
                    }
                    h1 {
                        margin-top: 12px;
                        color: #08162b;
                        font-size: 44px;
                        font-weight: 700;
                        line-height: 1.1;
                        letter-spacing: -1px;
                        span { display: block; color: #087fc5; }
                    }
                    > p {
                        margin-top: 18px;
                        color: #3b495d;
                        font-size: 14px;
                        line-height: 1.6;
                        max-width: 490px;
                    }
                    .banner_btns {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 12px;
                        margin-top: 22px;

                        button {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 10px;
                            min-height: 42px;
                            padding: 10px 24px;
                            border: 1px solid transparent;
                            border-radius: 7px;
                            background: linear-gradient(180deg, #2aafe6, #0075bd);
                            color: #fff;
                            font-size: 12px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: box-shadow 200ms ease;
                            &:hover { box-shadow: 0 5px 16px #087fc530; }
                            &:focus-visible { outline: 2px solid #087fc5; outline-offset: 4px; }
                            &:last-of-type {
                                background: #ffffffb8;
                                color: #124982;
                                border-color: #b9d9ff;
                                i { color: #0785d3; font-size: 18px; }
                            }
                        }
                    }
                    .banner_trust {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        margin-top: 23px;

                        .trust_avatars {
                            display: flex;
                            padding-left: 6px;
                            span {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 33px;
                                height: 33px;
                                margin-left: -6px;
                                border: 2px solid #fff;
                                border-radius: 50%;
                                color: #527b96;
                                background: #d9eaf4;
                                &:nth-of-type(2) { background: #e8e3d8; color: #8d7b63; }
                                &:nth-of-type(3) { background: #d8eae3; color: #5c8573; }
                                &:nth-of-type(4) { background: #e5dff2; color: #847197; }
                            }
                        }
                        .trust_content {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                            strong { font-size: 11px; font-weight: 600; color: #233d57; }
                            span { font-size: 10px; color: #536579; }
                        }
                    }
                }
                .banner_note {
                    position: absolute;
                    right: -32px;
                    bottom: -35px;
                    font-family: 'Segoe Print', 'Bradley Hand', cursive;
                    font-size: 20px;
                    font-style: italic;
                    color: #447bb7;
                    line-height: 1.15;
                    text-align: center;
                    transform: rotate(-14deg);
                }
            }
            .right_content {
                position: relative;
                flex: 1;
                min-width: 0;
                padding-right: 30px;
                perspective: 1200px;

                .dashboard_badge {
                    position: absolute;
                    top: -38px;
                    right: 32px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 17px;
                    background: #f8fdff;
                    border-radius: 12px;
                    color: #174b7b;
                    box-shadow: 0 8px 20px #308fc12b;
                    font-size: 10px;
                    font-weight: 600;
                    i { color: #078eff; font-size: 18px; }
                    b { color: #1b9ddd; }
                }
                .dashboard_frame {
                    padding: 9px;
                    border: 3px solid #376070;
                    border-radius: 20px;
                    background: #072b3d;
                    box-shadow: 0 20px 30px #154c6c45, inset 0 1px 3px #fff8;
                    transform: rotateY(-5deg) rotateZ(2deg);
                    img { display: block; width: 100%; border-radius: 10px; }
                }
                .education_note {
                    position: absolute;
                    right: -65px;
                    top: 34%;
                    font-family: 'Segoe Print', 'Bradley Hand', cursive;
                    font-size: 19px;
                    font-style: italic;
                    text-align: center;
                    line-height: 1.25;
                    color: #112e4f;
                    transform: rotate(-15deg);
                    &::after { content: ''; display: block; width: 55px; margin: 8px auto 0; border-bottom: 2px solid #169cfa; transform: rotate(-10deg); }
                }
            }
        }
        .campus_note {
            position: absolute;
            left: max(25px, calc((100% - 1530px) / 2));
            bottom: 60px;
            padding: 14px 18px;
            background: #ffffffde;
            color: #1e3043;
            border-radius: 3px;
            box-shadow: 0 4px 20px #236b8b20;
            font-size: 11px;
            line-height: 1.6;
            transform: rotate(-3deg);
        }
        .banner_wave { position: absolute; bottom: -1px; left: 0; width: 100%; height: 90px; fill: #f8fcff; }

        @media (max-width: 1500px) {
            .sec_content { width: 1140px; gap: 45px;
                .left_content .content_inner h1 { font-size: 39px; }
                .right_content .education_note { right: -40px; font-size: 16px; }
            }
        }
        @media (max-width: 1200px) {
            .sec_content { width: 100%; padding: 0 50px; gap: 35px;
                .left_content { width: 46%;
                    .content_inner h1 { font-size: 34px; }
                    .content_inner > p { font-size: 12px; }
                    .banner_note { font-size: 16px; right: -15px; bottom: -50px; }
                }
                .right_content { padding-right: 10px;
                    .education_note { right: -32px; font-size: 13px; }
                }
            }
        }
        @media (max-width: 876px) {
            padding: 30px 0 90px;
            .sec_content { padding: 0 30px; flex-direction: column; gap: 60px;
                .left_content { width: 100%; .content_inner { max-width: 560px; } .banner_note { right: 15px; bottom: -15px; } }
                .right_content { width: 90%; max-width: 620px; padding-right: 15px; }
            }
            .campus_note { display: none; }
            .banner_wave { height: 55px; }
        }
        @media (max-width: 450px) {
            .sec_content { padding: 0 20px;
                .left_content {
                    .content_inner { h1 { font-size: 30px; } .banner_btns button { padding: 10px 15px; font-size: 11px; } }
                    .banner_note { display: none; }
                }
                .right_content { width: 100%; padding-right: 0; .education_note { display: none; } .dashboard_frame { padding: 5px; border-radius: 13px; } }
            }
        }
    }

    .about_sec {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px 0 45px;
        background: #f8fcff;
        scroll-margin-top: 80px;
        overflow: hidden;

        &::before { content: ''; position: absolute; width: 330px; height: 130px; left: -130px; bottom: -95px; background: #ccecff; border-radius: 50%; transform: rotate(15deg); }
        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            align-items: center;
            gap: 32px;

            .about_content_left {
                width: 30%;
                flex-shrink: 0;
                .about_badge { display: inline-block; padding: 5px 14px; background: #e5efff; border-radius: 20px; color: #0873db; font-size: 11px; font-weight: 500; }
                h2 { margin-top: 12px; color: #08162b; font-size: 28px; font-weight: 700; line-height: 1.2; letter-spacing: -0.6px; span { color: #087fc5; } }
                p { margin-top: 10px; color: #526680; font-size: 12px; line-height: 1.65; }
                button { display: flex; align-items: center; gap: 12px; margin-top: 15px; padding: 9px 18px; border: none; border-radius: 6px; background: linear-gradient(180deg, #2aafe6, #0075bd); color: #fff; font-size: 11px; font-weight: 500; cursor: pointer;
                    &:hover { box-shadow: 0 4px 14px #087fc530; }
                    &:focus-visible { outline: 2px solid #087fc5; outline-offset: 4px; }
                }
            }
            .about_content_right {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 23px;
                width: 45%;
                border-left: 1px solid #dceaf8;
                padding-left: 30px;

                .item_box {
                    .icon { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 17px; color: #168df5; background: linear-gradient(140deg, #f1f8ff, #dceeff); font-size: 25px; }
                    &:nth-of-type(2) .icon { color: #009dd2; background: linear-gradient(140deg, #ecfcff, #d6f5ff); }
                    &:nth-of-type(3) .icon { color: #794cff; background: linear-gradient(140deg, #f5f0ff, #e9e1ff); }
                    h3 { margin-top: 14px; color: #14243a; font-size: 14px; font-weight: 600; }
                    p { margin-top: 7px; color: #607b97; font-size: 11px; line-height: 1.65; }
                }
            }
            .about_image {
                position: relative;
                flex: 1;
                min-width: 0;
                align-self: stretch;
                min-height: 250px;
                margin-right: -100px;
                img { width: 100%; height: 100%; position: absolute; object-fit: cover; object-position: 30% center; border: 7px solid #fff; border-right: none; border-radius: 70% 0 0 50%; }
                .image_note { position: absolute; right: 15px; bottom: 0; padding: 12px 20px; background: #ffffffed; border-radius: 4px; color: #16283c; font-family: 'Segoe Print', 'Bradley Hand', cursive; font-size: 17px; font-style: italic; line-height: 1.2; transform: rotate(-12deg); box-shadow: 0 4px 14px #1c53641a; }
            }
        }
        @media (max-width: 1500px) { .sec_content { width: 1140px; gap: 25px; .about_content_left h2 { font-size: 25px; } .about_content_right { padding-left: 24px; gap: 18px; } } }
        @media (max-width: 1200px) { .sec_content { width: 100%; padding: 0 50px; gap: 22px;
            .about_content_left { width: 31%; h2 { font-size: 23px; } p { font-size: 11px; } }
            .about_content_right { width: 45%; gap: 15px; padding-left: 22px; .item_box { h3 { font-size: 12px; } p { font-size: 10px; } } }
            .about_image { margin-right: -50px; .image_note { right: 8px; font-size: 14px; } }
        } }
        @media (max-width: 876px) { .sec_content { padding: 0 30px; flex-wrap: wrap; gap: 28px;
            .about_content_left { width: 100%; max-width: 600px; h2 { font-size: 28px; } p { font-size: 12px; } }
            .about_content_right { width: 65%; padding-left: 0; border: none; .item_box p { font-size: 11px; } }
            .about_image { margin-right: -30px; min-height: 220px; }
        } }
        @media (max-width: 550px) { .sec_content { padding: 0 20px;
            .about_content_right { width: 100%; gap: 16px; .item_box { .icon { width: 42px; height: 42px; font-size: 22px; } h3 { font-size: 12px; } p { font-size: 10px; } } }
            .about_image { flex: 0 0 100%; margin: 0; min-height: 230px; img { border: 5px solid #fff; border-radius: 60px 15px 60px 15px; } .image_note { right: 15px; } }
        } }
    }

    .scale_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        background: linear-gradient(120deg, #e4f4ff, #f2f8ff 52%, #e5f5ff);

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
                align-items: stretch;
                margin-top: 20px;

                .item_box {
                    position: relative;
                    width: 25%;
                    padding: 6px;
                    --card-accent: #0798d6;
                    --card-tint: #cff2ff;
                    display: flex;

                    .box_inner {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 20px;
                        min-height: 235px;
                        overflow: hidden;
                        isolation: isolate;
                        border: 1px solid #f1f4f8;
                        box-shadow: 0 4px 18px #6395b50b;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 16px;

                        &::before {
                            content: '';
                            position: absolute;
                            z-index: -1;
                            inset: 34px 16px 0;
                            border-radius: 35% 18px 0 0;
                            background: linear-gradient(165deg, var(--card-tint), transparent 80%);
                            opacity: 0.45;
                            transform: skewY(-4deg);
                            pointer-events: none;
                        }

                        .learn_more {
                            position: relative;
                            align-self: flex-start;
                            display: flex;
                            align-items: center;
                            gap: 9px;
                            margin-top: auto;
                            padding: 4px 0;
                            border: none;
                            background: transparent;
                            color: #0798d6;
                            font-size: 11px;
                            font-weight: 600;
                            cursor: pointer;
                            &:hover { text-decoration: underline; }
                            &:focus-visible { outline: 2px solid var(--card-accent); outline-offset: 4px; }
                        }

                        .card_decoration {
                            position: absolute;
                            right: 20px;
                            bottom: 18px;
                            z-index: -1;
                            color: var(--card-accent);
                            opacity: 0.23;
                            font-size: 48px;
                            pointer-events: none;
                        }

                        .card_icon {
                            position: relative;
                            width: 52px;
                            height: 52px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 14px;
                            font-size: 25px;
                            background: var(--card-tint);
                            color: var(--card-accent);
                            text-decoration: none;
                        }

                        h5 {
                            position: relative;
                            color: ${colors.customColors.blackColor1};
                            font-size: 16px;
                            font-weight: 600;
                            margin: 10px 0 6px;
                            line-height: 1.4;
                        }

                        p {
                            position: relative;
                            color: ${colors.customColors.blackColor2};
                            font-size: 12px;
                            line-height: 1.6;
                            font-weight: 400;
                            margin-bottom: 24px;
                        }
                    }

                    &:nth-of-type(2) {
                        --card-accent: #0ab450;
                        --card-tint: #ddf9e6;
                    }
                    &:nth-of-type(3) {
                        --card-accent: #f58b25;
                        --card-tint: #ffead6;
                    }
                    &:nth-of-type(4) {
                        --card-accent: #8b4cf2;
                        --card-tint: #eee3ff;
                        .learn_more { color: #8b4cf2; }
                    }

                }
            }

            @media (max-width: 1440px) {
                width: 1054px;
            }
            @media (max-width: 1099px) {
                width: 100%;

                .sec_head {
                    padding: 0 50px;
                }

                .content_items {
                    padding: 0 35px;
                    align-items: stretch;
                    .item_box {
                        width: 50%;
                    }
                }
            }

            @media (max-width: 876px) {
                .sec_head {
                    padding: 0 30px;
                }

                .content_items {
                    padding: 0 15px;
                }
            }
            @media (max-width: 678px) {
                .sec_head {
                    padding: 0 15px;

                    h3 {
                        font-size: 18px;
                    }

                    p {
                        font-size: 11px;
                    }
                }

                .content_items {
                    padding: 0 7.5px;
                    margin-top: 20px;

                    .item_box {
                        padding: 5px;

                        .box_inner {
                            padding: 15px;
                            padding-bottom: 20px;

                            .card_icon {
                                width: 35px;
                                height: 35px;
                                font-size: 13px;
                            }

                            h5 {
                                font-size: 14px;
                            }

                            p {
                                font-size: 11px;
                            }
                        }
                    }
                }
            }
            @media (max-width: 450px) {
                .sec_head {

                    h3 {
                        font-size: 15px;
                    }
                }

                .content_items {
                    margin-top: 10px;
                    .item_box {

                        .box_inner {
                            padding: 12px;
                            padding-bottom: 18px;
                            .card_decoration { font-size: 32px; right: 12px; bottom: 15px; }

                            .card_icon {
                                width: 32px;
                                height: 32px;
                                font-size: 11px;
                            }

                            h5 {
                                font-size: 11px;
                                font-weight: 500;
                                margin: 0;
                                margin-top: 10px;
                                margin-bottom: 6px;
                            }

                            p {
                                font-size: 9px;
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding: 25px 0;
        }
    }

    .stats_sec {
        position: relative;
        width: 100%;
        padding: 72px 0 48px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        background: radial-gradient(ellipse at 0% 45%, #277cba 0%, transparent 25%), radial-gradient(ellipse at 100% 85%, #246fa7 0%, transparent 30%), linear-gradient(110deg, #0b3042, #123f54 60%, #0d344b);

        .stats_wave {
            position: absolute;
            left: 0;
            width: 100%;
            pointer-events: none;

            &.top_wave { top: -1px; height: 48px; fill: #eaf6ff; }
            &.bottom_wave { bottom: -1px; height: 28px; fill: #fff; }
        }

        .stats_glow {
            position: absolute;
            width: 190px;
            height: 120px;
            left: -30px;
            bottom: -65px;
            border-radius: 50%;
            border: 2px solid #d0f5ff9c;
            background: linear-gradient(150deg, #c4f3ffcf, #37a9f07a 55%, transparent);
            box-shadow: inset 0 8px 18px #d6f9ff70, 0 0 25px #53bfff33;
            transform: rotate(-22deg);
            pointer-events: none;
        }

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            align-items: center;

            .stat_box {
                position: relative;
                flex: 1;
                min-width: 0;
                display: flex;
                align-items: center;
                gap: 18px;
                padding: 0 26px;

                & + .stat_box { border-left: 1px solid #b1d9ed55; }
                &:first-of-type { padding-left: 0; }
                &:first-of-type .stat_icon { background: linear-gradient(135deg, #1179d5, #0957ad); }

                .stat_icon {
                    width: 56px;
                    height: 56px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #167caf, #10577e);
                    color: #fff;
                    font-size: 27px;
                    box-shadow: 0 7px 18px #001c3b24;
                }

                .stat_content {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;

                    .stat_value {
                        font-size: 27px;
                        font-weight: 700;
                        line-height: 1.2;
                        color: #12c3f5;
                        &.green { color: #42dc75; }
                    }

                    p {
                        margin-top: 8px;
                        color: #eff9ff;
                        font-size: 10px;
                        font-weight: 500;
                        letter-spacing: 0.7px;
                        line-height: 1.5;
                    }
                }
            }

            .stats_note {
                position: relative;
                flex: 0 0 140px;
                margin-left: 18px;
                color: #eaf6ff;
                font-family: 'Segoe Print', 'Bradley Hand', cursive;
                font-size: 21px;
                font-style: italic;
                line-height: 1.2;
                text-align: center;
                transform: rotate(-13deg);

                &::after {
                    content: '';
                    position: absolute;
                    width: 110px;
                    height: 50px;
                    right: -10px;
                    bottom: -18px;
                    border-bottom: 2px solid #218adc80;
                    border-radius: 50%;
                    transform: rotate(-20deg);
                }
            }

            @media (max-width: 1440px) {
                width: 1024px;
                .stat_box {
                    padding: 0 18px;
                    gap: 12px;
                    .stat_icon { width: 48px; height: 48px; font-size: 23px; }
                    .stat_content {
                        .stat_value { font-size: 24px; }
                        p { font-size: 8px; }
                    }
                }
                .stats_note { flex-basis: 115px; font-size: 18px; margin-left: 8px; }
            }

            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 30px;
                .stat_box { padding: 0 12px; gap: 10px; }
                .stats_note { flex-basis: 95px; font-size: 16px; }
            }

            @media (max-width: 876px) {
                flex-wrap: wrap;
                row-gap: 26px;
                .stat_box {
                    flex: 0 0 50%;
                    padding: 0 20px;
                    &:first-of-type { padding-left: 20px; }
                    &:nth-of-type(3) { border-left: none; }
                    .stat_content p { font-size: 10px; }
                }
                .stats_note {
                    flex: 0 0 100%;
                    margin: 0;
                    font-size: 17px;
                    transform: rotate(-4deg);
                    br { display: none; }
                    &::after { right: calc(50% - 100px); bottom: -10px; height: 20px; }
                }
            }

            @media (max-width: 450px) {
                padding: 0 15px;
                .stat_box {
                    gap: 9px;
                    padding: 0 10px;
                    &:first-of-type { padding-left: 10px; }
                    .stat_icon { width: 38px; height: 38px; font-size: 19px; border-radius: 9px; }
                    .stat_content {
                        .stat_value { font-size: 21px; }
                        p { font-size: 8px; letter-spacing: 0.3px; margin-top: 5px; }
                    }
                }
                .stats_note { font-size: 15px; }
            }
        }
    }

    .registration_sec {
        position: relative;
        width: 100%;
        padding: 35px 0;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        scroll-margin-top: 80px;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .image_sec {
                position: relative;
                width: 650px;
                display: flex;

                img {
                    position: relative;
                    width: 100%;
                    border-radius: 15px;
                    box-shadow: 10px 15px 20px rgba(57, 211, 83, 0.2), -8px -8px 15px rgba(0, 175, 239, 0.277);
                }
            }

            .sec_items {
                position: relative;
                width: calc(100% - 650px);
                padding-left: 60px;
                display: grid;
                align-items: center;
                min-width: 0;

                > .item_content_sec[hidden],
                > .item_inner[hidden] {
                    display: none;
                }

                @keyframes registration_content_out {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-18px); }
                }

                @keyframes registration_form_in {
                    from { opacity: 0; transform: translateY(18px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .item_content_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 28px 20px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, #f0f7ff, #fbfdff 65%, #edf5ff);

                    &.is_leaving {
                        pointer-events: none;
                        animation: registration_content_out 240ms ease-in forwards;
                    }

                    &.is_visible {
                        animation: registration_form_in 360ms ease-out both;
                    }

                    .content_head {
                        position: relative;
                        z-index: 1;

                        .content_badge {
                            display: inline-block;
                            padding: 6px 11px;
                            border-radius: 20px;
                            background: #e9efff;
                            color: #457fc3;
                            font-size: 10px;
                            font-weight: 600;
                            letter-spacing: 1.5px;
                            text-transform: uppercase;
                        }

                        h3 {
                            margin-top: 14px;
                            font-size: 32px;
                            font-weight: 700;
                            line-height: 1.18;
                            color: ${colors.customColors.blackColor};

                            span { color: #216aad; }
                        }

                        p {
                            margin-top: 14px;
                            color: #64748b;
                            font-size: 13px;
                            line-height: 1.7;
                        }
                    }

                    .content_features {
                        position: relative;
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 26px 18px;
                        margin-top: 30px;

                        .feature_box {
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;

                            .feature_icon {
                                width: 35px;
                                height: 35px;
                                flex-shrink: 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 5px;
                                background: #e2ecff;
                                color: #227cc1;
                                font-size: 17px;
                            }

                            &:first-of-type .feature_icon { background: #dff2fc; }

                            .feature_content {
                                h4 {
                                    font-size: 13px;
                                    line-height: 1;
                                    font-weight: 600;
                                    color: ${colors.customColors.blackColor};
                                }
                                p {
                                    margin-top: 1px;
                                    font-size: 11px;
                                    line-height: 1.6;
                                    color: #64748b;
                                }
                            }
                        }
                    }

                    .content_btn {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        margin-top: 28px;

                        button {
                            width: 100%;
                            max-width: 350px;
                            min-height: 48px;
                            padding: 12px 18px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 16px;
                            border: none;
                            border-radius: 12px;
                            background: linear-gradient(180deg, #32a3d7, #087bac);
                            color: ${colors.customColors.whiteColor};
                            font-size: 14px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: transform 200ms ease, box-shadow 200ms ease;

                            &:hover { transform: translateY(-2px); box-shadow: 0 7px 18px #1689bb30; }
                            &:focus-visible { outline: 3px solid #216aad; outline-offset: 4px; }
                        }

                        .button_note {
                            width: 100%;
                            max-width: 350px;
                            margin-top: 10px;
                            text-align: center;
                            font-family: 'Segoe Print', cursive;
                            font-style: italic;
                            font-size: 16px;
                            color: #70b7d8;
                        }
                    }

                    .content_decoration {
                        position: absolute;
                        top: 12px;
                        right: 14px;
                        color: #78a4e6;
                        font-size: 24px;
                        transform: rotate(-12deg);
                        pointer-events: none;
                    }

                    @media (max-width: 1099px) and (min-width: 877px), (max-width: 450px) {
                        padding: 22px 15px;
                        .content_head h3 { font-size: 26px; }
                        .content_features { grid-template-columns: 1fr; gap: 18px; }
                    }
                }

                .item_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 20px 25px;
                    border-radius: 10px;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};

                    &.is_visible {
                        animation: registration_form_in 360ms ease-out both;
                    }

                    &.is_leaving {
                        pointer-events: none;
                        animation: registration_content_out 240ms ease-in forwards;
                    }

                    .form_head {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        h3 {
                            position: relative;
                            font-size: 20px;
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
                        margin-top: 15px;
                        flex-wrap: wrap;
                        justify-content: space-between;

                        .input_box {
                            position: relative;
                            margin-bottom: 10px;

                            &.fullwidth {
                                width: 100%;
                            }

                            &.halfwidth {
                                width: 48.5%;
                            }

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

                        .date_box {
                            position: relative;
                            margin-bottom: 10px;

                            &.fullwidth {
                                width: 100%;
                            }

                            &.halfwidth {
                                width: 48.5%;
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

                            .date_btn {
                                position: relative;
                                width: 100%;
                                height: 37px;
                                display: flex;
                                align-items: center;
                                border-radius: 5px;
                                padding: 5px 15px;
                                background: ${colors.customColors.lightBackground3};
                                cursor: pointer;
                                margin-top: 3px;

                                p {
                                    position: relative;
                                    width: calc(100% - 25px);
                                    display: flex;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor1};
                                }

                                i {
                                    position: relative;
                                    width: 25px;
                                    display: flex;
                                    justify-content: flex-end;
                                    cursor: pointer;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                }
                            }

                            .time_dropdown {
                                position: absolute;
                                top: 100%;
                                left: 8px;
                                width: calc(100% - 16px);
                                min-width: 210px;
                                z-index: 20;
                            }
                        }

                        .select_box {
                            position: relative;
                            margin-bottom: 10px;

                            &.fullwidth {
                                width: 100%;
                            }

                            &.halfwidth {
                                width: 48.5%;
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

                            .dropdown_sec {
                                position: relative;
                                width: 100%;
                                height: 37px;
                                flex-direction: column;
                                margin-top: 3px;

                                .dropdown_btn {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    border-radius: 5px;
                                    padding: 5px 15px;
                                    cursor: pointer;
                                    background: ${colors.customColors.lightBackground3};

                                    p {
                                        position: relative;
                                        width: calc(100% - 25px);
                                        display: flex;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor1};
                                    }

                                    i {
                                        position: relative;
                                        margin-left: auto;
                                        display: flex;
                                        justify-content: flex-end;
                                        cursor: pointer;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor2};
                                        transition: all 0.5s ease;
                                        
                                        &.active {
                                            transform: rotate(-180deg);
                                            transition: all 0.5s ease;
                                        }
                                    }
                                }

                                .dropdown {
                                    position: absolute;
                                    top: 100%;
                                    left: 0px;
                                    width: 100%;
                                    z-index: 15;
                                    background: ${colors.customColors.whiteColor};
                                    border-radius: 5px;
                                    box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1};
                                    max-height: 0px;
                                    overflow: hidden;
                                    transition: all 0.5s ease;

                                    &.dropUp {
                                        top: inherit;
                                        bottom: 100%;
                                    }

                                    &.active {
                                        max-height: 200px;
                                        transition: all 0.5s ease;
                                    }

                                    .dropdown_inner {
                                        position: relative;
                                        width: 100%;
                                        padding: 10px;
                                        display: flex;
                                        flex-direction: column;

                                        ul {
                                            position: relative;
                                            width: 100%;
                                            display: flex;
                                            flex-direction: column;
                                            max-height: 120px;
                                            overflow-y: auto;
                                            scrollbar-width: none;
                                            -ms-overflow-style: none;

                                            &::-webkit-scrollbar {
                                                display: none;
                                            }

                                            li {
                                                position: relative;
                                                width: 100%;
                                                list-style: none;
                                                padding: 7px 15px;
                                                cursor: pointer;
                                                font-size: 12px;
                                                color: ${colors.customColors.blackColor1};
                                                border-radius: 4px;
                                                display: flex;
                                                align-items: center;
                                                transition: all 0.5s ease;

                                                span {
                                                    position: relative;
                                                    font-size: 11px;
                                                    margin-left: 2px;
                                                    color: ${colors.customColors.blackColor2};
                                                }

                                                &:hover {
                                                    background: ${colors.themeColor};
                                                    color: ${colors.customColors.whiteColor};
                                                    transition: all 0.5s ease;

                                                    span {
                                                        color: ${colors.customColors.whiteColor};
                                                    }
                                                }

                                                &.active {
                                                    background: ${colors.customColors.lightBackground};
                                                    color: ${colors.customColors.blackColor};

                                                    span {
                                                        color: ${colors.customColors.blackColor1};
                                                    }

                                                    &:hover {
                                                        color: ${colors.customColors.blackColor};

                                                        span {
                                                            color: ${colors.customColors.blackColor1};
                                                        }
                                                    }
                                                }

                                                &.empty_message {
                                                    padding: 5px 10px;
                                                    color: ${colors.customColors.blackColor3};
                                                    pointer-events: none;
                                                }
                                            }

                                            .no_data {
                                                position: relative;
                                                width: 100%;
                                                font-size: 12px;
                                                color: ${colors.customColors.blackColor3};
                                                padding: 3px 10px;
                                            }
                                        }
                                    }
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
                                font-size: 13px;
                                font-weight: 500;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                                transition: all 0.5s ease;

                                &:hover {
                                    border-radius: 25px;
                                    transition: all 0.5s ease;
                                }

                                &.form_back_btn {
                                    width: 37px;
                                    flex: 0 0 37px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    margin-right: 10px;
                                    border-radius: 5px;
                                    background: #eaf4fc;
                                    color: #216aad;
                                    font-size: 15px;

                                    &:hover { border-radius: 5px; background: #dcecf9; }
                                    &:focus-visible { outline: 2px solid #216aad; outline-offset: 3px; }
                                    &:disabled { opacity: 0.5; cursor: default; }
                                }
                            }
                        }
                    }
                }
            }

            @media (max-width: 1440px) {
                width: 1024px;

                .image_sec {
                    width: 48%;
                    align-self: center;
                }

                .sec_items {
                    width: 52%;
                    padding-left: 30px;
                }
            }
            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;

                .image_sec {
                    width: 450px;

                    img {
                        object-fit: cover;
                    }
                }

                .sec_items {
                    width: calc(100% - 450px);
                }
            }

            @media (max-width: 876px) {
                padding: 0 30px;
                flex-direction: column;

                .image_sec {
                    width: 100%;
                }

                .sec_items {
                    width: 100%;
                    padding-left: 0;
                    margin-top: 30px;
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;
            }
            @media (max-width: 450px) {
                .sec_items {
                    .item_inner {
                        padding: 20px 15px;

                        .form_head {
                            h3 {
                                font-size: 15px;
                                font-weight: 500;
                                line-height: 1;
                            }
                            p {
                                font-size: 11px;
                            }
                        }

                        .form_sec {
                            .input_box {
                                input {
                                    font-size: 11px;
                                }
                                span {
                                    font-size: 11px;
                                }
                            }

                            .text_box {
                                textarea {
                                    font-size: 11px;
                                }
                                span {
                                    font-size: 11px;
                                }
                            }

                            .btn_box {
                                margin-top: 20px;

                                button {
                                    font-size: 11px;
                                }
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding: 25px 0;
            margin-top: 10px;
        }

        @media (prefers-reduced-motion: reduce) {
            .sec_content .sec_items {
                .item_content_sec.is_leaving, .item_content_sec.is_visible,
                .item_inner.is_visible, .item_inner.is_leaving {
                    animation-duration: 1ms;
                }
                .content_btn button { transition: none; }
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

            @media (max-width: 1440px) {
                width: 1024px;
            }
            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;
            }

            @media (max-width: 876px) {
                padding: 0 30px;
            }
            @media (max-width: 678px) {
                padding: 0 15px;

                .demo_items {
                    padding: 50px 30px;

                    .demo_head {
                        h3 {
                            font-size: 21px;
                        }
                        p {
                            font-size: 12px;
                        }
                    }

                    .demo_btn {
                        button {
                            font-size: 12px;
                        }
                    }
                }
            }
            @media (max-width: 450px) {

                .demo_items {
                    padding: 30px 20px;
                    border-radius: 15px;

                    .demo_head {
                        h3 {
                            font-size: 15px;
                            font-weight: 500;
                        }
                        p {
                            font-size: 11px;
                        }
                    }

                    .demo_btn {
                        button {
                            font-size: 11px;
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding: 25px 0;
        }
    }

    .contact_sec {
        position: relative;
        width: 100%;
        padding: 50px 0;
        display: flex;
        justify-content: center;
        background: ${colors.customColors.lightBackground3};
        scroll-margin-top: 80px;

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
                                padding-top: 4px;
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
                                    line-height: 1.4;
                                    margin-top: 3px;
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

            @media (max-width: 1440px) {
                width: 1024px;
            }
            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;

                .content_left {
                    width: calc(100% - 380px);
                    padding-right: 20px;
                }

                .content_right {
                    width: 380px;
                }
            }

            @media (max-width: 876px) {
                padding: 0 30px;
                flex-direction: column;

                .content_left {
                    width: 100%;
                    padding-right: 0;

                    .left_inner {
                        .inner_items {
                            .item_box {
                                .content {
                                    p {
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }

                .content_right {
                    width: 100%;
                    margin-top: 25px;
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;

                .content_left {

                    .left_inner {
                        .inner_head {
                            h4 {
                                font-size: 19px;
                            }
                        }
                        .inner_items {
                            .item_box {
                                a {
                                    width: 35px;
                                    height: 35px;
                                    font-size: 14px;
                                }
                                .content {
                                    width: calc(100% - 35px);
                                    p {
                                        font-size: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            @media (max-width: 450px) {
                .content_left {
                    .left_inner {
                        .inner_head {
                            h4 {
                                font-size: 15px;
                            }
                        }
                    }
                }
                .content_right {
                    .right_inner {
                        .input_box {
                            input {
                                font-size: 11px;
                            }
                        }

                        .text_box {
                            textarea {
                                font-size: 11px;
                            }
                        }

                        .btn_box {
                            button {
                                font-size: 11px;
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding: 35px 0;
        }
    }
`;
