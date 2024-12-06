import { css } from "@/styled-system/css";

const RoundBox: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={roundBoxStyle}>{children}</div>;
};

export default RoundBox;

const roundBoxStyle = css({
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
});
