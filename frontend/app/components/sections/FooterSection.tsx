import { css } from "@/styled-system/css";

const FooterSection = () => {
  return (
    <div className={wrapperStyle}>
      <h2 className={h2Style}>
        SEOUL <span className={orangeTextStyle}>2036</span>
      </h2>
    </div>
  );
};

export default FooterSection;

const wrapperStyle = css({
  width: "100%",
  margin: "8rem 0 auto 8rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  fontFamily: "headline",
  color: "white",
});

const h2Style = css({
  fontSize: "7.5rem",
  letterSpacing: "0.075rem",
  lineHeight: "6.25rem",
  fontFamily: "headline",
  color: "white",
});

const orangeTextStyle = css({
  color: "secondary",
});
