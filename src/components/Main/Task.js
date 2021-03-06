import React from 'react';

function Task({task, ...props}) {
  const handleCheckBoxClick = () => {
    props.onToggleCompleteStatus(task._id)
  }

  const handleDeleteClick = () => {
    props.onTaskDelete(task._id)
  }
  return (
      <li className={`task__item ${props.isDarkTheme && 'task__item_theme_dark'}`}>
        <button className={`task__check ${task.isComplete && 'task__check_completed'}`}
                type="button"
                onClick={handleCheckBoxClick}
        />
        <p className={`task__name ${task.isComplete && 'task__name_completed'} ${props.isDarkTheme && 'task__name_theme_dark'}`}>{task.title}</p>
        <div className="task__manager">
          <button className="task__editor" type="button"/>
          <button className="task__deleter" type="button" onClick={handleDeleteClick}/>
        </div>
      </li>
  );
}

export default Task