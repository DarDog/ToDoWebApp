import React from "react";
import { prependCategory, prependTasks } from "../utils/constans";
import Header from "./Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import AddToDoPopup from "./AddToDoPopup";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    setCategories(prependCategory);
    setTasks(prependTasks);
  }, []);

  return (
      <>
        <Nav categories={categories} />
        <Header />
        <Main tasks={tasks} categories={categories} />
        <AddToDoPopup />
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
      </>
  );
}

export default App;
