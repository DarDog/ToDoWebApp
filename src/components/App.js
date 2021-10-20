import React from "react";
import { prependCategory, prependTasks } from "../utils/constans";
import Header from "./Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import AddTaskPopup from "./Popups/AddTaskPopup";
import AddCategoryPopup from "./Popups/AddCategoryPopup";
import { qutesApi } from "../utils/quotesApi";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [quote, setQuote] = React.useState([])
  const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false);
  const [isAddCategoryOpen, setIsCategoryTaskOpen] = React.useState(false);

  React.useEffect(() => {
    setCategories(prependCategory);
    setTasks(prependTasks);
    qutesApi.getQuoteOfDay()
        .then(quote => {
          setQuote(quote)
        })
        .catch(err => {
          console.error(err)
        })
  }, []);

  const handleToggleTaskCompleteStatus = (taskId) => {
    setTasks([
        ...tasks.map(task =>
            task._id === taskId ? {...task, isComplete: !task.isComplete} : {...task}
        )
    ])
  }

  const handleTaskDelete = (taskId) => {
    setTasks([
        ...tasks.map(task =>
          task._id === taskId ? {...task, isDeleted: !task.isDeleted} : {...task}
        )
    ])
  }

  const closeAllPopups = () => {
    setIsAddTaskOpen(false)
    setIsCategoryTaskOpen(false)
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)
  })

  const openAddTaskPopup = () => {
    setIsAddTaskOpen(true);
  }

  const openAddCategoryPopup = () => {
    setIsCategoryTaskOpen(true);
  }

  const handleTaskAdd = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  const handleCategoryAdd = (newCategory) => {
    setCategories([...categories, newCategory])
  }

  return (
      <>
        <Nav
            categories={categories}
            onOpenAddCategoryPopup={openAddCategoryPopup}
        />
        <Header onOpenAddTaskPopup={openAddTaskPopup} />
        <Main
            tasks={tasks}
            categories={categories}
            onToggleTaskCompleteStatus={handleToggleTaskCompleteStatus}
            onTaskDelete={handleTaskDelete}
            quote={quote}
        />
        <AddTaskPopup
            isOpen={isAddTaskOpen}
            onClose={closeAllPopups}
            categories={categories}
            onTaskAdd={handleTaskAdd}
            tasksLength={tasks.length}
        />
        <AddCategoryPopup
            isOpen={isAddCategoryOpen}
            onClose={closeAllPopups}
            onCategoryAdd={handleCategoryAdd}
            categoryLength={categories.length}
            categories={categories}
        />
      </>
  );
}

export default App;
