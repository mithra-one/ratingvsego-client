import React from "react";
import s from "./EventItem.module.scss";
import RecordIcon from "../../../assets/icons/record.svg?react";
import EditIcon from "../../../assets/icons/edit.svg?react";
import DeleteIcon from "../../../assets/icons/delete.svg?react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import { months } from "../../../utils/months";

const EventItem = ({ event }) => {
  const { currentUser } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  const handleDelete = async (e, eventID) => {
    e.stopPropagation();
    e.preventDefault();
    if (
      window.confirm(
        `Вы хотите удалить мероприятие ${new Date(event.dateTime).getDate()} ${
          months[new Date(event.dateTime).getMonth()]
        } в ${new Date(event.dateTime).getHours()}:${String(
          new Date(event.dateTime).getMinutes()
        ).padStart(2, "0")}?`
      )
    ) {
      try {
        FetchStart();
        const res = await fetch(`/api/event/delete/${eventID}`, {
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
    <div className={s.eventItem}>
      {event ? (
        <>
          <div className={s.info}>
            <div className={s.date}>
              {new Date(event.dateTime).getDate()}{" "}
              {months[new Date(event.dateTime).getMonth()]}
            </div>
            <div className={s.time}>
              {new Date(event.dateTime).getHours()}:
              {String(new Date(event.dateTime).getMinutes()).padStart(2, "0")}
            </div>
            <div className={s.place}>{event.place}</div>
            <div className={s.cast}>{event.cast}</div>
          </div>
          <div className={s.record}>
            {event.record && (
              <>
                <RecordIcon />
                <span>съёмка</span>
              </>
            )}
          </div>
          {currentUser?.role === "admin" ? (
            <div className={s.admin}>
              <Link
                className={`${s.edit} ${s.admButton}`}
                to={`/edit-event/${event._id}`}
              >
                <EditIcon />
              </Link>
              <button
                className={`${s.delete} ${s.admButton}`}
                onClick={(e) => handleDelete(e, event._id)}
              >
                <DeleteIcon />
              </button>
            </div>
          ) : (
            <div className={s.tickets}>
              <a
                href={event.tickets}
                className={s.link}
                target="_blank"
                rel="noreferrer"
              >
                Купить билет
              </a>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default EventItem;
