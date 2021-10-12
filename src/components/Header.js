import React from 'react'
import avatar from "../images/avatar.jpg";

function Header(props) {
  return (
      <header className="header root__header">
        <button onClick={props.onOpenAddTaskPopup} className="header__add-button button">Новая задача</button>
        <button className="header__theme-button"/>
        <div className="user">
          <p className="user__greetings">Хорошего дня, <span
              className="user__greetings user__greetings_span">username</span></p>
          <img src={avatar} alt="Ваш аватар" className="user__avatar"/>
          <button className="user__menu"/>
        </div>
      </header>
  );
}

export default Header