import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const RolePermissionWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 20px;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }

        .add_btn {
            position: relative;
            margin-left: auto;

            a {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.5s ease;

                i {
                    margin-right: 8px;
                    font-size: 12px;
                }

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .role_levels {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        .box_items {
            position: relative;
            width: 100%;
            display: flex;
            padding: 5px;
            flex-wrap: wrap;

            .role_item {
                position: relative;
                width: 25%;
                max-width: 302.75px;
                padding: 10px;

                .item_inner {
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

                    .inner_top {
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
                            font-size: 16px;
                            color: ${colors.customColors.blueColor1};
                            text-decoration: none;
                            cursor: pointer;
                        }

                        h6 {
                            position: relative;
                            padding-left: 12px;
                            max-width: calc(100% - 85px);
                            font-size: 13.5px;
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
                            color: ${colors.customColors.orangeColor};
                            margin-top: 2px;
                            background: ${colors.customColors.yellowColorLight};
                            border-radius: 25px;
                            padding: 3px 15px;
                            margin-left: auto;
                            font-weight: 500;
                        }
                    }

                    .inner_btn {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 8px;
                        justify-content: flex-end;

                        button {
                            position: relative;
                            width: max-content;
                            height: 25px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: none;
                            padding: 0 12px;

                            &.edit {
                                background: ${colors.customColors.greenColorLight};
                                color: ${colors.customColors.greenColor};
                                font-size: 10px;
                                cursor: pointer;
                                font-weight: 500;
                                border-bottom-left-radius: 4px;
                                border-top-left-radius: 4px;

                                i {
                                    font-size: 11px;
                                    margin-right: 8px;
                                }
                            }

                            &.delete {
                                background: ${colors.customColors.redColorLight};
                                color:  ${colors.customColors.redColor};
                                font-size: 10px;
                                cursor: pointer;
                                border-top-right-radius: 4px;
                                border-bottom-right-radius: 4px;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const AddRolePermissionWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;

        .left_sec {
            position: relative;
            padding-right: 40px;
            display: flex;
            flex-direction: column;

            h2 {
                position: relative;
                font-size: 21px;
                font-weight: 600;
                color: ${colors.customColors.blackColor};
                font-family: "SUSE", sans-serif;
            }

            p {
                position: relative;
                margin-top: 5px;
                font-size: 14px;
                color: ${colors.customColors.blackColor2};
                font-weight: 400;
            }
        }

        .btn_sec {
            position: relative;
            margin-left: auto;
            display: flex;
            align-items: center;

            button {
                position: relative;
                height: 35px;
                display: flex;
                align-items: center;
                padding: 0 30px;
                border: none;
                font-size: 13px;
                font-weight: 500;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.5s ease;

                &:first-of-type {
                    background: ${colors.customColors.lightBackground2};
                    color: ${colors.customColors.blackColor1};
                    margin-right: 15px;
                }
                
                &:last-of-type {
                    background: ${colors.customColors.greenColor};
                    color: ${colors.customColors.whiteColor};

                    i {
                        margin-right: 5px;
                    }
                }

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .page_content_sec {
        position: relative;
        width: 100%;
        height: calc(100% - 74px);
        display: flex;

        .sec_inner {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            padding-bottom: 8px;

            .left_sec {
                position: relative;
                width: 290px;
                height: 100%;
                padding: 0 15px;
                display: flex;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .left_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .left_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        padding: 15px;
                        border-radius: 8px;
                        margin-top: 20px;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                                -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        .box_head {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;

                            .head_img {
                                position: relative;
                                width: 20px;
                                height: auto;
                                display: flex;

                                img {
                                    position: relative;
                                    width: 100%;
                                }
                            }

                            h5 {
                                position: relative;
                                width: calc(100% - 20px);
                                padding-left: 10px;
                                display: flex;
                                font-size: 15px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};
                            }
                        }

                        .box_items {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            margin-top: 15px;

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

                            .info_box {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: flex-start;
                                padding: 15px;
                                background: ${colors.customColors.blueColorLight};
                                border-radius: 8px;

                                a {
                                    position: relative;
                                    font-size: 14px;
                                    text-decoration: none;
                                    color: ${colors.customColors.blueColor1};
                                }

                                p {
                                    position: relative;
                                    width: calc(100% - 12px);
                                    padding-left: 8px;
                                    font-size: 11px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blueColor2};
                                }
                            }

                            .status_box {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;
                                padding: 10px;
                                background: ${colors.customColors.lightBackground3};
                                border-radius: 5px;

                                .status_left {
                                    position: relative;
                                    width: calc(100% - 40px);
                                    padding-right: 10px;
                                    display: flex;
                                    flex-direction: column;

                                    p {
                                        position: relative;
                                        font-size: 12px;
                                        color: ${colors.customColors.blackColor};
                                        font-weight: 500;
                                        line-height: 1;
                                    }

                                    span {
                                        position: relative;
                                        font-size: 10px;
                                        color: ${colors.customColors.blackColor2};
                                        margin-top: 5px;
                                        line-height: 1;
                                    }
                                }

                                .status_right {
                                    position: relative;
                                    width: 40px;
                                    display: flex;

                                    .toggle_bar {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        justify-content: flex-start;

                                        input[type="checkbox"] {
                                            display: none;
                                        }

                                        label {
                                            position: relative;
                                            width: 45px;
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
                                            background: ${colors.customColors.greenColor1};
                                            transition: all 0.5s ease;
                                        }

                                        input[type="checkbox"]:checked ~ label span {
                                            transform: translateX(19px);
                                            transition: all 0.5s ease;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .right_sec {
                position: relative;
                width: calc(100% - 290px);
                height: 100%;
                padding: 0 15px;
                display: flex;
                margin-top: 20px;

                .right_inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    border-radius: 8px;
                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                            -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                    .right_head {
                        position: relative;
                        width: 100%;
                        display: flex;
                        padding: 15px 20px;
                        border-bottom: 1px solid ${colors.customColors.borderColor};

                        .head_left_sec {
                            position: relative;
                            width: calc(100% - 160px);
                            display: flex;
                            flex-direction: column;

                            .top_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

                                .sec_img {
                                    position: relative;
                                    width: 20px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;

                                    img {
                                        position: relative;
                                        width: 100%;
                                    }
                                }

                                h5 {
                                    position: relative;
                                    margin-left: 8px;
                                    font-size: 14px;
                                    color: ${colors.customColors.blackColor1};
                                    font-weight: 500;
                                }
                            }

                            p {
                                position: relative;
                                width: 100%;
                                display: flex;
                                font-size: 11px;
                                color: ${colors.customColors.blackColor2};
                                margin-top: 5px;
                            }
                        }

                        .head_right_sec {
                            position: relative;
                            width: 160px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            a {
                                position: relative;
                                display: flex;
                                color: ${colors.customColors.blackColor3};
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 12px;
                                font-weight: 500;

                                &:first-of-type {
                                    color: ${colors.customColors.blueColor2};
                                }
                            }
                        }
                    }

                    .right_body_sec {
                        position: relative;
                        width: 100%;
                        height: calc(100vh - 66px);
                        display: flex;

                        .body_inner {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            padding: 10px 15px;
                            overflow-y: auto;
                            scrollbar-width: none;
                            -ms-overflow-style: none;

                            &::-webkit-scrollbar {
                                display: none;
                            }

                            .role_box {
                                position: relative;
                                margin: 10px 0;
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                border: 1px solid ${colors.customColors.borderColor};
                                border-radius: 8px;
                                overflow: hidden;
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

                                    .top_left {
                                        position: relative;
                                        display: flex;
                                        align-items: center;

                                        .role_icon {
                                            position: relative;
                                            width: 35px;
                                            height: 35px;
                                            border-radius: 5px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            background: ${colors.customColors.blueColorLight};

                                            i {
                                                font-size: 14px;
                                                color: ${colors.customColors.blueColor1};
                                            }
                                        }

                                        p {
                                            position: relative;
                                            font-size: 13px;
                                            color: ${colors.customColors.blackColor};
                                            font-weight: 500;
                                            margin-left: 8px;
                                        }
                                    }

                                    .top_right {
                                        position: relative;
                                        margin-left: auto;
                                        display: flex;
                                        align-items: center;

                                        .icon {
                                            position: relative;
                                            width: 35px;
                                            height: 35px;
                                            border-radius: 50%;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};
                                            margin-left: 20px;

                                            i {
                                                position: relative;
                                                font-size: 14px;
                                                color: ${colors.customColors.blackColor2};
                                                transition: all 0.3s ease;
                                            }
                                        }
                                    }

                                    &.active {
                                        background: ${colors.customColors.lightBackground1};

                                        .top_right {
                                            .icon i {
                                                transform: rotate(90deg);
                                                transition: all 0.3s ease;
                                            }
                                        }
                                    }
                                }

                                .bottom_part {
                                    position: relative;
                                    width: 100%;

                                    .bottom_inner {
                                        position: relative;
                                        width: 100%;
                                        padding: 15px;
                                        display: flex;
                                        flex-direction: column;

                                        .table_sec {
                                            position: relative;
                                            width: 100%;

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
                                                            width: 40%;
                                                        }
                                                        &:nth-of-type(2) {
                                                            width: 15%;
                                                            justify-content: center;
                                                        }
                                                        &:nth-of-type(3) {
                                                            width: 15%;
                                                            justify-content: center;
                                                        }
                                                        &:nth-of-type(4) {
                                                            width: 15%;
                                                            justify-content: center;
                                                        }
                                                        &:nth-of-type(5) {
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
                                                    overflow: hidden;

                                                    tr {
                                                        position: relative;
                                                        width: 100%;
                                                        min-height: 40px;
                                                        display: flex;

                                                        &:nth-of-type(even) {
                                                            background: ${colors.customColors.lightBackground};
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
                                                                width: 40%;
                                                                display: flex;
                                                                align-items: flex-start;
                                                            }

                                                            &:nth-of-type(2) {
                                                                width: 15%;
                                                                align-items: center;
                                                                justify-content: center;

                                                                li {
                                                                    position: relative;
                                                                    list-style: none;

                                                                    input[type="checkbox"] {
                                                                        display: none;
                                                                    }

                                                                    label {
                                                                        position: relative;
                                                                        cursor: pointer;
                                                                        line-height: 1;
                                                                        display: flex;
                                                                        align-items: center;

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
                                                                    }

                                                                    input[type="checkbox"]:checked ~ label {

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

                                                            &:nth-of-type(3) {
                                                                width: 15%;
                                                                align-items: center;
                                                                justify-content: center;

                                                                li {
                                                                    position: relative;
                                                                    list-style: none;

                                                                    input[type="checkbox"] {
                                                                        display: none;
                                                                    }

                                                                    label {
                                                                        position: relative;
                                                                        cursor: pointer;
                                                                        line-height: 1;
                                                                        display: flex;
                                                                        align-items: center;

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
                                                                    }

                                                                    input[type="checkbox"]:checked ~ label {

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

                                                            &:nth-of-type(4) {
                                                                width: 15%;
                                                                align-items: center;
                                                                justify-content: center;

                                                                li {
                                                                    position: relative;
                                                                    list-style: none;

                                                                    input[type="checkbox"] {
                                                                        display: none;
                                                                    }

                                                                    label {
                                                                        position: relative;
                                                                        cursor: pointer;
                                                                        line-height: 1;
                                                                        display: flex;
                                                                        align-items: center;

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
                                                                    }

                                                                    input[type="checkbox"]:checked ~ label {

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

                                                            &:nth-of-type(5) {
                                                                width: 15%;
                                                                align-items: center;
                                                                justify-content: center;

                                                                li {
                                                                    position: relative;
                                                                    list-style: none;

                                                                    input[type="checkbox"] {
                                                                        display: none;
                                                                    }

                                                                    label {
                                                                        position: relative;
                                                                        cursor: pointer;
                                                                        line-height: 1;
                                                                        display: flex;
                                                                        align-items: center;

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
                                                                    }

                                                                    input[type="checkbox"]:checked ~ label {

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
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ProfileSettingsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .heading_option_part {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;
        margin-top: 20px;

        .inner_part {
            position: relative;
            width: max-content;
            padding: 6px;
            background: ${colors.customColors.lightBackground};
            border-radius: 6px;
            display: flex;

            .part_box {
                position: relative;
                padding: 8px 20px;
                cursor: pointer;
                border-radius: 4px;
                text-decoration: none;
                
                &.active {
                    background: ${colors.customColors.blueColor1};
                }

                h6 {
                    position: relative;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                }
                
                &.active h6 {
                    color: ${colors.customColors.whiteColor};
                }
            }
        }
    }

    .page_contents {
        position: relative;
        width: 100%;
        margin-top: 20px;
    }
`;

export const StudentWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .wrapper_content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .content_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            &:last-of-type {
                margin-bottom: 0;
            }

            .box_top_sec {
                position: relative;
                width: 100%;
                display: flex;
                align-items: flex-end;
                padding: 0 15px;
                padding-bottom: 8px;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 15px;
                    width: calc(100% - 30px);
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor1} 20%, transparent 100%);
                }

                .box_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    h6 {
                        position: relative;
                        font-size: 15px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                    }
                    p {
                        position: relative;
                        font-size: 11px;
                        color: ${colors.customColors.blackColor2};
                    }
                }

                .add_btn {
                    position: relative;
                    margin-left: 20px;

                    button {
                        position: relative;
                        width: 200px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border: 1px solid ${colors.customColors.greenColor};
                        background: ${colors.customColors.greenColor};
                        color: ${colors.customColors.whiteColor};
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 500;
                        transition: all 0.3s ease;

                        i {
                            margin-right: 8px;
                            font-size: 12px;
                        }

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.3s ease;
                        }
                    }
                }
            }

            .box_bottom_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
                padding: 0 5px;

                .sec_item {
                    position: relative;
                    width: 25%;
                    max-width: 302.75px;
                    padding: 10px;

                    .item_inner {
                        position: relative;
                        width: 100%;
                        padding: 12px;
                        padding-left: 15px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-left: 4px solid ${colors.customColors.greenColor};
                        border-radius: 8px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                        .inner_top {
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
                                background: ${colors.customColors.greenColorLight};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                                color: ${colors.customColors.greenColor};
                                text-decoration: none;
                                cursor: pointer;
                            }

                            .inner_content {
                                position: relative;
                                width: calc(100% - 28px);
                                display: flex;
                                padding-left: 12px;

                                h6 {
                                    position: relative;
                                    max-width: calc(100% - 85px);
                                    font-size: 13.5px;
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
                                    color: ${colors.customColors.greenColor};
                                    margin-top: 2px;
                                    background: ${colors.customColors.greenColorLight};
                                    border-radius: 25px;
                                    padding: 3px 15px;
                                    margin-left: auto;
                                    font-weight: 500;
                                }
                            }
                        }

                        .inner_btn {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            margin-top: 8px;
                            justify-content: flex-end;

                            button {
                                position: relative;
                                width: max-content;
                                height: 25px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: none;
                                padding: 0 12px;

                                &.details {
                                    background: ${colors.customColors.blueColorLight};
                                    color: ${colors.customColors.blueColor2};
                                    font-size: 10px;
                                    cursor: pointer;
                                    font-weight: 500;
                                    border-bottom-left-radius: 4px;
                                    border-top-left-radius: 4px;

                                    &.not_removal {
                                        border-bottom-right-radius: 4px;
                                        border-top-right-radius: 4px;
                                    }
                                }

                                &.delete {
                                    background: ${colors.customColors.redColorLight};
                                    color:  ${colors.customColors.redColor};
                                    font-size: 10px;
                                    cursor: pointer;
                                    border-top-right-radius: 4px;
                                    border-bottom-right-radius: 4px;
                                }
                            }
                        }
                    }
                }

                .empty_messege {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
                    margin-top: 15px;

                    img {
                        position: relative;
                        width: 150px;
                        opacity: 0.5;
                    }

                    p {
                        position: relative;
                        font-size: 13px;
                        margin-top: 10px;
                        color: ${colors.customColors.blackColor3};
                    }
                }
            }
        }
    }
`;

export const StaffWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .wrapper_content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .content_box {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            &:last-of-type {
                margin-bottom: 0;
            }

            .box_top_sec {
                position: relative;
                width: 100%;
                display: flex;
                align-items: flex-end;
                padding-bottom: 6px;
                padding: 0 15px;
                padding-bottom: 8px;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 15px;
                    width: calc(100% - 30px);
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.borderColor1} 20%, transparent 100%);
                }

                .box_head {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    h6 {
                        position: relative;
                        font-size: 15px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                    }
                    p {
                        position: relative;
                        font-size: 11px;
                        color: ${colors.customColors.blackColor2};
                    }
                }
                
                .add_btn {
                    position: relative;
                    margin-left: 20px;

                    button {
                        position: relative;
                        width: 200px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border: 1px solid ${colors.customColors.greenColor};
                        background: ${colors.customColors.greenColor};
                        color: ${colors.customColors.whiteColor};
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 500;
                        transition: all 0.3s ease;
                        
                        &:hover {
                            border-radius: 25px;
                            transition: all 0.3s ease;
                        }

                        i {
                            margin-right: 8px;
                            font-size: 12px;
                        }
                    }
                }
            }

            .box_bottom_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding: 0 5px;
                margin-top: 10px;

                .sec_item {
                    position: relative;
                    width: 25%;
                    max-width: 302.75px;
                    padding: 10px;

                    .item_inner {
                        position: relative;
                        width: 100%;
                        padding: 12px;
                        padding-left: 15px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-left: 4px solid ${colors.customColors.greenColor};
                        border-radius: 8px;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                        .inner_top {
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
                                background: ${colors.customColors.greenColorLight};
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 12px;
                                color: ${colors.customColors.greenColor};
                                text-decoration: none;
                                cursor: pointer;
                            }

                            .inner_content {
                                position: relative;
                                width: calc(100% - 28px);
                                display: flex;
                                padding-left: 12px;

                                h6 {
                                    position: relative;
                                    max-width: calc(100% - 85px);
                                    font-size: 13.5px;
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
                                    color: ${colors.customColors.greenColor};
                                    margin-top: 2px;
                                    background: ${colors.customColors.greenColorLight};
                                    border-radius: 25px;
                                    padding: 3px 15px;
                                    margin-left: auto;
                                    font-weight: 500;
                                }
                            }
                        }

                        .inner_btn {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            margin-top: 8px;
                            justify-content: flex-end;

                            button {
                                position: relative;
                                width: max-content;
                                height: 25px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border: none;
                                padding: 0 12px;

                                &.details {
                                    background: ${colors.customColors.blueColorLight};
                                    color: ${colors.customColors.blueColor2};
                                    font-size: 10px;
                                    cursor: pointer;
                                    font-weight: 500;
                                    border-bottom-left-radius: 4px;
                                    border-top-left-radius: 4px;
                                }

                                &.delete {
                                    background: ${colors.customColors.redColorLight};
                                    color:  ${colors.customColors.redColor};
                                    font-size: 10px;
                                    cursor: pointer;
                                    border-top-right-radius: 4px;
                                    border-bottom-right-radius: 4px;
                                }
                            }
                        }
                    }
                }

                .empty_messege {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 0 10px;
                    margin-top: 10px;

                    img {
                        position: relative;
                        width: 150px;
                        opacity: 0.5;
                    }

                    p {
                        position: relative;
                        font-size: 13px;
                        margin-top: 10px;
                        color: ${colors.customColors.blackColor3};
                    }
                }
            }
        }
    }
`;

export const SectionFieldsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;

    .wrapper_content {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .content_top {
            position: relative;
            width: 100%;
            display: flex;
            align-items: flex-end;
            padding-bottom: 7px;

            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: linear-gradient(to right, ${colors.customColors.borderColor1} 20%, transparent 100%);
            }

            .box_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

                h6 {
                    position: relative;
                    font-size: 13px;
                    font-weight: 400;
                    color: ${colors.customColors.blackColor1};
                    
                    &:last-of-type {
                        color: ${colors.customColors.blueColor1};
                    }
                }
                
                span {
                    position: relative;
                    font-size: 10px;
                    color: ${colors.customColors.blackColor1};
                    margin: 0 6px;
                }
            }

            .add_btn {
                position: relative;
                margin-left: 20px;

                button {
                    position: relative;
                    width: 170px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: 1px solid ${colors.customColors.greenColor};
                    background: ${colors.customColors.greenColor};
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    transition: all 0.5s ease;

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }
                }
            }
        }

        .content_bottom {
            position: relative;
            width: 100%;
            height: calc(100vh - 240px);
            display: flex;
            margin-top: 15px;
            
            .left_content {
                position: relative;
                width: 400px;
                height: 100%;
                padding-right: 15px;
                border-right: 1px solid ${colors.customColors.borderColor};
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .left_content_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .field_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;

                        .field_image {
                            position: relative;
                            width: 11px;
                            display: flex;

                            img {
                                position: relative;
                                width: 100%;
                            }

                            i {
                                position: relative;
                                font-size: 15px;
                                color: ${colors.customColors.blueColor1};
                            }
                        }

                        li {
                            position: relative;
                            width: calc(100% - 21px);
                            height: 100%;
                            margin-left: 10px;
                            padding: 10px 12px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 6px;
                            list-style: none;
                            cursor: pointer;
                            transition: all 0.5s ease;

                            p {
                                font-size: 12px;
                                color: ${colors.customColors.blackColor};
                                font-weight: 400;
                            }

                            i {
                                font-size: 14px;
                                color: ${colors.customColors.blackColor2};
                            }

                            &.active {
                                border: 1px solid ${colors.customColors.blueColor2};
                                background: ${colors.customColors.blueColorLight};
                                transition: all 0.5s ease;

                                p {
                                    color: ${colors.customColors.blueColor2};
                                }

                                i {
                                    color: ${colors.customColors.blueColor2};
                                }
                            }

                            &:hover {
                                background: ${colors.customColors.lightBackground};
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }

            .right_content {
                position: relative;
                width: calc(100% - 400px);
                height: 100%;
                padding-left: 15px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                .right_content_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    h6 {
                        position: relative;
                        font-size: 12px;
                        font-weight: 400;
                        font-style: italic;
                        color: ${colors.customColors.blackColor1};
                        
                        span {
                            font-style: normal;
                            color: ${colors.customColors.blackColor};
                        }
                    }

                    .input_field_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 15px;

                        .input_box {
                            position: relative;
                            width: calc(100% - 160px);
                            padding-right: 15px;

                            input {
                                position: relative;
                                width: 100%;
                                height: 37px;
                                border: 1px solid ${colors.customColors.borderColor};
                                font-size: 12px;
                                border-radius: 5px;
                                padding: 5px 15px;
                                outline: none;
                                transition: all 0.5s ease;

                                &:focus,
                                &:valid {
                                    border: 1px solid ${colors.customColors.blackColor};
                                    transition: all 0.5s ease;
                                }
                            }

                            span {
                                position: absolute;
                                top: 50%;
                                left: 15px;
                                padding: 0 5px;
                                font-size: 12px;
                                background: ${colors.customColors.whiteColor};
                                line-height: 1;
                                color: ${colors.customColors.blackColor2};
                                pointer-events: none;
                                transform: translateY(-50%);
                                transition: all 0.5s ease;
                            }

                            input:focus ~ span,
                            input:valid ~ span {
                                transform: translateY(-25px);
                                font-size: 10px;
                                color: ${colors.themeColor};
                                font-weight: 500;
                                transition: all 0.5s ease;
                            }
                        }

                        button {
                            position: relative;
                            width: 160px;
                            height: 37px;
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
                            }
                        }
                    }

                    .item_box {
                        position: relative;
                        width: 100%;
                        margin-top: 15px;

                        .box_content {
                            position: relative;
                            width: 100%;
                            min-height: 80px;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: flex-start;
                            padding: 7px;
                            border: 1px solid ${colors.customColors.blackColor};
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
                                height: 23px;
                            }
                        }
                    }

                    .mandatory_sec {
                        position: relative;
                        width: 100%;
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 15px;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 6px;

                        p {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        .toggle_bar {
                            position: relative;
                            width: 100px;
                            display: flex;
                            justify-content: center;

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
                                background: ${colors.customColors.greenColor};
                                transition: all 0.5s ease;
                            }

                            input[type="checkbox"]:checked ~ label span {
                                transform: translateX(19px);
                                transition: all 0.5s ease;
                            }
                        }
                    }

                    .remove_btn {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: flex-start;
                        margin-top: 15px;

                        button {
                            position: relative;
                            width: 160px;
                            height: 37px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.whiteColor};
                            background: ${colors.customColors.redColor};
                            border: none;
                            border-radius: 6px;
                            cursor: pointer;
                            transition: all 0.5s ease;

                            i {
                                margin-right: 8px;
                                font-size: 12px;
                            }

                            &:hover {
                                border-radius: 25px;
                                transition: all 0.5s ease;
                            }
                        }
                    }
                }
            }

            .empty_box {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 35px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;

                &::-webkit-scrollbar {
                    display: none;
                }

                img {
                    position: relative;
                    width: 300px;
                    opacity: 0.5;
                }

                p {
                    position: relative;
                    margin-top: 10px;
                    font-size: 14px;
                    opacity: 0.4;
                }
            }
        }
    }
`;

export const SubjectSettingsWrapper = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .subject_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 20px;
        padding: 0 15px;

        .search_sec {
            position: relative;
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

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.5s ease;
                
                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
                
                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .subjects_levels {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        padding: 0 5px;

        .subject_box {
            position: relative;
            width: 25%;
            max-width: 302.75px;
            padding: 10px;

            .box_inner {
                position: relative;
                width: 100%;
                padding: 12px;
                padding-left: 15px;
                background: ${colors.customColors.whiteColor};
                border: 1px solid ${colors.customColors.borderColor};
                border-left: 4px solid ${colors.customColors.greenColor};
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
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${colors.customColors.borderColor};

                    .part_content {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        
                        a {
                            position: relative;
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            background: ${colors.customColors.greenColorLight};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            color: ${colors.customColors.greenColor};
                            text-decoration: none;
                            cursor: pointer;
                        }
                        
                        h6 {
                            position: relative;
                            padding-left: 12px;
                            max-width: calc(100% - 28px);
                            font-size: 13.5px;
                            font-style: italic;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }

                    .subject_assigning_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        margin-top: 5px;

                        p {
                            position: relative;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor2};

                            b {
                                font-weight: 500;
                                margin-right: 4px;
                                font-style: italic;
                                color: ${colors.customColors.blackColor1};
                            }
                        }
                    }
                }

                .bottom_btn {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    justify-content: flex-end;

                    button {
                        position: relative;
                        width: max-content;
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        padding: 0 12px;

                        &.details {
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor2};
                            font-size: 10px;
                            cursor: pointer;
                            font-weight: 500;
                            border-bottom-left-radius: 4px;
                            border-top-left-radius: 4px;
                        }

                        &.delete {
                            background: ${colors.customColors.redColorLight};
                            color:  ${colors.customColors.redColor};
                            font-size: 10px;
                            cursor: pointer;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                        }
                    }
                }
            }
        }
    }

    .empty_box {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        margin-top: 80px;

        img {
            position: relative;
            width: 300px;
            opacity: 0.5;
        }

        p {
            position: relative;
            font-size: 15px;
            margin-top: 10px;
            color: ${colors.customColors.blackColor3};
        }
    }
`;

export const StateCitiesWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .state_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .search_sec {
            position: relative;
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

        .add_btn {
            position: relative;
            margin-left: auto;
            display: flex;
            align-items: center;

            button {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.5s ease;
                
                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
                
                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 30px;
        padding: 0 15px;

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
                    -moz-box-align: center;
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 25%;
                    }
                    &:nth-of-type(2) {
                        width: 60%;
                    }
                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }
                }
            }

            tbody {
                position: relative;
                width: 100%;
                border: 1px solid ${colors.customColors.borderColor};
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
                        display: flex;
                        font-family: "Poppins", sans-serif;
                        font-size: 12px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 25%;
                            padding: 10px 25px;
                        }
                        &:nth-of-type(2) {
                            width: 60%;
                            padding: 8px 15px;
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;

                            li {
                                position: relative;
                                list-style: none;
                                line-height: 1;
                                padding: 6px 12px;
                                margin: 5px;
                                font-size: 11px;
                                height: max-content;
                                background: ${colors.customColors.blueColorLight};
                                border-radius: 20px;
                                border: 1px solid ${colors.customColors.blueColor1};
                            }
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            padding: 10px 25px;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                                &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                }
                                
                                &.delete_btn {
                                    margin-left: 10px;
                                    color: ${colors.customColors.redColor};
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
`;

export const TimeTableSettingsWrapper = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }

        .add_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                width: 200px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: 1px solid ${colors.customColors.greenColor};
                background: ${colors.customColors.greenColor};
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.5s ease;
                
                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
                
                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }
            }
        }
    }

    .slot_levels {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        padding: 0 5px;

        .slot_box {
            position: relative;
            width: 25%;
            max-width: 302.75px;
            padding: 10px;

            .box_inner {
                position: relative;
                width: 100%;
                padding: 12px;
                padding-left: 15px;
                background: ${colors.customColors.whiteColor};
                border: 1px solid ${colors.customColors.borderColor};
                border-left: 4px solid ${colors.customColors.greenColor};
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
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${colors.customColors.borderColor};

                    .part_content {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        
                        a {
                            position: relative;
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            background: ${colors.customColors.greenColorLight};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            color: ${colors.customColors.greenColor};
                            text-decoration: none;
                            cursor: pointer;
                        }
                        
                        h6 {
                            position: relative;
                            padding-left: 12px;
                            max-width: calc(100% - 28px);
                            font-size: 13.5px;
                            font-style: italic;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }

                    .subject_assigning_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        margin-top: 5px;

                        p {
                            position: relative;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor2};

                            b {
                                font-weight: 500;
                                margin-right: 4px;
                                font-style: italic;
                                color: ${colors.customColors.blackColor1};
                            }
                        }
                    }
                }

                .bottom_btn {
                    position: relative;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    justify-content: flex-end;

                    button {
                        position: relative;
                        width: max-content;
                        height: 25px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        padding: 0 12px;

                        &.details {
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor2};
                            font-size: 10px;
                            cursor: pointer;
                            font-weight: 500;
                            border-bottom-left-radius: 4px;
                            border-top-left-radius: 4px;

                            i {
                                font-size: 12px;
                                margin-right: 4px;
                            }
                        }

                        &.delete {
                            background: ${colors.customColors.redColorLight};
                            color:  ${colors.customColors.redColor};
                            font-size: 10px;
                            cursor: pointer;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                        }
                    }
                }
            }
        }
    }

    .page_bottom_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        padding-top: 20px;
        margin-top: 15px;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 15px;
            width: calc(100% - 30px);
            height: 1px;
            background: ${colors.customColors.borderColor};
        }

        .schedule_head {
            position: relative;
            width: 100%;
            display: flex;

            h2 {
                position: relative;
                font-size: 21px;
                font-weight: 600;
                color: ${colors.customColors.blackColor};
                font-family: "SUSE", sans-serif;
            }
        }

        span {
            position: relative;
            font-size: 12px;
            color: ${colors.customColors.blackColor2};
            margin-top: 10px;
        }

        .page_items {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 30px;

            .item_inner {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

                .select_box {
                    position: relative;
                    width: 350px;
                    margin-right: 25px;

                    &:last-of-type {
                        margin-right: 0px;
                    }

                    .dropdown_sec {
                        position: relative;
                        width: 100%;
                        height: 37px;
                        flex-direction: column;

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
                                    }
                                }
                            }
                        }
                    }
                }

                .btn_box {
                    position: relative;
                    margin-left: auto;

                    button {
                        position: relative;
                        width: 150px;
                        height: 37px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: 500;
                        color: ${colors.customColors.whiteColor};
                        background: ${colors.customColors.greenColor};
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: all 0.5s ease;

                        i {
                            margin-right: 8px;
                            font-size: 13px;
                        }

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }
                    }
                }
            }
        }

        .time_levels {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 16px;

            .time_level_box {
                position: relative;
                width: 100%;
                margin-bottom: 16px;
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                        -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                .box_head {
                    position: relative;
                    width: 100%;
                    padding: 20px;
                    padding-bottom: 10px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 20px;
                        bottom: 0;
                        width: calc(100% - 40px);
                        height: 1px;
                        background: ${colors.customColors.borderColor};
                    }

                    span {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        font-style: italic;
                    }
                }

                .box_items {
                    position: relative;
                    width: 100%;
                    display: flex;
                    padding: 10px;
                    flex-wrap: wrap;

                    .class_item {
                        position: relative;
                        width: 25%;
                        max-width: 302.75px;
                        padding: 10px;

                        .item_inner {
                            position: relative;
                            width: 100%;
                            padding: 12px;
                            padding-left: 15px;
                            background: ${colors.customColors.whiteColor};
                            border: 1px solid ${colors.customColors.borderColor};
                            border-left: 4px solid ${colors.customColors.greenColor};
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

                                .content_part {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    
                                    a {
                                        position: relative;
                                        width: 28px;
                                        height: 28px;
                                        border-radius: 50%;
                                        background: ${colors.customColors.greenColorLight};
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 12px;
                                        color: ${colors.customColors.greenColor};
                                        text-decoration: none;
                                        cursor: pointer;
                                    }
                                    
                                    h6 {
                                        position: relative;
                                        padding-left: 12px;
                                        max-width: calc(100% - 28px);
                                        font-size: 12px;
                                        font-style: italic;
                                        font-weight: 500;
                                        color: ${colors.customColors.blackColor};
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }
                                }

                                .subject_sec {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    flex-direction: column;
                                    margin-top: 5px;

                                    p {
                                        position: relative;
                                        font-size: 11px;
                                        color: ${colors.customColors.blackColor2};

                                        b {
                                            font-weight: 500;
                                            margin-right: 4px;
                                            font-style: italic;
                                            color: ${colors.customColors.blackColor1};
                                        }
                                    }

                                    li {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;
                                        margin-top: 5px;
                                        list-style: none;

                                        a {
                                            font-size: 11px;
                                            color: ${colors.customColors.blackColor1};
                                            text-decoration: none;
                                        }

                                        h6 {
                                            font-size: 11px;
                                            color: ${colors.customColors.blackColor1};
                                            margin-left: 8px;
                                            font-weight: 400;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .btns_sec {
            position: relative;
            width: 100%;
            display: flex;
            margin-top: 25px;
            justify-content: flex-end;

            button {
                position: relative;
                width: 150px;
                height: 37px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 500;
                color: ${colors.customColors.whiteColor};
                background: ${colors.customColors.blueColor1};
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: all 0.5s ease;

                i {
                    margin-right: 8px;
                }

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                &:last-of-type {
                    background: ${colors.customColors.greenColor};
                    margin-left: 25px;
                }
            }
        }
    }
`;
