import { css } from "@/styled-system/css";

interface RoundBoxProps {
  children: React.ReactNode;
}

const RoundBox = ({ children }: RoundBoxProps) => {
  return <div className={roundBoxStyle}>{children}</div>;
};

export default RoundBox;

const roundBoxStyle = css({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  borderRadius: "20px", // 모서리 둥글게
  background: "rgba(0, 0, 0, 0.6)", // 내부 배경 (투명도 조절 가능)
  backdropFilter: "blur(10px)", // 배경 흐림 효과
  border: "none", // 기본 보더 제거
  overflow: "hidden", // 가상 요소 초과 영역 숨기기

  /* 외부 그라데이션 효과 */
  backgroundClip: "border-box",
  boxShadow: "0px 0px 0px 3px rgba(255, 255, 255, 0.3)", // 투명 보더 효과

  _hover: {
    boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)",
  },
});
