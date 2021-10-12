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

  const handleToggleTaskCompleteStatus = (taskId) => {
    setTasks([
        ...tasks.map(task =>
            task._id === taskId ? {...task, isComplete: !task.isComplete} : {...task}
        )
    ])
  }

  return (
      <>
        <Nav categories={categories} />
        <Header />
        <Main
            tasks={tasks}
            categories={categories}
            onToggleTaskCompleteStatus={handleToggleTaskCompleteStatus}
        />
        <AddToDoPopup />
      </>
  );
}

export default App;
