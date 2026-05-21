import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ButtonLoaderWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center !important;

    svg {
        position: relative;
        width: 50px;
        height: 20px;

        rect {
            fill: ${colors.customColors.whiteColor};
        }
    }
`;

export const SkeletonBoxWrapper = styled('div')`
    position: relative;
    border-radius: 4px;
    background: ${colors.customColors.lightBackground2};
    animation: pulse 1.4s infinite ease-in-out;

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
    }
`;

export const CircleLoaderWrapper = styled('div')`
    position: relative;
    border: 2px solid ${colors.customColors.greenColor};
    border-right: none;
    border-bottom: none;
    border-radius: 50%;
    animation: rotate 1s linear infinite;

    @keyframes rotate {
        from { transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

export const PaginationWrapper = styled('div')`
    position: relative;
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        position: relative;
        width: 100px;
        height: 30px;
        background: ${colors.themeColor};
        color: ${colors.customColors.whiteColor};
        font-size: 12px;
        font-weight: 500;
        border: none;
        cursor: pointer;
        transition: all 0.5s ease;
        box-shadow: 3px 4px 8px ${colors.boxShadowColors.shadowColor1},
                    -2px -2px 6px ${colors.boxShadowColors.shadowColor2};

        &:hover {
            border-radius: 25px;
            transition: all 0.5s ease;
        }

        &.disable {
            pointer-events: none;
            box-shadow: none;
            background: ${colors.customColors.whiteColor2};
        }

        i {
            position: relative;
            font-size: 11px;
        }

        &.prev_btn i {
            margin-right: 5px;
        }

        &.next_btn i {
            margin-left: 5px;
        }
    }

    ul {
        position: relative;
        margin: 0 4px;
        display: flex;
        align-items: center;

        li {
            position: relative;
            list-style: none;
            margin: 0 2px;
            width: 30px;
            height: 30px;
            background: ${colors.customColors.whiteColor};
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.customColors.blackColor2};
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            box-shadow: 3px 4px 8px ${colors.boxShadowColors.shadowColor1},
                        -2px -2px 6px ${colors.boxShadowColors.shadowColor2};
            transition: all 0.5s ease;

            &:hover {
                background: ${colors.customColors.blueColor1};
                color: ${colors.customColors.whiteColor};
                transition: all 0.5s ease;
            }

            &.active {
                background: ${colors.themeColor};
                color: ${colors.customColors.whiteColor};
            }
        }

        span {
            position: relative;
            width: 25px;
            height: 35px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            font-size: 19px;
            color: ${colors.customColors.blackColor3};
        }
    }
`;

export const CreateAcademicLabelWrapper = styled('div')`
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

                a {
                    position: relative;
                    margin-top: 20px;
                    font-size: 12px;
                    color: ${colors.customColors.redColor};

                    span {
                        color: ${colors.customColors.redColor};
                        margin-right: 5px;
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

export const CreateClassWrapper = styled('div')`
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

export const AddSubjectClassWiseWrapper = styled('div')`
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
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
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

export const AttendenceWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 750px;
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

        .modal_item_sec {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            .item_btns {
                position: relative;
                width: 100%;
                display: flex;
                padding: 20px;

                .filter_date_sec {
                    position: relative;
                    width: 250px;
                    height: 35px;

                    .filter_btn {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        padding: 5px 12px;
                        cursor: pointer;

                        p {
                            position: relative;
                            margin-left: 15px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        i {
                            position: relative;
                            color: ${colors.customColors.blueColor1};
                            font-size: 13px;
                        }
                    }

                    .dropdown {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 300px;
                        z-index: 5;
                    }
                }

                button {
                    position: relative;
                    margin-left: auto;
                    padding: 5px 15px;
                    font-size: 12px;
                    font-weight: 500;
                    color: ${colors.customColors.whiteColor};
                    background: ${colors.customColors.blueColor1};
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                }
            }

            .item_box_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 0 10px;

                .item_box {
                    position: relative;
                    width: 33.33%;
                    height: 72px;
                    padding: 0 10px;
                    display: flex;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 10px;
                        left: 20px;
                        width: 3px;
                        height: calc(100% - 20px);
                        background: ${colors.customColors.blueColor1};
                        border-radius: 25px;
                    }

                    &:nth-of-type(2) {
                        &::before {
                            background: ${colors.customColors.greenColor};
                        }
                    }

                    &:nth-of-type(3) {
                        &::before {
                            background: ${colors.customColors.redColor};
                        }
                    }

                    .box_inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border: 1px solid ${colors.customColors.borderColor};
                        padding: 10px;
                        padding-left: 30px;
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;

                        p {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                        }

                        span {
                            position: relative;
                            margin-top: 3px;
                            font-size: 27px;
                            line-height: 1.2;
                            font-weight: 600;
                            font-style: italic;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }

            }
        }

        .table_sec {
            position: relative;
            width: 100%;
            height: calc(100% - 300px);
            margin-top: 20px;
            padding: 0 20px;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }

            .sec_inner {
                position: relative;
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
                                width: 50%;
                            }

                            &:nth-of-type(2) {
                                width: 20%;
                                justify-content: center;
                            }

                            &:nth-of-type(3) {
                                width: 30%;
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
                        overflow: hidden;

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
                                    width: 50%;
                                    display: flex;

                                    .left_table_sec {
                                        position: relative;
                                        width: 30px;
                                        height: 30px;
                                        border-radius: 6px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        border: 1px solid ${colors.customColors.borderColor1};

                                        h5 {
                                            position: relative;
                                            font-size: 14px;
                                            font-weight: 500;
                                            color: ${colors.customColors.blackColor2};
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
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor1};
                                        }

                                        p {
                                            font-size: 12px;
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor2};
                                        }
                                    }
                                }

                                &:nth-of-type(2) {
                                    width: 20%;
                                    align-items: center;
                                    justify-content: center;
                                }

                                &:nth-of-type(3) {
                                    width: 30%;
                                    align-items: center;
                                    justify-content: center;

                                    .toggle_bar {
                                        position: relative;
                                        width: 40px;
                                        display: flex;
                                        justify-content: flex-start;
                                        margin: 0 15px;

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
                                        font-size: 13px;
                                        color: ${colors.customColors.blackColor};
                                        font-weight: 500;
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

                &:first-of-type {
                    background: ${colors.customColors.lightBackground3};
                    color: ${colors.customColors.blackColor1};
                }

                &:last-of-type {
                    background: ${colors.customColors.blueColor1};
                    color: ${colors.customColors.whiteColor};
                    margin-left: 20px;
                }
            }
        }
    }
`;

export const SuccessWrapper = styled('div')`
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
        background: rgb(249, 249, 249);
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

        .modal_body {
            position: relative;
            width: 100%;
            padding: 11px 30px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .image_box {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    img {
                        position: relative;
                        width: 125px;
                        height: auto;
                        object-fit: contain;
                    }
                }

                p {
                    position: relative;
                    margin-bottom: 5px;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                    text-align: center;
                }
            }
        }

        .modal_btn {
            position: relative;
            width: 100%;
            padding: 13px 20px;
            display: flex;
            justify-content: center;

            button {
                position: relative;
                width: 130px;
                height: 35px;
                font-size: 13px;
                font-weight: 500;
                cursor: pointer;
                border-radius: 6px;
                overflow: hidden;
                border: none;
                background: ${colors.customColors.blueColor1};
                color: ${colors.customColors.whiteColor};
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