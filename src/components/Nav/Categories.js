import React from 'react';
import Category from "./Category";

function Categories(props) {
    return (
      <article className="nav-bar__container container">
        <h2 className="container__title container__title_font-size-m">Категории</h2>
        <ul className="container__list list category__list">
          {props.categories.map(category => {
            return <Category
                key={category._id}
                title={category.title}
                categoryCode={category.categoryCode}
                image={category.image}
                isDarkTheme={props.isDarkTheme}
            />
          })}
        </ul>
        <button onClick={props.onOpenAddCategoryPopup} className={`container__add-button ${props.isDarkTheme && 'container__add-button_theme_dark'}`}>Добавить</button>
      </article>
  );
}

export default Categories