import { SkeletonBoxWrapper } from "../../Styles/ModalStyle";

const SkeletonLoader = ({ width, height }) => {
    return (
        <>
            <SkeletonBoxWrapper style={{ width: width, height: height }}></SkeletonBoxWrapper>
        </>
    );
}

export default SkeletonLoader;