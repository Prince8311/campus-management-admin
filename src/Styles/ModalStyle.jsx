import { styled } from "@mui/material";
import { colorNames } from "../Theme/Colors";
const colors = colorNames();

export const ButtonLoaderWrapper = styled('div')`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center !important;

    svg {
        position: relative;
        width: 50px;
        height: 20px;

        rect {
            fill: ${colors.customColors.whiteColor};
        }
    }
`;

export const SkeletonBoxWrapper = styled('div')`
    position: relative;
    border-radius: 4px;
    background: ${colors.customColors.lightBackground2};
    animation: pulse 1.4s infinite ease-in-out;

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
    }
`;