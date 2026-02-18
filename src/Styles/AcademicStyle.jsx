import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const StudentInformationWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .page_head {
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

    .student_search_sec {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 20px;

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

        .filter_sec {
            position: relative;
            margin-left: 20px;

            .filter_btn {
                position: relative;
                width: 150px;
                height: 35px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                align-items: center;
                padding: 5px 15px;
                cursor: pointer;

                p {
                    position: relative;
                    font-size: 12px;
                    color: ${colors.customColors.blackColor1};
                }

                i {
                    position: relative;
                    margin-left: auto;
                    color: ${colors.customColors.blackColor1};
                    font-size: 13px;
                }
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

                i {
                    margin-right: 8px;
                    font-size: 12px;
                }
            }
        }
    }

    .tab_sec {
        position: relative;
        margin-top: 25px;
        width: 100%;

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
        margin-top: 25px;

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
                        width: 25%;
                    }

                    &:nth-of-type(2) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 18%;
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

                    &:nth-of-type(6) {
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
                            width: 25%;
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
                                    /* margin-top: 3px; */
                                }
                            }
                        }

                        &:nth-of-type(2) {
                            width: 12%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 18%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;

                            p {
                                position: relative;
                                font-size: 10px;
                                font-weight: 500;
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 4px 15px;
                                color: ${colors.customColors.redColor};
                                background: ${colors.customColors.redColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                            }
                        }

                        &:nth-of-type(5) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;

                            p {
                                position: relative;
                                font-size: 10px;
                                font-weight: 500;
                                line-height: 1;
                                display: flex;
                                align-items: center;
                                border-radius: 20px;
                                padding: 4px 15px;
                                color: ${colors.customColors.yellowColor1};
                                background: ${colors.customColors.yellowColorLight};

                                &.active {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                            }
                        }

                        &:nth-of-type(6) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;

                            a {
                                position: relative;
                                text-decoration: none;
                                cursor: pointer;
                                font-size: 13px;

                               &.view_btn {
                                    color: ${colors.customColors.blueColor1};
                               }

                               &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                    margin: 0 10px;
                               }

                               &.delete_btn {
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

export const ClassroomsWrapper = styled('div')`
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

    .tab_sec {
        position: relative;
        margin-top: 25px;
        width: 100%;
        padding: 0 15px;

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

    .class_levels {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        .class_level_box {
            position: relative;
            width: 100%;
            margin-top: 16px;
            padding-bottom: 25px;
            display: flex;
            flex-direction: column;

            &::before {
                content: '';
                position: absolute;
                left: 15px;
                bottom: 0;
                width: calc(100% - 30px);
                height: 1px;
                background: linear-gradient(to right, ${colors.customColors.borderColor} 70%, transparent);
            }

            &:last-of-type {
                &::before {
                    display: none;
                }
            }

            .box_head {
                position: relative;
                width: 100%;
                padding: 0 15px;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                padding-bottom: 10px;

                &::before {
                    content: '';
                    position: absolute;
                    left: 15px;
                    bottom: 0;
                    width: calc(100% - 30px);
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

                button {
                    position: relative;
                    width: 175px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: 1px solid ${colors.customColors.greenColor};
                    background: ${colors.customColors.greenColor};
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 12.5px;
                    font-weight: 500;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }
                }
            }

            .box_items {
                position: relative;
                width: 100%;
                display: flex;
                margin-top: 5px;
                padding: 5px;
                flex-wrap: wrap;

                .class_item {
                    position: relative;
                    width: 25%;
                    max-width: 302.75px;
                    padding: 10px;

                    .item_inner {
                        position: relative;
                        width: 100%;
                        padding: 12px 15px 15px 15px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
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

                            span {
                                position: relative;
                                font-size: 16px;
                                font-weight: 600;
                                color: ${colors.customColors.blackColor1};
                            }

                            p {
                                position: relative;
                                margin-top: 3px;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};

                                b {
                                    font-weight: 500;
                                    margin-right: 4px;
                                    font-style: italic;
                                    color: ${colors.customColors.blackColor1};
                                }
                            }
                        }

                        .bottom_part {
                            position: relative;
                            margin-top: 12px;
                            width: 100%;
                            display: flex;
                            align-items: flex-end;
                            justify-content: space-between;

                            .students {
                                position: relative;
                                display: flex;
                                align-items: center;

                                ul {
                                    position: relative;
                                    display: flex;
                                    align-items: center;

                                    li {
                                        position: relative;
                                        list-style: none;
                                        width: 33px;
                                        height: 33px;
                                        display: flex;
                                        border-radius: 50%;
                                        overflow: hidden;
                                        border: 2px solid ${colors.customColors.whiteColor};
                                        margin-left: -16.5px;

                                        &:first-of-type {
                                            margin-left: 0;
                                        }

                                        p {
                                            position: relative; 
                                            width: 100%;
                                            height: 100%;
                                            background: ${colors.themeColor};
                                            color: ${colors.customColors.whiteColor};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            font-size: 13px;
                                            font-weight: 500;
                                            letter-spacing: 0.55px;
                                        }

                                        img {
                                            position: relative;
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                        }
                                    }
                                }

                                span {
                                    position: relative;
                                    width: 33px;
                                    height: 33px;
                                    background: ${colors.customColors.borderColor};
                                    border-radius: 50%;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 10px;
                                    font-weight: 500;
                                    border: 2px solid ${colors.customColors.whiteColor};
                                    margin-left: -16.5px;
                                    color: ${colors.customColors.blackColor};
                                }
                            }

                            button {
                                position: relative;
                                padding: 5px 15px;
                                font-size: 11px;
                                background: ${colors.themeColor};
                                border: none;
                                border-radius: 5px;
                                color: ${colors.customColors.whiteColor};
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const StudentAttendenceWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .page_head {
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

    .overview_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid ${colors.customColors.borderColor};

        .sec_head {
            position: relative;
            width: 100%;
            display: flex;

            h6 {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }
        }
    }

    .report_details_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        .report_head {
            position: relative;
            width: 100%;
            display: flex;

            h6 {
                position: relative;
                font-size: 14px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }
        }

        .student_search_sec {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 20px;

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
        }

        .tab_sec {
            position: relative;
            margin-top: 25px;
            width: 100%;

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
            margin-top: 25px;

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
                            width: 25%;
                        }

                        &:nth-of-type(2) {
                            width: 18%;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 14%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 14%;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 18%;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 11%;
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
                                width: 25%;
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
                                        /* margin-top: 3px; */
                                    }
                                }
                            }

                            &:nth-of-type(2) {
                                width: 18%;
                                align-items: center;
                                justify-content: center;
                            }

                            &:nth-of-type(3) {
                                align-items: center;
                                width: 14%;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.greenColor};
                                }
                            }

                            &:nth-of-type(4) {
                                width: 14%;
                                align-items: center;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.redColor};
                                }
                            }

                            &:nth-of-type(5) {
                                width: 18%;
                                align-items: center;
                                justify-content: center;

                                p {
                                    position: relative;
                                    font-size: 10px;
                                    font-weight: 500;
                                    line-height: 1;
                                    display: flex;
                                    align-items: center;
                                    border-radius: 20px;
                                    padding: 4px 15px;
                                    color: ${colors.customColors.redColor};
                                    background: ${colors.customColors.redColorLight};

                                    &.active {
                                        color: ${colors.customColors.greenColor};
                                        background: ${colors.customColors.greenColorLight};
                                    }
                                }
                            }

                            &:nth-of-type(6) {
                                width: 11%;
                                align-items: center;
                                justify-content: center;

                                a {
                                    position: relative;
                                    text-decoration: none;
                                    cursor: pointer;
                                    font-size: 13px;

                                    &.view_btn {
                                            color: ${colors.customColors.blueColor1};
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
`;

export const AddStudentWrapper = styled('div')`
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;

            i {
                position: relative;
                margin-right: 10px;
                color: ${colors.themeColor};
            }
        }
    }

    .page_item {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 25px;

        .item_box {
            position: relative;
            margin-top: 15px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 8px;
            box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

            .box_top {
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

                .top_left {
                    position: relative;

                    h4 {
                       position: relative;
                        font-size: 15px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 500; 
                    }
                }

                .top_right {
                    position: relative;
                    margin-left: auto;
                    display: flex;
                    align-items: center;

                    span {
                        position: relative;
                        font-size: 15px;
                        color: ${colors.customColors.blueColor1};
                        cursor: pointer;
                    }

                    p {
                        position: relative;
                        margin-left: 8px;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        margin-right: 40px;
                    }

                    .icon {
                        position: relative;
                        width: 35px;
                        height: 35px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};

                        i {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
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
                    padding: 15px;
                    display: flex;
                    flex-direction: column;

                    .bulk_upload_sec {
                        position: relative;
                        width: 100%;
                        height: 120px;
                        border: 1px dashed ${colors.customColors.borderColor1};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;

                        a {
                            position: relative;
                            font-size: 30px;
                            color: ${colors.themeColor};
                            text-decoration: none;
                        }

                        p {
                            position: relative;
                            font-size: 16px;
                            color: ${colors.customColors.blackColor1};
                            font-weight: 400;
                            margin-top: 5px;

                            span {
                                color: ${colors.themeColor};
                            }
                        }
                    }

                    .manually_upload_sec {
                        position: relative;
                        width: 100%;
                        border: 1px solid ${colors.customColors.borderColor1};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        padding: 15px;

                        h6 {
                            position: relative;
                            font-size: 15px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }

                        .sec_content {
                            position: relative;
                            width: 100%;
                            margin-top: 15px;
                            display: flex;

                            .content_left {
                                position: relative;
                                width: 120px;
                                height: 100px;
                                border: 1px dashed ${colors.customColors.borderColor1};
                                border-radius: 6px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 7px;

                                img {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    border-radius: 6px;
                                }
                            }

                            .content_right {
                                position: relative;
                                width: calc(100% - 120px);
                                padding-left: 20px;
                                display: flex;
                                flex-direction: column;

                                p {
                                    position: relative;
                                    font-size: 14px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
                                }

                                span {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-top: 1px;
                                }

                                a {
                                    position: relative;
                                    margin-top: 7px;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.themeColor};
                                    text-decoration: none;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }

        .another_way_sec {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 15px;

            a {
                position: relative;
                width: 40px;
                height: 40px;
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 500;
                color: ${colors.customColors.blackColor2};
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 50%;
                margin: 0 25px;

                &::before {
                    position: absolute;
                    content: '';
                    right: 100%;
                    top: 50%;
                    width: 150px;
                    height: 2px;
                    background: linear-gradient(to right, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    transform: rotateY(180deg) translateY(-50%);
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    width: 150px;
                    height: 2px;
                    background: linear-gradient(to right, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    transform: translateY(-50%);
                }
            }
        }
    }

    .student_details_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 25px;

        .details_box {
            position: relative;
            margin-top: 15px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 8px;
            box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

            .details_top {
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

                h3 {
                    position: relative;
                    font-size: 15px;
                    color: ${colors.customColors.blackColor};
                    font-weight: 600;
                }

                .icon {
                    position: relative;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: auto;
                    box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};

                    i {
                        position: relative;
                        font-size: 14px;
                        color: ${colors.customColors.blackColor2};
                    }
                }
            }

            .details_bottom {
                position: relative;
                width: 100%;

                .details_inner {
                    position: relative;
                    width: 100%;
                    padding: 15px;
                    padding-top: 0;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    .input_box {
                        position: relative;
                        width: 32.5%;
                        margin-top: 15px;

                        input {
                            position: relative;
                            width: 100%;
                            height: 40px;
                            border: 1px solid ${colors.customColors.borderColor};
                            font-size: 12px;
                            border-radius: 5px;
                            padding: 5px 20px;
                            outline: none;
                            transition: all 0.5s ease;

                            &:focus,
                            &:valid {
                                border: 1px solid ${colors.customColors.blueColor1};
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
                }
            }
        }
    }
`;