import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={s.footer}>
      <div className={s.copy}>
        РЕЙТИНГ ВСЕГО © {year} by{" "}
        <a href="https://mithra.ru" target="_blank" rel="noreferrer">
          Mithra
        </a>
      </div>
    </div>
  );
};

export default Footer;
