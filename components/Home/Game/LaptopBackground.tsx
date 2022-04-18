import { MutableRefObject, RefObject, useRef } from "react";
import Lottie, { LottieRef, LottieRefCurrentProps } from "lottie-react";

// Animation
import laptopAnimation from "../../../public/animations/laptop2.json";

const LaptopBackground = ({
  lottieRef,
}: {
  lottieRef: RefObject<LottieRefCurrentProps>;
}) => {
  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={laptopAnimation}
        initialSegment={[0, 70]}
        autoPlay={false}
        loop={false}
      />
    </div>
  );
};

export default LaptopBackground;
