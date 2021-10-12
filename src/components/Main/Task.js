import React from 'react';

function Task({task, ...props}) {
  const handleCheckBoxClick = () => {
    props.onToggleCompleteStatus(task._id)
  }
  return (
      <li className="task__item">
        <button className={`task__check ${task.isComplete && 'task__check_completed'}`}
                type="button"
                onClick={handleCheckBoxClick}
        />
        <p className="task__name">{task.title}</p>
        <div className="task__manager">
          <button className="task__editor" type="button"/>
          <button className="task__deleter" type="button"/>
        </div>
      </li>
  );
}

export default Task