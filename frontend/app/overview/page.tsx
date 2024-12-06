import NavBar from "@/components/common/NavBar"
import Image from "next/image"
import ticketImg from "@/public/ticket.png"
import logoImg from '@/public/white-logo.png';
import Link from "next/link";
import { css } from "@/styled-system/css";

const page = () => {
  return (
    <>
      <NavBar />
      <main style={mainStyle}>
        <Image src={ticketImg} alt="ticket" width={300} height={627} />
        <div style={textStyle}>
          <Image src={logoImg} alt="logo" width={233} height={106} style={logoStyle}/>
          <p>올림픽의 기억을 담는 <span style={orangeTextStyle}>티켓</span></p>
          <h1 style={h1Style}>olym-tick</h1>
          <Link className={linkTextStyle} href="/">
          GETTING START
      </Link>
        </div>
      </main>
    </>
  )
}

export default page;

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10rem"
}

const textStyle = {
  color: "#ffffff",
  fontSize: "2.25rem",
  fontWeight: 700
}

const orangeTextStyle = {
  color: "#FCB131"
}

const h1Style = {
  fontSize: "7.5rem",
  letterSpacing: "0.075rem",
  lineHeight: "6.25rem"
}

const logoStyle = {
  marginBottom: "2rem"
}

const linkTextStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "12px",
  borderBottom: "1px solid white",
  color: "white",
  fontWeight: 700,
});