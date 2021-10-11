import logo from '../images/logo.svg'
import barChart from '../images/bar-chart-2.svg'
import trendingUp from '../images/trending-up.svg'
import clock from '../images/clock.svg'
import calendar from '../images/calendar.svg'
import lineChart from '../images/Line chart.svg'
import React from "react";
import Header from "./Header";

function App() {
  return (
      <>
        <nav className="nav-bar root__nav-bar">
          <a href="#" className="logo nav-bar__logo">
            <img src={logo} alt="Логотип" className="logo__image"/>
            <h1 className="logo__name">Tasks Book</h1>
          </a>
          <article className="nav-bar__container container">
            <h2 className="container__title container__title_font-size-m">Категории</h2>
            <ul className="container__list list category__list">
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
        <Header />
        <main className="main root__main">
          <section className="section main__section left-bar">
            <article className="container main__container">
              <div className="container__title-container">
                <h2 className="container__title container__title_font-size-s">Успехи за неделю</h2>
                <button className="container__function-button" type="button"/>
              </div>
              <ul className="list container__list list_flex_row">
                <li className="container__item container__item_flex_column">
                  <p className="container__item-name container__item-name_font-size_m">Создано</p>
                  <div className="bubble">
                    <h3 className="bubble__title">113</h3>
                    <p className="bubble__name">Задач</p>
                  </div>
                </li>
                <li className="container__item container__item_flex_column">
                  <p className="container__item-name container__item-name_font-size_m">Завершено</p>
                  <div className="bubble">
                    <h3 className="bubble__title">97</h3>
                    <p className="bubble__name">Задач</p>
                  </div>
                </li>
                <li className="container__item container__item_flex_column">
                  <p className="container__item-name container__item-name_font-size_m">Удалено</p>
                  <div className="bubble">
                    <h3 className="bubble__title">14</h3>
                    <p className="bubble__name">Задач</p>
                  </div>
                </li>
              </ul>
            </article>
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
          </section>
          <section className="section main__section">
            <article className="container main__container">
              <h2 className="container__title container__title_font-size-s">Такс такс такс</h2>
              <div className="date">
                <ul className="list container__list list_flex_row">
                  <li className="container__item container__item_flex_column">
                    <p className="date__name">На часах у нас</p>
                    <div className="date__types">
                      <img src={clock} alt="часы" className="date__type-image"/>
                      <p className="date__type"><span className="hour">00</span>:<span
                          className="minute">00</span>:<span
                          className="second">00</span>
                      </p>
                    </div>
                  </li>
                  <li className="container__item container__item_flex_column">
                    <p className="date__name">А сегодня у нас</p>
                    <div className="date__types">
                      <img src={calendar} alt="Календарь" className="date__type-image"/>
                      <p className="date__type"><span className="day">01</span> <span
                          className="month">января</span>
                        <span className="year">1900</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
            <article className="container main__container">
              <h2 className="container__title container__title_font-size-s">Наблюдение</h2>
              <div className="observation">
                <p className="container__paragraph">Больше всего задач вы <a href="#"
                                                                             className="container__link">создаете</a> в
                  <span className="container__span">понедельник</span></p>
                <p className="container__paragraph">Больше всего задач вы создаете во <span
                    className="container__span">вторник</span>
                </p>
              </div>
            </article>
            <article className="container main__container">
              <h2 className="container__title container__title_font-size-s">Факт дня</h2>
              <div className="fact">
                <p className="container__paragraph">Человек, который просыпается в 6 утра, по статистике, закрывает
                  все
                  задачи к
                  18:00 вечера. Попробуем также 🤔?</p>
              </div>
            </article>
            <article className="container main__container">
              <h2 className="container__title container__title_font-size-s">График успеваемости</h2>
              <img src={lineChart} alt="Заглушка график" className="schedule"/>
            </article>
          </section>
        </main>
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
