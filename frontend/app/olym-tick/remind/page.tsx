import Image from "next/image";

import RoundBox from "@/app/olym-tick/remind/components/RoundBox";
import MapPinImg from "@/assets/images/map-pin-img.png";
import NaverMap from "@/components/Map";
import { css } from "@/styled-system/css";

const page = () => {
  return (
    <>
      <div className={textStyle}>
        <span className={headlineStyle}>2036 SEOUL [08/22]</span>
        <span className={boldStyle}>펜싱 남자 사브르 단체전 (결승전) </span>
        <span className={regularStyle}>한국 : 헝가리</span>
      </div>
      <main className={mainStyle}>
        <RoundBox>
          <NaverMap />
        </RoundBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 150, height: 150 }}>
            <RoundBox>
              <Image alt="map pin 이미지" src={MapPinImg} width={80} />
              <p className={subTitleStyle}>
                <span className={orangeTextStyle}>지도</span>로 확인하기
              </p>
            </RoundBox>
          </div>
          <div>
            <p className={subTitleStyle}>
              <span className={orangeTextStyle}>조작</span>해보세요!
            </p>
            <p className={smallTextStyle}>
              마우스 : 시야 이동 <br />
              방향키 : 시간 이동 <br />
              스페이스바 : 시간 멈춤
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

const textStyle = css({
  display: "flex",
  gap: "1rem",
  color: "white",
  fontSize: "1. 5rem",
  paddingBottom: "1rem",
});

const headlineStyle = css({
  fontFamily: "headline",
});

const boldStyle = css({
  fontFamily: "sans",
  fontWeight: "bold",
});

const regularStyle = css({
  fontFamily: "sans",
});

const mainStyle = css({
  height: "400px",
  display: "grid",
  gridTemplateColumns: "4fr 1fr",
  gap: "2rem",
  margin: "2rem",
});

const subTitleStyle = css({
  fontFamily: "sans",
  fontSize: "1rem",
  color: "white",
});

const orangeTextStyle = css({
  color: "secondary",
  fontWeight: "bold",
});

const smallTextStyle = css({
  fontFamily: "sans",
  fontSize: "0.8rem",
  color: "white",
});
