import React from 'react';

function Popup(props) {
  const [template, setTemplate] = React.useState('Выбрать шаблон');

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value)
  }

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      props.onClose();
    }
  }

  return (
      <article onClick={handleOverlayClick} className={`modal ${props.isOpen && 'modal_active'}`}>
        <div className="container modal__container">
          <div className="modal__title-container">
            <h2 className="container__title container__title_font-size-l">Добавить новую задачу</h2>
            <select
                name=""
                id="container-select"
                className="container__select"
                onChange={handleTemplateChange}
                value={template}
            >
              <option value="Выбрать шаблон" disabled>Выбрать шаблон</option>
            </select>
            <label htmlFor="container-select"/>
          </div>
          {props.children}
        </div>
      </article>
  )
}

export default Popup