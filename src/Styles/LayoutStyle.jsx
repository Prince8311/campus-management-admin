import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const PageWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${colors.customColors.blueColorLight};
    overflow: hidden;

    .left_side {
        position: relative;
        width: 265px;
        height: 100%;
    }

    .right_side {
        position: relative;
        width: calc(100% - 265px);
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 20px 20px 10px;

        .top_bar {
            position: relative;
            width: 100%;
            height: 55px;
        }

        .main_content {
            position: relative;
            width: 100%;
            height: calc(100% - 55px);
            background: ${colors.customColors.whiteColor};
            border-radius: 10px;
            padding: 25px 15px;
            box-shadow: 5px 5px 10px ${colors.boxShadowColors.shadowColor1},
                        -4px -4px 10px ${colors.boxShadowColors.shadowColor1};
            
            .content_inner {
                position: relative;
                width: 100%;
                height: 100%;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }
            }
        }
    }
`;

export const SidebarWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

    .logo {
        position: relative;
        width: 100%;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 35px;

        img {
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .institution_brief {
        position: relative;
        width: 100%;
        height: 140px;
        padding-left: 20px;
        padding-right: 10px;

        .brief_inner {
            position: relative;
            width: 100%;
            background: ${colors.customColors.whiteColor};
            border-radius: 10px;
            box-shadow: 3px 3px 8px rgba(60, 60, 60, 0.2);
            padding: 15px;
            display: flex;
            flex-direction: column;

            .top_part {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                padding-bottom: 10px;

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor}, transparent);
                }

                .image_box {
                    position: relative;
                    width: 37px;
                    height: 37px;
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${colors.themeColor};

                    i {
                        position: relative;
                        font-size: 13px;
                        color: ${colors.customColors.whiteColor};
                    }
                }

                li {
                    position: relative;
                    width: calc(100% - 37px);
                    padding-left: 10px;
                    list-style: none;
                    display: flex;
                    flex-direction: column;

                    h4 {
                        position: relative;
                        width: 100%;
                        font-size: 13px;
                        font-weight: 600;
                        color: ${colors.customColors.blackColor};
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    p {
                        position: relative;
                        margin-top: 2px;
                        display: flex;
                        align-items: center;
                        font-size: 10px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor2};

                        b {
                            font-weight: 600;
                            color: ${colors.customColors.blackColor1};
                            font-style: italic;
                            margin-right: 4px;
                        }
                    }
                }
            }

            .bottom_part {
                position: relative;
                width: 100%;
                margin-top: 8px;
                display: flex;
                flex-direction: column;

                li {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    list-style: none;

                    p {
                        position: relative;
                        font-size: 12px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                    }
                    
                    span {
                        position: relative;
                        margin-left: auto;
                        font-size: 11px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor2};
                    }
                }

                .btn_sec {
                    position: relative;
                    margin-top: 12px;
                    width: 100%;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;

                    .view_btn {
                        position: relative;
                        padding: 6px 13px;
                        font-size: 10px;
                        border: none;
                        background: ${colors.themeColor};
                        color: ${colors.customColors.whiteColor};
                        font-weight: 500;
                        cursor: pointer;
                        border-radius: 5px;
                    }

                    .manage_btn {
                        position: relative;
                        font-size: 11px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        color: ${colors.themeColor};
                        font-weight: 500;

                        &::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            bottom: 2px;
                            width: calc(100% - 8px);
                            height: 1px;
                            background: ${colors.themeColor};
                        }

                        i {
                            position: relative;
                            font-size: 9px;
                            margin-left: 2px;
                        }
                    }
                }
            }
        }
    }
    
    .sidebar_items {
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: calc(100% - 275px);
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        .items_inner {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            padding-right: 10px;

            a {
                position: relative;
                width: 100%;
                height: 40px;
                margin-bottom: 8px;
                text-decoration: none;
                display: flex;
                align-items: center;
                cursor: pointer;
                overflow: hidden;

                i {
                    position: relative;
                    width: 40px;
                    height: 100%;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${colors.customColors.blackColor};
                    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.247));
                    box-shadow: 4px 0px 8px rgba(60, 60, 60, 0.247);
                    z-index: 5;
                    transition: all 0.5s ease;
                }
                
                p {
                    position: relative;
                    width: calc(100% - 40px);
                    height: 100%;
                    padding-left: 15px;
                    font-size: 13px;
                    line-height: 1;
                    display: flex;
                    align-items: center;
                    color: ${colors.customColors.blackColor};
                    transition: all 0.5s ease;
                }

                &:hover {
                    i {
                        color: ${colors.themeColor}; 
                        transition: all 0.5s ease;
                    }
                    p {
                        color: ${colors.themeColor};
                        transition: all 0.5s ease;
                    }
                }

                &.active {
                    i {
                        color: ${colors.customColors.whiteColor}; 
                        background: linear-gradient(to right, transparent, ${colors.themeColor}); 
                        transition: all 0.5s ease;
                    }
                    p {
                        color: ${colors.customColors.whiteColor}; 
                        background: linear-gradient(to right, ${colors.themeColor}, transparent); 
                        transition: all 0.5s ease;
                    }
                }
            }

            .dropdown_item {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                .dropdown_btn {
                    position: relative;
                    width: 100%;

                    li {
                        position: relative;
                        width: 100%;
                        height: 40px;
                        margin-bottom: 8px;
                        list-style: none;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        overflow: hidden;

                        i {
                            position: relative;

                            &.prefix {
                                width: 40px;
                                height: 100%;
                                font-size: 14px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: ${colors.customColors.blackColor};
                                background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.247));
                                box-shadow: 4px 0px 8px rgba(60, 60, 60, 0.247);
                                transition: all 0.5s ease;
                            }

                            &.suffix {
                                font-size: 13px;
                                margin-left: auto;
                                color: ${colors.customColors.blackColor};
                                transition: all 0.5s ease;
                            }
                        }

                        span {
                            position: relative;
                            width: calc(100% - 40px);
                            height: 100%;
                            padding-left: 15px;
                            display: flex;
                            align-items: center;
                            transition: all 0.5s ease;

                            p {
                                position: relative;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor};
                                transition: all 0.5s ease;
                            }
                        }
                    }

                    &:hover {
                        li {
                            i {
                                &.prefix {
                                    color: ${colors.themeColor};
                                    transition: all 0.5s ease;
                                }
                                &.suffix {
                                    color: ${colors.themeColor};
                                    transition: all 0.5s ease;
                                }
                            }
                            span {
                                p {
                                    color: ${colors.themeColor};
                                    transition: all 0.5s ease;
                                }
                            }
                        }
                    }
                }

                .dropdown {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    max-height: 0;
                    opacity: 0;
                    overflow-y: hidden;
                    transition: all 0.7s ease;
                }

                &.active {
                    .dropdown_btn li {
                        i {
                            &.prefix {
                                color: ${colors.themeColor};
                                transition: all 0.5s ease;
                            }
                            &.suffix {
                                color: ${colors.themeColor};
                                transition: all 0.5s ease;
                                transform: rotate(90deg);
                                transition: all 0.5s ease;
                            }  
                        }
                        span {
                            background: linear-gradient(to right, rgba(255, 255, 255, 0.247) 70%, transparent 100%);
                            transition: all 0.5s ease;

                            p {
                                font-style: italic;
                                color: ${colors.themeColor};
                                transition: all 0.5s ease;
                            }
                        }
                    }
                    .dropdown {
                        opacity: 1;
                        max-height: 1500px;
                        transition: all 0.7s ease-in;
                    }
                }
            }
        }
    }

    .auth_btn {
        position: relative;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: flex-end;
        padding-left: 20px;
        padding-right: 10px;

        a {
            position: relative;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            color: ${colors.customColors.whiteColor};
            background: ${colors.customColors.redColor};
            border-radius: 10px;

            i {
                position: relative;
                margin-right: 6px;
                font-size: 14px;
            }

            &.disable {
                pointer-events: none;
                opacity: 0.4;
            }
        }
    }
`;

export const NavbarWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px 10px;

    .nav_inner {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    
        .toggle_btn {
            position: relative;
            cursor: pointer;
            
            i {
                position: relative;
                font-size: 16px;
                color: ${colors.customColors.blackColor1};
            }
        }

        h4 {
            position: relative;
            margin-left: 15px;
            font-family: "Science Gothic", sans-serif;
            font-size: 20px;
            font-weight: 600;
            color: ${colors.customColors.blackColor1};
        }

        .nav_items {
            position: relative;
            height: 100%;
            margin-left: auto;
            display: flex;
            align-items: center;

            .notification_box {
                position: relative;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 1px solid ${colors.customColors.blackColor2};
                

                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${colors.customColors.blackColor2};
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 15px;
                }
            }

            .profile_box {
                position: relative;
                margin-left: 20px;
                display: flex;
                align-items: center;
                cursor: pointer;

                .profile_img {
                    position: relative;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 1px solid ${colors.customColors.blackColor2};
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                p {
                    position: relative;
                    margin-left: 8px;
                    font-size: 12px;
                    font-weight: 500;
                    overflow: hidden;
                    white-space: nowrap;
                    max-width: 100px;
                    text-overflow: ellipsis;
                    color: ${colors.customColors.blackColor1};
                }

                i {
                    position: relative;
                    margin-left: 2px;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }
            }
        }
    }
`;

export const FormFieldWrapper = styled('div')`
    position: relative;
    width: 33.33%;
    margin-bottom: 10px;
    padding: 0 8px;

    .field_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

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

        .input_box {
            position: relative;
            width: 100%;
            height: 37px;
            margin-top: 3px;

            input {
                position: relative;
                width: 100%;
                height: 100%;
                font-size: 12px;
                border-radius: 5px;
                padding: 5px 15px;
                outline: none;
                border: none;
                background: ${colors.customColors.lightBackground3};

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                &[type="number"] {
                    -moz-appearance: textfield;
                }
            }
        }

        .select_box {
            position: relative;
            width: 100%;
            height: 37px;
            flex-direction: column;
            margin-top: 3px;

            .select_btn {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                border-radius: 5px;
                padding: 5px 15px;
                background: ${colors.customColors.lightBackground3};
                cursor: pointer;

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
                    
                    &.rotate {
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
                height: max-content;
                overflow: hidden;
                transition: all 0.5s ease;

                &.drop_up {
                    top: inherit;
                    bottom: 100%;
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
                        max-height: 160px;
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
                            transition: all 0.5s ease;

                            &:hover {
                                background: ${colors.themeColor};
                                color: ${colors.customColors.whiteColor};
                                transition: all 0.5s ease;
                            }

                            &.selected {
                                background: ${colors.customColors.lightBackground};
                                color: ${colors.customColors.blackColor};

                                &:hover {
                                    color: ${colors.customColors.blackColor};
                                }
                            }

                            &.empty_message {
                                padding: 5px 10px;
                                color: ${colors.customColors.blackColor3};
                                pointer-events: none;
                            }
                        }
                    }
                }
            }
        }

        .multi_select_box {
            position: relative;
            width: 100%;
            height: 37px;
            flex-direction: column;
            margin-top: 3px;

            .select_btn {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                border-radius: 5px;
                padding: 5px 15px;
                background: ${colors.customColors.lightBackground3};
                cursor: pointer;

                p {
                    position: relative;
                    width: calc(100% - 25px);
                    display: block;
                    font-size: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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

                    &.rotate {
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
                height: max-content;
                overflow: hidden;
                transition: all 0.5s ease;
                
                &.drop_up {
                    top: inherit;
                    bottom: 100%;
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
                        max-height: 160px;
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
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 4px;
                            margin-bottom: 8px;
                            display: flex;
                            align-items: center;
                            transition: all 0.5s ease;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            p {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                            }

                            span {
                                position: relative;
                                margin-left: auto;
                                width: 15px;
                                height: 15px;
                                border: 1px solid ${colors.customColors.borderColor};
                                border-radius: 3px;

                                img {
                                    position: absolute;
                                    left: 1px;
                                    bottom: 2px;
                                    width: 18px;
                                }
                            }

                            &.empty_message {
                                padding: 5px 10px;
                                color: ${colors.customColors.blackColor3};
                                border: none;
                                padding: 5px 10px;
                                font-size: 12px;
                                pointer-events: none;
                            }
                        }
                    }
                }
            }
        }

        .date_box {
            position: relative;
            width: 100%;
            height: 37px;
            flex-direction: column;
            margin-top: 3px;

            .date_btn {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                border-radius: 5px;
                padding: 5px 15px;
                background: ${colors.customColors.lightBackground3};
                cursor: pointer;

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

            .dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                z-index: 99;
                width: 100%;
                transition: all 0.5s ease;

                &.drop_up {
                    top: inherit;
                    bottom: 100%;
                }
            }
        }
    }
`;

export const CalenderBox = styled('div')`
    position: relative;
    width: 100%;
    background: #FFF;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);

    .calender_inner {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .calender_head {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
            border-bottom: 1px solid ${colors.customColors.borderColor};

            a {
                position: relative;
                text-decoration: none;
                cursor: pointer;
                font-size: 13px;
                color: #333;
            }

            .month_year_sec {
                position: relative;

                b {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                    color: #222;
                    cursor: pointer;
                }

                .month_year_picker {
                    position: absolute;
                    top: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: max-content;
                    max-height: 200px;
                    background: ${colors.customColors.whiteColor};
                    border-radius: 5px;
                    z-index: 49;
                    box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1},
                                -2px -2px 3px ${colors.boxShadowColors.shadowColor2};

                    .picker_inner {
                        position: relative;
                        width: auto;
                        display: flex;
                        padding: 8px 10px;

                        ul {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            max-height: 150px;
                            overflow-y: auto;
                            scrollbar-width: none;
                            -ms-overflow-style: none;

                            &::-webkit-scrollbar {
                                display: none;
                            }

                            &.months_list {
                                padding-right: 8px;
                                border-right: 1px solid ${colors.customColors.borderColor};
                            }

                            &.years_list {
                                padding-left: 10px;
                            }

                            li {
                                position: relative;
                                list-style: none;
                                font-size: 11px;
                                cursor: pointer;
                                margin-bottom: 6px;
                                color: ${colors.customColors.blackColor2};
                                transition: all 0.5s ease;

                                &:last-of-type {
                                    margin-bottom: 0;
                                }

                                &:hover {
                                    color: ${colors.customColors.blackColor};
                                }

                                &.active {
                                    font-style: italic;
                                    color: ${colors.customColors.blueColor1};
                                }
                            }
                        }
                    }
                }
            }
        }

        .calender_days {
            position: relative;
            margin-top: 10px;
            width: 100%;
            padding: 0 15px;
            display: flex;
            align-items: center;

            li {
                position: relative;
                width: calc(100% / 7);
                list-style: none;
                display: flex;
                justify-content: center;
                font-size: 12px;
                font-weight: 500;
                color: ${colors.themeColor};
            }
        }

        .calender_dates {
            position: relative;
            width: 100%;
            margin: 10px 0;
            padding: 0 15px;
            display: flex;
            flex-wrap: wrap;

            li {
                position: relative;
                list-style: none;
                width: calc(100% / 7);
                padding: 3px;

                b {
                    position: relative;
                    width: 100%;
                    height: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    color: rgb(60, 60, 60);
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.4s ease;

                    &:hover {
                        background: rgb(233, 233, 233);
                        transition: all 0.4s ease;
                    }
                }

                &.prev-month b {
                    pointer-events: none;
                    opacity: 0.3;
                }

                &.next-month b {
                    pointer-events: none;
                    opacity: 0.3;
                }

                &.today b {
                    border: 1px solid rgb(63, 228, 79);
                    color: rgb(63, 228, 79);
                }

                &.selected b {
                    background: rgb(63, 228, 79);
                    color: #FFF;
                }
            }
        }
    }
`;