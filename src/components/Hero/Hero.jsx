import React, { useRef, useEffect } from "react";
import s from "./Hero.module.scss";
import Scrolldown from "../../assets/icons/scrolldown.svg?react";
import { motion } from "framer-motion";
import debounce from "lodash/debounce";

const Hero = () => {
  const heroWrapperRef = useRef(null);
  const line01Ref = useRef(null);
  const ratingRef = useRef(null);
  const vsegoRef = useRef(null);
  const line03Ref = useRef(null);
  const animateElements = useRef([]);

  const animateShadow = (ev) => {
    const heroWrapper = heroWrapperRef.current;
    const shadowLimit = 200;

    if (!heroWrapper) return;

    const heroWrapperWidth = heroWrapper.offsetWidth;
    const heroWrapperHeight = heroWrapper.offsetHeight;
    const center = {
      x: heroWrapperWidth / 1.5,
      y: heroWrapperHeight / 1.5,
    };

    animateElements.current.forEach((element) => {
      const shadow = element.ref.current;
      if (!shadow) return;

      const evX = ev.clientX;
      const evY = ev.clientY;

      let shadowX = (center.x - evX) / 15;
      let shadowY = (center.y - evY) / 15;

      shadowX = Math.min(shadowLimit, Math.max(-shadowLimit, shadowX));
      shadowY = Math.min(shadowLimit, Math.max(-shadowLimit, shadowY));

      shadow.style.filter = `drop-shadow(${
        Math.ceil(shadowX) +
        "px " +
        Math.ceil(shadowY) +
        "px " +
        Math.abs(shadowX * shadowY) / 100 +
        "px rgba(0,0,0,0.45)"
      })`;
    });
  };

  const debouncedAnimateShadow = debounce(animateShadow, 16);

  useEffect(() => {
    const heroWrapper = heroWrapperRef.current;

    if (!heroWrapper) return;

    heroWrapper.addEventListener("mousemove", debouncedAnimateShadow);

    animateElements.current = [
      { ref: line01Ref },
      { ref: ratingRef },
      { ref: vsegoRef },
      { ref: line03Ref },
    ];

    return () => {
      heroWrapper.removeEventListener("mousemove", debouncedAnimateShadow);
    };
  }, []);

  return (
    <>
      <motion.div className={s.heroWrapper} ref={heroWrapperRef}>
        <motion.div className={s.hero}>
          <div className={s.top}>
            <div className={s.line01} ref={line01Ref}>
              самое полезное в мире шоу
            </div>
            <div className={s.line02}>
              <span className={s.rating} ref={ratingRef}>
                Рейтинг
              </span>
              <span className={s.vsego} ref={vsegoRef}>
                всего
              </span>
            </div>
            <div className={s.line03} ref={line03Ref}>
              от Васи Шакулина
            </div>
          </div>
          <div className={s.bottom}>
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: 0.5 + index * 0.5,
                  repeatDelay: 1,
                }}
              >
                <Scrolldown />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
