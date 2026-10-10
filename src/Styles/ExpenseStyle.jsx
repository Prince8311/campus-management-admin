import styled from "@emotion/styled";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ExpenseManagementWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 10px;
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
                height: 35px;
                padding: 0 35px;
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
`;

export const GeneralExpenseWrapper = styled('div')`
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
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(3) {
                        width: 15%;
                        justify-content: center;
                    }
                    &:nth-of-type(4) {
                        width: 20%;
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
                            width: 20%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                        }
                        &:nth-of-type(5) {
                            width: 15%;
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

export const EventExpenseWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .folder_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 20px;
        padding: 0 10px;

        .folder_box{
            position: relative;
            width: 12%;
            display: flex;
            padding: 5px;
            cursor: pointer;
            border-radius: 3px;

            &:hover {
                background: ${colors.customColors.lightBackground3};
            }

            .box_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 8px 0;

                .img_sec {
                    position: relative;
                    width: 70px;
                    height: auto;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                p {
                    position: relative;
                    font-size: 13px;
                    font-weight: 400;
                    color: ${colors.customColors.blackColor};
                    margin-top: 3px;
                    line-height: 1;
                }

                a {
                    position: relative;
                    width: auto;
                    padding: 3px 15px;
                    padding-left: 6px;
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    font-weight: 500;
                    color: ${colors.customColors.greenColor};
                    background:  ${colors.customColors.greenColorLight};
                    margin-top: 5px;
                    text-decoration: none;
                    border-radius: 25px;

                    i {
                        font-size: 6px;
                        margin-right: 6px;
                    }

                    &.active {
                        color: ${colors.customColors.greenColor};
                        background:  ${colors.customColors.greenColorLight};
                    }
                    &.cancel {
                        color: ${colors.customColors.redColor};
                        background:  ${colors.customColors.redColorLight};
                    }
                    &.conclude {
                        color: ${colors.customColors.blackColor2};
                        background:  ${colors.customColors.lightBackground3};
                    }
                }
            }
        }
    }
`;

export const EventDetailsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .event_details_container {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        width: calc(100% - 30px);
        margin: 0 15px;
        min-height: 150px;
        display: flex;
        align-items: center;
        gap: 28px;
        padding: 18px 22px;
        border-radius: 16px;
        color: #fff;
        background: linear-gradient(115deg, #00b3f5, #0076e5 43%, #005dc6 70%, #08b7ed);
        box-shadow: 0 8px 20px rgba(0, 137, 221, .16);
        border: 1px solid rgba(255, 255, 255, .35);

        .event_waves { position: absolute; inset: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; }
        button { cursor: pointer; font-family: inherit; }
        button:focus-visible { outline: 3px solid #fff; outline-offset: 4px; }
        .event_back {
            flex-shrink: 0;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, .15);
            border-radius: 50%;
            background: rgba(255, 255, 255, .25);
            color: #fff;
            font-size: 19px;
            &:hover { background: rgba(255, 255, 255, .4); }
        }
        .event_summary {
            min-width: 0;
            .event_label { display: block; margin-bottom: 4px; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.2px; color: #d0f2ff; }
            .event_title { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
            h5 { margin: 0; font-size: 25px; line-height: 1.2; font-weight: 700; color: #fff; }
            .event_status {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 11px;
                border-radius: 20px;
                background: #dcffe3;
                color: #16b644;
                font-size: 10px;
                font-weight: 600;
                line-height: 1;
                i { font-size: 7px; }
            }
            p { margin: 10px 0 2px; font-size: 11px; color: #e0f3ff; }
            .event_cost { display: block; font-size: 34px; font-weight: 700; line-height: 1.15; }
        }
        .event_stats {
            display: flex;
            align-self: flex-end;
            align-items: center;
            gap: 14px;
            padding-left: 28px;
            border-left: 2px solid rgba(255, 255, 255, .35);
        }
        .event_stat {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 8px 8px 8px 12px;
            border: 1px solid rgba(255, 255, 255, .12);
            border-radius: 12px;
            background: linear-gradient(135deg, rgba(255, 255, 255, .18), rgba(255, 255, 255, .08));
            i { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: rgba(255, 255, 255, .12); font-size: 20px; color: #daf4ff; }
            span { display: block; font-size: 10px; white-space: nowrap; color: #e0f3ff; }
            strong { display: block; font-size: 18px; line-height: 1.2; font-weight: 600; margin-top: 2px}
        }
        .event_add {
            margin-left: auto;
            flex-shrink: 0;
            height: 44px;
            padding: 0 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: 1px solid #d5efff;
            border-radius: 11px;
            background: linear-gradient(#fff, #e4f5ff);
            color: #0078ed;
            font-size: 12px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 65, 153, .12);
            &:hover { background: #fff; }
        }
        @media (max-width: 1000px) {
            gap: 18px;
            flex-wrap: wrap;
            .event_stats { padding-left: 18px; gap: 10px; }
            .event_add { padding: 0 22px; }
        }
        @media (max-width: 600px) {
            padding: 18px 16px;
            gap: 16px;
            .event_summary { flex: 1; }
            .event_summary h5 { font-size: 22px; }
            .event_summary .event_cost { font-size: 30px; }
            .event_stats { width: 100%; border-left: none; padding-left: 0; }
            .event_stat { flex: 1; padding: 10px; }
            .event_add { width: 100%; }
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
                        width: 20%;
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
                        width: 20%;
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
                            width: 20%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                        }
                        &:nth-of-type(5) {
                            width: 15%;
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

export const RetailExpenseWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .folder_section {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 20px;
        padding: 0 10px;

        .folder_box{
            position: relative;
            width: 12%;
            display: flex;
            padding: 5px;
            cursor: pointer;
            border-radius: 3px;

            &:hover {
                background: ${colors.customColors.lightBackground3};
            }

            .box_inner {
                position: relative;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 8px 0;

                .img_sec {
                    position: relative;
                    width: 70px;
                    height: auto;
                    display: flex;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                p {
                    position: relative;
                    font-size: 13px;
                    font-weight: 400;
                    color: ${colors.customColors.blackColor};
                    margin-top: 3px;
                    line-height: 1;
                }

                a {
                    position: relative;
                    width: auto;
                    padding: 3px 15px;
                    padding-left: 6px;
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    font-weight: 500;
                    color: ${colors.customColors.greenColor};
                    background:  ${colors.customColors.greenColorLight};
                    margin-top: 5px;
                    text-decoration: none;
                    border-radius: 25px;

                    i {
                        font-size: 6px;
                        margin-right: 6px;
                    }

                    &.paid {
                        color: ${colors.customColors.greenColor};
                        background:  ${colors.customColors.greenColorLight};
                    }
                    &.due {
                        color: ${colors.customColors.redColor};
                        background:  ${colors.customColors.redColorLight};
                    }
                }
            }
        }
    }
`;

export const RetailerDetailsWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .retaile_details_container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;

        .back_icon {
            position: relative;
            margin-right: 20px;

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

        .contain_item_sec {
            position: relative;
            display: flex;
            align-items: center;

            .icon {
                position: relative;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    object-fit: cover;
                }
            }

            h5 {
                position: relative;
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 500;
                color: ${colors.customColors.blackColor};
                margin-left: 10px;
            }
        }

        .top_btn {
            position: relative;
            margin-left: auto;

            button {
                position: relative;
                height: 35px;
                padding: 0 35px;
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

    .price_section {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        padding: 0 15px;
        margin-top: 25px;

        .price_card {
            --card-color: #1473e6;
            --card-soft: #dcedff;
            --card-border: #b8dcff;
            position: relative;
            min-width: 0;
            min-height: 135px;
            padding: 15px 20px 14px;
            box-sizing: border-box;
            border: 1px solid var(--card-border);
            border-radius: 18px;
            background: linear-gradient(120deg, #ffffff 30%, var(--card-soft) 180%);
            box-shadow: 0 8px 24px rgba(36, 54, 87, 0.08);
            overflow: hidden;

            &.burn_amount {
                --card-color: #ef2e54;
                --card-soft: #ffe7eb;
                --card-border: #ffcbd5;
            }

            &.remaining_amount {
                --card-color: #0eae46;
                --card-soft: #e0f8e8;
                --card-border: #c9efd5;
            }

            .price_card_top {
                position: relative;
                display: flex;
                align-items: center;
                min-height: 72px;
                z-index: 1;
            }

            .price_icon {
                width: 64px;
                height: 64px;
                flex: 0 0 64px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: var(--card-color);
                background: var(--card-soft);
                font-size: 27px;
            }

            .price_content {
                position: relative;
                margin-left: 15px;
                z-index: 2;

                h6 {
                    font-size: 11px;
                    line-height: 1.2;
                    font-weight: 500;
                    color: #30364f;
                    text-transform: uppercase;
                    letter-spacing: .3px;
                }

                h3 {
                    margin-top: 6px;
                    font-size: clamp(22px, 1.8vw, 29px);
                    line-height: 1;
                    font-weight: 600;
                    color: var(--card-color);
                    white-space: nowrap;
                }

                p {
                    margin-top: 7px;
                    font-size: 10.5px;
                    color: #6c7290;
                    white-space: nowrap;
                }
            }

            .price_graph {
                position: absolute;
                right: -18px;
                top: 2px;
                width: 40%;
                height: 58px;
                fill: none;
                opacity: .42;

                path {
                    stroke: var(--card-color);
                    stroke-width: 3.5;
                    stroke-linecap: round;
                }

                circle {
                    fill: var(--card-color);
                }
            }

            .progress_row {
                position: relative;
                display: flex;
                align-items: center;
                gap: 14px;
                margin-top: 7px;

                .progress_track {
                    height: 11px;
                    flex: 1;
                    overflow: hidden;
                    border-radius: 20px;
                    background: var(--card-soft);

                    span {
                        display: block;
                        width: 22%;
                        height: 100%;
                        border-radius: inherit;
                        background: linear-gradient(90deg, var(--card-color), color-mix(in srgb, var(--card-color) 55%, white));
                    }
                }

                strong {
                    min-width: 62px;
                    font-size: 10.5px;
                    font-weight: 500;
                    color: #343a55;
                    white-space: nowrap;
                }
            }

            &.burn_amount .progress_track span {
                width: 16%;
            }

            &.remaining_amount .progress_track span {
                width: 90%;
            }
        }
    }

    @media (max-width: 1100px) {
        .price_section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (max-width: 720px) {
        .price_section {
            grid-template-columns: 1fr;

            .price_card {
                padding: 14px 16px;

                .price_icon {
                    width: 56px;
                    height: 56px;
                    flex-basis: 56px;
                    font-size: 24px;
                }

                .price_content {
                    margin-left: 14px;
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
                        width: 20%;
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
                        width: 20%;
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
                            width: 20%;
                            display: flex;
                        }

                        &:nth-of-type(2) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(3) {
                            width: 15%;
                            align-items: center;
                            justify-content: center;
                        }
                        &:nth-of-type(4) {
                            width: 20%;
                            align-items: center;
                        }
                        &:nth-of-type(5) {
                            width: 15%;
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

export const StockManagementWrapper = styled('div')`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    .page_head {
        position: relative;
        width: 100%;
        display: flex;
        margin-top: 10px;
        padding: 0 15px;

        h2 {
            position: relative;
            font-size: 21px;
            font-weight: 600;
            color: ${colors.customColors.blackColor};
            font-family: "SUSE", sans-serif;
        }
    }

    .stock_sec {
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        padding: 0 5px;

        .stock_box {
            position: relative;
            width: 25%;
            max-width: 302.75px;
            max-height: 135px;
            padding: 10px;

            .box_inner {
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

                            &.inStock {
                                background: ${colors.customColors.greenColorLight};
                                color: ${colors.customColors.greenColor1};
                            }
                            &.outOfStock {
                                background: ${colors.customColors.redColorLight};
                                color: ${colors.customColors.redColor};
                            }
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
`;
