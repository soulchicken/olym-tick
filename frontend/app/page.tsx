"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import ScrollButton from "@/app/components/ScrollButton";
import FooterSection from "@/app/components/sections/FooterSection";
import HistorySection from "@/app/components/sections/HistorySection";
import Olympic1988Section from "@/app/components/sections/Olympic1988Section";
import Olympic2036Section from "@/app/components/sections/Olympic2036Section";
import RightArrow from "@/components/icons/RightArrow";
import ticketImg from "@/public/ticket.png";
import logoImg from "@/public/white-logo.png";
import { css } from "@/styled-system/css";

const Page = () => {
  const olympic1988sectionRef = useRef<HTMLDivElement>(null);
  const historySectionRef = useRef<HTMLDivElement>(null);
  const olympic2036sectionRef = useRef<HTMLDivElement>(null);
  const footerSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className={sectionStyle}>
        <div style={wrapperStyle}>
          <Image alt="ticket" height={627} src={ticketImg} width={300} />
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
        </div>
        <ScrollButton
          handleScroll={() => handleScroll(olympic1988sectionRef)}
        />
      </section>
      <section
        className={`${sectionStyle} ${backgroundSection}`}
        ref={olympic1988sectionRef}
      >
        <Olympic1988Section>
          <ScrollButton handleScroll={() => handleScroll(historySectionRef)} />
        </Olympic1988Section>
      </section>
      <section className={historySectionStyle} ref={historySectionRef}>
        <HistorySection>
          <ScrollButton
            handleScroll={() => handleScroll(olympic2036sectionRef)}
          />
        </HistorySection>
      </section>
      <section
        className={`${sectionStyle} ${backgroundSection}`}
        ref={olympic2036sectionRef}
      >
        <Olympic2036Section>
          <ScrollButton handleScroll={() => handleScroll(footerSectionRef)} />
        </Olympic2036Section>
      </section>
      <section className={sectionStyle} ref={footerSectionRef}>
        <FooterSection />
      </section>
    </main>
  );
};

export default Page;

const sectionStyle = css({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const historySectionStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10rem",
};

const textStyle = css({
  color: "#ffffff",
  fontSize: "2.25rem",
  fontWeight: 700,
});

const orangeTextStyle = css({
  color: "secondary",
});

const h1Style = css({
  fontSize: "7.5rem",
  letterSpacing: "0.075rem",
  lineHeight: "6.25rem",
  fontFamily: "headline",
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

const backgroundSection = css({
  position: "relative", // 배경 이미지가 섹션 내부에 제한됨
});
