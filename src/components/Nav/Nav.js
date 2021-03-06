import React from 'react'
import logo from "../../images/logo.svg";
import barChart from "../../images/bar-chart-2.svg";
import trendingUp from "../../images/trending-up.svg";
import Categories from "./Categories";
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
      <nav className={`nav-bar root__nav-bar ${props.isDarkTheme && 'nav-bar_theme_dark'} ${props.isLoggedIn || 'nav-bar_disable'}`}>
        <NavLink exact to={'/'} className={'logo nav-bar__logo'}>
          <img src={logo} alt="Логотип" className="logo__image"/>
          <h1 className="logo__name">Tasks Book</h1>
        </NavLink>
        <Categories
            onOpenAddCategoryPopup={props.onOpenAddCategoryPopup}
            categories={props.categories}
            isDarkTheme={props.isDarkTheme}
        />
        <article className="nav-bar__container container">
          <h2 className="container__title container__title_font-size-m">Данные</h2>
          <ul className="container__list list">
            <li className="container__item cursor-pointer">
              <img src={barChart} alt="" className={`container__item-image ${props.isDarkTheme && 'container__item-image_theme_dark'}`}/>
              <p className={`container__item-name ${props.isDarkTheme && 'container__item-name_theme_dark'} container__item-name_font-size_l`}>Статистика</p>
            </li>
            <li className="container__item cursor-pointer">
              <img src={trendingUp} alt="" className={`container__item-image ${props.isDarkTheme && 'container__item-image_theme_dark'}`}/>
              <p className={`container__item-name ${props.isDarkTheme && 'container__item-name_theme_dark'} container__item-name_font-size_l`}>Сравнить</p>
            </li>
          </ul>
        </article>
      </nav>
  );
}

export default Nav;