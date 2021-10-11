import React from 'react';

function Category({category, ...props}) {

  const handleClick = () => {
    category.isActive || props.toggleActive(category._id)
  }

    return (
      <li onClick={handleClick} className={`container__item cursor-pointer ${ category.isActive ? 'container__item_active' : ''} ${props.nameOfClass}`}>
        <img src={props.image} alt={props.title} className="container__item-image"/>
        <p className="container__item-name container__item-name_font-size_l">{props.title}</p>
      </li>
  );
}

export default Category