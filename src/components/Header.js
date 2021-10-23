import React from 'react'
import avatar from "../images/avatar.jpg";
import logo from "../images/logo.svg";
import {NavLink} from "react-router-dom";

function Header(props) {
  return (
      <header className="header root__header">
        {props.isLoggedIn ||
        <NavLink exact to={'/'} className={'logo'}>
          <img src={logo} alt="Логотип" className="logo__image"/>
          <h1 className="logo__name">Tasks Book</h1>
        </NavLink>
        }
        {!props.isLoggedIn ||
        <>
          <button onClick={props.onOpenAddTaskPopup} className={`header__add-button button`}>Новая задача</button>
          <button type='button'
                  className={`header__theme-button ${props.isDarkTheme && 'header__theme-button_theme_dark'}`}
                  onClick={props.onThemeToggle}/>
          <div className="user">
            <p className={`user__greetings ${props.isDarkTheme && 'user__greetings_theme_dark'}`}>Хорошего дня, <span
                className={`user__greetings ${props.isDarkTheme && 'user__greetings_theme_dark'} user__greetings_span`}>username</span>
            </p>
            <img src={avatar} alt="Ваш аватар" className="user__avatar"/>
            <button className={`user__menu ${props.isDarkTheme && 'user__menu_theme_dark'}`}/>
          </div>
        </>
        }
      </header>
  );
}

export default Header