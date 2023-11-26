import React from "react";
import s from "./RatingItem.module.scss";
import EditIcon from "../../../assets/icons/edit.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { Link } from "react-router-dom";
import useModal from "../../../hooks/useModal";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import RatingModal from "./RatingModal/RatingModal";
import {
  gradientStyle1,
  gradientStyle2,
  gradientStyle3,
} from "../../../utils/gradients";
import useProgressiveImage from "../../../hooks/useProgressiveImage";
import defaultPic from "../../../assets/imgs/bg200.gif";
import RatingItemSkeleton from "../../Skeletons/RatingItemSkeleton";

const RatingItem = ({ item }) => {
  const { isShowing, toggleModal } = useModal();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.userReducer);

  // ***DEV/PROD***
  let CardBackgroundsFolder;
  if (import.meta.env.VITE_MODE === "DEV") {
    CardBackgroundsFolder = `${
      import.meta.env.VITE_API_BASE_URL
    }/uploads/cardBackgrounds`;
  } else if (import.meta.env.VITE_MODE === "PROD") {
    CardBackgroundsFolder = "/uploads/cardBackgrounds";
  }

  const loadedThumb = useProgressiveImage(
    `${CardBackgroundsFolder}/thumbs/${item.cardBg}`
  );

  const gradientStyle =
    item.indexNum === 1
      ? gradientStyle1
      : item.indexNum === 2
      ? gradientStyle2
      : item.indexNum === 3
      ? gradientStyle3
      : null;

  const handleDelete = async (e, rateID) => {
    e.stopPropagation();
    e.preventDefault();
    if (window.confirm(`Вы хотите удалить ${item.title} из рейтинга?`)) {
      try {
        FetchStart();
        const res = await fetch(`/api/rate/delete/${rateID}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success === false) {
          FetchFailure(data.message);
          return;
        }
        FetchSuccess();
        navigate(0);
      } catch (err) {
        FetchFailure(err);
      }
    }
  };

  return (
    <>
      <motion.div layout className={s.item} onClick={toggleModal}>
        {loadedThumb ? (
          <div
            className={s.itemInner}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(16, 1, 0, 0.78), rgba(16, 1, 0, 0.78)), url(${
                loadedThumb || defaultPic
              })`,
              backgroundPosition: "center center",
              backgroundRepeat: "repeat-x",
              backgroundSize: loadedThumb ? "cover" : "20%",
            }}
          >
            <span className={s.position} style={gradientStyle}>
              {item.indexNum}
            </span>
            <span className={s.label} style={gradientStyle}>
              {item.title}
            </span>
            <span className={s.rate} style={gradientStyle}>
              {item.rate}
            </span>
            {currentUser?.role === "admin" && (
              <div className={s.control}>
                <Link
                  to={`/edit-rate/${item._id}`}
                  className={`${s.adminBtn} ${s.editBtn}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <EditIcon />
                </Link>
                <button
                  type="button"
                  className={`${s.adminBtn} ${s.deleteBtn}`}
                  onClick={(e) => handleDelete(e, item._id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            )}
          </div>
        ) : (
          <RatingItemSkeleton />
        )}
      </motion.div>
      <RatingModal
        isShowing={isShowing}
        toggleModal={toggleModal}
        item={item}
      />
    </>
  );
};

export default RatingItem;
