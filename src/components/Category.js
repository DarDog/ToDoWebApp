import React from 'react';

function Category(props) {
  return (
      <li className={`container__item cursor-pointer ${props.nameOfClass}`}>
        <img src={props.image} alt={props.title} className="container__item-image"/>
        <p className="container__item-name container__item-name_font-size_l">{props.title}</p>
      </li>
  );
}

export default Category