import React from "react";
import s from "./RatingModal.module.scss";
import QuoteIcon from "../../../../assets/icons/wreath.svg?react";
import Modal from "../../../Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getBallString } from "../../../../utils/getBallString.js";

const RatingModal = ({ isShowing, toggleModal, item }) => {
  // ***DEV/PROD***
  let CardBackgroundsFolder;
  if (import.meta.env.VITE_MODE === "DEV") {
    CardBackgroundsFolder = `${
      import.meta.env.VITE_API_BASE_URL
    }/uploads/cardBackgrounds`;
  } else if (import.meta.env.VITE_MODE === "PROD") {
    CardBackgroundsFolder = "/uploads/cardBackgrounds";
  }

  return (
    <AnimatePresence>
      <Modal
        isShowing={isShowing}
        hide={toggleModal}
        background={`${CardBackgroundsFolder}/full/${item.cardBg}`}
      >
        <div className={s.modalContent}>
          <div className={s.cardWrapper}>
            <motion.div
              className={s.card}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.23 }}
            >
              <div className={s.top}>
                <span className={s.verdict}>Вердикт «Рейтинга всего»:</span>
                <div className={s.title}>{item.title}</div>
              </div>
              <div className={s.rate}>
                <span className={s.rateNum}>{item.rate}</span>
                <span className={s.postRate}>{getBallString(item.rate)}</span>
              </div>
              <div className={s.bottom}>
                {item.quotes.length > 0 && (
                  <div className={s.quotes}>
                    <Swiper
                      className={s.swiper}
                      loop={item.quotes.length > 1 ? true : false}
                      autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                    >
                      {item.quotes.map((quote) => {
                        return (
                          <SwiperSlide key={quote.text}>
                            <div className={s.quote}>
                              <span className={s.text}>{quote.text}</span>
                              <QuoteIcon />
                              <span className={s.author}>{quote.author}</span>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </Modal>
    </AnimatePresence>
  );
};

export default RatingModal;
