import Image from "next/image";
import Link from "next/link";

import AppStoreImg from "@/assets/images/app_store.png";
import PlayStoreImg from "@/assets/images/play_store.png";
import RoundBox from "@/components/common/RoundBox";
import RightArrow from "@/components/icons/RightArrow";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ticketImg from "@/public/ticket.png";
import { css } from "@/styled-system/css";

const FooterSection = () => {
  const { isVisible, domRef } = useScrollAnimation();

  return (
    <div className={wrapperStyle} ref={domRef}>
      <h2
        className={h2Style}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.5s",
        }}
      >
        SEOUL <span className={orangeTextStyle}>2036</span>
      </h2>
      <div
        className={gridBox}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 2s ease 1s",
        }}
      >
        <RoundBox style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
          <div className={mainGridItem}>
            <div>
              <h4 className={olymMainText}>olym-tick</h4>
              <p className={olymSubText}>올림픽의 기억을 담는 티켓</p>
              <Link className={linkTextStyle} href="/olym-tick">
                GETTING START
                <RightArrow width={16} />
              </Link>
            </div>
            <Image alt="ticket" src={ticketImg} width={187} />
          </div>
        </RoundBox>
        <RoundBox style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>
          <h4 className={h4Style}>highLight</h4>
          <Link className={linkTextStyle} href="/">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
        <RoundBox style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}>
          <h4 className={h4Style}>SHOP</h4>
          <Link className={linkTextStyle} href="/">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
        <RoundBox style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>
          <h4 className={h4Style}>offical app</h4>
          <Link className={storeLinkStyle} href="/">
            <Image alt="app store" src={AppStoreImg} width={60} />
            <Image alt="play store" src={PlayStoreImg} width={60} />
          </Link>
        </RoundBox>
        <RoundBox style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>
          <h4 className={h4Style}>faQ</h4>
          <Link className={linkTextStyle} href="/olym-tick">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
      </div>
    </div>
  );
};

export default FooterSection;

const wrapperStyle = css({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  fontFamily: "headline",
  color: "white",
});

const h2Style = css({
  padding: "8rem 0 0",
  fontSize: "7.5rem",
  letterSpacing: "0.075rem",
  lineHeight: "6.25rem",
  fontFamily: "headline",
  color: "white",
});

const orangeTextStyle = css({
  color: "secondary",
});

const gridBox = css({
  padding: "2rem",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "2rem",
});

const linkTextStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.25rem",
  borderBottom: "1px solid",
  borderColor: "primary",
  color: "primary",
  fontWeight: 700,
  fontSize: "1.25rem",
  fontFamily: "headline",
});

const storeLinkStyle = css({
  display: "flex",
  gap: "0.5rem",
});

const h4Style = css({
  fontSize: "2rem",
  letterSpacing: "0.075rem",
});

const olymMainText = css({
  fontSize: "4rem",
  color: "white",
});

const olymSubText = css({
  fontSize: "1.5rem",
  color: "white",
});

const mainGridItem = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
});
