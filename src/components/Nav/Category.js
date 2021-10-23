import React from 'react';
import {NavLink} from "react-router-dom";

function Category(props) {
  return (
      <li className={`container__item container__nav-item cursor-pointer}`}>
        <NavLink to={`/${props.categoryCode}`} className={'container__item-link'} activeClassName={'container__item_active'}>
          <img src={props.image} alt={props.title} className={`container__item-image ${props.isDarkTheme && 'container__item-image_theme_dark'}`}/>
          <p className={`container__item-name container__item-name_font-size_l ${props.isDarkTheme && 'container__item-name_theme_dark'}`}>{props.title}</p>
        </NavLink>
      </li>
  );
}

export default Category