import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const AddBookWrapper = styled('div')`
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
                    margin-bottom: 8px;

                    &.half {
                        width: 48.5%;
                    }

                    &.full {
                        width: 100%;
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

                    .book_img_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: center;

                        .img_box {
                            position: relative;
                            width: 115px;
                            height: 140px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            padding: 10px;
                            border: 1px dashed ${colors.customColors.borderColor1};
                            border-radius: 6px;
                            cursor: pointer;
                            overflow: hidden;

                            img {
                                position: absolute;
                                inset: 0;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }

                            i {
                                color: ${colors.customColors.blackColor3};
                                font-size: 21px;
                            }

                            p {
                                position: relative;
                                color: ${colors.customColors.blackColor2};
                                font-size: 10px;
                                margin-top: 8px;
                                text-align: center;

                                a {
                                    color: ${colors.customColors.redColor};
                                    margin-left: 2px;
                                    text-decoration: none;
                                }
                            }

                            .remove_btn {
                                position: absolute;
                                top: 0;
                                right: 0;
                                width: 22px;
                                height: 22px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: none;
                                background: ${colors.customColors.redColor};
                                cursor: pointer;
                                border-radius: 5px;
                                z-index: 2;

                                i {
                                    font-size: 12px;
                                    color: ${colors.customColors.whiteColor};
                                }
                            }

                            &.added {
                                border: 2px solid ${colors.customColors.borderColor};
                                background: ${colors.customColors.lightBackground3};
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
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
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

export const MemberDetailsWrapper = styled('div')`
    position: fixed;
    top: 0;
    right: -100%;
    width: 725px;
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

        .member_detalis_sec {
            position: relative;
            width: calc(100% - 40px);
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            gap: 14px;
            margin: 20px;
            padding: 16px;
            background: ${colors.customColors.blueColorLight};
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 10px;

            .img_sec {
                position: relative;
                width: 64px;
                height: 64px;
                flex: 0 0 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3px;
                background: ${colors.customColors.whiteColor};
                border: 1px solid ${colors.customColors.borderColor1};
                border-radius: 50%;
                overflow: hidden;

                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                h6 {
                    font-size: 18px;
                    font-weight: 600;
                    color: ${colors.themeColor};
                    text-transform: uppercase;
                }
            }

            .details_content {
                position: relative;
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 0;

                .member_name {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;

                    span {
                        padding: 3px 9px;
                        border-radius: 20px;
                        background: ${colors.themeColor};
                        color: ${colors.customColors.whiteColor};
                        font-size: 10px;
                        font-weight: 600;
                        line-height: 1.4;
                    }
                }

                h5 {
                    position: relative;
                    font-size: 14px;
                    font-weight: 600;
                    color: ${colors.customColors.blackColor1};
                }

                p {
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 500;
                    margin-top: 3px;
                }
            }

            .member_action_btns {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;
                margin-top: 2px;
                padding-top: 12px;
                border-top: 1px solid ${colors.customColors.borderColor};
            }

            .generate_card_btn,
            .issue_book_btn {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 7px;
                flex-shrink: 0;
                padding: 9px 14px;
                border: none;
                border-radius: 6px;
                background: ${colors.customColors.whiteColor};
                color: ${colors.customColors.whiteColor};
                font-size: 11px;
                font-weight: 500;
                cursor: pointer;
                transition: border-radius 0.3s ease;

                &:hover {
                    border-radius: 20px;
                }
            }

            .issue_book_btn {
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
            }

            .generate_card_btn {
                border: 1px solid ${colors.customColors.blueColor1};
                color: ${colors.customColors.blueColor2};
            }
        }

        .table_section {
            position: relative;
            width: 100%;
            padding: 0 20px;

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
                                width: 41%;
                            }

                            &:nth-of-type(2) {
                                width: 22%;
                                justify-content: center;
                            }

                            &:nth-of-type(3) {
                                width: 22%;
                                justify-content: center;
                            }

                            &:nth-of-type(4) {
                                width: 15%;
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

                                .date_time {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    gap: 5px;
                                    white-space: nowrap;

                                    span {
                                        padding: 3px 9px;
                                        border-radius: 20px;
                                        font-size: 10px;
                                        font-weight: 600;
                                        line-height: 1.4;
                                    }

                                    p {
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor2};
                                    }

                                    &.issued span {
                                        color: ${colors.customColors.greenColor1};
                                        background: ${colors.customColors.greenColorLight};
                                    }

                                    &.returned span {
                                        color: ${colors.customColors.orangeColor};
                                        background: ${colors.customColors.redColorLight1};
                                    }
                                }

                                &:nth-of-type(1) {
                                    width: 41%;
                                    display: flex;

                                    .left_table_sec {
                                        position: relative;
                                        width: 30px;
                                        height: 30px;
                                        border-radius: 6px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        background: ${colors.customColors.blueColor2};
                                        overflow: hidden;

                                        img {
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                        }

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
                                        padding-left: 7px;
                                        display: flex;
                                        flex-direction: column;

                                        h6 {
                                            font-size: 13px;
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor};
                                        }

                                        p {
                                            font-size: 10px;
                                            font-weight: 400;
                                            color: ${colors.customColors.blackColor2};
                                            align-items: center;
                                            display: flex;

                                            i {
                                                margin: 0 5px;
                                                font-size: 4px;
                                                color: ${colors.customColors.blackColor3};
                                            }

                                            span {
                                                color: ${colors.customColors.blackColor1};
                                            }
                                        }
                                    }
                                }

                                &:nth-of-type(2) {
                                    width: 22%;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 12px;
                                }

                                &:nth-of-type(3) {
                                    width: 22%;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 12px;
                                }

                                &:nth-of-type(4) {
                                    width: 15%;
                                    align-items: center;
                                    justify-content: center;

                                    a {
                                        position: relative;
                                        text-decoration: none;
                                        cursor: pointer;
                                        font-size: 13px;

                                        &.edit_btn {
                                            color: ${colors.customColors.greenColor};
                                        }
                                    }

                                    .returned_status {
                                        width: 24px;
                                        height: 24px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        border-radius: 50%;
                                        background: ${colors.customColors.greenColorLight};
                                        color: ${colors.customColors.greenColor1};
                                        font-size: 12px;
                                        cursor: default;
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

export const NewLibraryMemberWrapper = styled('div')`
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
                                display: block;
                                width: calc(100% - 25px);
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
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
                                            overflow: hidden;

                                            img {
                                                width: 100%;
                                                height: 100%;
                                                object-fit: cover;
                                            }
                                            
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

export const BookIssueWrapper = styled('div')`
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

        .dropdown_btn.locked {
            cursor: not-allowed;
            background: ${colors.customColors.lightBackground};

            i {
                cursor: not-allowed;
            }
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
                                white-space: nowrap;
                                overflow: hidden;
                                display: block;
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
                                        pointer-events: none;
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
                                            overflow: hidden;

                                            img {
                                                width: 100%;
                                                height: 100%;
                                                object-fit: cover;
                                            }
                                            
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
                                                position: relative;
                                                width: 100%;
                                                display: block;
                                                font-size: 9px;
                                                white-space: nowrap;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
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

                .date_box {
                    position: relative;
                    width: 48.5%;
                    margin-bottom: 10px;

                    > span {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};

                        p {
                            color: ${colors.customColors.redColor};
                            margin-left: 2px;
                        }
                    }

                    .dropdown {
                        position: relative;
                        width: 100%;
                        margin-top: 3px;
                    }

                    .date_btn {
                        width: 100%;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        border-radius: 5px;
                        padding: 5px 15px;
                        cursor: pointer;
                        background: ${colors.customColors.lightBackground3};

                        p {
                            width: calc(100% - 25px);
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        i {
                            width: 25px;
                            display: flex;
                            justify-content: flex-end;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    .calendar_dropdown,
                    .time_dropdown {
                        position: absolute;
                        bottom: 100%;
                        right: 0;
                        width: 100%;
                        min-width: 245px;
                        z-index: 20;
                    }

                    .validation_error {
                        margin-top: 5px;
                        font-size: 10px;
                        line-height: 1.4;
                        color: ${colors.customColors.redColor};
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

export const BookReturnWrapper = styled('div')`
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
    padding-left: 265px;
    background: ${colors.boxShadowColors.shadowColor1};

    @media (max-width: 991px) {
        padding: 14px 20px;
    }

    @media (max-width: 575px) {
        padding: 12px;
    }

    .modal_box {
        position: relative;
        width: 550px;
        max-width: calc(100% - 32px);
        overflow-y: auto;
        max-height: 100%;
        background: ${colors.customColors.whiteColor};
        box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
        border-radius: 10px;
        display: flex;
        flex-direction: column;

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

                button {
                    border: none;
                    background: transparent;
                    padding: 5px;
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
            padding: 14px 20px;
            display: flex;
            flex-direction: column;

            .body_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;

                button {
                    font-family: inherit;

                    &:focus-visible {
                        outline: 2px solid ${colors.themeColor};
                        outline-offset: 3px;
                    }
                }

                .details_content {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 4px;

                    h5 {
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 1.5;
                        color: ${colors.customColors.blackColor1};
                        overflow-wrap: anywhere;
                    }

                    p {
                        font-size: 12px;
                        line-height: 1.5;
                        color: ${colors.customColors.blackColor2};
                        overflow-wrap: anywhere;

                        strong {
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }

                .member_detalis_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    padding: 12px;
                    background: ${colors.customColors.blueColorLight};
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 12px;

                    .img_sec {
                        width: 52px;
                        height: 52px;
                        flex: 0 0 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 3px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor1};
                        border-radius: 50%;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }

                        h6 {
                            font-size: 18px;
                            font-weight: 600;
                            color: ${colors.themeColor};
                        }
                    }

                    .member_name {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;

                        span {
                            padding: 3px 9px;
                            border-radius: 20px;
                            background: ${colors.themeColor};
                            color: ${colors.customColors.whiteColor};
                            font-size: 10px;
                            font-weight: 600;
                        }
                    }
                }

                .book_details_sec {
                    position: relative;
                    margin-top: 12px;
                    width: 100%;
                    padding: 12px;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 12px;

                    .book_content {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                    }

                    .book_img {
                        flex: 0 0 60px;
                        width: 60px;
                        height: 78px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        border-radius: 5px 9px 9px 5px;
                        background: ${colors.customColors.blueColorLight};
                        border: 1px solid ${colors.customColors.borderColor};
                        box-shadow: 3px 4px 8px ${colors.boxShadowColors.shadowColor1};

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }

                        > i {
                            font-size: 28px;
                            color: ${colors.themeColor};
                        }
                    }

                    .book_id {
                        padding: 4px 8px;
                        border-radius: 5px;
                        background: ${colors.customColors.lightBackground3};
                        color: ${colors.customColors.blackColor2};
                        font-size: 10px;
                        font-weight: 500;
                        letter-spacing: 0.4px;
                        overflow-wrap: anywhere;
                    }

                    .author_name i {
                        margin-right: 6px;
                        font-size: 10px;
                        color: ${colors.themeColor};
                    }
                }

                .date_box {
                    position: relative;
                    margin-top: 12px;
                    width: 48.5%;

                    > span {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};

                        p {
                            color: ${colors.customColors.redColor};
                            margin-left: 2px;
                        }
                    }

                    .dropdown {
                        position: relative;
                        width: 100%;
                        margin-top: 3px;
                    }

                    .date_btn {
                        width: 100%;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        border-radius: 5px;
                        padding: 5px 15px;
                        background: ${colors.customColors.lightBackground3};
                        cursor: pointer;

                        p {
                            width: calc(100% - 25px);
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        i {
                            width: 25px;
                            display: flex;
                            justify-content: flex-end;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                        }
                    }

                    .calendar_dropdown,
                    .time_dropdown {
                        position: absolute;
                        bottom: 100%;
                        right: 0;
                        width: 100%;
                        min-width: 245px;
                        z-index: 20;
                    }

                }

                .validation_error {
                    position: relative;
                    margin-top: 3px;
                    margin-bottom: 5px;
                    font-size: 11px;
                    color: ${colors.customColors.redColor};
                }

                @media (max-width: 575px) {
                    .date_box.halfwidth {
                        width: 100%;
                    }

                    .date_box .calendar_dropdown,
                    .date_box .time_dropdown {
                        min-width: 0;
                    }

                    .member_detalis_sec, .book_details_sec {
                        padding: 12px;
                    }

                    .member_detalis_sec {
                        gap: 10px;
                    }

                    .book_details_sec .book_content {
                        gap: 12px;
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
