import ScrollDownArrow from "@/components/icons/ScrollDownArrow";
import { css } from "@/styled-system/css";

interface ScrollButtonProps {
  handleScroll: () => void;
}

const ScrollButton = ({ handleScroll }: ScrollButtonProps) => {
  return (
    <button className={buttonStyle} onClick={handleScroll}>
      <ScrollDownArrow />
    </button>
  );
};

export default ScrollButton;

const buttonStyle = css({
  cursor: "pointer",
});
