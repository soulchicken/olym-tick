import Image from "next/image";

import ScrollDown from "@/assets/icons/scroll-down.svg";

const scrollStyle = {
  animation: "fadeInOut 2s infinite",
};

const keyframes = `
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const ScrollDownArrow = () => {
  return (
    <>
      <style>{keyframes}</style>
      <Image
        alt="Right Arrow Icon"
        src={ScrollDown}
        style={scrollStyle}
        width={60}
      />
    </>
  );
};

export default ScrollDownArrow;
