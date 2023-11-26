import React from "react";
import s from "./ExpertItem.module.scss";
import { Link } from "react-router-dom";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import { useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import useProgressiveImage from "../../../hooks/useProgressiveImage";
import defaultPic from "../../../assets/imgs/default.jpg";
import ExpertAvatarSkeleton from "../../Skeletons/ExpertAvatarSkeleton";

const ExpertItem = ({ expert }) => {
  const { currentUser } = useSelector((state) => state.userReducer);

  // ***DEV/PROD***
  let ExpertAvatarsFolder;
  if (import.meta.env.VITE_MODE === "DEV") {
    ExpertAvatarsFolder = `${
      import.meta.env.VITE_API_BASE_URL
    }/uploads/expertPhotos/`;
  } else if (import.meta.env.VITE_MODE === "PROD") {
    ExpertAvatarsFolder = "/uploads/expertPhotos/";
  }

  const loadedAvatar = useProgressiveImage(
    `${ExpertAvatarsFolder}/${expert.avatar}`
  );

  const navigate = useNavigate();

  const handleDelete = async (e, expertID) => {
    e.stopPropagation();
    e.preventDefault();

    // if (
    //   window.confirm(`Вы хотите удалить ${expert.name} из списка экспертов?`)
    // ) {
    //   try {
    //     FetchStart();
    //     const res = await fetch(`/api/expert/delete/${expertID}`, {
    //       method: "DELETE",
    //     });
    //     const data = await res.json();
    //     if (data.success === false) {
    //       FetchFailure(data.message);
    //       return;
    //     }
    //     FetchSuccess();
    //     navigate(0);
    //   } catch (err) {
    //     FetchFailure(err);
    //   }
    // }
    alert("Нельзя удалить эксперта в демо-режиме");
  };

  return (
    <div id={`expert-item-${expert._id}`} className={s.expert}>
      <a className={s.body} href={expert.link} target="_blank" rel="noreferrer">
        <div className={s.photo}>
          {loadedAvatar ? (
            <div
              className={s.image}
              style={{
                backgroundImage: `
                url(${loadedAvatar || defaultPic})`,
              }}
            />
          ) : (
            <ExpertAvatarSkeleton />
          )}
        </div>

        <div className={s.name}>
          <span>
            {expert.name.split(" ")[0]} <br />
            {expert.name.split(" ")[1]}
          </span>
        </div>
      </a>
      {currentUser?.role === "admin" ? (
        <div className={s.control}>
          <Link
            to={`/edit-expert/${expert._id}`}
            className={`${s.adminBtn} ${s.editBtn}`}
            onClick={(e) => e.stopPropagation()}
          >
            <EditIcon />
          </Link>
          <button
            type="button"
            className={`${s.adminBtn} ${s.deleteBtn}`}
            onClick={(e) => handleDelete(e, expert._id)}
          >
            <DeleteIcon />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ExpertItem;
