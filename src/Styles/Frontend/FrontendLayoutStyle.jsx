import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const FrontendLayoutWrapper = styled('div')`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${colors.customColors.whiteColor};

    &.no_scroll {
        height: 100vh;
        overflow-y: hidden;
    }

    .top_section {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 999;
    }

    .body_section {
        position: relative;
        width: 100%;
    }
    
    .bottom_section {
        position: relative;
        margin-top: 15px;
        width: 100%;
        margin-top: auto;
    }
`;

export const NavbarFrontendWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background: ${colors.customColors.whiteColor};
    border-bottom: 1px solid ${colors.customColors.borderColor};
    transition: all 0.6s ease;

    .nav_inner {
        position: relative;
        width: 1320px;
        display: flex;

        .inner_items {
            position: relative;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;

            .logo_part {
                position: relative;
                height: 100%;
                display: flex;
                padding: 8px 0;

                img {
                    position: relative;
                    height: 100%;
                    width: auto;
                }
            }

            .nav_items_part {
                position: relative;
                display: flex;
                align-items: center;
                margin-left: 50px;

                li {
                    position: relative;
                    height: 100%;
                    list-style: none;
                    margin: 0 5px;

                    a {
                        position: relative;
                        height: 100%;
                        padding: 0 15px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        text-decoration: none;
                        font-size: 14px;
                        color: ${colors.customColors.blackColor1};
                        transition: all 0.5s ease;

                        &::after {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: -3px;
                            height: 2px;
                            width: 100%;
                            border-radius: 20px;
                            background: ${colors.customColors.blueColor2};
                            transform: scaleX(0);
                            transform-origin: right;
                            transition: transform 0.35s ease;
                        }

                        &.active {
                            color: ${colors.customColors.blueColor2};

                            &::after {
                                transform: scaleX(1);
                                transform-origin: left;
                            }
                        }
                    }
                    
                    &:hover {
                        a {
                            color: ${colors.customColors.blackColor};

                            &::after {
                                transform: scaleX(1);
                                transform-origin: left;
                            }
                        }
                    }
                }
            }

            .nav_btn {
                position: relative;
                margin-left: auto;
                height: 100%;
                padding: 8px 0;

                a {
                    position: relative;
                    width: 120px;
                    height: 100%;
                    cursor: pointer;
                    text-decoration: none;
                    background: linear-gradient(135deg, #2ea6d6, #0d7fa6);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: 500;
                    color: ${colors.customColors.whiteColor};
                    transition: all 0.5s ease;

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }
                }
            }

            .menubar_icon {
                position: relative;
                display: none;
                margin-left: 20px;

                a {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding: 7px;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 5px;

                    span {
                        position: relative;
                        width: 20px;
                        height: 2.5px;
                        background: ${colors.customColors.blackColor1};
                        border-radius: 25px;
                        
                        &:nth-of-type(1),
                        &:nth-of-type(3) {
                            transition: transform 0.5s ease;
                        }

                        &:nth-of-type(2) {
                            margin: 4px 0;
                            transition: all 0.5s ease;
                        }
                    }

                    &.active {
                        span {
                            &:nth-of-type(2) {
                                opacity: 0;
                                visibility: hidden;
                                transition: all 0.5s ease;
                            }

                            &:nth-of-type(1) {
                                transform: rotate(40deg);
                                transform-origin: left;
                                transition: transform 0.5s ease;
                            }

                            &:nth-of-type(3) {
                                transform: rotate(-40deg);
                                transform-origin: left;
                                transition: transform 0.5s ease;
                            }
                        }
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

            .inner_items {
                .logo_part {
                    img {
                        width: 180px;
                        height: auto;
                        object-fit: contain;
                    }
                }
               .nav_items_part {
                    li {
                        a {
                            font-size: 12px;
                        }
                    }
               } 
            }
        }

        @media (max-width: 876px) {
            padding: 0 30px;

            .inner_items {
               .nav_items_part {
                    display: none;
                }

                .menubar_icon {
                    display: flex;
                }
            }
        }

        @media (max-width: 678px) {
            padding: 0 15px;
        }

        @media (max-width: 575px) {
            .inner_items {
                .logo_part {
                    img {
                        width: 150px;
                    }
                }
                .menubar_icon {
                    span {
                        font-size: 15px;
                    }
                }
                .nav_btn {
                    padding: 10px 0;
                    a {
                        width: 90px;
                        font-size: 10px;
                    }
                }
            }
        }
    }
`;

export const FooterFrontendWrapper = styled('div')`
    position: relative;
    width: 100%;
    background: ${colors.customColors.whiteColor};
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${colors.customColors.borderColor};

    .footer_top {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .top_inner {
            position: relative;
            width: 1320px;
            display: flex;

            .left_inner {
                position: relative;
                width: 350px;
                display: flex;
                flex-direction: column;

                .logo {
                    position: relative;
                    width: 200px;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: auto;
                    }
                }

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                    margin-top: 10px;
                }
            }

            .right_inner {
                position: relative;
                width: calc(100% - 350px);
                display: flex;
                padding-left: 50px;

                .inner_box {
                    position: relative;
                    width: 33.33%;
                    padding-left: 30px;
                    display: flex;
                    flex-direction: column;

                    h5 {
                        position: relative;
                        width: max-content;
                        font-size: 14px;
                        font-weight: 600;
                        color: ${colors.customColors.blackColor};
                    }

                    ul {
                        position: relative;
                        margin-top: 23px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;

                        li {
                            position: relative;
                            width: 100%;
                            list-style: none;
                            margin-bottom: 10px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            a {
                                position: relative;
                                width: 100%;
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                cursor: pointer;
                                color: ${colors.customColors.blackColor1};
                                opacity: 0.7;
                                transition: all 0.5s ease;

                                i {
                                    font-size: 12px;
                                }

                                span {
                                    font-size: 13px;
                                    margin-left: 6px;
                                    transition: all 0.5s ease;
                                }

                                &:hover {
                                    opacity: 1;
                                    transition: all 0.5s ease;

                                    span {
                                        margin-left: 15px;
                                        transition: all 0.5s ease;
                                    }
                                }
                            }
                        }
                    }

                    .social_media {
                        position: relative;
                        width: 100%;
                        margin-top: 23px;
                        display: flex;
                        align-items: center;

                        a {
                            position: relative;
                            width: 35px;
                            height: 35px;
                            background: ${colors.customColors.lightBackground1};
                            color: ${colors.customColors.blackColor1};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                            margin-right: 15px;
                            border-radius: 8px;
                            font-size: 15px;
                            cursor: pointer;
                            transition: all 0.5s ease;
                            
                            i {
                                opacity: 0.7;
                                transition: all 0.5s ease;
                            }

                            &:hover {
                                color: ${colors.customColors.blackColor};
                                background: ${colors.customColors.lightBackground2};
                                transition: all 0.5s ease;
                                
                                i {
                                    opacity: 1;
                                    transition: all 0.5s ease;
                                }
                            }
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

                .left_inner {
                    width: 280px;
                }
                .right_inner {
                    width: calc(100% - 280px);
                    padding-left: 20px;

                    .inner_box {
                        padding-left: 15px;
                    }
                }
            }
            @media (max-width: 876px) {
                padding: 0 30px;
                flex-direction: column;

                .left_inner {
                    width: 100%;
                }
                .right_inner {
                    width: 100%;
                    padding-left: 0;
                    margin-top: 25px;

                    .inner_box  {
                        padding-left: 0;
                    }
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;

                .left_inner {
                    p {
                        font-size: 11px;
                    }
                }

                .right_inner {

                    .inner_box  {
                        h5 {
                            font-size: 12px;
                            font-weight: 500;
                        }

                        ul {
                            margin-top: 15px;

                            li {
                                a {
                                    i {
                                        font-size: 10px;
                                    }
                                    span {
                                        font-size: 10px;
                                    }
                                }
                            }
                        }

                        .social_media {
                            margin-top: 15px;

                            a {
                                width: 32px;
                                height: 32px;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }

            @media (max-width: 450px) {
                .left_inner {
                    .logo {
                        width: 180px;
                    }
                }

                .right_inner {
                    flex-wrap: wrap;

                    .inner_box {
                        width: 50%;

                        &:last-of-type {
                            margin-top: 20px;
                        }
                    }
                }
            }
        }

        @media (max-width: 450px) {
            padding: 20px 0;
        }
    }

    .footer_bottom {
        position: relative;
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content: center;
        text-align: center;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, ${colors.customColors.borderColor}, transparent);
        }

        p {
            position: relative;
            font-size: 12px;
            color: ${colors.customColors.blackColor1};

            span {
                font-size: 14px;
                margin-right: 2px;
                color: ${colors.themeColor};
            }
        }

        @media (max-width: 678px) {
            p {
                font-size: 9px;

                span {
                    font-size: 10px;
                }
            }
        }
    }
`;

export const SidebarFrontendWrapper = styled('div')`
    position: fixed;
    top: 51px;
    right: -100%;
    width: 300px;
    height: calc(100vh - 51px);
    border-top-left-radius: 10px;
    background: ${colors.customColors.whiteColor};
    box-shadow: -10px 5px 15px ${colors.boxShadowColors.shadowColor1};
    z-index: 1000;
    transition: all 0.6s ease;

    &.active {
        right: 0;
        transition: all 0.6s ease;
    }

    .sidebar_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .inner_head {
            position: relative;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h4 {
                position: relative;
                font-size: 14px;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
            }

            a {
                position: relative;
                cursor: pointer;
                font-size: 16px;
                color: ${colors.customColors.blackColor1};
            }
        }

        .inner_items {
            position: relative;
            width: 100%;
            height: calc(100% - 116px);

            .items_inner {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
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
                    padding: 10px 15px;
                    border-bottom: 1px solid ${colors.customColors.borderColor};
                    display: flex;
                    align-items: center;

                    a {
                        position: relative;
                        text-decoration: none;
                        font-size: 13px;
                        color: ${colors.customColors.blackColor1};
                    }
                }
            }
        }

        .inner_btn {
            position: relative;
            width: 100%;
            height: 66px;
            border-top: 1px solid ${colors.customColors.borderColor};
            padding: 15px 20px;
            display: flex;
            align-items: center;

            button {
                position: relative;
                width: 100%;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                letter-spacing: 1px;
                background: linear-gradient(135deg, #2ea6d6, #0d7fa6);
                border-radius: 6px;
                font-size: 12px;
                font-weight: 500;
                color: ${colors.customColors.whiteColor};
                border: none;
            }
        }
    }
`;