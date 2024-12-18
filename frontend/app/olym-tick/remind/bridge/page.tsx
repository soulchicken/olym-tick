"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MapPinImg from "@/assets/images/check_img.png";
import RoundBox from "@/components/common/RoundBox";
import Text from "@/components/common/Text";
import { css } from "@/styled-system/css";

const DynamicThreeScene = dynamic(() => import("../components/ThreeScene"), {
  ssr: false, // 서버에서 렌더링 비활성화
});

const page = () => {
  const router = useRouter();

  return (
    <>
      <Text className={textStyle}>
        <Text font="headline" size="1.5rem">
          2036 SEOUL [08/22]
        </Text>
        <Text size="1.5rem" weight="bold">
          펜싱 남자 사브르 단체전 (결승전)
        </Text>
        <Text size="1.5rem">한국 : 헝가리</Text>
      </Text>
      <main className={mainStyle}>
        <RoundBox
          isPadding={false}
          className={css({
            width: "100%",
            height: "100%",
          })}
        >
          <DynamicThreeScene url="/models/gift5.glb" />
        </RoundBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 200, height: 200 }}>
            <RoundBox
              className={boxStyle}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/olym-tick/remind/")}
            >
              <Image alt="map pin 이미지" src={MapPinImg} width={80} />
              <p className={subTitleStyle}>
                <span className={orangeTextStyle}>지도</span>확인 완료
              </p>
            </RoundBox>
          </div>
          <div>
            <p className={subTitleStyle}>
              <span className={orangeTextStyle}>조작</span>해보세요!
            </p>
            <p className={smallTextStyle}>
              마우스 드래그 : 시야 이동 <br />
              마우스 휠 : 시야 확대 / 축소
              <br />
              <br />
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

const boxStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
