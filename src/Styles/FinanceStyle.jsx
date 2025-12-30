import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const FeeCollectionWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;

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
                padding: 0 20px;

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
                padding: 0 15px;
                display: flex;
                flex-direction: column;

                .class_item {
                    position: relative;
                    margin-top: 15px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid ${colors.customColors.borderColor};
                    border-radius: 8px;
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

                        &.active {
                            background: ${colors.customColors.lightBackground1};
                        }

                        .left_info {
                            position: relative;

                            li {
                                position: relative;
                                list-style: none;
                                display: flex;
                                flex-direction: column;

                                p {
                                    position: relative;
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    font-style: italic;
                                }

                                span {
                                    position: relative;
                                    margin-top: 1px;
                                    font-size: 15px;
                                    color: ${colors.customColors.blackColor};
                                    font-weight: 600;
                                }
                            }
                        }

                        .right_info {
                            position: relative;
                            margin-left: auto;
                            display: flex;

                            li {
                                position: relative;
                                list-style: none;
                                display: flex;
                                flex-direction: column;
                                padding: 0 14px;

                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    width: 1px;
                                    height: 100%;
                                    background: linear-gradient(to bottom, transparent, ${colors.customColors.borderColor1}, transparent);
                                }

                                &:last-of-type {
                                    padding-right: 0;

                                    &::before {
                                        display: none;
                                    }
                                }

                                p {
                                    position: relative;
                                    font-size: 10px;
                                    color: ${colors.customColors.blackColor2};
                                    font-style: italic;

                                    label {
                                        position: relative;
                                        margin-left: 3px;
                                        z-index: 5;

                                        i {
                                            font-size: 9px;
                                            cursor: pointer;
                                        }

                                        a {
                                            position: absolute;
                                            right: -10px;
                                            top: -42px;
                                            width: 135px;
                                            padding: 7px 10px;
                                            background: ${colors.customColors.whiteColor};
                                            box-shadow: 0 0 5px ${colors.boxShadowColors.shadowColor1};
                                            border-radius: 5px;
                                            font-size: 9px;
                                            pointer-events: none;
                                            opacity: 0;
                                            visibility: hidden;
                                            transition: all 0.5s ease;

                                            &::after {
                                                content: '';
                                                position: absolute;
                                                bottom: -4px;
                                                right: 10.5px;
                                                width: 8px;
                                                height: 8px;
                                                background: ${colors.customColors.whiteColor};
                                                transform: rotate(45deg);
                                                box-shadow: 4px 4px 5px ${colors.boxShadowColors.shadowColor1};
                                            }
                                        }

                                        &:hover {
                                            a {
                                                opacity: 1;
                                                visibility: visible;
                                                transition: all 0.5s ease;
                                            }
                                        }
                                    }
                                }

                                span {
                                    position: relative;
                                    font-size: 14px;
                                    font-weight: 500;

                                    b {
                                        font-weight: 500;
                                        font-size: 11px;
                                    }

                                    &.applied {
                                        color: ${colors.customColors.blueColor2};
                                    }

                                    &.discount {
                                        color: ${colors.customColors.yellowColor1};
                                    }

                                    &.paid {
                                        color: ${colors.customColors.greenColor};
                                    }

                                    &.due {
                                        color: ${colors.customColors.redColor};
                                    }
                                }
                            }
                        }

                        .icon {
                            position: relative;
                            margin-left: 40px;
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

                    .bottom_part {
                        position: relative;
                        width: 100%;

                        .bottom_inner {
                            position: relative;
                            width: 100%;
                            padding: 15px;
                            display: flex;
                            flex-direction: column;

                            .filter_search_sec {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

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
                            }

                            .table_sec {
                                position: relative;
                                width: 100%;
                                margin-top: 15px;

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
                                                width: 20%;
                                                justify-content: center;
                                            }
                                            &:nth-of-type(3) {
                                                width: 18%;
                                                justify-content: center;
                                            }
                                            &:nth-of-type(4) {
                                                width: 18%;
                                                justify-content: center;
                                            }
                                            &:nth-of-type(5) {
                                                width: 19%;
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
                                                    width: 20%;
                                                    align-items: center;
                                                    justify-content: center;
                                                }

                                                &:nth-of-type(3) {
                                                    width: 18%;
                                                    align-items: center;
                                                    justify-content: center;

                                                    p {
                                                        font-size: 15px;
                                                        font-weight: 500;
                                                        color: ${colors.customColors.greenColor};

                                                        b {
                                                            font-weight: 500;
                                                            font-size: 12px;
                                                        }
                                                    }
                                                }

                                                &:nth-of-type(4) {
                                                    width: 18%;
                                                    align-items: center;
                                                    justify-content: center;

                                                    p {
                                                        font-size: 15px;
                                                        font-weight: 500;
                                                        color: ${colors.customColors.redColor};

                                                        b {
                                                            font-weight: 500;
                                                            font-size: 12px;
                                                        }
                                                    }
                                                }

                                                &:nth-of-type(5) {
                                                    width: 19%;
                                                    align-items: center;
                                                    justify-content: center;

                                                    a.collect_btn {
                                                        position: relative;
                                                        padding: 6px 15px;
                                                        background: ${colors.customColors.blueColor1};
                                                        font-size: 12px;
                                                        font-weight: 500;
                                                        color: ${colors.customColors.whiteColor};
                                                        border-radius: 5px;
                                                        cursor: pointer;
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

export const FeeTransactionsWrapper = styled('div')`
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

    .fee_search_sec {
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
                width: 200px;
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
                        width: 20%;
                    }

                    &:nth-of-type(2) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 17%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 17%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
                        width: 12%;
                        justify-content: center;
                    }

                    &:nth-of-type(7) {
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
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
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
                            justify-content: center;
                            align-items: center;
                        }

                        &:nth-of-type(3) {
                            width: 12%;
                            justify-content: center;
                            align-items: center;
                        }

                        &:nth-of-type(4) {
                            width: 17%;
                            justify-content: center;
                            align-items: center;
                        }

                        &:nth-of-type(5) {
                            width: 17%;
                            justify-content: center;
                            align-items: center;
                        }

                        &:nth-of-type(6) {
                            width: 12%;
                            justify-content: center;
                            align-items: center;

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

                                &.success {
                                    color: ${colors.customColors.greenColor};
                                    background: ${colors.customColors.greenColorLight};
                                }
                            }
                        }

                        &:nth-of-type(7) {
                            width: 10%;
                            justify-content: center;
                            align-items: center;

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
`;

export const FeeConfigurationWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .heading_part {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;

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
`;

export const FeesStructureWrapper = styled('div')`
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

    .fees_structure_levels {
        position: relative;
        width: 100%;
        padding: 0 15px;
        display: flex;
        flex-direction: column;

        .level_box {
            position: relative;
            margin-top: 15px;
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid ${colors.customColors.borderColor};
            border-radius: 8px;
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

                &.active {
                    background: ${colors.customColors.lightBackground1};
                }

                .left_info {
                    position: relative;

                    li {
                        position: relative;
                        list-style: none;
                        display: flex;

                        p {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor2};
                            font-style: italic;
                        }
                    }
                }

                .icon {
                    position: relative;
                    margin-left: auto;
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
                        margin-top: 15px;

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
                                        width: 20%;
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
                                            width: 15%;
                                            display: flex;
                                            align-items: center;
                                        }

                                        &:nth-of-type(2) {
                                            width: 20%;
                                            align-items: center;
                                            justify-content: center;
                                        }

                                        &:nth-of-type(3) {
                                            width: 15%;
                                            align-items: center;
                                            justify-content: center;

                                            li {
                                                position: relative;
                                                list-style: none;
                                                display: flex;
                                                align-items: center;

                                                p {
                                                    font-size: 13px;
                                                    font-weight: 500;
                                                    color: ${colors.customColors.greenColor};
                                                }
                                                
                                                i {
                                                    font-size: 11px;
                                                    margin-left: 4px;
                                                    color: ${colors.customColors.blackColor2};
                                                    cursor: pointer;
                                                }
                                            }
                                        }

                                        &:nth-of-type(4) {
                                            width: 15%;
                                            align-items: center;
                                            justify-content: center;
                                        }

                                        &:nth-of-type(5) {
                                            width: 20%;
                                            align-items: center;
                                            justify-content: center;
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

export const DiscountWrapper = styled('div')`
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

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
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
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 30%;
                    }

                    &:nth-of-type(2) {
                        width: 30%;
                        justify-content: center;
                    }

                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 20%;
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
                            width: 30%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 30%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(3) {
                            align-items: center;
                            width: 20%;
                            justify-content: center;
                        }

                        &:nth-of-type(4) {
                            width: 20%;
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

export const BankAccountsWrapper = styled('div')`
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

            a {
                position: relative;
                text-decoration: none;
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
`;

export const AllAccountsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
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
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 20%;
                    }

                    &:nth-of-type(2) {
                        width: 20%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(5) {
                        width: 10%;
                        justify-content: center;
                    }

                    &:nth-of-type(6) {
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
                        padding: 12px 25px;
                        display: flex;
                        color: ${colors.customColors.blackColor};
                        font-size: 13px;
                        word-break: break-all;
                        line-height: 1.5;

                        &:nth-of-type(1) {
                            width: 20%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;
                        }

                        &:nth-of-type(5) {
                            width: 10%;
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

                        &:nth-of-type(6) {
                            width: 10%;
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

export const SplitAccountsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .table_sec {
        position: relative;
        width: 100%;
        margin-top: 25px;
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
                    align-items: center;
                    font-family: "Lemonada", cursive;
                    font-size: 12px;
                    word-break: break-all;
                    color: ${colors.customColors.whiteColor};
                    padding: 0 25px;
                    font-weight: 600;

                    &:nth-of-type(1) {
                        width: 30%;
                    }

                    &:nth-of-type(2) {
                        width: 30%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 20%;
                        justify-content: center;
                    }

                    &:nth-of-type(4) {
                        width: 20%;
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
                            width: 30%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 30%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 20%;
                            align-items: center;
                            justify-content: center;

                            li {
                                position: relative;
                                display: flex;
                                list-style: none;
                                align-items: center;

                                a {
                                    position: relative;
                                    font-size: 13px;
                                    color: ${colors.customColors.blackColor};
                                    text-decoration: none;
                                }

                                span {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-left: 5px;
                                }
                            }
                        }

                        &:nth-of-type(4) {
                            width: 20%;
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