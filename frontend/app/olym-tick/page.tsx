import Image from "next/image";
import Link from "next/link";

import RoundBox from "@/app/olym-tick/components/RoundBox";
import MemoryImg from "@/assets/images/memory_img.png";
import RemindImg from "@/assets/images/remind_img.png";
import RightArrow from "@/components/icons/RightArrow";
import logoImg from "@/public/white-logo.png";
import { css } from "@/styled-system/css";

const page = () => {
  return (
    <main style={wrapperStyle}>
      <div className={textStyle}>
        <Image
          alt="logo"
          height={106}
          src={logoImg}
          style={logoStyle}
          width={233}
        />
        <p>
          올림픽의 기억을 담는 <span className={orangeTextStyle}>티켓</span>
        </p>
        <h1 className={h1Style}>olym-tick</h1>
        <Link className={linkTextStyle} href="/olym-tick">
          GETTING START
          <RightArrow />
        </Link>
      </div>
      <div style={gridStyle}>
        <RoundBox>
          <Link href="/olym-tick/remind">
            <div style={wrapperStyle}>
              <Image alt="remind" src={RemindImg} width={180} />
              <div className={textBoxStyle}>
                <p className={subTextStyle}>
                  올림픽을 보고 들었던 <br /> 현장의 기억을 돌아봐요.
                </p>
                <h2 className={h2Style}>
                  <span className={orangeTextStyle}>회상</span>하기
                </h2>
              </div>
            </div>
          </Link>
        </RoundBox>
        <RoundBox>
          <div style={wrapperStyle}>
            <Image alt="memory" src={MemoryImg} width={120} />
            <div className={textBoxStyle}>
              <p className={subTextStyle}>
                올림픽 현장의 기억을
                <br /> 보관해드릴게요.
              </p>
              <h2 className={h2Style}>
                <span className={orangeTextStyle}>기억</span>만들기
              </h2>
            </div>
          </div>
        </RoundBox>
      </div>
    </main>
  );
};

export default page;

const h1Style = css({
  fontSize: "7.5rem",
  letterSpacing: "0.075rem",
  lineHeight: "6.25rem",
  fontFamily: "headline",
});

const h2Style = css({
  fontSize: "2rem",
  letterSpacing: "0.075rem",
  fontFamily: "sans",
  fontWeight: 700,
  color: "white",
});

const orangeTextStyle = css({
  color: "secondary",
});

const subTextStyle = css({
  fontSize: "1rem",
  color: "white",
  textAlign: "right",
});

const logoStyle = {
  marginBottom: "2rem",
};

const linkTextStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
  borderBottom: "2px solid",
  borderColor: "primary",
  color: "primary",
  fontWeight: 700,
  fontSize: "1.5rem",
  fontFamily: "headline",
});

const textStyle = css({
  color: "#ffffff",
  fontSize: "2.25rem",
  fontWeight: 700,
});

const wrapperStyle = {
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "2rem",
};

const gridStyle = {
  height: "80vh",
  display: "grid",
  gridTemplateRows: "2fr 1fr",
  gap: "2rem",
};

const textBoxStyle = css({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "flex-end",
});
