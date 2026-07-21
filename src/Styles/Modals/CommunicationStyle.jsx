import styled from "@emotion/styled";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const MessageCreateWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    padding-left: 265px;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 550px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 11px 20px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .input_box {
                    position: relative;
                    margin-bottom: 10px;

                    &.fullWidth {
                        width: 100%;
                    }

                    &.halfWidth {
                        width: 48%; 
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

                    textarea {
                        position: relative;
                        width: 100%;
                        height: 80px;
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 10px 15px;
                        outline: none;
                        border: none;
                        margin-top: 3px;
                        background: ${colors.customColors.lightBackground3};
                        resize: none;
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
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            align-items: center;
            border-top: 1px solid ${colors.customColors.borderColor};

            p {
                position: relative;
                font-size: 12px;
                color: ${colors.customColors.blackColor2};
                margin-right: 8px;
            }

            .toggle_bar {
                position: relative;
                width: 50px;
                display: flex;
                justify-content: flex-start;

                input[type="checkbox"] {
                    display: none;
                }

                label {
                    position: relative;
                    width: 40px;
                    height: 21px;
                    background: ${colors.customColors.whiteColor2};
                    border-radius: 25px;
                    padding: 3px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: all 0.5s ease;

                    span {
                        position: relative;
                        width: 15px;
                        height: 100%;
                        background: ${colors.customColors.whiteColor};
                        border-radius: 50%;
                        transition: all 0.5s ease;
                    }
                }

                input[type="checkbox"]:checked ~ label {
                    background: ${colors.customColors.blueColor1};
                    transition: all 0.5s ease;
                }

                input[type="checkbox"]:checked ~ label span {
                    transform: translateX(19px);
                    transition: all 0.5s ease;
                }
            }

            button {
                position: relative;
                width: 160px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                color: ${colors.customColors.whiteColor};
                margin-left: auto;
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.4;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;

export const AddInstitutionWalletWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    padding-left: 265px;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 550px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;
        overflow-y: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 11px 20px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .select_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 8px;

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

                                .search_sec {
                                    position: relative;
                                    height: 35px;
                                    padding: 5px 0;
                                    display: flex;
                                    border: 1px solid ${colors.customColors.borderColor};
                                    border-radius: 6px;
                                    margin-bottom: 10px;

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
                                        width: 100%;
                                        height: 100%;
                                        border: none;
                                        outline: none;
                                        padding: 0 15px;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                }

                                ul {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    max-height: 135px;
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

                                        &.active {
                                            background: ${colors.customColors.lightBackground};
                                            color: ${colors.customColors.blackColor};

                                            &:hover {
                                                color: ${colors.customColors.blackColor};
                                            }
                                        }

                                        &.empty_message {
                                            padding: 5px 10px;
                                            pointer-events: none;
                                            color: ${colors.customColors.blackColor3};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .input_box {
                    position: relative;
                    margin-bottom: 10px;

                    &.fullWidth {
                        width: 100%;
                    }

                    &.halfWidth {
                        width: 48%;
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
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            align-items: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};

            button {
                position: relative;
                width: 160px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                color: ${colors.customColors.whiteColor};
                margin-left: auto;
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.4;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;

export const SelectTemplateTypeWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    padding-left: 265px;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
        pointer-events: initial;
        transition: all 0.3s ease;
    }

    .modal_box {
        position: relative;
        width: 450px;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        transform: translateY(-150px);
        transition: transform 0.8s ease;

        &.active {
            transform: translateY(0);
            transition: transform 0.8s ease;
        }

        .modal_head {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                line-height: 1;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .close_sec {
                position: relative;
                margin-left: auto;
                width: 40px;
                display: flex;
                justify-content: flex-end;

                a {
                    position: relative;
                    margin-left: auto;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor1};
                    cursor: pointer;
                }
            }
        }

        .modal_body {
            position: relative;
            width: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .inner_box {
                    position: relative;
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    padding: 10px;

                    .box_item {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 18px 10px 10px;
                        border: 1px solid ${colors.customColors.borderColor1};
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        img {
                            position: relative;
                            width: auto;
                            height: 50px;
                        }

                        p {
                            position: relative;
                            margin-top: 8px;
                            font-size: 12px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }

                        span {
                            position: relative;
                            width: 100%;
                            display: flex;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 400;
                            margin-top: 3px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    &:hover .box_item {
                        box-shadow: 0px 0px 10px ${colors.boxShadowColors.shadowColor3};
                        transition: all 0.5s ease;
                    }
                }
                
            }
        }
    }
`;

export const ManageTemplateWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 650px;
    height: 100vh;
    border-top-left-radius: 10px;
    background: ${colors.customColors.whiteColor};
    box-shadow: -10px 5px 15px ${colors.boxShadowColors.shadowColor1};
    z-index: 1000;
    transition: all 0.6s ease;

    &.active {
        right: 0;
        transition: all 0.6s ease;
    }

    .modal_box {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .modal_head {
            position: relative;
            width: 100%;
            padding: 20px 30px;
            border-bottom: 1px solid ${colors.customColors.borderColor};
            display: flex;
            align-items: center;

            h4 {
                position: relative;
                max-width: calc(100% - 40px);
                font-size: 14px;
                font-weight: 600;
                font-style: italic;
                color: ${colors.customColors.blackColor1};
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 20px;
            }

            .close_sec {
                position: absolute;
                top: 10px;
                left: -20px;
                display: flex;

                a {
                    position: relative;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 17px;
                    color: ${colors.customColors.blackColor2};
                    cursor: pointer;
                    text-decoration: none;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 5px 8px 15px ${colors.boxShadowColors.shadowColor1};
                }
            }
        }

        .progress_section {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 25px;
            margin-top: 20px;

            .sec_box {
                position: relative;
                width: 37px;
                height: 37px;
                border-radius: 50%;
                border: 1px solid ${colors.customColors.borderColor1};
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;

                p {
                    position: relative;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor2};
                    transition: all 0.2s ease;
                }

                &.active {
                    border: 1px solid ${colors.customColors.greenColor};
                    background: ${colors.customColors.greenColor};
                    transition: all 0.2s ease;
                    transition-delay: 0.3s;

                    p {
                        color: ${colors.customColors.whiteColor};
                        transition: all 0.2s ease;
                        transition-delay: 0.3s;
                    }
                }
            }

            .line {
                position: relative;
                width: 120px;
                height: 4px;
                border-radius: 25px;
                background: ${colors.customColors.lightBackground3};
                margin: 0 10px;

                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background: ${colors.customColors.greenColor}; 
                    transition: width 0.5s ease;
                }

                &.active {
                    &::after {
                        width: 100%;
                        transition: width 0.5s ease;
                    } 
                }
            }
        }
        .modal_content_sec {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 20px;

            .template_category_sec {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .modal_top_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 15px;

                    .top_box {
                        position: relative;
                        width: 50%;
                        padding: 5px 10px;
                        display: flex;

                        .box_inner {
                            position: relative;
                            width: 100%;
                            display: flex;
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 5px;
                            padding: 15px;
                            align-items: center;

                            a {
                                position: relative;
                                width: 35px;
                                height: 35px;
                                border-radius: 5px;
                                background: ${colors.customColors.greenColorLight};
                                color: ${colors.customColors.greenColor};
                                font-size: 13px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                text-decoration: none;
                            }

                            p {
                                position: relative;
                                width: calc(100% - 65px);
                                font-size: 13px;
                                color: ${colors.customColors.blackColor1};
                                font-weight: 500;
                                padding:  0 10px;
                            }

                            .check_sec {
                                position: relative;
                                width: 30px;
                                display: flex;

                                label {
                                    position: relative;
                                    width: 100%;
                                    list-style: none;

                                    input[type="checkbox"] {
                                        display: none;
                                    }

                                    span {
                                        position: relative;
                                        width: 22px;
                                        height: 22px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 17px;
                                        color: ${colors.customColors.blackColor1};
                                        border-radius: 50%;
                                        border: 2px solid ${colors.customColors.borderColor};
                                        cursor: pointer;
                                        transition: all 0.5;

                                        i {
                                            opacity: 0;
                                            transition: all 0.4 ease;
                                        }
                                    }

                                    input[type="checkbox"]:checked ~ span {
                                        background: ${colors.customColors.blueColor2};
                                        border: 2px solid ${colors.customColors.blueColor2};
                                        transition: all 0.5s;
                                    }

                                    input[type="checkbox"]:checked ~ span i {
                                        opacity: 1;
                                        color: ${colors.customColors.whiteColor};
                                        transition: all 0.4 ease;
                                    }
                                }
                            }
                        }

                        &:last-of-type {
                            .box_inner {
                                a {
                                    background: ${colors.customColors.blueColorLight};
                                    color: ${colors.customColors.blueColor2};
                                }
                            }
                        }
                    }
                }

                .category_heading {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding: 0 25px;
                    margin-top: 15px;

                    h4 {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                    }
                }

                .category_box_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 15px;
                    padding: 0 20px;

                    .category_box {
                        position: relative;
                        width: 33.33%;
                        padding: 5px;

                        input[type="radio"] {
                            display: none;
                        }

                        label {
                            position: relative;
                            width: 100%;
                            padding: 7px 20px;
                            padding-left: 10px;
                            cursor: pointer;
                            border-radius: 4px;
                            border: 1px solid ${colors.customColors.borderColor};
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            line-height: 1;
                            display: flex;
                            align-items: center;
                            transition: all 0.5s ease;

                            .check_box {
                                position: relative;
                                width: 15px;
                                height: 15px;
                                border: 1px solid ${colors.customColors.borderColor};
                                border-radius: 5px;
                                cursor: pointer;
                                transition: all 0.4s ease;

                                img {
                                    position: absolute;
                                    left: 2px;
                                    bottom: 2px;
                                    width: 18px;
                                    opacity: 0;
                                    transition: all 0.4s ease;
                                }
                            }

                            p {
                                position: relative;
                                margin-left: 10px;
                            }
                        }

                        input[type="radio"]:checked ~ label {
                            color: ${colors.customColors.blackColor1};
                            transition: all 0.5s ease;

                            .check_box {
                                border: 1px solid ${colors.customColors.blackColor1};
                                transition: all 0.4s ease;

                                img {
                                    opacity: 1;
                                    transition: all 0.4s ease;
                                }
                            }
                        }
                    }
                }

                .filter_date_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 25px;
                    padding: 0 25px;

                    span {
                        position: relative;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                        font-weight: 400;
                    }

                    .filter_btn {
                        position: relative;
                        width: 300px;
                        height: 35px;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 5px;
                        padding: 5px 0;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        margin-left: 15px;

                        i {
                            position: relative;
                            width: 40px;
                            height: 100%;
                            font-size: 13px;
                            color: ${colors.customColors.blueColor1};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-right: 1px solid ${colors.customColors.borderColor};
                        }

                        p {
                            position: relative;
                            margin-left: 15px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }

                .category_btn {
                    position: relative;
                    width: 100%;
                    padding: 13px 25px;
                    display: flex;
                    justify-content: flex-end;
                    border-top: 1px solid ${colors.customColors.borderColor};
                    margin-top: auto;

                    button {
                        position: relative;
                        width: 150px;
                        height: 35px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                        color: ${colors.customColors.whiteColor};
                        border: none;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        i {
                            margin-left: 6px;
                        }

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }

                        &:disabled {
                            opacity: 0.4;
                            cursor: not-allowed;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }

            .template_selection_sec {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .select_box {
                    position: relative;
                    width: 100%;
                    padding: 0 25px;

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

                                .search_sec {
                                    position: relative;
                                    height: 35px;
                                    padding: 5px 0;
                                    display: flex;
                                    border: 1px solid ${colors.customColors.borderColor};
                                    border-radius: 6px;
                                    margin-bottom: 10px;

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
                                        width: 100%;
                                        height: 100%;
                                        border: none;
                                        outline: none;
                                        padding: 0 15px;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                }

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

                                        &.active {
                                            background: ${colors.customColors.lightBackground};
                                            color: ${colors.customColors.blackColor};

                                            &:hover {
                                                color: ${colors.customColors.blackColor};
                                            }
                                        }

                                        &.empty_message {
                                            padding: 5px 10px;
                                            pointer-events: none;
                                            color: ${colors.customColors.blackColor3};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .input_box {
                    position: relative;
                    margin-top: 10px;
                    width: 100%;
                    padding: 0 25px;

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

                    textarea {
                        position: relative;
                        width: 100%;
                        height: 120px;
                        font-size: 12px;
                        border-radius: 5px;
                        padding: 10px 15px;
                        outline: none;
                        border: none;
                        margin-top: 3px;
                        background: ${colors.customColors.lightBackground3};
                        resize: none;
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

                .select_btn {
                    position: relative;
                    width: 100%;
                    padding: 13px 25px;
                    display: flex;
                    justify-content: flex-end;
                    border-top: 1px solid ${colors.customColors.borderColor};
                    margin-top: auto;

                    button {
                        position: relative;
                        width: 150px;
                        height: 35px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                        color: ${colors.customColors.whiteColor};
                        border: none;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        i {
                            margin-left: 6px;
                        }

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }

                        &:first-of-type {
                            margin-right: 30px;
                            color: ${colors.customColors.blackColor2};
                            background: ${colors.customColors.whiteColor};
                            border: 2px solid ${colors.customColors.borderColor};

                            i {
                                margin-right: 6px;
                            }
                        }

                        &:disabled {
                            opacity: 0.4;
                            cursor: not-allowed;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }

            .template_reciver_sec {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .reciver_heading {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding: 0 25px;

                    h4 {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                    }
                }

                .reciver_type_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 15px;
                    padding: 0 15px;

                    .reciver_box {
                        position: relative;
                        width: 50%;
                        padding: 5px 10px;

                        input[type="radio"] {
                            display: none;
                        }

                        label {
                            position: relative;
                            width: 100%;
                            padding: 10px 20px;
                            padding-left: 10px;
                            cursor: pointer;
                            border-radius: 4px;
                            border: 1px solid ${colors.customColors.borderColor};
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            line-height: 1;
                            display: flex;
                            align-items: center;
                            transition: all 0.5s ease;

                            .check_box {
                                position: relative;
                                width: 20px;
                                height: 20px;
                                border: 1px solid ${colors.customColors.borderColor};
                                border-radius: 5px;
                                cursor: pointer;
                                transition: all 0.4s ease;

                                img {
                                    position: absolute;
                                    left: 2px;
                                    bottom: 2px;
                                    width: 25px;
                                    opacity: 0;
                                    transition: all 0.4s ease;
                                }
                            }

                            p {
                                position: relative;
                                margin-left: 10px;
                            }
                        }

                        input[type="radio"]:checked ~ label {
                            color: ${colors.customColors.blackColor1};
                            transition: all 0.5s ease;

                            .check_box {
                                border: 1px solid ${colors.customColors.blackColor1};
                                transition: all 0.4s ease;

                                img {
                                    opacity: 1;
                                    transition: all 0.4s ease;
                                }
                            }
                        }
                    }
                }

                .tab_sec {
                    position: relative;
                    margin-top: 15px;
                    width: 100%;
                    padding: 0 25px;

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

                .table_sec {
                    position: relative;
                    width: 100%;
                    margin: 20px 0;
                    padding: 0 25px;

                    .search_sec {
                        position: relative;
                        width: max-content;
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

                    .sec_inner {
                        position: relative;
                        margin-top: 15px;
                        width: 100%;
                        display: flex;

                        table {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            thead {
                                position: relative;
                                width: 100%;
                                height: 40px;
                                background: ${colors.themeColor};
                                border-radius: 10px 10px 0px 0px;
                                border: 1px solid ${colors.themeColor};

                                tr {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                }

                                th {
                                    position: relative;
                                    height: 100%;
                                    display: flex;
                                    align-items: center;
                                    font-family: "Lemonada", cursive;
                                    font-size: 12px;
                                    word-break: break-all;
                                    color: ${colors.customColors.whiteColor};
                                    padding: 0 25px;
                                    font-weight: 600;

                                    &:nth-of-type(1) {
                                        width: 45%;
                                    }

                                    &:nth-of-type(2) {
                                        width: 30%;
                                        justify-content: center;
                                    }

                                    &:nth-of-type(3) {
                                        width: 25%;
                                        justify-content: center;
                                    }
                                }
                            }

                            tbody {
                                position: relative;
                                width: 100%;
                                border: 1px solid ${colors.customColors.whiteColor2};
                                border-top: none;
                                border-radius: 0px 0px 10px 10px;
                                display: flex;
                                flex-direction: column;
                                overflow-y: auto;

                                tr {
                                    position: relative;
                                    width: 100%;
                                    min-height: 40px;
                                    display: flex;

                                    &:nth-of-type(even) {
                                        background: ${colors.customColors.blueColorLight};
                                    }

                                    td {
                                        position: relative;
                                        padding: 12px 25px;
                                        display: flex;
                                        color: ${colors.customColors.blackColor};
                                        font-size: 13px;
                                        word-break: break-all;
                                        line-height: 1.5;

                                        &:nth-of-type(1) {
                                            width: 45%;
                                            display: flex;
                                            align-items: center;

                                            .left_table_sec {
                                                position: relative;
                                                width: 30px;
                                                height: 30px;
                                                border-radius: 6px;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                background: ${colors.customColors.blueColor2};

                                                h5 {
                                                    position: relative;
                                                    font-size: 14px;
                                                    font-weight: 500;
                                                    color: ${colors.customColors.whiteColor};
                                                    text-transform: uppercase;
                                                }
                                            }

                                            .right_table_sec {
                                                position: relative;
                                                width: calc(100% - 30px);
                                                padding-left: 10px;
                                                display: flex;
                                                flex-direction: column;

                                                h6 {
                                                    font-size: 13px;
                                                    line-height: 1.25;
                                                    font-weight: 400;
                                                    color: ${colors.customColors.blackColor1};
                                                }
                                            }
                                        }

                                        &:nth-of-type(2) {
                                            width: 30%;
                                            align-items: center;
                                            justify-content: center;
                                        }

                                        &:nth-of-type(3) {
                                            width: 25%;
                                            align-items: center;
                                            justify-content: center;

                                            .toggle_bar {
                                                position: relative;
                                                width: 40px;
                                                display: flex;
                                                justify-content: flex-start;

                                                &.disabled {
                                                    opacity: 0.3;
                                                }

                                                input[type="checkbox"] {
                                                    display: none;
                                                }

                                                label {
                                                    position: relative;
                                                    width: 40px;
                                                    height: 21px;
                                                    background: ${colors.customColors.whiteColor2};
                                                    border-radius: 25px;
                                                    padding: 3px;
                                                    display: flex;
                                                    align-items: center;
                                                    cursor: pointer;
                                                    transition: all 0.5s ease;

                                                    span {
                                                        position: relative;
                                                        width: 15px;
                                                        height: 100%;
                                                        background: ${colors.customColors.whiteColor};
                                                        border-radius: 50%;
                                                        transition: all 0.5s ease;
                                                    }
                                                }

                                                input[type="checkbox"]:checked ~ label {
                                                    background: ${colors.customColors.blueColor1};
                                                    transition: all 0.5s ease;
                                                }

                                                input[type="checkbox"]:checked ~ label span {
                                                    transform: translateX(19px);
                                                    transition: all 0.5s ease;
                                                }
                                            }
                                        }

                                        &.empty_message {
                                            position: relative;
                                            width: 100%;
                                            padding: 12px 25px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            font-size: 13px;
                                            color: ${colors.customColors.blackColor2};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .sec_item {
                    position: relative;
                    width: 100%;
                    padding: 0 15px;
                    display: flex;
                    flex-direction: column;

                    .class_item {
                        position: relative;
                        margin-top: 15px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 8px;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                        .top_part {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            padding: 10px 16px;
                            cursor: pointer;
                            border-radius: 8px 8px 0 0;
                            transition: all 0.5s ease;

                            &.active {
                                background: ${colors.customColors.lightBackground1};
                            }

                            .left_info {
                                position: relative;

                                input[type="checkbox"] {
                                    display: none;
                                }

                                label {
                                    position: relative;
                                    cursor: pointer;
                                    font-size: 13px;
                                    color: ${colors.customColors.blackColor2};
                                    line-height: 1;
                                    display: flex;
                                    align-items: center;

                                    .check_box {
                                        position: relative;
                                        width: 18px;
                                        height: 18px;
                                        border: 1px solid ${colors.customColors.borderColor1};
                                        border-radius: 4px;
                                        cursor: pointer;
                                        transition: all 0.4s ease;

                                        img {
                                            position: absolute;
                                            left: 2px;
                                            bottom: 2px;
                                            width: 20px;
                                            opacity: 0;
                                            transition: all 0.4s ease;
                                        }
                                    }

                                    p {
                                        position: relative;
                                        margin-left: 10px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                }

                                input[type="checkbox"]:checked ~ label {
                                    color: ${colors.customColors.blackColor1};
                                    transition: all 0.5s ease;

                                    .check_box {
                                        border: 1px solid ${colors.customColors.blackColor1};
                                        transition: all 0.4s ease;

                                        img {
                                            opacity: 1;
                                            transition: all 0.4s ease;
                                        }
                                    }
                                }
                            }

                            .icon {
                                position: relative;
                                margin-left: auto;
                                width: 35px;
                                height: 35px;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};
                                cursor: pointer;

                                i {
                                    position: relative;
                                    font-size: 14px;
                                    color: ${colors.customColors.blackColor2};
                                    transition: all 0.5s ease;

                                    &.active {
                                        transform: rotate(90deg);
                                        transition: all 0.5s ease;
                                    }
                                }
                            }
                        }

                        .bottom_part {
                            position: relative;
                            width: 100%;
                            height: 0;
                            overflow: hidden;

                            &.active {
                                height: max-content;
                            }

                            .bottom_inner {
                                position: relative;
                                width: 100%;
                                padding: 15px;
                                display: flex;
                                flex-direction: column;

                                .class_box {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    border: 1px solid ${colors.customColors.borderColor};
                                    border-radius: 8px;
                                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};
                                    margin-bottom: 15px;

                                    &:last-of-type {
                                        margin-bottom: 0;
                                    }

                                    .box_top {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        padding: 10px 16px;
                                        cursor: pointer;
                                        border-radius: 8px 8px 0 0;
                                        background: ${colors.customColors.lightBackground1};

                                        .top_left {
                                            position: relative;

                                            input[type="checkbox"] {
                                                display: none;
                                            }

                                            label {
                                                position: relative;
                                                cursor: pointer;
                                                font-size: 13px;
                                                color: ${colors.customColors.blackColor2};
                                                line-height: 1;
                                                display: flex;
                                                align-items: center;

                                                .check_box {
                                                    position: relative;
                                                    width: 18px;
                                                    height: 18px;
                                                    border: 1px solid ${colors.customColors.borderColor1};
                                                    border-radius: 4px;
                                                    cursor: pointer;
                                                    transition: all 0.4s ease;

                                                    img {
                                                        position: absolute;
                                                        left: 2px;
                                                        bottom: 2px;
                                                        width: 20px;
                                                        opacity: 0;
                                                        transition: all 0.4s ease;
                                                    }
                                                }

                                                p {
                                                    position: relative;
                                                    margin-left: 10px;
                                                    font-weight: 500;
                                                    color: ${colors.customColors.blackColor1};
                                                }
                                            }

                                            input[type="checkbox"]:checked ~ label {
                                                color: ${colors.customColors.blackColor1};
                                                transition: all 0.5s ease;

                                                .check_box {
                                                    border: 1px solid ${colors.customColors.blackColor1};
                                                    transition: all 0.4s ease;

                                                    img {
                                                        opacity: 1;
                                                        transition: all 0.4s ease;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    .box_bottom {
                                        position: relative;
                                        width: 100%;

                                        .bottom_inner {
                                            position: relative;
                                            width: 100%;
                                            padding: 10px;

                                            ul {
                                                position: relative;
                                                width: 100%;
                                                display: flex;
                                                flex-wrap: wrap;
                                                max-height: 100px;
                                                overflow-y: auto;
                                                scrollbar-width: none;
                                                -ms-overflow-style: none;

                                                li {
                                                    position: relative;
                                                    list-style: none;
                                                    margin: 5px;

                                                    input[type="checkbox"] {
                                                        display: none;
                                                    }

                                                    label {
                                                        position: relative;
                                                        padding: 7px 20px;
                                                        padding-left: 10px;
                                                        cursor: pointer;
                                                        border-radius: 4px;
                                                        border: 1px solid ${colors.customColors.borderColor};
                                                        font-size: 12px;
                                                        color: ${colors.customColors.blackColor2};
                                                        line-height: 1;
                                                        display: flex;
                                                        align-items: center;
                                                        transition: all 0.5s ease;

                                                        .check_box {
                                                            position: relative;
                                                            width: 15px;
                                                            height: 15px;
                                                            border: 1px solid ${colors.customColors.borderColor};
                                                            border-radius: 4px;
                                                            cursor: pointer;
                                                            transition: all 0.4s ease;

                                                            img {
                                                                position: absolute;
                                                                left: 2px;
                                                                bottom: 2px;
                                                                width: 18px;
                                                                opacity: 0;
                                                                transition: all 0.4s ease;
                                                            }
                                                        }

                                                        p {
                                                            position: relative;
                                                            margin-left: 10px;
                                                        }
                                                    }

                                                    input[type="checkbox"]:checked ~ label {
                                                        color: ${colors.customColors.blackColor1};
                                                        transition: all 0.5s ease;

                                                        .check_box {
                                                            border: 1px solid ${colors.customColors.blackColor1};
                                                            transition: all 0.4s ease;

                                                            img {
                                                                opacity: 1;
                                                                transition: all 0.4s ease;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .reciver_btn {
                    position: relative;
                    width: 100%;
                    padding: 13px 25px;
                    display: flex;
                    justify-content: flex-end;
                    border-top: 1px solid ${colors.customColors.borderColor};
                    margin-top: auto;

                    button {
                        position: relative;
                        width: 150px;
                        height: 35px;
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                        color: ${colors.customColors.whiteColor};
                        border: none;
                        font-weight: 500;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        i {
                            margin-right: 6px;
                        }

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }

                        &:first-of-type {
                            margin-right: 30px;
                            color: ${colors.customColors.blackColor2};
                            background: ${colors.customColors.whiteColor};
                            border: 2px solid ${colors.customColors.borderColor};
                        }

                        &:disabled {
                            opacity: 0.4;
                            cursor: not-allowed;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }
    }
`;