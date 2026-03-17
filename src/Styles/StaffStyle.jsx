import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const StaffInformationWrapper = styled('div')`
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
                    padding: 0 20px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 17%;
                    }

                    &:nth-of-type(2) {
                        width: 14%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 10%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 10%;
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
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(8) {
                        width: 10%;
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
                        padding: 12px 20px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 17%;
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
                            width: 14%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 10%;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            align-items: center;
                            width: 10%;
                            justify-content: center;
                        }
                        &:nth-of-type(5) {
                            align-items: center;
                            width: 12%;
                            justify-content: center;
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
                            width: 12%;
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

                        &:nth-of-type(8) {
                            width: 10%;
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

export const AddStaffWrapper = styled('div')`
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
                /* height: 0; */
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