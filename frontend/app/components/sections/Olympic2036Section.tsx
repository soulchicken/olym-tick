import Image from "next/image";
import React from "react";

import olympic2036 from "@/assets/images/2036-olympic.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { css } from "@/styled-system/css";

const Olympic2036Section: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isVisible, domRef } = useScrollAnimation();

  return (
    <>
      <div className={backgroundImageWrapper} ref={domRef}>
        <Image
          alt="88 올림픽 개막식 사진"
          className={backgroundImage}
          fill={true}
          src={olympic2036}
          style={{
            opacity: isVisible ? 0.5 : 0,
            transition: "opacity 0.5s",
          }}
        />
      </div>
      <div className={wrapperStyle}>
        <h2
          className={h2Style}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.5s",
          }}
        >
          SEOUL <br /> <div className={orangeTextStyle}>2036</div>
        </h2>
        <div
          className={subStyle}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 2s ease 1s",
          }}
        >
          <p className={subTitleStyle}>
            <span className={blueTextStyle}>new</span> harmony
          </p>
          <p className={pStyle}>새로운 화합</p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        {children}
      </div>
    </>
  );
};

export default Olympic2036Section;

const backgroundImageWrapper = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1, // 배경 이미지가 텍스트 뒤로 배치
});

const backgroundImage = css({
  objectFit: "cover",
  opacity: 0.5,
});

const h2Style = css({
  fontSize: "6rem",
  letterSpacing: "0.075rem",
  lineHeight: "5.5rem",
  fontFamily: "headline",
});

const blueTextStyle = css({
  color: "primary",
});

const orangeTextStyle = css({
  color: "secondary",
});

const wrapperStyle = css({
  width: "100%",
  margin: "8rem 0 auto 8rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  fontFamily: "headline",
  color: "white",
});

const subStyle = css({
  display: "flex",
  flexDirection: "column",
});

const subTitleStyle = css({
  fontSize: "5rem",
  lineHeight: "4.5rem",
});

const pStyle = css({
  fontSize: "2.25rem",
  fontFamily: "sans",
  fontWeight: 700,
});
