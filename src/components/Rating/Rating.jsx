import React, { useEffect, useState, useRef } from "react";
import s from "./Rating.module.scss";
import RatingItem from "./RatingItem/RatingItem";
import ClearIcon from "../../assets/icons/close.svg?react";
import { rusTranslitToEng } from "../../utils/rusTranslitToEng";
import RatingSkeleton from "../Skeletons/RatingSkeleton";

const Rating = () => {
  const [isRatingLoading, setIsRatingLoading] = useState(true);
  const [ratingLoadingError, setRatingLoadingError] = useState(null);

  const [ratingItems, setRatingItems] = useState([]);

  const [visibleItems, setVisibleItems] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const ratingTableRef = useRef(null);
  const handleLoadMore = async () => {
    if (!isLoading) {
      setIsLoading(true);
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchRates = async () => {
      setIsRatingLoading(true);
      try {
        const res = await fetch(`/api/rate/get/`);
        const data = await res.json();

        if (data.success === false) {
          setRatingLoadingError(data.message);
        }

        setRatingItems(data);
        setIsRatingLoading(false);
      } catch (err) {
        setRatingLoadingError(err);
        setIsRatingLoading(false);
      }
    };

    fetchRates();

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = ratingTableRef.current;
      if (scrollHeight - scrollTop <= clientHeight * 2) {
        handleLoadMore();
      }
    };

    if (ratingTableRef.current) {
      ratingTableRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ratingTableRef.current) {
        ratingTableRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const componentData = ratingItems.sort(
    (a, b) => parseFloat(b.rate) - parseFloat(a.rate)
  );
  const newComponentData = componentData.map((element, index) => {
    return (element = {
      ...element,
      indexNum: index + 1,
    });
  });
  const filteredData = newComponentData.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      const transliteratedInputText = rusTranslitToEng(inputText);
      return (
        el.title.toLowerCase().includes(inputText) ||
        el.title.toLowerCase().includes(transliteratedInputText)
      );
    }
  });

  return (
    <div className={s.rating}>
      <h1 className={s.title}>Великая абсолютная шкала всего</h1>
      <div className={s.table}>
        <div className={s.filter}>
          <input
            type="text"
            placeholder="Поиск..."
            onChange={inputHandler}
            value={inputText}
            className={s.search}
          />
          <div
            className={s.clear}
            onClick={() => {
              setInputText("");
            }}
            style={{
              opacity: inputText.length > 0 ? 1 : 0,
            }}
          >
            <ClearIcon />
          </div>
        </div>
        <div className={s.head}>
          <span className={s.position}>
            Позиция рейтинга <small>из {ratingItems.length}</small>
          </span>
          <span className={s.points}>баллы</span>
        </div>
        <div className={s.body} id="rating-table" ref={ratingTableRef}>
          {isRatingLoading ? (
            <RatingSkeleton />
          ) : (
            ratingItems.length > 0 &&
            filteredData.slice(0, visibleItems).map((item) => {
              return (
                <RatingItem
                  key={item._id}
                  item={item}
                  total={ratingItems.length}
                />
              );
            })
          )}
          {isLoading && <div className={s.loadingText}>загрузка...</div>}
        </div>
      </div>
      {ratingLoadingError && (
        <div className={s.serverError}>
          Ошибка при загрузке рейтинга: {ratingLoadingError.message}
        </div>
      )}
    </div>
  );
};

export default Rating;
