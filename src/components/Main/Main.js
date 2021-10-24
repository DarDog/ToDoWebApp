import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import lineChart from "../../images/Line chart.svg";
import TaskList from './TaskList';
import SuccessInWeek from "./SuccessInWeek";
import QuotesContainer from "./QuotesContainer";
import CurrentDate from "./CurrentDate";
import UserProfile from "./UserProfile";

function Main(props) {
  return (
      <main className="main root__main">
        <section className="section main__section left-bar">
          <Switch>
            <Route exact path={'/'}>
              <UserProfile
                  isThemeDark={props.isDarkTheme}
              />
            </Route>
            <Route path={'/'}>
              <SuccessInWeek
                  tasks={props.tasks}
                  isThemeDark={props.isDarkTheme}
              />
              {props.categories.map(category => {
                return <TaskList
                    key={category._id}
                    category={category.categoryCode}
                    tasks={props.tasks}
                    onToggleCompleteStatus={props.onToggleTaskCompleteStatus}
                    onTaskDelete={props.onTaskDelete}
                    isDarkTheme={props.isDarkTheme}
                />
              })}
            </Route>
          </Switch>
        </section>
        <section className="section main__section">
          <CurrentDate
              isDarkTheme={props.isDarkTheme}
          />
          <article className={`container ${props.isDarkTheme && 'container_theme_dark'} main__container`}>
            <h2 className="container__title container__title_font-size-s">Наблюдение</h2>
            <div className="observation">
              <p className={`container__paragraph ${props.isDarkTheme && 'container__paragraph_theme_dark'}`}>Больше
                всего задач вы <Link to="#"
                                     className="container__link">создаете</Link> в
                <span className="container__span"> понедельник</span></p>
              <p className={`container__paragraph ${props.isDarkTheme && 'container__paragraph_theme_dark'}`}>Больше
                всего задач вы завершаете во <span
                    className="container__span">вторник</span>
              </p>
            </div>
          </article>
          <QuotesContainer
              quote={props.quote}
              isDarkTheme={props.isDarkTheme}
          />
          <article className={`container ${props.isDarkTheme && 'container_theme_dark'} main__container`}>
            <h2 className="container__title container__title_font-size-s">График успеваемости</h2>
            <img src={lineChart} alt="Заглушка график"
                 className={`schedule ${props.isDarkTheme && 'schedule_theme_dark'}`}/>
          </article>
        </section>
      </main>
  );
}

export default Main