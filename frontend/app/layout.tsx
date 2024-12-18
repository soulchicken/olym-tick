import "./globals.css";

import type { Metadata } from "next";
import React from "react";

import NavBar from "@/components/common/NavBar";
import { css } from "@/styled-system/css";

export const metadata: Metadata = {
  title: "OYLM-TICK",
  description: "올림픽의 기억을 되새기다",
  verification: {
    google: "JgLLDfBTg42CaqHoNuJqRjhpDmQafWLgtjGOzETwz2Q",
    other: {
      "naver-site-verification": "6e9457f15fe1cf7e3a6a14d9957a6938b48ce135",
    },
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <html lang="ko">
        <body className={defaultStyle}>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;

const defaultStyle = css({
  fontFamily: "sans",
});
