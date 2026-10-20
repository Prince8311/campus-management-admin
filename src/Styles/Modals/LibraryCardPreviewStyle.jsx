import { Modal, styled } from "@mui/material";

export const LibraryCardPreviewWrapper = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    overflow: auto;

    .library-card-backdrop {
        background: rgba(2, 6, 14, .86);
        backdrop-filter: blur(10px);
    }

    .library-card-stage {
        width: min(960px, 88vw, calc((100dvh - 170px) * 1.85));
        outline: none;
        position: relative;
        margin: auto;
        color: #e3edf6;
        * {
            box-sizing: border-box;
        }
    }

    .library-card-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        font: 10px/1.5 Arial, sans-serif;
        letter-spacing: 2.5px;
        color: #afc2d4;
        > span {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        button {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid #ffffff30;
            background: #ffffff09;
            color: white;
            cursor: pointer;
            font: 26px/1 Arial, sans-serif;
            transition: background .2s, transform .2s;
            &:hover {
                background: #ffffff20;
                transform: rotate(90deg);
            }
            &:focus-visible {
                outline: 2px solid #5be2ee;
                outline-offset: 4px;
            }
        }
    }

    .library-card-status {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #57dae1;
        box-shadow: 0 0 14px #57dae1;
    }

    .library-card-perspective {
        perspective: 1800px;
        container-type: inline-size;
    }

    .library-card-spinner {
        position: relative;
        width: 100%;
        aspect-ratio: 1.85;
        transform-style: preserve-3d;
        animation: library-card-reveal 2200ms both;
    }

    .library-card-face {
        position: absolute;
        inset: 0;
        border-radius: 2.7cqw;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        overflow: hidden;
        border: 1px solid #d7efff9c;
        box-shadow: 0 35px 90px #0009, 0 0 45px #38bada12;
    }

    .library-card-front {
        background: #edf5fc;
        color: #0b2243;
        transform: translateZ(1px);
        font-family: Arial, sans-serif;
    }

    .library-card-header {
        height: 47%;
        position: relative;
        display: flex;
        align-items: flex-start;
        padding: 4cqw 3.5cqw;
        gap: 3cqw;
        background: radial-gradient(ellipse at 85% 5%, #1d7e9a70, transparent 55%), repeating-linear-gradient(135deg, transparent 0 10%, #39aade09 10% 18%), linear-gradient(120deg, #061329, #093760);
    }

    .library-card-library-background {
        position: absolute;
        inset: 0 0 0 auto;
        width: 58%;
        height: 100%;
        object-fit: cover;
        object-position: right 42%;
        opacity: .62;
        pointer-events: none;
        -webkit-mask-image: linear-gradient(90deg, transparent, #000 62%);
        mask-image: linear-gradient(90deg, transparent, #000 62%);
    }

    .library-card-logo, .library-card-school, .library-card-motto {
        position: relative;
        z-index: 1;
    }

    .library-card-school, .library-card-motto {
        text-shadow: 0 2px 8px #031328;
    }

    .library-card-wave {
        z-index: 2;
    }

    .library-card-logo {
        width: 15cqw;
        height: 15cqw;
        flex-shrink: 0;
        padding: 1cqw;
        border-radius: 2cqw;
        background: #fff;
        box-shadow: 0 0 0 .35cqw #ffffff20, 0 8px 20px #0003;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .library-card-school {
        flex: 1;
        text-align: center;
        padding-top: .5cqw;
        h2 {
            margin: 0;
            color: #fff;
            font: bold 3.5cqw/1.15 Georgia, serif;
            letter-spacing: -.08cqw;
        }
        p {
            margin: .4cqw 0 1.2cqw;
            color: #6de9f3;
            font: 4.1cqw/1.1 Georgia, serif;
        }
        > span {
            display: block;
            border-top: 1px solid #a7e8fa80;
            padding-top: 1.2cqw;
            font-size: 1.05cqw;
            letter-spacing: .32cqw;
            color: #e7f3ff;
        }
    }

    .library-card-motto {
        font-size: .95cqw;
        line-height: 1.9;
        text-transform: uppercase;
        letter-spacing: .22cqw;
        color: #c5e4f7;
        padding-top: .8cqw;
        span {
            display: block;
            width: 3cqw;
            height: 2px;
            background: #48dfec;
            margin-top: 1cqw;
        }
    }

    .library-card-wave {
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 6.8cqw;
    }

    .library-card-body {
        position: relative;
        height: 53%;
        display: flex;
        padding: 0 4cqw 2.5cqw;
        gap: 4cqw;
        background: radial-gradient(ellipse at 90% 110%, #69cde44d, transparent 60%), linear-gradient(135deg, #fff9, transparent 60%);
    }

    .library-card-campus-background {
        position: absolute;
        right: 0;
        bottom: 3.8cqw;
        width: 44%;
        height: 23cqw;
        object-fit: cover;
        object-position: center 65%;
        opacity: .3;
        mix-blend-mode: multiply;
        pointer-events: none;
        -webkit-mask-image: linear-gradient(90deg, transparent, #000 38%);
        mask-image: linear-gradient(90deg, transparent, #000 38%);
    }

    /* The portrait overlaps the header; keep its entire frame above the wave (z-index: 2). */

    .library-card-identity {
        position: relative;
        width: 21cqw;
        flex-shrink: 0;
        margin-top: -3cqw;
        z-index: 3;
    }

    .library-card-portrait {
        height: 23cqw;
        overflow: hidden;
        background: linear-gradient(140deg, #e2eaf1, #bdcdd9);
        border: .2cqw solid #31bfce;
        border-radius: 2cqw;
        img,
        svg {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .library-card-role {
        display: block;
        margin-top: 1.3cqw;
        text-align: center;
        padding: .8cqw;
        border: .3cqw solid #52cee0;
        border-radius: 3cqw;
        background: linear-gradient(110deg, #079dbb, #0b2452 60%, #7549bc);
        color: #fff;
        font-size: 1.5cqw;
        font-weight: 700;
        letter-spacing: .5cqw;
    }

    .library-card-information {
        flex: 1;
        position: relative;
        z-index: 1;
        h3 {
            margin: .3cqw 0 2.7cqw;
            padding-bottom: 1.3cqw;
            font-size: 2.7cqw;
            letter-spacing: .7cqw;
            border-bottom: .23cqw solid transparent;
            border-image: linear-gradient(90deg, #7042cf, #22c9d5) 1;
            i {
                color: #14aaba;
                letter-spacing: 0;
                margin-right: .5cqw;
            }
        }
        dl {
            margin: 0;
            > div {
                display: flex;
                align-items: baseline;
                margin-bottom: 1cqw;
                font-size: 1.85cqw;
                line-height: 1.25;
            }
        }
        dt {
            width: 19.5cqw;
            flex-shrink: 0;
        }
        dd {
            font-weight: 700;
            margin: 0;
            &::before {
                content: ':';
                display: inline-block;
                width: 3cqw;
                font-weight: 400;
            }
        }
    }

    .library-card-signature {
        position: absolute;
        bottom: 2cqw;
        right: 3cqw;
        text-align: center;
        transform: rotate(-3deg);
        span {
            font: italic 2.5cqw/1.2 'Brush Script MT', cursive;
            display: block;
            border-bottom: 1px solid #16344d80;
            padding: 0 1cqw .3cqw;
        }
        p {
            margin: .5cqw 0 0;
            font-size: .95cqw;
        }
    }

    .library-card-back {
        transform: rotateY(180deg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: repeating-linear-gradient(135deg, transparent 0 30px, #ffffff04 30px 60px), linear-gradient(130deg, #061329, #125275);
        img {
            width: 12cqw;
            height: 12cqw;
            object-fit: contain;
            border-radius: 1.5cqw;
            background: #fff;
            padding: 1cqw;
            margin-bottom: 2cqw;
        }
        span {
            font: 4cqw Georgia, serif;
            color: #8cecf4;
        }
        p {
            font: 1.3cqw Arial, sans-serif;
            letter-spacing: .4cqw;
            margin-top: 2cqw;
        }
    }

    .library-card-sheen {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: linear-gradient(115deg, transparent 30%, #ffffff55 48%, transparent 65%);
        transform: translateX(-150%);
        animation: library-card-shine 1100ms 1500ms ease-out both;
    }

    .library-card-caption {
        text-align: center;
        font: 12px/1.7 Arial, sans-serif;
        letter-spacing: .6px;
        color: #b2c4d5;
        margin: 28px 0 0;
        span {
            display: block;
            font-size: 10px;
            color: #75899d;
            margin-top: 4px;
        }
    }

    @keyframes library-card-reveal {
        0% {
            transform: translateY(45px) rotateY(-360deg) rotateX(8deg) scale(.65);
            opacity: 0;
            animation-timing-function: cubic-bezier(.18,.65,.24,1);
        }
        72% {
            transform: translateY(0) rotateY(0) rotateX(0) scale(1.065);
            opacity: 1;
            animation-timing-function: cubic-bezier(.22,1,.36,1);
        }
        100% {
            transform: translateY(0) rotateY(0) rotateX(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes library-card-shine {
        to {
            transform: translateX(150%);
        }
    }

    @media (max-width: 600px) {
        & {
            padding: 16px;
        }
        .library-card-stage {
            width: 100%;
        }
        .library-card-toolbar {
            font-size: 8px;
            letter-spacing: 1.5px;
        }
        .library-card-caption {
            font-size: 10px;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .library-card-spinner, .library-card-sheen {
            animation: none;
        }
        .library-card-toolbar button {
            transition: none;
        }
    }
`;
