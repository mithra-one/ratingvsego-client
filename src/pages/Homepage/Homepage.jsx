import React from "react";
import Hero from "../../components/Hero/Hero";
import Rating from "../../components/Rating/Rating";
import Experts from "../../components/Experts/Experts";
import Episodes from "../../components/Episodes/Episodes";
import s from "./Homepage.module.scss";
import Events from "../../components/Events/Events";

const Homepage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.wrapper}>
        <Hero />
        <Events />
        <Rating />
        <Experts />
        <Episodes />
      </div>
    </div>
  );
};

export default Homepage;
