import React from 'react';
import { Route } from 'react-router-dom';
import Task from "./Task";

function TaskList(props) {
  return (
      <Route path={`/${props.category}`}>
        <article className={`container ${props.isDarkTheme && 'container_theme_dark'} main__container todo-list`}>
          <div className="container__title-container">
            <h2 className="container__title container__title_font-size-s">Активные задачи</h2>
            <button className={`container__function-button ${props.isDarkTheme && 'container__function-button_theme_dark'}`}/>
          </div>
          <ul className="list task__list task__list_uncompleted">
            {props.tasks.map(task => {
              if (task.category === props.category && task.isComplete === false && task.isDeleted === false) {
                return <Task key={task._id}
                             task={task}
                             onToggleCompleteStatus={props.onToggleCompleteStatus}
                             onTaskDelete={props.onTaskDelete}
                             isDarkTheme={props.isDarkTheme}
                />
              }
            })}
          </ul>
          <div className="container__title-container">
            <h2 className="container__title container__title_font-size-s">Завершенные задачи</h2>
            <button className={`container__function-button ${props.isDarkTheme && 'container__function-button_theme_dark'}`}/>
          </div>
          <ul className="list task__list task__list_completed">
            {props.tasks.map(task => {
              if (task.category === props.category && task.isComplete === true && task.isDeleted === false) {
                return <Task
                    key={task._id}
                    task={task}
                    onToggleCompleteStatus={props.onToggleCompleteStatus}
                    onTaskDelete={props.onTaskDelete}
                    isDarkTheme={props.isDarkTheme}
                />
              }
            })}
          </ul>
        </article>
      </Route>
  );
}

export default TaskList