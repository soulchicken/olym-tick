import { clsx } from "clsx";

import { css } from "@/styled-system/css";

interface RoundBoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isHover?: boolean;
  isPadding?: boolean;
}

const RoundBox = ({
  children,
  isHover = false,
  isPadding = true,
  style,
  className,
  ...rest
}: RoundBoxProps) => {
  return (
    <div
      style={style}
      className={clsx(
        roundBoxStyle,
        isHover && hoverStyle,
        isPadding && paddingStyle,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default RoundBox;

const roundBoxStyle = css({
  position: "relative",
  borderRadius: "20px",
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(10px)",
  border: "none",
  overflow: "hidden",

  /* 외부 그라데이션 효과 */
  backgroundClip: "border-box",
  boxShadow: "0px 0px 0px 3px rgba(255, 255, 255, 0.3)", // 투명 보더 효과
});

const hoverStyle = css({
  _hover: {
    boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
  },
});

const paddingStyle = css({
  padding: "2rem",
});
