import { CircleLoaderWrapper } from "../../Styles/ModalStyle";
import { colorNames } from "../../Theme/Colors";

const CircleLoader = ({ width = "10px", height = "10px", margin = "0px", color = "greenColor" }) => {
    const colors = colorNames();

    return (
        <>
            <CircleLoaderWrapper style={{ width: width, height: height, margin: margin, borderColor: colors.customColors[color] }} />
        </>
    );
}

export default CircleLoader;