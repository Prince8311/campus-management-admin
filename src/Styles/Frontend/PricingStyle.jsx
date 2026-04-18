import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const PricingPageWrapper = styled('div')`
   position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    padding-top: 20px;

    .heading_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        scroll-margin-top: 80px;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;
            align-items: center;

            a {
                position: relative;
                width: max-content;
                padding: 5px 20px;
                border-radius: 25px;
                background: ${colors.customColors.greenColorLight};
                color: ${colors.customColors.greenColor};
                font-size: 11px;
                font-weight: 500;
                text-decoration: none;
            }

            h2 {
                position: relative;
                font-size: 41px;
                margin-top: 10px;
                color: ${colors.customColors.blackColor};
                font-weight: 700;
                letter-spacing: 0.3px;
                line-height: 1.2;

                span {
                    margin: 0 5px;
                    line-height: 1.2;
                    background: linear-gradient(90deg, #1FA2D6 0%, #2BB673 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            p {
                position: relative;
                margin-top: 18px;
                display: flex;
                color: ${colors.customColors.blackColor1};
                font-size: 13px;
            }

            @media (max-width: 1440px) {
                width: 1024px;
            }

            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;

                h2 {
                    font-size: 33px;
                }

                p {
                    font-size: 12px;
                    text-align: center;
                }
            }
            @media (max-width: 876px) {
                padding: 0 30px;

                h2 {
                    font-size: 31px;
                    text-align: center;
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;

                a {
                    font-size: 10px;
                }

                h2 {
                    font-size: 21px;
                }

                p {
                    font-size: 11px;
                    margin-top: 10px;
                }
            }

            @media (max-width: 450px) {

                h2 {
                    font-size: 18.5px;
                }
            }
        }

        @media (max-width: 678px) {
            padding-top: 0;
            padding-bottom: 0;
        }
    }

    .pricing_content_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_content {
                position: relative;
                width: 400px;
                display: flex;

                .left_inner {
                    position: relative;
                    width: 100%;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                    padding: 20px;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;

                    .left_item_top {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;

                        a {
                            position: relative;
                            width: 40px;
                            height: 40px;
                            border-radius: 5px;
                            background: ${colors.customColors.blueColorLight};
                            color: ${colors.customColors.blueColor1};
                            font-size: 17px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            text-decoration: none;
                        }

                        span {
                            position: relative;
                            margin-left: auto;
                            font-size: 15px;
                            font-weight: 500;
                            color: ${colors.customColors.blueColor2};
                        }
                    }

                    .left_items {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;
                        
                        h5 {
                            position: relative;
                            font-size: 14px;
                            font-weight: 500;
                            color: ${colors.customColors.blackColor};
                        }

                        p {
                            position: relative;
                            margin-top: 5px;
                            font-size: 12px;
                            color: ${colors.customColors.blackColor1};
                        }

                        a {
                            position: relative;
                            margin: 15px 0;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            font-size: 10px;
                            font-style: 400;
                            color: ${colors.customColors.blackColor2};
                            text-decoration: none;

                            span {
                                font-size: 19px;
                                font-weight: 500;
                                color: ${colors.customColors.blackColor1};
                                margin-right: 5px;
                            }
                        }

                        ul {
                            position: relative;
                            width: 100%;
                            display: flex;
                            flex-direction: column;

                            li {
                                position: relative;
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                list-style: none;

                                &:last-of-type {
                                    margin-bottom: 0;
                                }

                                i {
                                    color: ${colors.customColors.greenColor1};
                                    font-size: 12px;
                                    margin-right: 6px;
                                }

                                span {
                                    font-size: 11px;
                                    color: ${colors.customColors.blackColor1};
                                }
                            }
                        }
                    }
                }
            }

            .right_content {
                position: relative;
                width: calc(100% - 400px);
                display: flex;
                padding-left: 20px;

                .right_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;

                    .right_top_sec {
                        position: relative;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;

                        .top_box {
                            position: relative;
                            width: 49%;
                            background: ${colors.customColors.whiteColor};
                            box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                            border-radius: 6px;
                            display: flex;
                            flex-direction: column;
                            padding: 20px;

                            .box_head {
                                position: relative;
                                width: 100%;
                                display: flex;
                                align-items: center;

                                .head_img {
                                    position: relative;
                                    width: 35px;
                                    height: 35px;
                                    background: ${colors.customColors.greenColorLight};
                                    border-radius: 5px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    
                                    img {
                                        position: relative;
                                        width: 14px;
                                    }
                                }

                                h6 {
                                    position: relative;
                                    margin-left: 10px;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor};
                                }
                            }

                            &:last-of-type {
                                .box_head {
                                    .head_img {
                                        background: ${colors.customColors.yellowColorLight};
                                    }
                                }
                            }

                            .box_item {
                                position: relative;
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                                margin-top: 15px;

                                p {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor1};
                                }

                                a {
                                    position: relative;
                                    margin-top: 10px;
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    font-size: 10px;
                                    font-style: 400;
                                    color: ${colors.customColors.blackColor2};
                                    text-decoration: none;

                                    span {
                                        font-size: 17px;
                                        font-weight: 500;
                                        color: ${colors.customColors.blueColor2};
                                        margin-right: 5px;
                                    }
                                }

                            }
                        }
                    }

                    .right_bottom_sec {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        padding: 5px 5px 20px 5px;
                        border-radius: 6px;
                        background: linear-gradient(135deg, #2ea6d6, #0d7fa6);

                        .bottom_box {
                            position: relative;
                            width: 100%;
                            background: #0d7fa6;
                            border-radius: 6px;
                            display: flex;
                            padding: 20px;

                            .box_img {
                                position: relative;
                                width: 40px;
                                height: 40px;
                                background: ${colors.customColors.greenColor};
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    position: relative;
                                    width: 16px;
                                }
                            }

                            .box_content {
                                position: relative;
                                width: calc(100% - 240px);
                                padding: 0 20px;
                                display: flex;
                                flex-direction: column;
                                

                                h6 {
                                    position: relative;
                                    font-size: 15px;
                                    font-weight: 500;
                                    color: ${colors.customColors.whiteColor};
                                }

                                p {
                                    position: relative;
                                    margin-top: 3px;
                                    font-size: 12px;
                                    color: ${colors.customColors.whiteColor1};
                                }
                            }

                            .box_price {
                                position: relative;
                                width: 200px;
                                display: flex;
                                flex-direction: column;
                            
                                a {
                                    position: relative;
                                    width: 100%;
                                    display: flex;
                                    text-decoration: none;
                                    font-weight: 400;
                                    color: ${colors.customColors.whiteColor1};

                                    del {
                                        position: relative;
                                        display: flex;
                                        align-items: flex-end;
                                        font-size: 12px;
                                    }

                                    span {
                                        font-size: 23px;
                                        font-weight: 600;
                                        color: ${colors.customColors.greenColor};
                                        margin-left: 10px;
                                    }
                                }

                                p {
                                    position: relative;
                                    margin-top: 3px;
                                    font-size: 11px;
                                    color: ${colors.customColors.whiteColor1};
                                }
                            }
                        }
                    }
                }
            }

            @media (max-width: 1440px) {
                width: 1024px;
            }

            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;

                .left_content {
                    width: 300px;

                    .left_inner {
                        padding: 15px;
                    }
                }

                .right_content {
                    width: calc(100% - 300px);
                    padding-left: 15px;
                    .right_inner {
                        .right_bottom_sec {
                            .bottom_box {
                                .box_content{
                                    width: calc(100% - 170px);
                                    padding: 0 15px;
                                }
                                .box_price {
                                    width: 130px;
                                }
                            }
                        }
                    }
                }
            }
            @media (max-width: 876px) {
                padding: 0 30px;
                flex-direction: column;

                .left_content {
                    width: 100%;
                }

                .right_content {
                    width: 100%;
                    padding-left: 0;
                    margin-top: 15px;
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;

                .left_content {
                    .left_inner {
                        .left_item_top {
                            a {
                                width: 35px;
                                height: 35px;
                                font-size: 15px;
                            }

                            span {
                                font-size: 13px;
                            }
                        }

                        .left_items {
                            margin-top: 15px;

                            a {
                                margin: 10px 0;

                                span {
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                }

                .right_content {
                    .right_inner {
                        .right_top_sec {
                            .top_box {
                                padding: 15px;

                                .box_head {
                                    .head_img {
                                        width: 32px;
                                        height: 32px;

                                        img {
                                            width: 12px;
                                        }
                                    }

                                    h6 {
                                        font-size: 13px;
                                    }
                                }

                                .box_item {
                                    margin-top: 10px;
                                    p {
                                        font-size: 11px;
                                    }

                                    a {
                                        span {
                                            font-size: 15px;
                                        }
                                    }
                                }
                            }
                        }

                        .right_bottom_sec {
                            margin-top: 15px;

                            .bottom_box {
                                padding: 15px;

                                .box_img {
                                    width: 35px;
                                    height: 35px;

                                    img {
                                        width: 14px;
                                    }
                                }

                                .box_content {
                                    width: calc(100% - 165px);

                                    h6 {
                                        font-size: 13px;
                                    }

                                    p {
                                        font-size: 11px;
                                    }
                                }

                                .box_price {
                                    a {
                                        del {
                                            font-size: 11px;
                                        }

                                        span {
                                            font-size: 20px;
                                        }
                                    }

                                    p {
                                        font-size: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            @media (max-width: 450px) {
                .left_content {
                    .left_inner {
                        .left_item_top {

                            span {
                                font-size: 12px;
                            }
                        }

                        .left_items {
                            margin-top: 10px;

                            h5 {
                                font-size: 13px;
                            }

                            p {
                                font-size: 11px;
                            }

                            a {
                                margin: 8px 0;

                                span {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
                .right_content {
                    .right_inner {
                        .right_top_sec {
                            .top_box {
                                padding: 10px;

                                .box_head {
                                    .head_img {
                                        width: 30px;
                                        height: 30px;

                                        img {
                                            width: 11px;
                                        }
                                    }

                                    h6 {
                                        font-size: 12px;
                                    }
                                }

                                .box_item {
                                    margin-top: 10px;
                                    p {
                                        font-size: 10px;
                                    }

                                    a {
                                        span {
                                            font-size: 14px;
                                        }
                                    }
                                }
                            }
                        }

                        .right_bottom_sec {
                            margin-top: 15px;

                            .bottom_box {
                                padding: 10px;

                                .box_img {
                                    width: 30px;
                                    height: 30px;

                                    img {
                                        width: 10px;
                                    }
                                }

                                .box_content {
                                    width: calc(100% - 125px);

                                    h6 {
                                        font-size: 12px;
                                    }

                                    p {
                                        font-size: 10px;
                                    }
                                }

                                .box_price {
                                    width: 95px;
                                    a {
                                        del {
                                            font-size: 10px;
                                        }

                                        span {
                                            font-size: 18px;
                                            font-weight: 500;
                                        }
                                    }

                                    p {
                                        font-size: 8px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding-top: 25px;
            padding-bottom: 0;
        }
    }

    .Administrative_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;

            .left_sec {
                position: relative;
                width: 550px;
                height: 350px;
                background: ${colors.customColors.whiteColor};
                box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                border-radius: 6px;
            }

            .right_sec {
                position: relative;
                width: calc(100% - 550px);
                padding-left: 30px;
                display: flex;
                align-items: center;
                
                .sec_inner {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    
                    h4 {
                        position: relative;
                        font-size: 25px;
                        color: ${colors.customColors.blackColor1};
                        font-weight: 600;

                        span {
                            color: ${colors.customColors.greenColor1};
                        }
                    }

                    p {
                        position: relative;
                        margin-top: 8px;
                        font-size: 12px;
                        color: ${colors.customColors.blackColor1};
                    }

                    .inner_items {
                        position: relative;
                        width: 100%;
                        margin-top: 20px;
                        display: flex;
                        flex-direction: column;

                        .item {
                            position: relative;
                            display: flex;
                            align-items: center;
                            margin-bottom: 20px;

                            &:last-of-type {
                                margin-bottom: 0;
                            }

                            .item_img {
                                position: relative;
                                width: 35px;
                                height: 35px;
                                background: ${colors.customColors.blueColorLight};
                                border-radius: 5px;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                img {
                                    position: relative;
                                    width: 14px;
                                }
                            }

                            .item_content {
                                position: relative;
                                width: calc(100% - 35px);
                                padding-left: 20px;
                                display: flex;
                                flex-direction: column;

                                a {
                                    position: relative;
                                    font-size: 13px;
                                    font-weight: 500;
                                    color: ${colors.customColors.blackColor1};
                                    text-decoration: none;
                                }

                                span {
                                    position: relative;
                                    font-size: 12px;
                                    color: ${colors.customColors.blackColor2};
                                    margin-top: 3px;
                                }
                            }
                        }
                    }
                }


            }

            @media (max-width: 1440px) {
                width: 1024px;
            }

            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;

                .left_sec {
                    width: 400px;
                    height: 270px; 
                }

                .right_sec {
                    width: calc(100% - 400px);
                    padding-left: 20px;

                    .sec_inner {
                        h4 {
                            font-size: 21px;
                        }

                        p {
                            font-size: 11px;
                        }
                    }
                }
            }
            @media (max-width: 876px) {
                padding: 0 30px;
                flex-direction: column;

                .left_sec {
                    width: 100%;
                    height: 300px;
                }

                .right_sec {
                    width: 100%;
                    padding-left: 0;
                    margin-top: 20px;
                }


            }
            @media (max-width: 678px) {
                padding: 0 15px;

                .right_sec {
                    
                    .sec_inner {
                        h4 {
                            font-size: 18px;
                            font-weight: 500;
                        }

                        p {
                            font-size: 10px;
                        }

                        .inner_items {
                            margin-top: 15px;

                            .item {
                                margin-bottom: 15px;

                                .item_img {
                                    width: 30px;
                                    height: 30px;

                                    img {
                                        width: 12px;
                                    }
                                }

                                .item_content {
                                    width: calc(100% - 30px);
                                    padding-left: 15px;

                                    a {
                                        font-size: 12px;
                                    }

                                    span {
                                        font-size: 11px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            @media (max-width: 450px) {

                .left_sec {
                    height: 235px;
                }

                .right_sec {
                    
                    .sec_inner {

                        .inner_items {

                            .item {

                                .item_img {

                                    img {
                                        width: 10px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding-top: 25px;
            padding-bottom: 0;
        }
    }

    .faq_sec {
        position: relative;
        width: 100%;
        padding: 40px 0;
        display: flex;
        justify-content: center;

        .sec_content {
            position: relative;
            width: 1320px;
            display: flex;
            flex-direction: column;

            .sec_head {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;

                h3 {
                    position: relative;
                    font-size: 25px;
                    color: ${colors.customColors.blackColor1};
                    font-weight: 600;
                }
            }

            .faq_content_sec {
                position: relative;
                width: 100%;
                display: flex;
                margin-top: 25px;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: flex-start;

                .faq_box {
                    position: relative;
                    width: 49%;
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    border-radius: 6px;
                    background: ${colors.customColors.whiteColor};
                    box-shadow: 0 0 10px ${colors.boxShadowColors.shadowColor1};
                    margin-bottom: 25px;

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    .box_top {
                        position: relative;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        h6 {
                            position: relative;
                            font-size: 13px;
                            color: ${colors.customColors.blackColor};
                            font-weight: 400;
                        }

                        a {
                            position: relative;
                            font-size: 14px;
                            color: ${colors.customColors.blackColor2};
                            cursor: pointer;
                            text-decoration: none;
                        }


                    }

                    .box_bottom {
                        
                        position: relative;
                        width: 100%;
                        margin-top: 10px;
                        display: flex;


                        p {
                            position: relative;
                            width: 100%;
                            font-size: 11px;
                            color: ${colors.customColors.blackColor1};
                        }
                    }
                }
            }

            @media (max-width: 1440px) {
                width: 1024px;
            }

            @media (max-width: 1099px) {
                width: 100%;
                padding: 0 50px;
            }
            @media (max-width: 876px) {
                padding: 0 30px;

                .sec_head {
                    h3 {
                        font-size: 18px;
                    }
                }

                .faq_content_sec {
                    margin-top: 15px;

                    .faq_box {
                        width: 100%;
                    }
                }
            }
            @media (max-width: 678px) {
                padding: 0 15px;
            }
            @media (max-width: 575px) {
                .sec_head {
                    h3 {
                        font-size: 15px;
                    }
                }

                .faq_content_sec {

                    .faq_box {
                        .box_top {
                            h6 {
                                font-size: 12px;
                            }

                            a {
                                font-size: 13px;
                            }
                        }

                        .box_bottom {
                            p {
                                font-size: 10px;
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 678px) {
            padding: 25px 0;
        }
    }
`;