interface RoundBoxProps {
  children: React.ReactNode;
  row: string;
  col: string;
}

const RoundBox = ({ children, row, col }: RoundBoxProps) => {
  return (
    <div style={{ ...outerStyle, gridColumn: `${col}`, gridRow: `${row}` }}>
      {children}
    </div>
  );
};

export default RoundBox;

const outerStyle: React.CSSProperties = {
  position: "relative",
  padding: "2rem", // 내부 여백
  borderRadius: "20px", // 모서리 둥글게
  background: "rgba(0, 0, 0, 0.6)", // 내부 배경 (투명도 조절 가능)
  backdropFilter: "blur(10px)", // 배경 흐림 효과
  border: "none", // 기본 보더 제거
  overflow: "hidden", // 가상 요소 초과 영역 숨기기

  /* 외부 그라데이션 효과 */
  backgroundClip: "border-box",
  boxShadow: "0px 0px 0px 3px rgba(255, 255, 255, 0.3)", // 투명 보더 효과
};
