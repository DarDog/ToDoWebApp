import React from 'react';
import clock from "../../images/clock.svg";
import calendar from "../../images/calendar.svg";
import lineChart from "../../images/Line chart.svg";
import TaskList from './TaskList';
import SuccessInWeek from "./SuccessInWeek";

function Main(props) {
  return (
      <main className="main root__main">
        <section className="section main__section left-bar">
          <SuccessInWeek tasks={props.tasks} />
            {props.categories.map(category => {
              return <TaskList
                  key={category._id}
                  category={category.categoryCode}
                  tasks={props.tasks}
                  onToggleCompleteStatus={props.onToggleTaskCompleteStatus}
                  onTaskDelete={props.onTaskDelete}
              />
            })}
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
  );
}

export default Main