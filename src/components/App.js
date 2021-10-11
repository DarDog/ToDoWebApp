import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main/Main";
import AddToDoPopup from "./AddToDoPopup";

function App() {
  return (
      <>
        <Nav />
        <Header />
        <Main />
        <AddToDoPopup />
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
