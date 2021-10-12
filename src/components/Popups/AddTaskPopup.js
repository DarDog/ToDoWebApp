import React from 'react'
import Popup from "./Popup";

function AddTaskPopup(props) {
  const [taskName, setTaskName] = React.useState('');
  const [taskCategory, setTaskCategory] = React.useState('');
  const [taskPriority, setTaskPriority] = React.useState('');
  const [taskDate, setTaskDate] = React.useState('');

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setTaskPriority(e.target.value);
  }

  const handleDateChange = (e) => {
    setTaskDate(e.target.value)
  }

  return (
      <Popup isOpen={props.isOpen} onClose={props.onClose}>
        <form className="form modal__form" name="task-creator">
          <label className="form__label" htmlFor="input-task-name">Что нужно сделать?</label>
          <input className="form__input"
                 type="text"
                 id="input-task-name"
                 name="taskName"
                 required
                 maxLength="50"
                 minLength="2"
                 onChange={handleNameChange}
                 value={taskName}
          />
          <div className="form__group">
            <label className="form__label" htmlFor="select-category">Категория
              <select
                  className="form__input form__select"
                  name="formSelectCategory"
                  id="select-category"
                  onChange={handleCategoryChange}
                  value={taskCategory}
              >
                <option value="" disabled>Выбрать</option>
                {props.categories.map(category => {
                  return <option key={category._id} value={category.categoryCode}>{category.title}</option>
                })}
              </select>
            </label>
            <label className="form__label" htmlFor="input-task-date">Когда
              <input className="form__input form__input_type_date"
                     type="date"
                     id="input-task-date"
                     name="taskDate"
                     required
                     onChange={handleDateChange}
                     value={taskDate || ''}
              />
            </label>
            <label className="form__label" htmlFor="select-task-priority">Приоритет задачи
              <select
                  className="form__input form__select"
                  name="formSelectPriority"
                  id="select-task-priority"
                  onChange={handlePriorityChange}
                  value={taskPriority}
              >
                <option className="form__select-option" value="" disabled>Выбрать</option>
                <option className="form__select-option" value="p1">p1</option>
                <option className="form__select-option" value="p2">p2</option>
                <option className="form__select-option" value="p3">p3</option>
                <option className="form__select-option" value="p4">p4</option>
              </select>
            </label>
          </div>
          <div className="form__controller">
            <button onClick={props.onClose} className="button form__button_type_reset" type="reset">Отменить</button>
            <div className="form__controller form__controller_arrange_closer">
              <button className="button form__button_type_save" type="button">Сохранить как шаблон</button>
              <button className="button form__button_type_submit" type="submit">Добавить</button>
            </div>
          </div>
        </form>
      </Popup>
  );
}

export default AddTaskPopup