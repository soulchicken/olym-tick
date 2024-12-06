import { ol } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

import RoundBox from "@/components/common/RoundBox";
import RightArrow from "@/components/icons/RightArrow";
import ticketImg from "@/public/ticket.png";
import { css } from "@/styled-system/css";

const FooterSection = () => {
  return (
    <div className={wrapperStyle}>
      <h2 className={h2Style}>
        SEOUL <span className={orangeTextStyle}>2036</span>
      </h2>
      <div className={gridBox}>
        <RoundBox col="1 / 3" row="1 / 3">
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
        <RoundBox col="3 / 4" row="1 / 2">
          <h4 className={h4Style}>highLight</h4>
          <Link className={linkTextStyle} href="/olym-tick">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
        <RoundBox col="4 / 5" row="1 / 2">
          <h4 className={h4Style}>SHOP</h4>
          <Link className={linkTextStyle} href="/olym-tick">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
        <RoundBox col="3 / 4" row="2 / 3">
          <h4 className={h4Style}>offical app</h4>
          <Link className={linkTextStyle} href="/olym-tick">
            enter
            <RightArrow width={12} />
          </Link>
        </RoundBox>
        <RoundBox col="4 / 5" row="2 / 3">
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
  width: "100%",
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
  gap: "1rem",
  alignItems: "center",
});
