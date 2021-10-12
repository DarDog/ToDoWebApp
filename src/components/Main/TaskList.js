import React from 'react';
import { Route } from 'react-router-dom';
import Task from "./Task";

function TaskList(props) {
  return (
      <Route path={`/${props.category}`}>
        <article className="container main__container todo-list">
          <div className="container__title-container">
            <h2 className="container__title container__title_font-size-s">Активные задачи</h2>
            <button className="container__function-button"/>
          </div>
          <ul className="list task__list task__list_uncompleted">
            {props.tasks.map(task => {
              if (task.category === props.category && task.isComplete === false) {
                return <Task key={task._id}
                             task={task}
                             onToggleCompleteStatus={props.onToggleCompleteStatus}
                             onTaskDelete={props.onTaskDelete}
                />
              }
            })}
          </ul>
          <div className="container__title-container">
            <h2 className="container__title container__title_font-size-s">Завершенные задачи</h2>
            <button className="container__function-button"/>
          </div>
          <ul className="list task__list task__list_completed">
            {props.tasks.map(task => {
              if (task.category === props.category && task.isComplete === true) {
                return <Task
                    key={task._id}
                    task={task}
                    onToggleCompleteStatus={props.onToggleCompleteStatus}
                    onTaskDelete={props.onTaskDelete}
                />
              }
            })}
          </ul>
        </article>
      </Route>
  );
}

export default TaskList