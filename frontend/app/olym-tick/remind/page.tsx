import Image from "next/image";

import MapPinImg from "@/assets/images/map-pin-img.png";
import RoundBox from "@/components/common/RoundBox";
import Text from "@/components/common/Text";
import NaverMap from "@/components/Map";
import { css } from "@/styled-system/css";

const page = () => {
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
        <RoundBox isPadding={false}>
          <NaverMap />
        </RoundBox>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: 180, height: 180 }}>
            <RoundBox
              isHover
              className={css({
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <Image alt="map pin 이미지" src={MapPinImg} width={80} />
              <Text>
                <Text as="span" color="secondary">
                  지도
                </Text>
                로 확인하기
              </Text>
            </RoundBox>
          </div>
          <div>
            <Text>
              <Text as="span" color="secondary" weight="bold">
                조작
              </Text>
              해보세요!
            </Text>
            <Text size="0.8rem">
              마우스 : 시야 이동 <br />
              방향키 : 시간 이동 <br />
              스페이스바 : 시간 멈춤
            </Text>
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
  paddingBottom: "1rem",
});

const mainStyle = css({
  height: "400px",
  display: "grid",
  gridTemplateColumns: "4fr 1fr",
  gap: "2rem",
  margin: "2rem",
});
