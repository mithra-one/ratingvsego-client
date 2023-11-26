import React, { useEffect, useRef, useCallback } from "react";
import s from "./Modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../../assets/icons/close.svg?react";

const Modal = ({
  isShowing,
  hide,
  children,
  background,
  closeOnClickOut = true,
}) => {
  const modalRef = useRef(null);

  let closeModal;
  if (closeOnClickOut) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    closeModal = useCallback(
      (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          hide();
        }
      },
      [hide]
    );
  }

  useEffect(() => {
    document.addEventListener("click", closeModal, { capture: true });
    return () => {
      document.removeEventListener("click", closeModal, { capture: true });
    };
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = isShowing ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isShowing]);

  return (
    <AnimatePresence>
      {isShowing && (
        <motion.div
          className={s.modalOverlay}
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 150 }}
          transition={{ duration: 0.33 }}
        >
          <div
            ref={modalRef}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            className={s.modal}
            style={{
              background: background
                ? `linear-gradient(0deg, rgba(16, 1, 0, 0.75), rgba(16, 1, 0, 0.75)), url(${background})`
                : "#513427",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {closeOnClickOut && (
              <button
                type="button"
                className={s.modalCloseButton}
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <CloseIcon />
              </button>
            )}

            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
