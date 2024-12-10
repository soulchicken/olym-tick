"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navMenu } from "@/app/constants/navMenu";
import seoul2036 from "@/public/2036-seoul.png";
import logoImg from "@/public/white-logo.png";
import { css } from "@/styled-system/css";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav
      className={navBarStyle}
      style={{
        textTransform: "uppercase",
        padding: "1rem",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgb(0, 0 ,0, 0.5)",
      }}
    >
      <div style={navBarSideStyle}>
        <Link href="/">
          <div style={logoStyle}>
            <Image alt="logo" height={37} src={logoImg} width={82} />
            <Image alt="2036-seoul" height={34} src={seoul2036} width={41} />
          </div>
        </Link>
        <div>
          <ul style={ulStyle}>
            {navMenu.map((menu, index) => {
              if (menu.href === pathname) {
                return (
                  <li key={index}>
                    <strong>
                      <a className={orangeStyle} href={menu.href}>
                        {menu.label}
                      </a>
                    </strong>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <a href={menu.href}>{menu.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div style={navBarSideStyle}>
        <span>sign up</span>
        <div style={langStyle}>
          <span className={blueStyle}>kor</span>
          <span>|</span>
          <span>eng</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// navBar는 상단 sticky
const navBarStyle = css({
  padding: "1rem",
  fontWeight: 400,
  height: "4rem",
  fontSize: "1rem",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const navBarSideStyle = {
  display: "flex",
  alignItems: "center",
  gap: "3rem",
};

const logoStyle = {
  display: "flex",
  gap: "0.5rem",
};

const ulStyle = {
  display: "flex",
  gap: "2rem",
};

const langStyle = {
  display: "flex",
  gap: "0.5rem",
};

const blueStyle = css({
  color: "primary",
  fontWeight: 700,
});

const orangeStyle = css({
  color: "secondary",
  fontWeight: 700,
});
