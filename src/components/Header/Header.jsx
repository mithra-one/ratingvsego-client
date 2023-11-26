import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import TelegramIcon from "../../assets/icons/telegram.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import TwitterIcon from "../../assets/icons/twitter.svg?react";
import YoutubeIcon from "../../assets/icons/youtube.svg?react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SignOutStart,
  SignOutSuccess,
  SignOutFailure,
} from "../../redux/actions";

const Header = () => {
  const { currentUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(SignOutStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();

      if (data.success === false) {
        dispatch(SignOutFailure(data.message));
        return;
      }
      dispatch(SignOutSuccess());
    } catch (err) {
      dispatch(SignOutFailure(err.message));
    }
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isNavExpanded ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavExpanded]);

  const adminMenuItems = [
    { to: "/add-rate", label: "Добавить оценку" },
    { to: "/add-expert", label: "Добавить эксперта" },
    { to: "/add-event", label: "Добавить мероприятие" },
    { to: "/profile", label: "Профиль" },
  ];
  const contactItems = [
    {
      href: "https://t.me/shakulin_vasya",
      icon: TelegramIcon,
      ariaLabel: "Телеграм канал",
    },
    {
      href: "https://instagram.com/shakulin_vasya/",
      icon: InstagramIcon,
      ariaLabel: "Инстаграм",
    },
    {
      href: "https://twitter.com/vshakulin",
      icon: TwitterIcon,
      ariaLabel: "Твиттер Х",
    },
    {
      href: "https://youtube.com/@shakulin_vasya",
      icon: YoutubeIcon,
      ariaLabel: "Youtube канал",
    },
  ];

  return (
    <div className={s.header}>
      <NavLink
        to="/"
        className={s.logo}
        onClick={() => setIsNavExpanded(false)}
      >
        <span>Рейтинг</span>
        <span>всего</span>
      </NavLink>

      {currentUser?.role === "admin" ? (
        <>
          <button
            className={s.hamburger}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#fedeba"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className={
              isNavExpanded ? `${s.adminMenu} ${s.expanded}` : s.adminMenu
            }
          >
            {adminMenuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setIsNavExpanded(false)}
                className={({ isActive }) =>
                  isActive ? `${s.active} ${s.navItem}` : `${s.navItem}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                setIsNavExpanded(false);
                handleSignOut();
              }}
              className={s.navItem}
            >
              Выйти
            </button>
          </div>
        </>
      ) : null}

      {!currentUser && (
        <div className={s.contacts}>
          {contactItems.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className={s.link}
              aria-label={contact.ariaLabel}
            >
              {contact.icon()}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
