import React from 'react'
import logo from "../images/logo.svg";
import barChart from "../images/bar-chart-2.svg";
import trendingUp from "../images/trending-up.svg";

function Nav() {
  return (
      <nav className="nav-bar root__nav-bar">
        <a href="#" className="logo nav-bar__logo">
          <img src={logo} alt="Логотип" className="logo__image"/>
          <h1 className="logo__name">Tasks Book</h1>
        </a>
        <article className="nav-bar__container container">
          <h2 className="container__title container__title_font-size-m">Категории</h2>
          <ul className="container__list list category__list">
          </ul>
          <button className="container__add-button create-category">Добавить</button>
        </article>
        <article className="nav-bar__container container">
          <h2 className="container__title container__title_font-size-m">Данные</h2>
          <ul className="container__list list">
            <li className="container__item cursor-pointer">
              <img src={barChart} alt="" className="container__item-image"/>
              <p className="container__item-name container__item-name_font-size_l">Статистика</p>
            </li>
            <li className="container__item cursor-pointer">
              <img src={trendingUp} alt="" className="container__item-image"/>
              <p className="container__item-name container__item-name_font-size_l">Сравнить</p>
            </li>
          </ul>
        </article>
      </nav>
  );
}

export default Nav;