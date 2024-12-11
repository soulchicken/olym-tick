import Image from "next/image";
import Link from "next/link";

import RightArrow from "@/components/icons/RightArrow";
import ticketImg from "@/public/ticket.png";
import logoImg from "@/public/white-logo.png";
import { css } from "@/styled-system/css";

const MainSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={wrapperStyle}>
      <div className={subStyle}>
        <Image alt="ticket" height={400} src={ticketImg} width={300} />
        <div className={textStyle}>
          <Image
            alt="logo"
            height={80}
            src={logoImg}
            style={logoStyle}
            width={200}
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
      {children}
    </div>
  );
};

export default MainSection;

const wrapperStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "80%",
});

const subStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
});

const textStyle = css({
  color: "#ffffff",
  fontSize: "1.75rem",
  fontWeight: 700,
});

const orangeTextStyle = css({
  color: "secondary",
});

const h1Style = css({
  fontSize: "6rem",
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
