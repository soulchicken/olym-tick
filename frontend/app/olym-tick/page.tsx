import Image from "next/image";
import Link from "next/link";

import MemoryImg from "@/assets/images/memory_img.png";
import RemindImg from "@/assets/images/remind_img.png";
import RoundBox from "@/components/common/RoundBox";
import Text from "@/components/common/Text";
import logoImg from "@/public/white-logo.png";
import { css } from "@/styled-system/css";

const page = () => {
  return (
    <main className={mainStyle}>
      <div>
        <Image
          alt="logo"
          height={106}
          src={logoImg}
          style={logoStyle}
          width={233}
        />
        <Text size="2.25rem" weight={700}>
          올림픽의 기억을 담는&nbsp;
          <Text as="span" color="secondary" size="2.25rem" weight={700}>
            티켓
          </Text>
        </Text>
        <Text
          as="h1"
          className={css({ letterSpacing: "0.075rem", lineHeight: "6.25rem" })}
          font="headline"
          size="7.5rem"
        >
          Oylm-Tick
        </Text>
        <Text>
          올림픽 티켓으로 당신의 관람 기억을 남겨요.
          <br />
          관람 당시의 영상기록을 보내주세요.
          <br />
          현장감을 다시 느끼게 도와드릴게요.
        </Text>
      </div>
      <div style={gridStyle}>
        <RoundBox isHover>
          <Link href="/olym-tick/remind">
            <div style={wrapperStyle}>
              <Image alt="remind" src={RemindImg} width={180} />
              <div className={textBoxStyle}>
                <Text className={subTextStyle}>
                  올림픽을 보고 들었던 <br /> 현장의 기억을 돌아봐요.
                </Text>
                <Text as="h2" size="2rem" weight={700}>
                  <Text as="span" color="secondary" size="2rem" weight={700}>
                    회상
                  </Text>
                  하기
                </Text>
              </div>
            </div>
          </Link>
        </RoundBox>
        <RoundBox isHover>
          <div style={wrapperStyle}>
            <Image alt="memory" src={MemoryImg} width={100} />
            <div className={textBoxStyle}>
              <Text className={subTextStyle}>
                올림픽 현장의 기억을
                <br /> 보관해드릴게요.
              </Text>
              <Text as="h2" size="2rem" weight={700}>
                <Text as="span" color="secondary" size="2rem" weight={700}>
                  기억
                </Text>
                만들기
              </Text>
            </div>
          </div>
        </RoundBox>
      </div>
    </main>
  );
};

export default page;

const mainStyle = css({
  padding: "1rem",
  height: "80vh",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "2rem",
});

const subTextStyle = css({
  textAlign: "right",
});

const logoStyle = {
  marginBottom: "2rem",
};

const wrapperStyle = {
  padding: "1rem",
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: "2rem",
};

const gridStyle = {
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
