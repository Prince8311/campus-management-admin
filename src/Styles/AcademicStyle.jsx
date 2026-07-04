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
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                border: none;
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
    
    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 20px;

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
                                padding-left: 7px;
                                display: flex;
                                flex-direction: column;

                                h6 {
                                    font-size: 13px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor1};
                                }

                                p {
                                    font-size: 10px;
                                    font-weight: 400;
                                    color: ${colors.customColors.blackColor2};
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

                               &.edit_btn {
                                    color: ${colors.customColors.greenColor};
                                    margin-right: 10px;
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
                cursor: pointer;

                &.academic {
                    background: ${colors.customColors.whiteColor};
                    border: 2px solid ${colors.customColors.blueColor2};
                    color: ${colors.customColors.blueColor2};
                    border-radius: 6px;
                }
                
                &.add_class {
                    margin-left: 20px;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-weight: 500;
                }

                i {
                    font-size: 12px;
                    margin-right: 5px;
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

                .head_brief {
                    position: relative;
                    display: flex;

                    span {
                        position: relative;
                        width: 40px;
                        height: 40px;
                        background: ${colors.customColors.blueColorLight};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 12px;

                        img {
                            position: relative;
                            width: 20px;
                        }
                    }

                    ul {
                        position: relative;
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;

                        h5 {
                            position: relative;
                            font-size: 15px;
                            font-weight: 600;
                            color: ${colors.customColors.blackColor};
                            font-style: italic;
                        }

                        li {
                            position: relative;
                            margin-top: 1px;
                            list-style: none;
                            display: flex;
                            align-items: center;
                            
                            p {
                                position: relative;
                                font-size: 12px;
                                color: ${colors.customColors.blackColor2};
                            }

                            i {
                                position: relative;
                                font-size: 4px;
                                color: ${colors.customColors.blackColor2};
                                margin: 0 10px;
                            }
                        }
                    }
                }

                button {
                    position: relative;
                    width: 175px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    border: none;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    color: ${colors.customColors.whiteColor};
                    border-radius: 6px;
                    font-size: 12.5px;
                    font-weight: 500;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.5s ease;

                    i {
                        margin-right: 8px;
                        font-size: 12px;
                    }

                    &:hover {
                        border-radius: 25px;
                        transition: all 0.5s ease;
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
                    max-height: 135px;
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
                                    display: flex;
                                    width: 100%;
                                    font-size: 11px;
                                    color: ${colors.customColors.blackColor2};

                                    b {
                                        position: relative;
                                        width: 86px;
                                        font-weight: 500;
                                        margin-right: 4px;
                                        font-style: italic;
                                        color: ${colors.customColors.blackColor1};
                                    }

                                    span {
                                        position: relative;
                                        width: calc(100% - 90px);
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
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

                .add_section {
                    position: relative;
                    width: 25%;
                    max-width: 302.75px;
                    height: 135px;
                    padding: 10px;
                    cursor: pointer;

                    .add_inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
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

                        .text {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            z-index: 5;

                            a {
                                position: relative;
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                font-size: 14px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};

                                span {
                                    margin-left: 4px;
                                    color: ${colors.customColors.blueColor2};
                                }

                                i {
                                    position: relative;
                                    width: 22px;
                                    height: 22px;
                                    background: ${colors.customColors.blueColorLight};
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 12px;
                                    color: ${colors.customColors.blueColor2};
                                    border-radius: 50%;
                                    margin-right: 6px;
                                }

                            }

                            p {
                                position: relative;
                                margin-top: 6px;
                                width: calc(100% - 115px);
                                font-size: 10px;
                                color: ${colors.customColors.blackColor2};
                            }
                        }

                        .icon {
                            position: absolute;
                            right: 4px;
                            bottom: 4px;
                            display: flex;

                            img {
                                width: 122px;
                                height: auto;
                            }
                        }
                    }
                }
            }

            &:hover {
                .box_head button {
                    opacity: 1;
                    visibility: visible;
                    transition: all 0.5s ease;
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

    .loading_screen {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 100px;

        img {
            position: relative;
            width: 500px;
        }
    }

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

        .configuration_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                padding: 0 25px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
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
                    font-size: 14px;
                }
            }
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

        .graph_sec {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;

            .graph_first_box {
                position: relative;
                width: 48%;
                height: 280px;
                border: 1px solid ${colors.customColors.borderColor};
                padding: 15px 15px 5px 10px;
                border-radius: 6px;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                h4 {
                    position: relative;
                    padding-left: 10px;
                    width: max-content;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor};
                    font-style: italic;

                    span {
                        font-size: 11px;
                        opacity: 0.5;
                    }
                }

                .graph_box {
                    position: relative;
                    margin-top: 20px;
                    width: 100%;
                    height: calc(100% - 40px);
                }
            }

            .graph_second_box {
                position: relative;
                width: 24%;
                height: 280px;
                padding: 15px;
                border: 1px solid ${colors.customColors.borderColor};
                border-radius: 6px;
                display: flex;
                flex-direction: column;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};

                h4 {
                    position: relative;
                    padding-left: 5px;
                    width: max-content;
                    font-size: 13px;
                    font-weight: 500;
                    color: ${colors.customColors.blackColor};
                    font-style: italic;

                    span {
                        font-size: 11px;
                        opacity: 0.5;
                    }
                }

                .graph_box {
                    position: relative;
                    margin-top: 20px;
                    width: 100%;
                    height: calc(100% - 40px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            .another_sec {
                position: relative;
                width: 24%;
                display: flex;
                flex-direction: column;

                .sec_box {
                    position: relative;
                    width: 100%;
                    height: 80px;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 6px;
                    box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2};
                    margin-bottom: 20px;
                    padding: 15px;
                    padding-left: 25px;
                    display: flex;
                    flex-direction: column;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        top: 10px;
                        left: 9px;
                        width: 3px;
                        height: calc(100% - 20px);
                        background: ${colors.customColors.blueColor4};
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

                    p {
                        position: relative;
                        font-size: 13px;
                        font-weight: 500;
                        font-style: italic;
                        color: ${colors.customColors.blackColor1};
                    }

                    span {
                        position: relative;
                        margin-top: 2px;
                        font-size: 24px;
                        font-weight: 600;
                    }
                }
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

            .heading_option_part {
                position: relative;
                display: flex;
                margin-left: auto;

                .inner_part {
                    position: relative;
                    width: max-content;
                    padding: 6px;
                    background: ${colors.customColors.blueColorLight};
                    border-radius: 6px;
                    display: flex;

                    .part_box {
                        position: relative;
                        padding: 8px 20px;
                        cursor: pointer;
                        border-radius: 4px;
                        text-decoration: none;
                        color: ${colors.customColors.blackColor1};
                        display: flex;
                        align-items: center;

                        i {
                            position: relative;
                            font-size: 11px;
                            margin-right: 6px;
                        }

                        span {
                            position: relative;
                            font-size: 12px;
                            font-weight: 500;
                        }

                        &.active {
                            color: ${colors.customColors.blueColor2};
                            background: ${colors.customColors.whiteColor};
                            box-shadow: 3px 4px 8px ${colors.boxShadowColors.shadowColor1}, -3px -3px 6px ${colors.boxShadowColors.shadowColor2};
                        }
                    }
                }
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
                margin-left: auto;
                display: flex;

                .filter_btn {
                    position: relative;
                    width: 200px;
                    height: 35px;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    padding: 5px 0;
                    cursor: pointer;

                    i {
                        position: relative;
                        width: 40px;
                        height: 100%;
                        color: ${colors.customColors.blackColor3};
                        font-size: 13px;
                        border-right: 1px solid ${colors.customColors.borderColor};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    p {
                        position: relative;
                        padding-left: 15px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor2};
                    }
                }

                .dropdown {
                    position: absolute;
                    top: 35px;
                    right: 0;
                    width: 300px;
                    z-index: 5;
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
                            width: 15%;
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
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 20%;
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
                                width: 15%;
                                align-items: center;
                            }

                            &:nth-of-type(2) {
                                width: 15%;
                                align-items: center;
                                justify-content: center;
                            }

                            &:nth-of-type(3) {
                                align-items: center;
                                width: 15%;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.greenColor};
                                }
                            }

                            &:nth-of-type(4) {
                                width: 15%;
                                align-items: center;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.redColor};
                                }
                            }

                            &:nth-of-type(5) {
                                width: 20%;
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
                                width: 20%;
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

        .secondtable_sec {
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
                            width: 14%;
                        }

                        &:nth-of-type(2) {
                            width: 16%;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            width: 15%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 12%;
                            justify-content: center;
                        }

                        &:nth-of-type(6) {
                            width: 15%;
                            justify-content: center;
                        }

                        &:nth-of-type(7) {
                            width: 16%;
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
                                width: 14%;
                                align-items: center;
                            }

                            &:nth-of-type(2) {
                                width: 16%;
                                align-items: center;

                                span {
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-left: 5px;
                                }
                            }

                            &:nth-of-type(3) {
                                width: 15%;
                                align-items: center;
                                justify-content: center;
                            }

                            &:nth-of-type(4) {
                                align-items: center;
                                width: 12%;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.greenColor};
                                }
                            }

                            &:nth-of-type(5) {
                                width: 12%;
                                align-items: center;
                                justify-content: center;

                                i {
                                    color: ${colors.customColors.redColor};
                                }
                            }

                            &:nth-of-type(6) {
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

                            &:nth-of-type(7) {
                                width: 16%;
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

    .empty_screen {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;

        .empty_img {
            position: relative;
            width: 275px;
            display: flex;

            img {
                position: relative;
                width: 100%;
                object-fit: cover;
            }
        }

        .empty_screen_content {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 30px;

            h4 {
                position: relative;
                font-size: 19px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }

            a {
                position: relative;
                font-size: 11px;
                font-weight: 400;
                color: ${colors.customColors.blackColor2};
                margin-top: 5px;
                text-decoration: none;
            }

            button {
                position: relative;
                padding: 0 25px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
                background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                color: ${colors.customColors.whiteColor};
                border-radius: 6px;
                font-size: 13px;
                font-weight: 500;
                margin-top: 20px;
                transition: all 0.5s ease;

                &:hover {
                    border-radius: 25px;
                    transition: all 0.5s ease;
                }

                i {
                    margin-right: 8px;
                    font-size: 14px;
                }
            }
        }

        .empty_screen_bottom_sec {
            position: relative;
            width: 70%;
            display: flex;
            margin-top: 30px;
            background: ${colors.customColors.lightBackground};
            border-radius: 6px;
            padding: 15px;

            span {
                position: relative;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
                color: ${colors.customColors.blueColor2};
                background: ${colors.customColors.whiteColor};
                border-radius: 5px;
                box-shadow: 10px 15px 20px ${colors.boxShadowColors.shadowColor1}, -5px -5px 10px ${colors.boxShadowColors.shadowColor2};
            }

            .bottom_item {
                position: relative;
                width: calc(100% - 40px);
                display: flex;
                flex-direction: column;
                padding-left: 15px;

                h6 {
                    position: relative;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 500;
                }

                p {
                    position: relative;
                    font-size: 11px;
                    color: ${colors.customColors.blackColor2};
                    margin-top: 3px;
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

                        &:disabled {
                            opacity: 0.4;
                            cursor: not-allowed;
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
                align-items: flex-start;

                li {
                    position: relative;
                    list-style: none;
                    display: flex;
                    flex-direction: column;

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

                a {
                    position: relative;
                    margin-left: auto;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-weight: 500;
                    padding: 10px 20px;
                    background: ${colors.customColors.blueColorLight};
                    color: ${colors.customColors.blueColor1};
                    border-radius: 6px;
                    cursor: pointer;

                    i {
                        margin-right: 6px;
                    }
                }
            }

            .inner_bottom_sec {
                position: relative;
                width: 100%;
                padding: 15px;
                display: flex;
                border-top: 1px solid ${colors.customColors.borderColor};

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

    .class_routine_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        margin-top: 25px;

        .table_heading {
            position: relative;
            width: 100;
            display: flex;

            h3 {
                position: relative;
                font-size: 17px;
                font-weight: 500;
                color: ${colors.customColors.blackColor1};
            }
        }

        .routine_table_container {
            position: relative;
            width: 100%;
            min-height: 120px;
            background: ${colors.customColors.whiteColor};
            border-radius: 12px;
            border: 1px solid ${colors.customColors.borderColor};
            box-shadow: 0 4px 20px ${colors.boxShadowColors.shadowColor2};
            overflow-x: auto;
            padding-bottom: 20px;
            margin-top: 20px;

            &::-webkit-scrollbar {
                height: 8px;
            }
            &::-webkit-scrollbar-track {
                background: #F8FAFC;
                border-radius: 0 0 12px 12px;
            }
            &::-webkit-scrollbar-thumb {
                background: #CBD5E1;
                border-radius: 4px;
            }
            &::-webkit-scrollbar-thumb:hover {
                background: #94A3B8;
            }

            table {
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                text-align: center;
                border: none;
                
                thead {
                    tr {
                        background: ${colors.customColors.blueColor2};

                        th {
                            border-right: 1px solid ${colors.customColors.borderColor};
                            border-bottom: 1px solid ${colors.customColors.borderColor};
                            padding: 12px 20px;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.whiteColor};
                            min-width: 120px;
                            width: auto;
                            vertical-align: middle;

                            &:last-of-type {
                                border-right: none;
                            }
                            
                            &.day_header {
                                font-size: 13px;
                                font-weight: 500;
                                min-width: 80px;
                                text-align: center;
                            }

                            &.break_header {
                                min-width: 65px;
                                text-align: center;
                                
                                .break_title {
                                    font-size: 14px;
                                    font-weight: 600;
                                    color: ${colors.customColors.whiteColor};
                                }
                            }

                            .period_header {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                gap: 3px;
                                white-space: nowrap;

                                .period_num {
                                    font-size: 13px;
                                    font-weight: 500;
                                    color: ${colors.customColors.whiteColor};
                                }

                                .period_time {
                                    font-size: 11px;
                                    font-weight: 500;
                                    color: ${colors.customColors.whiteColor};
                                    text-align: center;
                                    line-height: 1.25;
                                    white-space: nowrap;
                                }
                            }

                            &.sticky_col {
                                position: sticky;
                                left: 0;
                                background: ${colors.customColors.blueColor2} !important;
                                z-index: 5;
                                border-right: 1px solid ${colors.customColors.borderColor};
                            }
                        }
                    }
                }

                tbody {
                    tr {
                        &:last-of-type {
                            td {
                                border-bottom: none;
                            }
                        }

                        td {
                            border-right: 1px solid ${colors.customColors.borderColor};
                            border-bottom: 1px solid ${colors.customColors.borderColor};
                            padding: 8px 12px;
                            vertical-align: middle;
                            min-width: 100px;
                            width: auto;

                            &:last-of-type {
                                border-right: none;
                            }
                            
                            &.day_col {
                                font-weight: 500;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor};
                                vertical-align: middle;
                                text-align: center;
                            }

                            &.break_col {
                                min-width: 65px;
                                vertical-align: middle;
                                background: ${colors.customColors.blueColorLight1};
                                padding: 15px 4px;
                                border-bottom: none !important;

                                .recess_box {
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: space-evenly;
                                    height: 100%;
                                    min-height: 380px;
                                    gap: 15px;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor};
                                }
                            }

                            &.sticky_col {
                                position: sticky;
                                left: 0;
                                background: ${colors.customColors.whiteColor} !important;
                                z-index: 4;
                                border-right: 1px solid ${colors.customColors.borderColor};
                            }

                            .subject_card {
                                position: relative;
                                width: 100%;
                                min-height: 56px;
                                border-radius: 6px;
                                padding: 9px 12px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: flex-start;
                                text-align: left;
                                transition: transform 0.2s ease, box-shadow 0.2s ease;
                                cursor: pointer;
                                overflow: hidden;

                                &:hover {
                                    transform: translateY(-2px);
                                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
                                }

                                .sub_name {
                                    font-size: 12px;
                                    font-weight: 500;
                                    line-height: 1.25;
                                    margin-bottom: 2px;
                                }

                                .teacher_name {
                                    font-size: 10.5px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blueColor5};
                                    line-height: 1.25;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    width: 100%;
                                }

                                &.blue {
                                    background: #EFF6FF;
                                    border-left: 3.5px solid #2563EB;
                                    .sub_name { color: #1D4ED8; }
                                }

                                &.green {
                                    background: #ECFDF5;
                                    border-left: 3.5px solid #059669;
                                    .sub_name { color: #047857; }
                                }

                                &.orange {
                                    background: #FFF7ED;
                                    border-left: 3.5px solid #D97706;
                                    .sub_name { color: #C2410C; }
                                }

                                &.purple {
                                    background: #F5F3FF;
                                    border-left: 3.5px solid #7C3AED;
                                    .sub_name { color: #6D28D9; }
                                }

                                &.grey {
                                    background: #F1F5F9;
                                    border-left: 3.5px solid #475569;
                                    .sub_name { color: #334155; }
                                }
                            }

                            .add_sub_card {
                                width: 100%;
                                min-height: 56px;
                                height: 100%;
                                padding: 6px 8px;
                                border: 1.5px dashed ${colors.customColors.borderColor};
                                border-radius: 6px;
                                display: flex;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                                gap: 6px;
                                cursor: pointer;
                                transition: all 0.2s ease;
                                background: transparent;

                                &:hover {
                                    border-color: ${colors.customColors.borderColor1};
                                    background: ${colors.customColors.blueColorLight1};
                                    transform: translateY(-1px);
                                }

                                .add_icon {
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    border: 1.5px solid ${colors.customColors.borderColor};
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: ${colors.customColors.blackColor1};

                                    i {
                                        font-size: 10px;
                                    }
                                }

                                p {
                                    font-size: 11.5px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
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
                margin-top: 35px;
                margin-bottom: 20px;

                img {
                    position: relative;
                    width: 150px;
                    opacity: 0.5;
                }

                p {
                    position: relative;
                    font-size: 15px;
                    margin-top: 10px;
                    color: ${colors.customColors.blackColor3};
                }

                a {
                    position: relative;
                    width: 200px;
                    height: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                    color: ${colors.customColors.whiteColor};
                    border: none;
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    text-decoration: none;
                    margin-top: 15px;
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

    .class_details_sec {
        position: relative;
        width: 100%;
        display: flex;
        padding: 0 15px;
        margin-bottom: 15px;

        .student_box {
            position: relative;
            width: 365px;
            display: flex;
            padding-right: 25px;
            margin-top: 25px;

            .student_box_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 15px 18px;
                border-radius: 8px;
                box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};
                
                .student_heading {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .heading_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: flex-end;

                        h6 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                            font-style: italic;
                            line-height: 1;
                        }

                        a {
                            position: relative;
                            margin-left: auto;
                            font-size: 11px;
                            line-height: 1;
                            color: ${colors.customColors.blackColor};

                            span {
                                color: ${colors.customColors.blackColor2};
                            }
                        }
                    }

                    .btn_sec {
                        position: relative;
                        width: 100%;
                        margin-top: 6px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        button {
                            position: relative;
                            width: 48%;
                            height: 30px;
                            font-size: 11px;
                            cursor: pointer;
                            border-radius: 4px;
                            border: 1px solid ${colors.customColors.blueColor2};

                            i {
                                font-size: 12px;
                                margin-right: 5px;
                            }

                            &:first-of-type {
                                background: ${colors.customColors.blueColor2};
                                color: ${colors.customColors.whiteColor};
                            }

                            &:last-of-type {
                                background: ${colors.customColors.whiteColor};
                                color: ${colors.customColors.blueColor2};
                            }
                        }
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
                            width: 100%;
                            height: 100%;
                            border: none;
                            outline: none;
                            padding: 0 15px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }

                .student_list_sec {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;
                    max-height: 270px;
                    overflow-y: auto;
                    scrollbar-width: none;
                    -ms-overflow-style: none;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    .list_box {
                        position: relative;
                        width: 100%;
                        display: flex;
                        padding-bottom: 10px;
                        margin-bottom: 10px;
                        border-bottom: 1px solid ${colors.customColors.borderColor};

                        &:last-of-type {
                            border-bottom: none;
                        }

                        .left_sec {
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
                                font-size: 13px;
                                font-weight: 500;
                                color: ${colors.customColors.whiteColor};
                                text-transform: uppercase;
                            }
                        }

                        .right_sec {
                            position: relative;
                            width: calc(100% - 40px);
                            padding-left: 10px;
                            padding-right: 15px;
                            display: flex;
                            flex-direction: column;

                            h6 {
                                font-size: 12px;
                                line-height: 1.2;
                                font-weight: 400;
                                color: ${colors.customColors.blackColor1};
                            }

                            p {
                                font-size: 10px;
                                margin-top: 1px;
                                font-weight: 400;
                                color: ${colors.customColors.blackColor2};
                            }
                        }

                        a {
                            position: relative;
                            margin-left: auto;
                            width: 7px;
                            height: 7px;
                            text-decoration: none;
                            border-radius: 50%;

                            &.not_marked {
                                background: ${colors.customColors.blackColor3};
                            }
                            &.present {
                                background: ${colors.customColors.greenColor};
                            }
                            &.absent {
                                background: ${colors.customColors.redColor};
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
                            width: 200px;
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

        .details_box {
            position: relative;
            width: calc(100% - 365px);
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
                        background: linear-gradient(45deg, ${colors.customColors.blueColor1}, ${colors.customColors.blueColor3});
                        color: ${colors.customColors.whiteColor};
                        border: none;
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
                    width: 50%;
                    max-width: 405px;
                    padding: 10px;

                    .item_inner {
                        position: relative;
                        width: 100%;
                        padding: 12px;
                        padding-left: 15px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-left: 4px solid ${colors.customColors.blueColor2};
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
                                    color: ${colors.customColors.blueColor2};
                                    text-decoration: none;
                                    cursor: pointer;
                                }
                                
                                h6 {
                                    position: relative;
                                    padding-left: 8px;
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
                                    align-items: center;
                                    font-size: 10px;
                                    color: ${colors.customColors.orangeColor};
                                    margin-top: 2px;
                                    background: ${colors.customColors.yellowColorLight};
                                    border-radius: 25px;
                                    padding: 3px 15px;
                                    margin-left: auto;
                                    font-weight: 500;
                                    cursor: pointer;

                                    i {
                                        margin-left: 5px;
                                        font-size: 10px;
                                    }
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
                                        align-items: flex-end;

                                        h5 {
                                            position: relative;
                                            font-size: 10px;
                                            line-height: 1.2;
                                            font-weight: 500;
                                            font-style: italic;
                                            color: ${colors.customColors.blackColor};
                                        }

                                        li {
                                            position: relative;
                                            display: flex;
                                            align-items: center;
                                            list-style: none;
                                            margin-left: 6px;

                                            a {
                                                position: relative;
                                                width: max-content;
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

                                                    &.prefix {
                                                        margin-right: 5px;
                                                        margin-left: 0;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    ul {
                                        position: relative;
                                        margin-top: 3px;
                                        width: 100%;
                                        display: flex;
                                        flex-direction: column;

                                        li {
                                            position: relative;
                                            width: 100%;
                                            list-style: none;
                                            display: flex;
                                            align-items: center;

                                            p {
                                                max-width: calc(100% - 20px);
                                            }
                                        }

                                        p {
                                            line-height: 1.5;
                                            padding-right: 6px;
                                        }

                                        label {
                                            position: relative;
                                            width: 20px;
                                            height: 15px;
                                            background: ${colors.customColors.blackColor};
                                            font-size: 9px;
                                            color: ${colors.customColors.whiteColor};
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            border-radius: 4px;
                                        }
                                    }

                                    p {
                                        position: relative;
                                        max-width: 100%;
                                        font-size: 10px;
                                        color: ${colors.customColors.blackColor1};
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;

                                        &.empty {
                                            padding-left: 5px;
                                            margin-top: 6px;
                                            font-size: 12px;
                                            opacity: 0.5;
                                            font-style: italic;
                                        }
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
                                    padding: 5px 15px;
                                    cursor: pointer;
                                    border-radius: 4px;
                                    text-decoration: none;
                                    color: ${colors.customColors.blackColor1};
                                    display: flex;
                                    align-items: center;

                                    h6 {
                                        position: relative;
                                        font-size: 11px;
                                        font-weight: 500;
                                    }

                                    &.active {
                                        color: ${colors.customColors.blueColor2};
                                        background: ${colors.customColors.whiteColor};
                                        box-shadow: 3px 4px 8px ${colors.boxShadowColors.shadowColor1}, -3px -3px 6px ${colors.boxShadowColors.shadowColor2};
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
                                    border-radius: 4px;
                                    padding: 0 13px;
                                    background: ${colors.customColors.redColorLight};
                                    color:  ${colors.customColors.redColor};
                                    font-size: 10px;
                                    font-weight: 500;
                                    cursor: pointer;

                                    i {
                                        margin-right: 5px;
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
                    margin-top: 10px;

                    img {
                        position: relative;
                        width: 300px;
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