import React from 'react'
import avatar from "../images/avatar.jpg";

function Header(props) {
  return (
      <header className="header root__header">
        <button onClick={props.onOpenAddTaskPopup} className={`header__add-button button`}>Новая задача</button>
        <button type='button' className={`header__theme-button ${props.isDarkTheme && 'header__theme-button_theme_dark'}`} onClick={props.onThemeToggle}/>
        <div className="user">
          <p className={`user__greetings ${props.isDarkTheme && 'user__greetings_theme_dark'}`}>Хорошего дня, <span
              className={`user__greetings ${props.isDarkTheme && 'user__greetings_theme_dark'} user__greetings_span`}>username</span></p>
          <img src={avatar} alt="Ваш аватар" className="user__avatar"/>
          <button className={`user__menu ${props.isDarkTheme && 'user__menu_theme_dark'}`}/>
        </div>
      </header>
  );
}

export default Header