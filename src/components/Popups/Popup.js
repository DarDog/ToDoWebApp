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
            <h2 className="container__title container__title_font-size-l">{props.popupName}</h2>
            {props.isAddTask && <select
                name=""
                id="container-select"
                className="container__select"
                onChange={handleTemplateChange}
                value={template}
            >
              <option value="Выбрать шаблон" disabled>Выбрать шаблон</option>
            </select>}
            <label htmlFor="container-select"/>
          </div>
          <form className="form modal__form" name={props.formName} onSubmit={props.onSubmit} noValidate>
            {props.children}
            <div className="form__controller">
              <button onClick={props.onClose} className="button form__button_type_reset" type="reset">Отменить</button>
              <div className="form__controller form__controller_arrange_closer">
                {props.isAddTask &&
                <button className={`button form__button_type_save ${!props.isValid ? 'form__button_disable' : ''}`}
                        type="button">Сохранить как шаблон</button>}
                <button className={`button form__button_type_submit ${!props.isValid ? 'form__button_disable' : ''}`}
                        type="submit">Добавить
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
  )
}

export default Popup