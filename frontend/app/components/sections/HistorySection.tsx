import Image from "next/image";

import Poster1 from "@/assets/images/poster-1.png";
import Poster2 from "@/assets/images/poster-2.png";
import { css } from "@/styled-system/css";

const HistorySection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <div className={wrapperStyle}>
        <div className={postInfoStyle}>
          <Image alt="88 올림픽 포스터 1" src={Poster1} width={300} />
          <div>
            <h3 className={h3Style}>progress</h3>
            <p className={pStyle}>1988 올림픽 이후에도...</p>
          </div>
        </div>
        <div className={postInfoStyle}>
          <div>
            <h3 className={h3Style}>HARMONY</h3>
            <p className={pStyle}>여전히 필요한...</p>
          </div>
          <Image alt="88 올림픽 포스터 2" src={Poster2} width={300} />
        </div>
        {children}
      </div>
    </>
  );
};

export default HistorySection;

const wrapperStyle = css({
  padding: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const postInfoStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "5rem",
  gap: "20rem",
});

const h3Style = css({
  fontSize: "5rem",
  letterSpacing: "0.075rem",
  lineHeight: "4rem",
  fontFamily: "headline",
  color: "white",
});

const pStyle = css({
  fontSize: "1.5rem",
  fontFamily: "sans",
  color: "white",
});
