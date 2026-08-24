import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const SelectFeesStructureTypeWrapper = styled('div')`
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
        width: 650px;
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
                    width: 33.33%;
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

export const AddNewFeesTypeWrapper = styled('div')`
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
        width: 500px;
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

                .item_box {
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

                        a {
                            position: relative;
                            font-size: 9px;
                            color: ${colors.customColors.blackColor2};
                            margin-left: 2px;
                            text-decoration: none;
                        }
                    }

                    .box_content {
                        position: relative;
                        width: 100%;
                        min-height: 80px;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: flex-start;
                        margin-top: 3px;
                        padding: 7px;
                        background: ${colors.customColors.lightBackground3};
                        border-radius: 5px;

                        li {
                            position: relative;
                            width: max-content;
                            display: flex;
                            align-items: center;
                            list-style: none;
                            padding: 5px 5px 5px 10px;
                            border-radius: 4px;
                            background: ${colors.customColors.blueColor1};
                            margin: 3px;

                            p {
                                position: relative;
                                font-size: 11px;
                                color: ${colors.customColors.whiteColor};
                            }

                            span {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.whiteColor};
                                margin-left: 6px;
                                cursor: pointer;
                            }
                        }

                        input {
                            position: relative;
                            margin: 5px;
                            width: max-content;
                            border: none;
                            outline: none;
                            background: transparent;
                            padding: 0 5px;
                            font-size: 11px;

                            &.active {
                                height: 23px;
                            }
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
            justify-content: flex-end;
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
                background: ${colors.customColors.blueColor1};
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

export const AddPaymentAmoutDateWrapper = styled('div')`
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
        width: 400px;
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

                .date_box_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 16px;

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

                    .date_box {
                        position: relative;
                        width: 100%;
                        height: 37px;
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

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 15px;

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

                    .input_sec {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        border-radius: 5px;
                        margin-top: 3px;
                        display: flex;
                        align-items: center;
                        background: ${colors.customColors.lightBackground3};

                        input {
                            width: calc(100% - 37px);
                            height: 100%;
                            font-size: 12px;
                            border-radius: 5px;
                            outline: none;
                            border: none;
                            padding: 5px 15px;
                            background: transparent;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};
                        }

                        .rupee {
                            position: relative;
                            width: 37px;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor2};

                            &::after {
                                position: absolute;
                                content: '';
                                top: 0;
                                right: 0;
                                height: 100%;
                                width: 1px;
                                background: ${colors.customColors.borderColor};
                            }
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
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};

            button {
                position: relative;
                width: 150px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: ${colors.customColors.blueColor1};
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

export const AddBankAccountWrapper = styled('div')`
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
        width: 500px;
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

                .input_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 8px;

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

                    input.no-spinner::-webkit-outer-spin-button,
                    input.no-spinner::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }

                    input.no-spinner[type=number] {
                        -moz-appearance: textfield;
                    }

                    .sec_box {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        border-radius: 5px;
                        padding: 5px 15px;
                        background: ${colors.customColors.lightBackground3};

                        p {
                            position: relative;
                            width: calc(100% - 25px);
                            font-size: 12px;
                            outline: none;
                            background: transparent;
                            padding: 0;
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

            p {
                position: relative;
                font-size: 12px;
                color: ${colors.customColors.blackColor1};
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
                background: ${colors.customColors.blueColor1};
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

export const MapAccountWrapper = styled('div')`
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
        width: 500px;
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
                        color: ${colors.customColors.blackColor2};
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

                                .search_sec {
                                    position: relative;
                                    height: 32px;
                                    padding: 5px 0;
                                    display: flex;
                                    border: 1px solid ${colors.customColors.borderColor};
                                    border-radius: 6px;
                                    margin-bottom: 6px;

                                    i {
                                        position: relative;
                                        width: 40px;
                                        height: 100%;
                                        font-size: 12px;
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
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                }

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

                                    .user_box {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        padding: 7px;
                                        cursor: pointer;
                                        border-bottom: 1px solid ${colors.customColors.borderColor};
                                        transition: all 0.5s ease;

                                        &:last-of-type {
                                            border-bottom: none;
                                        }

                                        .box_left {
                                            position: relative;
                                            width: 25px;
                                            height: 25px;
                                            border-radius: 5px;
                                            background: ${colors.customColors.blueColor1};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            
                                            h6 {
                                                font-size: 11px;
                                                color: ${colors.customColors.whiteColor};
                                                font-weight: 500;
                                            }
                                        }

                                        .box_right {
                                            position: relative;
                                            width: calc(100% - 25px);
                                            padding-left: 6px;
                                            display: flex;
                                            flex-direction: column;

                                            p {
                                                font-size: 11px;
                                                color: ${colors.customColors.blackColor1};
                                                line-height: 1;
                                                font-weight: 500;
                                            }

                                            span {
                                                font-size: 9px;
                                                color: ${colors.customColors.blackColor2};
                                                margin-top: 2px;
                                            }
                                        }

                                        &:hover {
                                            background: ${colors.customColors.lightBackground};
                                            transition: all 0.5s ease;
                                        }

                                        &.active {
                                            background: ${colors.customColors.lightBackground};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .multi_select_box {
                    position: relative;
                    flex-direction: column;
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

                    .select_btn {
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

                                        &.disabled {
                                            opacity: 0.45;
                                            cursor: not-allowed;
                                            background: #f5f5f5;
                                            pointer-events: none;

                                            p {
                                                color: #999;
                                            }

                                            span {
                                                border-color: #d5d5d5;
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

                .box_content {
                    position: relative;
                    width: 100%;
                    min-height: 70px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    margin-top: 3px;
                    padding: 7px;
                    background: ${colors.customColors.lightBackground3};
                    border-radius: 5px;

                    li {
                        position: relative;
                        width: max-content;
                        display: flex;
                        align-items: center;
                        list-style: none;
                        padding: 5px 5px 5px 10px;
                        border-radius: 25px;
                        background: ${colors.customColors.blueColorLight};
                        border: 1px solid ${colors.customColors.blueColor1};
                        margin: 3px;

                        p {
                            position: relative;
                            font-size: 11px;
                            color: ${colors.customColors.blueColor1};
                        }

                        span {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blueColor1};
                            margin-left: 6px;
                            cursor: pointer;
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

export const FeeCollectWrapper = styled('div')`
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

        .modal_content_sec {
            position: relative;
            width: 100%;
            height: calc(100% - 124px);
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .installment_box_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 10px;
                flex-wrap: wrap;

                .installment_box {
                    position: relative;
                    width: 50%;
                    max-width: 302.75px;
                    max-height: 135px;
                    padding: 10px;

                    .box_inner {
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

                        .top_part {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            .part_content {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                padding-bottom: 8px;
                                border-bottom: 1px solid ${colors.customColors.borderColor};
                                
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
                                    padding-left: 12px;
                                    font-size: 12px;
                                    font-style: italic;
                                    font-weight: 500;
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

                                    &.paid {
                                        color: ${colors.customColors.greenColor};
                                        background: ${colors.customColors.greenColorLight};
                                    }

                                    &.unpaid {
                                        color: ${colors.customColors.redColor};
                                        background: ${colors.customColors.yellowColorLight};
                                    }
                                    &.overdue {
                                        color: ${colors.customColors.whiteColor};
                                        background: ${colors.customColors.redColor};
                                    }
                                    &.partially_paid {
                                        color: ${colors.customColors.blueColor1};
                                        background: ${colors.customColors.blueColorLight};
                                    }
                                }
                            }

                            .amount_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                margin-top: 8px;

                                .amt_box {
                                    position: relative;
                                    width: 50%;
                                    display: flex;
                                    flex-direction: column;
                                    /* align-items: center;
                                    justify-content: center; */

                                    p {
                                        position: relative;
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor1};
                                        font-weight: 400;
                                    }

                                    span {
                                        position: relative;
                                        margin-top: 3px;
                                        font-size: 12px;
                                        line-height: 1;
                                        font-weight: 500;
                                        
                                        &.paid {
                                            color: ${colors.customColors.greenColor1};
                                        }
                                        &.due {
                                            color: ${colors.customColors.redColor};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .installment_type_sec {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                /* margin-top: 10px; */

                .type_box {
                    position: relative;
                    width: 48%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 6px;
                    padding: 10px;

                    h5 {
                        position: relative;
                        font-size: 13px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        line-height: 1;
                    }

                    .box_content {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-top: 10px;

                        .content {
                            position: relative;
                            width: 50%;
                            display: flex;
                            align-items: center;

                            input[type="radio"] {
                                display: none;
                            }

                            label {
                                position: relative;
                                width: 100%;
                                cursor: pointer;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                transition: all 0.5s ease;

                                span {
                                    position: relative;
                                    width: 16px;
                                    height: 16px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 8px;
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

                                p {
                                    position: relative;
                                    width: calc(100% - 16px);
                                    padding-left: 10px;
                                    transition: all 0.5s ease;
                                }
                            }

                            input[type="radio"]:checked ~ label {

                                span {
                                    background: ${colors.customColors.blueColor2};
                                    border: 2px solid ${colors.customColors.blueColor2};
                                    transition: all 0.5s;

                                    i {
                                        opacity: 1;
                                        color: ${colors.customColors.whiteColor};
                                        transition: all 0.4 ease;
                                    }
                                }

                                p {
                                    color: ${colors.customColors.blueColor2};
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                }

                .amount_box {
                    position: relative;
                    width: 48%;
                    display: flex;
                    align-items: center;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 6px;
                    padding: 12px 10px;

                    .amount {
                        position: relative;
                        width: 40%;
                        display: flex;
                        flex-direction: column;

                        &:last-of-type {
                            width: 60%;
                            padding-left: 10px;
                        
                            &::before {
                                content: '';
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 1px;
                                height: 100%;
                                background: linear-gradient(to bottom, #fff, #b1b1b1, #fff);
                            }
                        }

                        p {
                            position: relative;
                            font-size: 11px;
                            font-weight: 400;
                            color: ${colors.customColors.blackColor1};
                            line-height: 1;

                            span {
                                font-size: 10px;
                                color: ${colors.customColors.blackColor2};
                                margin-left: 5px;
                            }
                        }

                        h6 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 1;
                            margin-top: 5px;
                            color: ${colors.customColors.redColor};
                        }

                        &:first-of-type {

                            h6 {
                                color: ${colors.customColors.blackColor};
                            }
                        }
                    }
                }
            }

            .payment_type_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 20px;

                h4 {
                    position: relative;
                    width: 100%;
                    display: flex;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                    line-height: 1;
                    padding: 0 20px;
                }

                .type_sec_content {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 5px;
                    padding: 0 10px;

                    .content_box {
                        position: relative;
                        width: 33.33%;
                        padding: 10px;

                        input[type="radio"] {
                            display: none;
                        }

                        label {
                            position: relative;
                            width: 100%;
                            padding: 10px 20px;
                            padding-left: 10px;
                            cursor: pointer;
                            border-radius: 6px;
                            border: 1px solid ${colors.customColors.borderColor};
                            line-height: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.5s ease;

                            

                            p {
                                position: relative;
                                font-weight: 500;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                                margin: 6px 0;
                            }

                            a {
                                position: relative;
                                width: 30px;
                                height: 30px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 5px;
                                font-size: 14px;
                                color: ${colors.customColors.blueColor1};
                                background: ${colors.customColors.blueColorLight};
                                text-decoration: none;
                            }

                            span {
                                font-size: 10px;
                                color: ${colors.customColors.blackColor2};
                                font-weight: 400;
                                transition: all 0.5s ease;
                            }
                        }

                        input[type="radio"]:checked ~ label {
                            border: 1px solid ${colors.customColors.blueColor1};
                            background: ${colors.customColors.blueColorLight};
                            transition: all 0.5s ease;

                            p {
                                color: ${colors.customColors.blueColor2};
                            }

                            span {
                                color: ${colors.customColors.blueColor1};
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }

            .payment_method_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin-top: 20px;

                h4 {
                    position: relative;
                    width: 100%;
                    display: flex;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                    line-height: 1;
                    padding: 0 20px;
                }

                .method_sec_content {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-top: 5px;
                    padding: 0 10px;

                    .method_box {
                        position: relative;
                        width: 33.33%;
                        padding: 10px;

                        input[type="radio"] {
                            display: none;
                        }

                        label {
                            position: relative;
                            width: 100%;
                            padding: 10px 20px;
                            padding-left: 10px;
                            cursor: pointer;
                            border-radius: 6px;
                            border: 1px solid ${colors.customColors.borderColor};
                            line-height: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            transition: all 0.5s ease;

                            

                            p {
                                position: relative;
                                font-weight: 500;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                                margin: 6px 0;
                            }

                            a {
                                position: relative;
                                width: 30px;
                                height: 30px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-radius: 5px;
                                font-size: 14px;
                                color: ${colors.customColors.blueColor1};
                                background: ${colors.customColors.blueColorLight};
                                text-decoration: none;
                            }
                        }

                        input[type="radio"]:checked ~ label {
                            border: 1px solid ${colors.customColors.blueColor1};
                            background: ${colors.customColors.blueColorLight};
                            transition: all 0.5s ease;

                            p {
                                color: ${colors.customColors.blueColor2};
                            }
                        }
                    }
                }
            }

            .content_input_sec {
                position: relative;
                width: 100%;
                display: flex;
                margin-top: 20px;
                padding: 0 20px;
                flex-wrap: wrap;
                justify-content: space-between;

                .select_box {
                    position: relative;
                    margin-bottom: 8px;

                    &.full {
                        width: 100%;
                    }

                    &.half {
                        width: 48%;
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

                                    .no_data {
                                        position: relative;
                                        width: 100%;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor3};
                                        padding: 3px 10px;
                                    }

                                    .user_box {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        padding: 7px;
                                        cursor: pointer;
                                        border-bottom: 1px solid ${colors.customColors.borderColor};
                                        transition: all 0.5s ease;

                                        &:last-of-type {
                                            border-bottom: none;
                                        }

                                        .box_left {
                                            position: relative;
                                            width: 25px;
                                            height: 25px;
                                            border-radius: 5px;
                                            background: ${colors.customColors.blueColor1};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            
                                            h6 {
                                                font-size: 11px;
                                                color: ${colors.customColors.whiteColor};
                                                font-weight: 500;
                                            }
                                        }

                                        .box_right {
                                            position: relative;
                                            width: calc(100% - 25px);
                                            padding-left: 6px;
                                            display: flex;
                                            flex-direction: column;

                                            p {
                                                font-size: 11px;
                                                color: ${colors.customColors.blackColor1};
                                                line-height: 1;
                                                font-weight: 500;
                                            }

                                            span {
                                                font-size: 9px;
                                                color: ${colors.customColors.blackColor2};
                                                margin-top: 1px;
                                            }
                                        }

                                        &:hover {
                                            background: ${colors.customColors.lightBackground};
                                            transition: all 0.5s ease;
                                        }

                                        &.active {
                                            background: ${colors.customColors.lightBackground};
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

                    .sec_box {
                        position: relative;
                        width: 100%; 

                        .time_btn {
                            position: relative;
                            width: 100%;
                            height: 37px;
                            display: flex;
                            align-items: center;
                            border-radius: 5px;
                            padding: 5px 15px;
                            background: ${colors.customColors.lightBackground3};

                            p {
                                position: relative;
                                width: calc(100% - 25px);
                                font-size: 12px;
                                outline: none;
                                background: transparent;
                                padding: 0;
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
                            bottom: 100%;
                            left: 0px;
                            width: 100%;
                            z-index: 5;
                        }
                    }
                }
            }

            .btn_sec {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                padding: 20px;

                button {
                    position: relative;
                    padding: 5px 15px;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 400;
                    border-radius: 5px;
                    cursor: pointer;

                    i {
                        margin-right: 6px;
                        font-size: 10px;
                    }

                    &:first-of-type {
                        color: ${colors.customColors.redColor};
                        background: ${colors.customColors.redColorLight};
                        border: 1px solid ${colors.customColors.redColor};
                    }
                    &:last-of-type {
                        color: ${colors.customColors.blueColor1};
                        background: ${colors.customColors.blueColorLight};
                        border: 1px solid ${colors.customColors.blueColor1};
                        margin-left: 25px;
                    }
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid ${colors.customColors.borderColor};
            margin-top: auto;

            button {
                position: relative;
                padding: 10px 30px;
                font-size: 12px;
                font-weight: 500;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                border: none;
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;

                &:disabled {
                    cursor: not-allowed;
                    opacity: 0.4;
                    transition: all 0.5s ease;
                }
            }
        }
    }
`;