import React from 'react'
import Popup from "./Popup";
import FormErrors from "./FormErrors";

function AddTaskPopup(props) {
  const [taskName, setTaskName] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [nameErrorMassage, setNameErrorMassage] = React.useState('');
  const [taskCategory, setTaskCategory] = React.useState('');
  const [isCategoryValid, setIsCategoryValid] = React.useState(false);
  const [taskPriority, setTaskPriority] = React.useState('');
  const [isPriorityValid, setIsPriorityValid] = React.useState(false);
  const [taskDate, setTaskDate] = React.useState('');
  const [isDateValid, setIsDateValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
    handleNameValid(e.target)
  }

  const handleNameValid = (input) => {
    if (!input.validity.valid) {
      setIsNameValid(false)
      setNameErrorMassage(input.validationMessage)
    } else {
      setIsNameValid(true)
      setNameErrorMassage('')
    }
  }

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
    handleCategoryValid(e.target)
  }

  const handleCategoryValid = (input) => {
    if (!input.validity.valid) {
      setIsCategoryValid(false)
    } else {
      setIsCategoryValid(true)
    }
  }

  const handlePriorityChange = (e) => {
    setTaskPriority(e.target.value);
    handlePriorityValid(e.target)
  }

  const handlePriorityValid = (input) => {
    if (!input.validity.valid) {
      setIsPriorityValid(false)
    } else {
      setIsPriorityValid(true)
    }
  }

  const handleDateChange = (e) => {
    setTaskDate(e.target.value)
    handleDateValid(e.target)
  }


  const handleDateValid = (input) => {
    if (!input.validity.valid) {
      setIsDateValid(false)
    } else {
      setIsDateValid(true)
    }
  }

  React.useEffect(() => {
    if (!isNameValid || !isCategoryValid || !isDateValid || !isPriorityValid) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [isNameValid, isCategoryValid, isDateValid, isPriorityValid, props.isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onTaskAdd({
      title: taskName,
      category: taskCategory,
      isComplete: false,
      date: taskDate,
      priority: taskPriority,
      isDeleted: false,
      _id: props.tasksLength
    })

    props.onClose();
    setTaskName('')
    setTaskCategory('')
    setTaskPriority('')
    setTaskDate('')
    setIsNameValid(false)
    setIsDateValid(false)
    setIsCategoryValid(false)
    setIsPriorityValid(false)
  }

  return (
      <Popup
          isOpen={props.isOpen}
          onClose={props.onClose}
          isValid={isFormValid}
          onSubmit={handleSubmit}
          popupName={'Добавить новую задачу'}
          formName={'task-creator'}
          isAddTask={true}
      >
        <label className="form__label" htmlFor="input-task-name">Что нужно сделать?</label>
        <input className={`form__input ${isNameValid ? 'form__input_valid' : '' }`}
               type="text"
               id="input-task-name"
               name="taskName"
               required
               maxLength="100"
               minLength="2"
               onChange={handleNameChange}
               value={taskName}
        />
        <FormErrors isValid={isNameValid} errorsMassage={nameErrorMassage} />
        <div className="form__group">
          <label className="form__label" htmlFor="select-category">Категория
            <select
                className={`form__input form__select ${isCategoryValid ? 'form__input_valid' : '' }`}
                name="formSelectCategory"
                id="select-category"
                required
                onChange={handleCategoryChange}
                value={taskCategory}
            >
              <option value="" disabled>Выбрать</option>
              {props.categories.map(category => {
                return <option key={category._id} value={category.categoryCode}>{category.title}</option>
              })}
            </select>
          </label>
          <label className="form__label" htmlFor="input-task-date">Когда
            <input className={`form__input form__input_type_date ${isDateValid ? 'form__input_valid' : ''}`}
                   type="date"
                   id="input-task-date"
                   name="taskDate"
                   required
                   onChange={handleDateChange}
                   value={taskDate || ''}
            />
          </label>
          <label className="form__label" htmlFor="select-task-priority">Приоритет задачи
            <select
                className={`form__input form__select ${isPriorityValid ? 'form__input_valid' : ''}`}
                name="formSelectPriority"
                id="select-task-priority"
                required
                onChange={handlePriorityChange}
                value={taskPriority}
            >
              <option className="form__select-option" value="" disabled>Выбрать</option>
              <option className="form__select-option" value="p1">p1</option>
              <option className="form__select-option" value="p2">p2</option>
              <option className="form__select-option" value="p3">p3</option>
              <option className="form__select-option" value="p4">p4</option>
            </select>
          </label>
        </div>
      </Popup>
  );
}

export default AddTaskPopup