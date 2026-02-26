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

                i {
                    margin-right: 8px;
                    font-size: 12px;
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
                        align-items: center;
                        justify-content: space-between;

                        span {
                            position: relative;
                            font-size: 16px;
                            font-weight: 600;
                            color: ${colors.customColors.blackColor1};
                        }

                        p {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
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
                    cursor: pointer;

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
                    padding: 0 10px;

                    p {
                        position: relative;
                        font-size: 13px;
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

                .preview_sec {
                    position: relative;
                    margin-left: auto;

                    .preview_btn {
                        position: relative;
                        width: 100px;
                        height: 35px;
                        border: 1px solid ${colors.customColors.greenColor};
                        border-radius: 6px;
                        display: flex;
                        align-items: center;
                        padding: 5px 15px;
                        cursor: pointer;
                        transition: all 0.3s ease;

                        &:hover {
                            border-radius: 25px;
                            transition: all 0.3s ease;
                        }

                        i {
                            position: relative;
                            color: ${colors.customColors.greenColor};
                            font-size: 13px;
                        }
                        
                        p {
                            position: relative;
                            font-size: 12px;
                            color: ${colors.customColors.greenColor};
                            margin-left: auto;
                        }
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
                        padding: 13px 15px;
                        background: ${colors.customColors.whiteColor};
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 8px;
                        display: flex;
                        box-shadow: 4px 4px 10px ${colors.boxShadowColors.shadowColor2},
                                    -2px -2px 5px ${colors.boxShadowColors.shadowColor2};

                        a {
                            position: relative;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            background: ${colors.customColors.borderColor};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 10px;
                            color: ${colors.customColors.blackColor};
                            text-decoration: none;
                            cursor: pointer;
                        }

                        .inner_content {
                            position: relative;
                            width: calc(100% - 45px);
                            display: flex;
                            flex-direction: column;
                            padding: 0 15px;

                            h6 {
                                position: relative;
                                font-size: 15px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor};
                            }
                            span {
                                position: relative;
                                display: flex;
                                font-size: 11px;
                                color: ${colors.customColors.blackColor1};
                                margin-top: 2px;
                            }
                        }

                        p {
                            position: relative;
                            width: 20px;
                            display: flex;
                            justify-content: flex-end;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                            margin-left: auto;
                        }
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
                    font-weight: 500;
                    color: ${colors.customColors.blackColor1};
                }
                
                span {
                    position: relative;
                    font-size: 13px;
                    color: ${colors.customColors.blackColor1};
                    margin: 0 8px;
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

                    li {
                        position: relative;
                        width: 100%;
                        padding: 10px 15px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border: 1px solid ${colors.customColors.borderColor};
                        border-radius: 6px;
                        margin-bottom: 10px;
                        list-style: none;
                        cursor: pointer;

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

                            p {
                                color: ${colors.customColors.blueColor2};
                            }

                            i {
                                color: ${colors.customColors.blueColor2};
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

                    .inner_head {
                        position: relative;
                        width: 100%;
                        display: flex;

                        h6 {
                            position: relative;
                            font-size: 13px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor1};
                        }
                    }

                    .inner_body {
                        position: relative;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        margin-top: 15px;

                        .input_field_sec {
                            position: relative;
                            width: 100%;
                            display: flex;
                            align-items: center;

                            .input_box {
                                position: relative;
                                width: calc(100% - 160px);
                                padding-right: 15px;

                                input {
                                    position: relative;
                                    width: 100%;
                                    height: 40px;
                                    border: 1px solid ${colors.customColors.borderColor};
                                    font-size: 12px;
                                    border-radius: 5px;
                                    padding: 5px 15px;
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
                                transition: all 0.3s ease;

                                &:hover {
                                    border-radius: 25px;
                                    transition: all 0.3s ease;
                                }
                            }
                        }

                        .mandatory_sec {
                            position: relative;
                            width: 100%;
                            margin-top: 15px;
                            display: flex;
                            justify-content: space-between;
                            padding: 12px 15px;
                            border: 1px solid ${colors.customColors.borderColor};
                            border-radius: 6px;

                            p {
                                position: relative;
                                font-size: 13px;
                                color: ${colors.customColors.blackColor1};
                                font-weight: 500;
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
                                    background: ${colors.customColors.blueColor1};
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
`;