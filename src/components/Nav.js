import React from 'react'
import logo from "../images/logo.svg";
import barChart from "../images/bar-chart-2.svg";
import trendingUp from "../images/trending-up.svg";
import {prependCategory} from "../utils/constans";
import Category from "./Category";

function Nav() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    setCategories(prependCategory)
  }, [])

  const handleToggleActiveCategory = (id) => {
    categories.map(category =>
      category.isActive = false
    )

    setCategories([
      ...categories.map(category =>
          category._id === id ? {...category, isActive: !category.isActive} : {...category}
      )
    ]);
  };

  return (
      <nav className="nav-bar root__nav-bar">
        <a href="#" className="logo nav-bar__logo">
          <img src={logo} alt="Логотип" className="logo__image"/>
          <h1 className="logo__name">Tasks Book</h1>
        </a>
        <article className="nav-bar__container container">
          <h2 className="container__title container__title_font-size-m">Категории</h2>
          <ul className="container__list list category__list">
            {categories.map(category => {
              return <Category
                  category={category}
                  key={category._id}
                  title={category.title}
                  nameOfClass={category.className}
                  image={category.image}
                  toggleActive={handleToggleActiveCategory}
              />
            })}
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