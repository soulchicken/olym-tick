"use client";

import { useRef } from "react";

import ScrollButton from "@/app/components/ScrollButton";
import FooterSection from "@/app/components/sections/FooterSection";
import HistorySection from "@/app/components/sections/HistorySection";
import MainSection from "@/app/components/sections/MainSection";
import Olympic1988Section from "@/app/components/sections/Olympic1988Section";
import Olympic2036Section from "@/app/components/sections/Olympic2036Section";
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
        <MainSection>
          <ScrollButton
            handleScroll={() => handleScroll(olympic1988sectionRef)}
          />
        </MainSection>
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

const backgroundSection = css({
  position: "relative", // 배경 이미지가 섹션 내부에 제한됨
});
