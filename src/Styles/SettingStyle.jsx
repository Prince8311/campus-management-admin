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

                        .inner_content {
                            position: relative;
                            width: calc(100% - 28px);
                            display: flex;
                            padding-left: 12px;

                            h6 {
                                position: relative;
                                max-width: 100%;
                                font-size: 13.5px;
                                font-style: italic;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }

                    .inner_btn {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 6px;
                        justify-content: flex-end;
                        padding-bottom: 6px;
                        border-bottom: 1px solid ${colors.customColors.borderColor};

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

                    .bottom_part {
                        position: relative;
                        margin-top: 6px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                        a {
                            position: relative;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor};
                            text-decoration: none;
                        }

                        .students {
                            position: relative;
                            display: flex;
                            align-items: center;
                            margin-left: 10px;

                            ul {
                                position: relative;
                                display: flex;
                                align-items: center;

                                li {
                                    position: relative;
                                    list-style: none;
                                    width: 30px;
                                    height: 30px;
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
                                        font-size: 9px;
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
                                width: 30px;
                                height: 30px;
                                background: ${colors.customColors.borderColor};
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 7.5px;
                                font-weight: 500;
                                border: 2px solid ${colors.customColors.whiteColor};
                                margin-left: -16.5px;
                                color: ${colors.customColors.blackColor};
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