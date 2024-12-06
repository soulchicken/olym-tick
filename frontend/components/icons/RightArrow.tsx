import Image from "next/image";

import rightArrow from "@/assets/icons/right-arrow.svg";

interface RightArrowProps {
  width?: number;
}

const RightArrow = ({ width = 24 }: RightArrowProps) => {
  return <Image alt="Right Arrow Icon" src={rightArrow} width={width} />;
};
export default RightArrow;
