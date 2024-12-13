interface RoundBoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isHover?: boolean;
  isPadding?: boolean;
  onClick?: () => void;
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
      className={className}
      style={{
        ...roundBoxStyle,
        ...(isPadding ? paddingStyle : {}),
        ...(isHover ? hoverStyle : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default RoundBox;

const roundBoxStyle: React.CSSProperties = {
  position: "relative",
  borderRadius: "20px",
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(10px)",
  overflow: "hidden",
  border: "none",
  /* 외부 그라데이션 효과 */
  backgroundClip: "border-box",
  boxShadow: "0px 0px 0px 3px rgba(255, 255, 255, 0.3)", // 투명 보더 효과
};

const hoverStyle = {
  _hover: {
    boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
  },
};

const paddingStyle = {
  padding: "2rem",
};
