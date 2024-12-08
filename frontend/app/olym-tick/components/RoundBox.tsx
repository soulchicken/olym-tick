import { css } from "@/styled-system/css";

interface RoundBoxProps {
  children: React.ReactNode;
}

const RoundBox = ({ children }: RoundBoxProps) => {
  return <div className={roundBoxStyle}>{children}</div>;
};

export default RoundBox;

const roundBoxStyle = css({
  position: "relative",
  padding: "2rem",
  borderRadius: "10px",
  background: "rgba(0, 0, 0, 0.6)",
  backdropFilter: "blur(10px)",
  overflow: "hidden",
  boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.3)",
  transition: "box-shadow 0.3s ease, border 0.3s ease",
  _hover: {
    boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
    border: "1px solid rgba(255, 255, 255, 0.8)",
  },
});
