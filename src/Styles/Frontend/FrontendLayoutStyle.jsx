import { styled } from "@mui/material";
import { colorNames } from "../../Theme/Colors";
const colors = colorNames();

export const FrontendLayoutWrapper = styled('div')`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${colors.customColors.whiteColor};

    &.no_scroll {
        height: 100vh;
        overflow-y: hidden;
    }

    .top_section {
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 999;
    }

    .body_section {
        position: relative;
        width: 100%;
    }
    
    .bottom_section {
        position: relative;
        margin-top: 15px;
        width: 100%;
        margin-top: auto;
    }
`;