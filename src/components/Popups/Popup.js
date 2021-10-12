import React from 'react';

function Popup(props) {
  return (
      <article className={`modal ${props.isOpen && 'modal_active'}`}>
        <div className="container modal__container">
          <div className="modal__title-container">
            <h2 className="container__title container__title_font-size-l">Добавить новую задачу</h2>
            <select name="" id="container-select" className="container__select">
              <option value="" disabled selected>Выбрать шаблон</option>
            </select>
            <label htmlFor="container-select"/>
          </div>
          {props.children}
        </div>
      </article>
  )
}

export default Popup