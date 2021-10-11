import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main/Main";

function App() {
  return (
      <>
        <Nav />
        <Header />
        <Main />
        <article className="modal">
          <div className="container modal__container">
            <div className="modal__title-container">
              <h2 className="container__title container__title_font-size-l">Добавить новую задачу</h2>
              <select name="" id="container-select" className="container__select">
                <option value="" disabled selected>Выбрать шаблон</option>
              </select>
              <label htmlFor="container-select"/>
            </div>
            <form className="form modal__form" name="task-creator">
              <label className="form__label" htmlFor="input-task-name">Что нужно сделать?</label>
              <input className="form__input" type="text" id="input-task-name" name="taskName" required maxLength="50"
                     minLength="2"/>
              <div className="form__group">
                <label className="form__label" htmlFor="select-category">Категория
                  <select className="form__input form__select" name="formSelectCategory" id="select-category">
                    <option value="" disabled selected>Выбрать</option>
                  </select>
                </label>
                <label className="form__label" htmlFor="input-task-date">Когда
                  <input className="form__input form__input_type_date" type="date" id="input-task-date"
                         name="taskDate"
                         required/>
                </label>
                <label className="form__label" htmlFor="select-task-priority">Приоритет задачи
                  <select className="form__input form__select" name="formSelectPriority" id="select-task-priority">
                    <option className="form__select-option" value="" disabled selected>Выбрать</option>
                  </select>
                </label>
              </div>
              <div className="form__controller">
                <button className="button form__button_type_reset" type="reset">Отменить</button>
                <div className="form__controller form__controller_arrange_closer">
                  <button className="button form__button_type_save" type="button">Сохранить как шаблон</button>
                  <button className="button form__button_type_submit" type="submit">Добавить</button>
                </div>
              </div>
            </form>
          </div>
        </article>
        <template class="category-template">
          <li className="container__item cursor-pointer">
            <img src="" alt="" className="container__item-image"/>
            <p className="container__item-name container__item-name_font-size_l"/>
          </li>
        </template>
        <template class="tasks-container-template">
          <article className="container main__container todo-list">
            <div className="container__title-container">
              <h2 className="container__title container__title_font-size-s">Активные задачи</h2>
              <button className="container__function-button"/>
            </div>
            <ul className="list task__list task__list_uncompleted">
            </ul>
            <div className="container__title-container">
              <h2 className="container__title container__title_font-size-s">Завершенные задачи</h2>
              <button className="container__function-button"/>
            </div>
            <ul className="list task__list task__list_completed">
            </ul>
          </article>
        </template>
        <template class="task-template">
          <li className="task__item">
            <button className="task__check" type="button"/>
            <p className="task__name"> </p>
            <div className="task__manager">
              <button className="task__editor" type="button"/>
              <button className="task__deleter" type="button"/>
            </div>
          </li>
        </template>
      </>
  );
}

export default App;
