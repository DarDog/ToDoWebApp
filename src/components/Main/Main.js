import React from 'react';
import { Link } from 'react-router-dom';
import lineChart from "../../images/Line chart.svg";
import TaskList from './TaskList';
import SuccessInWeek from "./SuccessInWeek";
import QuotesContainer from "./QuotesContainer";
import CurrentDate from "./CurrentDate";

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
          <CurrentDate />
          <article className="container main__container">
            <h2 className="container__title container__title_font-size-s">Наблюдение</h2>
            <div className="observation">
              <p className="container__paragraph">Больше всего задач вы <Link to="#"
                                                                           className="container__link">создаете</Link> в
                <span className="container__span"> понедельник</span></p>
              <p className="container__paragraph">Больше всего задач вы завершаете во <span
                  className="container__span">вторник</span>
              </p>
            </div>
          </article>
          <QuotesContainer
            quote={props.quote}
          />
          <article className="container main__container">
            <h2 className="container__title container__title_font-size-s">График успеваемости</h2>
            <img src={lineChart} alt="Заглушка график" className="schedule"/>
          </article>
        </section>
      </main>
  );
}

export default Main