import React from "react";
import {Route, Switch, useHistory} from 'react-router-dom'
import { prependCategory, prependTasks } from "../utils/constans";
import { qutesApi } from "../utils/quotesApi";
import Header from "./Header";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import AddTaskPopup from "./Popups/AddTaskPopup";
import AddCategoryPopup from "./Popups/AddCategoryPopup";
import ProtectedRoute from "./ProtectedRoute";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";

function App() {
  const [categories, setCategories] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [quote, setQuote] = React.useState({})
  const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false);
  const [isAddCategoryOpen, setIsCategoryTaskOpen] = React.useState(false);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const history = useHistory()

  React.useEffect(() => {
    setCategories(prependCategory);
    setTasks(prependTasks);
    qutesApi.getQuoteOfDay()
        .then(data => {
          setQuote(data.quote)
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

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('body_theme_dark');
    localStorage.setItem('theme', !isDarkTheme)
  }

  React.useEffect(() => {
    if (localStorage.getItem('theme') === 'true') {
      setIsDarkTheme(true);
      document.body.classList.add('body_theme_dark');
    } else {
      setIsDarkTheme(false)
      document.body.classList.remove('body_theme_dark');
    }
  }, [])

  React.useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsLoggedIn(true);
      history.push('/')
    } else {
      setIsLoggedIn(false)
      history.push('/sign-in')
    }
  }, [history, isLoggedIn])

  const handleLoggedIn = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
  }

  return (
      <div className={`root ${isDarkTheme && 'root_theme_dark'}`}>
        <Header
            onOpenAddTaskPopup={openAddTaskPopup}
            onThemeToggle={handleThemeToggle}
            isDarkTheme={isDarkTheme}
            isLoggedIn={isLoggedIn}
        />
        <Nav
            categories={categories}
            onOpenAddCategoryPopup={openAddCategoryPopup}
            isDarkTheme={isDarkTheme}
            isLoggedIn={isLoggedIn}
        />
        <Switch>
        <Route path='/sign-in'>
          <SignIn
              onSubmit={handleLoggedIn}
          />
        </Route>
          <Route path='/sign-up'>
            <SignUp
                onSubmit={handleLoggedIn}
            />
          </Route>
          <ProtectedRoute
              component={Main}
              path='/'
              isLoggedIn={isLoggedIn}
              tasks={tasks}
              categories={categories}
              onToggleTaskCompleteStatus={handleToggleTaskCompleteStatus}
              onTaskDelete={handleTaskDelete}
              quote={quote}
              isDarkTheme={isDarkTheme}
          />
        </Switch>
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
      </div>
  );
}

export default App;
