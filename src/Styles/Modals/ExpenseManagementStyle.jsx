import styled from "@emotion/styled";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const AddGreneralExpenseWrapper = styled('div')`
    .modal_box .modal_body .body_inner .item_name_box {
        .item_name_control {
            position: relative;
            input { padding-right: 145px; }
        }

        button {
            cursor: pointer;
            font-family: inherit;
            &:focus-visible { outline: 2px solid #168fff; outline-offset: 2px; }
        }

        .view_stock_btn {
            position: absolute;
            right: 4px;
            top: 6px;
            height: 31px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 0 10px;
            border: 1px solid #73c5ff;
            border-radius: 6px;
            background: linear-gradient(120deg, #f3fbff, #deefff);
            box-shadow: inset 0 0 0 2px #ffffff;
            color: #008cff;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            .fa-cubes { font-size: 18px; color: #1460ff; }
            &:hover { background: #dcefff; }
        }

        .stock_dropdown {
            position: absolute;
            top: calc(100% + 6px);
            right: 0;
            width: 100%;
            z-index: 30;
            padding: 16px;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 10px;
            background: ${colors.customColors.whiteColor};
            box-shadow: 0 6px 20px ${colors.boxShadowColors.shadowColor1};
        }

        .stock_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 12px;
            h5 { margin: 0; font-size: 15px; font-weight: 600; color: ${colors.customColors.blackColor1}; }
            button {
                border: 0;
                background: transparent;
                color: ${colors.customColors.blackColor1};
                font-size: 18px;
                padding: 3px;
                line-height: 1;
            }
        }

        .stock_search {
            display: flex;
            align-items: center;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 7px;
            padding-left: 12px;
            margin-bottom: 10px;
            color: ${colors.customColors.blackColor3};
            &:focus-within { border-color: #168fff; }
            input { margin: 0; background: transparent; padding: 8px 10px; min-width: 0; }
        }

        .stock_list {
            margin: 0;
            padding: 0;
            list-style: none;
            max-height: min(300px, 40vh);
            overflow-y: auto;
            overscroll-behavior: contain;
            scrollbar-width: none;
            -ms-overflow-style: none;
            &::-webkit-scrollbar { display: none; }
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                min-height: 38px;
                padding: 3px 12px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 8px;
                background: ${colors.customColors.lightBackground3};
                margin-bottom: 2px;
            }
            .stock_item_name { font-size: 13px; color: ${colors.customColors.blackColor1}; }
            .stock_quantity {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                flex-shrink: 0;
                line-height: 1.2;
                strong { font-size: 14px; font-weight: 600; color: #008cff; }
                small { font-size: 11px; color: ${colors.customColors.blackColor3}; }
            }
            .stock_empty { justify-content: center; font-size: 12px; color: ${colors.customColors.blackColor3}; }
        }
    }

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

                .upload_box {
                    position: relative;
                    width: 100%;
                    margin-bottom: 10px;

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

                    .document_upload_sec {
                        position: relative;
                        width: 100%;
                        height: 130px;
                        border: 1px dashed ${colors.customColors.borderColor1};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        padding: 15px;
                        align-items: center;
                        justify-content: center;
                        margin-top: 5px;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        &.drag_over {
                            border: 1px solid ${colors.customColors.borderColor1};
                            background: ${colors.customColors.lightBackground3};
                            transition: all 0.5s ease;
                        }
                        
                        &.file_selected {
                            border: none;
                            height: 150px;
                            background: ${colors.customColors.lightBackground3};
                            transition: all 0.5s ease;
                        }

                        label {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            i {
                                position: relative;
                                font-size: 25px;
                                color: ${colors.themeColor};
                            }

                            p {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor1};
                                font-weight: 400;
                                margin-top: 8px;

                                span {
                                    color: ${colors.themeColor};
                                    margin-left: 5px;
                                }
                            }

                            b {
                                position: relative; 
                                font-size: 11px;
                                color: ${colors.customColors.blackColor2};
                                font-weight: 400;
                                margin-top: 2px;
                            }
                        }

                        .file_preview {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;

                            iframe {
                                position: relative;
                                width: calc(100% - 60px);
                                height: 100%;
                                border-radius: 4px;
                            }

                            img {
                                position: relative;
                                width: calc(100% - 60px);
                                height: 100%;
                                border-radius: 4px;
                                border: 1px solid ${colors.customColors.borderColor};
                            }

                            a {
                                position: relative;
                                margin-left: 15px;
                                width: 45px;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                background: ${colors.customColors.redColor};
                                color: ${colors.customColors.whiteColor};
                                font-size: 14px;
                                border-radius: 4px;
                                cursor: pointer;
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

export const AddEventExpenseWrapper = styled('div')`
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
