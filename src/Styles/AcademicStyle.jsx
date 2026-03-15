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

        .btns_sec {
            position: relative;
            margin-left: auto;
            display: flex;
            align-items: center;

            button {
                position: relative;
                width: max-content;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                padding: 0 25px;
                font-size: 12.5px;

                &.academic {
                    background: ${colors.customColors.blueColor1};
                    border: 1px solid ${colors.customColors.blueColor1};
                    color: ${colors.customColors.whiteColor};
                    cursor: pointer;
                    border-bottom-left-radius: 6px;
                    border-top-left-radius: 6px;
                }
                
                &.add_class {
                    background: ${colors.customColors.whiteColor};
                    border: 1px solid ${colors.customColors.blueColor1};
                    color:  ${colors.customColors.blueColor1};
                    cursor: pointer;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                i {
                    font-size: 10px;
                    margin-right: 4px;
                }
            }
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

            .swiper {
                position: relative;
                width: 100%;
                height: 100%;

                .swiper-slide {
                    position: relative;
                    width: max-content !important;
                }
            }

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
        padding: 0 15px;
        padding-top: 16px;

        .class_level_box {
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
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
                    }

                    &.new_Subject {
                        border: 1px solid ${colors.customColors.blueColor1};
                        background: ${colors.customColors.blueColor1};
                        margin-left: auto;
                        margin-right: 10px;
                    }

                    &:disabled {
                        opacity: 0.4;
                        pointer-events: none;
                    }
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

                            .teacher_name_sec {
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

                .empty_box {
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
    }

    .empty_messege {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        margin-top: 100px;

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
        align-items: center;
        margin-top: 25px;

        .item_box {
            position: relative;
            margin-top: 15px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 8px;
            overflow: hidden;
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

                .top_left {
                    position: relative;

                    h4 {
                       position: relative;
                        font-size: 15px;
                        color: ${colors.customColors.blackColor};
                        font-weight: 500;
                        font-style: italic;
                    }
                }

                .top_right {
                    position: relative;
                    margin-left: auto;
                    display: flex;
                    align-items: center;

                    .download_btn {
                        position: relative;
                        height: 35px;
                        border: 1px solid ${colors.customColors.blueColor1};
                        border-radius: 25px;
                        display: flex;
                        align-items: center;
                        padding: 5px 15px;
                        cursor: pointer;
                        transition: all 0.5s ease;
                        
                        span {
                            position: relative;
                            font-size: 13px;
                            color: ${colors.customColors.blueColor1};
                        }
                        
                        p {
                            position: relative;
                            margin-left: 6px;
                            font-size: 12px;
                            color: ${colors.customColors.blueColor1};
                        }
                        
                        &:hover {
                            background: ${colors.customColors.blueColor1};
                            transition: all 0.5s ease;
                            
                            span {
                                color: ${colors.customColors.whiteColor};
                            }

                            p {
                                color: ${colors.customColors.whiteColor};
                            }
                        }
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

            .upload_form_sec {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                height: 0;
                overflow: hidden;
                transition: all 0.6s ease;
                
                &.active {
                    height: max-content;
                    transition: all 0.6s ease;
                }

                .bulk_upload_inner {
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
                        transition: all 0.5s ease;
                        
                        &.dragging {
                            border: 1px dashed ${colors.customColors.borderColor1};
                            background: ${colors.customColors.lightBackground};
                            transition: all 0.5s ease;
                        }

                        label {
                            position: relative;
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            i {
                                position: relative;
                                font-size: 27px;
                                color: ${colors.themeColor};
                            }

                            p {
                                position: relative;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor1};
                                font-weight: 400;
                                margin-top: 8px;

                                span {
                                    color: ${colors.themeColor};
                                }
                            }
                        }
                    }

                    .upload_file_sec {
                        position: relative;
                        width: 100%;
                        padding: 25px 0;
                        border: 1px dashed ${colors.customColors.borderColor1};
                        border-radius: 6px;
                        display: flex;
                        justify-content: center;

                        .file_sec_inner {
                            position: relative;
                            display: flex;

                            img {
                                position: relative;
                                width: 80px;
                                height: auto;
                            }

                            .file_items {
                                position: relative;
                                display: flex;
                                flex-direction: column;
                                margin-left: 20px;
                                padding-top: 20px;

                                p {
                                    position: relative;
                                    width: max-content;
                                    max-width: 250px;
                                    font-size: 11px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    color: ${colors.customColors.blackColor1};
                                    border-bottom: 1px dashed ${colors.customColors.borderColor1};
                                }

                                .btns {
                                    position: relative;
                                    display: flex;
                                    margin-top: auto;

                                    button {
                                        position: relative;
                                        padding: 5px 20px;
                                        border-radius: 5px;
                                        display: flex;
                                        align-items: center;
                                        font-size: 11px;
                                        cursor: pointer;
                                        border: none;

                                        &:first-of-type {
                                            background: ${colors.customColors.blueColorLight};
                                            color: ${colors.customColors.blueColor1};
                                            margin-right: 15px;
                                        }

                                        &:last-of-type {
                                            background: ${colors.customColors.redColorLight};
                                            color: ${colors.customColors.redColor};
                                        }

                                        i {
                                            margin-right: 4px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .profile_image_sec {
                    position: relative;
                    width: 100%;
                    padding: 15px;
                    display: flex;
                    flex-direction: column;

                    .sec_inner {
                        position: relative;
                        width: 100%;
                        border: 1px solid ${colors.customColors.borderColor1};
                        border-radius: 6px;
                        display: flex;
                        flex-direction: column;
                        padding: 15px;

                        h6 {
                            position: relative;
                            font-size: 14px;
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
                                width: 100px;
                                height: 100px;
                                border: 1px dashed ${colors.customColors.borderColor1};
                                border-radius: 6px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 5px;

                                img {
                                    position: relative;
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    border-radius: 4px;
                                }
                            }

                            .content_right {
                                position: relative;
                                width: calc(100% - 100px);
                                padding: 3px 0;
                                padding-left: 20px;
                                display: flex;
                                flex-direction: column;

                                p {
                                    position: relative;
                                    font-size: 13px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
                                }

                                span {
                                    position: relative;
                                    font-size: 11px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-top: 3px;
                                }

                                a {
                                    position: relative;
                                    margin-top: auto;
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: ${colors.themeColor};
                                    cursor: pointer;
                                    text-decoration: none;
                                    transition: all 0.3s ease;
                                    
                                    i {
                                        margin-right: 5px;
                                    }
                                    
                                    &:hover {
                                        text-decoration: underline;
                                        transition: all 0.3s ease;
                                    }
                                }
                            }
                        }
                    }
                }

                .student_details_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    padding-top: 0;

                    .details_box {
                        position: relative;
                        margin-top: 20px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 8px;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                        &:first-of-type {
                            margin-top: 0;
                        }

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
                                font-size: 14px;
                                color: ${colors.customColors.blackColor};
                                font-weight: 500;
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
                            padding-top: 12px;
                            padding-bottom: 6px;

                            .details_inner {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-wrap: wrap;
                                padding: 0 8px;
                            }
                        }
                    }
                }

                .btn_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 5px;
                    padding: 15px;
                    padding-top: 0;

                    button {
                        position: relative;
                        padding: 8px 20px;
                        background: ${colors.themeColor};
                        border: none;
                        border-radius: 6px;
                        color: ${colors.customColors.whiteColor};
                        font-size: 13px;
                        font-weight: 400;
                        cursor: pointer;
                        transition: all 0.5s ease;
                        
                        &:hover {
                            border-radius: 25px;
                            transition: all 0.5s ease;
                        }

                        i {
                            margin-right: 5px;
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
                width: 350px;
                opacity: 0.5;
            }

            p {
                position: relative;
                margin-top: 25px;
                font-size: 13px;
                color: ${colors.customColors.blackColor2};

                span {
                    color: ${colors.customColors.blueColor1};
                    cursor: pointer;
                }
            }
        }

        .another_way_sec {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 25px;
            margin-bottom: 10px;

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
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    transform: rotateY(180deg) translateY(-50%);
                }

                &::after {
                    content: '';
                    position: absolute;
                    left: 100%;
                    top: 50%;
                    width: 150px;
                    height: 1px;
                    background: linear-gradient(to right, ${colors.customColors.blackColor3}, ${colors.customColors.whiteColor});
                    transform: translateY(-50%);
                }
            }
        }
    }
`;

export const ClassroomDetailsWrapper = styled('div')`
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

            .swiper {
                position: relative;
                width: 100%;
                height: 100%;

                .swiper-slide {
                    position: relative;
                    width: max-content !important;
                }
            }

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
                background: ${colors.customColors.lightBackground};
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

    .class_teacher_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 15px;

        .sec_inner {
            position: relative;
            width: 100%;
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

            .inner_top_sec {
                position: relative;
                width: 100%;
                padding: 15px;
                display: flex;
                flex-direction: column;
                border-bottom: 1px solid ${colors.customColors.borderColor};

                h5 {
                    position: relative;
                    font-size: 14px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                    font-style: italic;
                }

                p {
                    position: relative;
                    font-size: 12px;
                    font-weight: 400;
                    color: ${colors.customColors.blackColor2};
                    margin-top: 5px;
                }
            }

            .inner_bottom_sec {
                position: relative;
                width: 100%;
                padding: 15px;
                display: flex;

                .teacher_name_sec {
                    position: relative;
                    width: calc(100% - 100px);
                    display: flex;

                    .left_sec {
                        position: relative;
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 6px;
                        background: ${colors.customColors.blueColor1};

                        h6 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.whiteColor};
                            text-transform: uppercase;
                        }
                    }

                    .right_sec {
                        position: relative;
                        width: calc(100% - 35px);
                        padding-left: 10px;
                        display: flex;
                        flex-direction: column;

                        p {
                            position: relative;
                            font-size: 13px;
                            font-weight: 400;
                            color: ${colors.customColors.blackColor1};
                        }

                        span {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor2};
                            margin-top: 2px;
                        }
                    }
                }

                .btn_sec {
                    position: relative;
                    width: 100px;
                    display: flex;

                    button {
                        position: relative;
                        width: 100%;
                        height: 27px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        color: ${colors.customColors.redColor};
                        background: ${colors.customColors.redColorLight};
                        border-radius: 25px;
                        font-weight: 400;
                        cursor: pointer;
                        border: none;
                    }
                }
            }
        }
    }

    .class_details_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        margin-bottom: 15px;

        .details_box {
            position: relative;
            width: 100%;
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

            .box_head_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 20px;
                border-bottom: 1px solid ${colors.customColors.borderColor};

                .head_content {
                    position: relative;
                    display: flex;
                    flex-direction: column;

                    h4 {
                        position: relative;
                        font-size: 14px;
                        font-weight: 500;
                        color: ${colors.customColors.blackColor1};
                        font-style: italic;
                    }

                    p {
                        position: relative;
                        font-size: 12px;
                        font-weight: 400;
                        color: ${colors.customColors.blackColor2};
                        margin-top: 5px;
                    }

                    .search_sec {
                        position: relative;
                        height: 35px;
                        padding: 5px 0;
                        display: flex;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 6px;
                        margin-top: 8px;

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

            .box_item_sec {
                position: relative;
                width: 100%;
                display: flex;
                padding: 10px;
                flex-wrap: wrap;

                .item {
                    position: relative;
                    width: 33.33%;
                    max-width: 380px;
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

                            .teacher_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                margin-top: 8px;

                                .teacher_box {
                                    position: relative;
                                    width: 49%;
                                    display: flex;
                                    flex-direction: column;

                                    .teacher_heading {
                                        position: relative;
                                        width: 100%;
                                        display: flex;
                                        align-items: center;

                                        h5 {
                                            position: relative;
                                            font-size: 10px;
                                            font-weight: 500;
                                            font-style: italic;
                                            color: ${colors.customColors.blackColor};
                                        }

                                        li {
                                            position: relative;
                                            display: flex;
                                            align-items: center;
                                            list-style: none;
                                            margin-left: 5px;

                                            a {
                                                position: relative;
                                                width: max-content;
                                                padding: 4px 10px;
                                                font-size: 9px;
                                                cursor: pointer;
                                                text-decoration: none;

                                                i {
                                                    margin-right: 4px;
                                                }

                                                &.edit {
                                                    background: ${colors.customColors.blueColorLight};
                                                    color: ${colors.customColors.blueColor2};
                                                    border-bottom-left-radius: 4px;
                                                    border-top-left-radius: 4px;
                                                }

                                                &.add {
                                                    background: ${colors.customColors.greenColorLight};
                                                    color:  ${colors.customColors.greenColor};
                                                    border-top-right-radius: 4px;
                                                    border-bottom-right-radius: 4px;
                                                }
                                            }

                                            button {
                                                position: relative;
                                                width: max-content;
                                                padding: 5px 10px;
                                                font-size: 9px;
                                                cursor: pointer;
                                                border: none;
                                                border-radius: 4px;

                                                &.add {
                                                    background: ${colors.customColors.greenColorLight};
                                                    color:  ${colors.customColors.greenColor};
                                                }

                                                i {
                                                    margin-left: 5px;
                                                    font-size: 8px;
                                                }
                                            }
                                        }
                                    }

                                    p {
                                        position: relative;
                                        max-width: 100%;
                                        font-size: 10px;
                                        color: ${colors.customColors.blackColor1};
                                        margin: 3px 0;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                    }

                                    span {
                                        position: relative;
                                        font-size: 9px;
                                        color: ${colors.customColors.blackColor2};
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

                            .left_btns {
                                position: relative;
                                width: max-content;
                                display: flex;
                                padding: 4px;
                                background: ${colors.customColors.lightBackground};
                                border-radius: 4px;

                                .left_box {
                                    position: relative;
                                    padding: 4px 12px;
                                    cursor: pointer;
                                    border-radius: 4px;
                                    text-decoration: none;
                                    
                                    &.active {
                                        background: ${colors.customColors.blueColor1};
                                    }

                                    h6 {
                                        position: relative;
                                        font-size: 10px;
                                        font-weight: 400;
                                        color: ${colors.customColors.blackColor1};
                                    }
                                    
                                    &.active h6 {
                                        color: ${colors.customColors.whiteColor};
                                    }
                                }
                            }

                            .right_btns {
                                position: relative;
                                margin-left: auto;
                                display: flex;

                                button {
                                    position: relative;
                                    width: max-content;
                                    height: 25px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border: none;
                                    padding: 0 10px;

                                    &.edit {
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
            }
        }
    }
`;