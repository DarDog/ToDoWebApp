import React from "react";
import { prependCategory, prependTasks } from "../utils/constans";
import Header from "./Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Popup from "./Popups/Popup";
import AddTaskPopup from "./Popups/AddTaskPopup";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false);

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

  const handleTaskDelete = (taskId) => {
    setTasks(tasks => tasks.filter((task) => task._id === taskId ? task.remove : task))
  }

  const closeAllPopups = () => {
    setIsAddTaskOpen(false)
  }

  const openAddTaskOpen = () => {
    setIsAddTaskOpen(true)
  }

  return (
      <>
        <Nav categories={categories} />
        <Header onOpenAddTaskPopup={openAddTaskOpen} />
        <Main
            tasks={tasks}
            categories={categories}
            onToggleTaskCompleteStatus={handleToggleTaskCompleteStatus}
            onTaskDelete={handleTaskDelete}
        />
        <AddTaskPopup isOpen={isAddTaskOpen} onClose={closeAllPopups} />
      </>
  );
}

export default App;
