import React from 'react';

function SuccessInWeek(props) {

  const getCompletedTasks = () => {
    let count = 0;
    props.tasks.forEach(task => {
      if (task.isComplete === true) {
        count++
      }
    })
    return count
  }

  const getDeletedTasks = () => {
    let count = 0;
    props.tasks.forEach(task => {
      if (task.isDeleted === true) {
        count++
      }
    })
    return count
  }

  return (
      <article className={`container ${props.isThemeDark && 'container_theme_dark'} main__container`}>
        <div className="container__title-container">
          <h2 className="container__title container__title_font-size-s">Успехи за неделю</h2>
          <button className={`container__function-button ${props.isThemeDark && 'container__function-button_theme_dark'}`} type="button"/>
        </div>
        <ul className="list container__list list_flex_row">
          <li className="container__item container__item_flex_column">
            <p className={`container__item-name ${props.isThemeDark && 'container__item-name_theme_dark'} container__item-name_font-size_m`}>Создано</p>
            <div className="bubble">
              <h3 className="bubble__title">{props.tasks.length}</h3>
              <p className={`bubble__name ${props.isThemeDark && 'bubble__name_theme_dark'}`}>Задач</p>
            </div>
          </li>
          <li className="container__item container__item_flex_column">
            <p className={`container__item-name ${props.isThemeDark && 'container__item-name_theme_dark'} container__item-name_font-size_m`}>Завершено</p>
            <div className="bubble">
              <h3 className="bubble__title">{getCompletedTasks()}</h3>
              <p className={`bubble__name ${props.isThemeDark && 'bubble__name_theme_dark'}`}>Задач</p>
            </div>
          </li>
          <li className="container__item container__item_flex_column">
            <p className={`container__item-name ${props.isThemeDark && 'container__item-name_theme_dark'} container__item-name_font-size_m`}>Удалено</p>
            <div className="bubble">
              <h3 className="bubble__title">{getDeletedTasks()}</h3>
              <p className={`bubble__name ${props.isThemeDark && 'bubble__name_theme_dark'}`}>Задач</p>
            </div>
          </li>
        </ul>
      </article>
  );
}

export default SuccessInWeek;