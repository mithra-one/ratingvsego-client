import React, { useEffect, useState } from "react";
import s from "./Events.module.scss";
import EventItem from "./EventItem/EventItem";
import { useSelector } from "react-redux";

const Events = () => {
  const { currentUser } = useSelector((state) => state.userReducer);

  const [isEventsLoading, setIsEventsLoading] = useState(false);
  const [eventsLoadingError, setEventsLoadingError] = useState(null);

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsEventsLoading(true);
      try {
        const res = await fetch(`/api/event/get/`);
        const data = await res.json();

        if (data.success === false) {
          setIsEventsLoading(false);
          setEventsLoadingError(data.message);
        }

        setIsEventsLoading(false);
        setEventList(data);
      } catch (err) {
        setIsEventsLoading(false);
        setEventsLoadingError(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      {isEventsLoading && (
        <div className={s.loadingEvents}>
          <span data-text="Загрузка мероприятий...">
            Загрузка мероприятий...
          </span>
        </div>
      )}
      {eventList.length > 0 ? (
        <div className={s.events}>
          <h1 className={s.title}>Ближайшие мероприятия</h1>
          <div className={s.eventList}>
            <div className={s.head}>
              <div className={s.info}>
                <span className={s.date}>Дата</span>
                <span className={s.time}>Время</span>
                <span className={s.place}>Место</span>
                <span className={s.cast}>Состав</span>
              </div>
              <span className={s.record}></span>
              <span className={s.tickets}>
                {currentUser?.role === "admin" ? null : "Билеты"}
              </span>
            </div>
            <div className={s.body}>
              {eventList.map((event) => {
                return <EventItem event={event} key={event._id} />;
              })}
            </div>
          </div>
        </div>
      ) : null}
      {eventsLoadingError && (
        <div className={s.serverError}>
          Ошибка при загрузке мероприятий: {eventsLoadingError.message}
        </div>
      )}
    </>
  );
};

export default Events;
