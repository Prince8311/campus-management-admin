import { SkeletonBoxWrapper } from "../../Styles/ModalStyle";

const SkeletonLoader = ({ width, height, margin = "0px" }) => {
    return (
        <>
            <SkeletonBoxWrapper style={{ width: width, height: height, margin: margin }}></SkeletonBoxWrapper>
        </>
    );
}

export default SkeletonLoader;