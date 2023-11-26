import React, { useRef, useEffect } from "react";
import s from "./Page404.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Page404 = () => {
  const page404WrapperRef = useRef(null);
  const pageRef = useRef(null);
  const notFoundRef = useRef(null);

  useEffect(() => {
    const shadowLimit = 200;
    const moveEvent = "mousemove";

    function animateShadow(ref, ev) {
      requestAnimationFrame(() => {
        const element = ref.current;

        const heroWrapper = page404WrapperRef.current;
        const shadow = element;

        if (!heroWrapper || !shadow) return;

        const heroWrapperWidth = heroWrapper.offsetWidth;
        const heroWrapperHeight = heroWrapper.offsetHeight;
        const shadowWidth = shadow.offsetWidth;
        const shadowHeight = shadow.offsetHeight;

        const center = {
          x: heroWrapperWidth / 1.5 - shadowWidth,
          y: heroWrapperHeight / 1.5 - shadowHeight,
        };

        const evX = ev.clientX;
        const evY = ev.clientY;

        let shadowX = (center.x - evX) / 15;
        let shadowY = (center.y - evY) / 15;

        shadowX = Math.min(shadowLimit, Math.max(-shadowLimit, shadowX));
        shadowY = Math.min(shadowLimit, Math.max(-shadowLimit, shadowY));

        element.style.filter = `drop-shadow(${
          Math.ceil(shadowX) +
          "px " +
          Math.ceil(shadowY) +
          "px " +
          Math.abs(shadowX * shadowY) / 100 +
          "px rgba(0,0,0,0.45)"
        })`;
      });
    }

    function animloop(ev) {
      requestAnimationFrame(animloop);
      animateShadow(pageRef, ev);
      animateShadow(notFoundRef, ev);
    }

    page404WrapperRef.current.addEventListener(moveEvent, (ev) => animloop(ev));
  }, []);
  return (
    <>
      <motion.div
        className={s.pageWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        ref={page404WrapperRef}
      >
        <div className={s.pageContent}>
          <div className={s.page404}>
            <div className={s.logo}>
              <span className={s.rating} ref={pageRef}>
                Страница
              </span>
              <span className={s.vsego} ref={notFoundRef}>
                не найдена
              </span>
            </div>
            <Link to="/" className={s.button}>
              <span>На главную</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Page404;
