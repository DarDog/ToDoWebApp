import React from 'react';
import Popup from "./Popup";
import FormErrors from "./FormErrors";
import home from "../../images/home.svg";

function AddCategoryPopup(props) {
  const [name, setName] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [nameErrorMassage, setNameErrorMassage] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value)
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

  React.useEffect(() => {
    props.categories.forEach(category => {
      if (category.title.toLowerCase() === name.toLowerCase()) {
        setIsNameValid(false);
        setNameErrorMassage('Такая категория уже существует');
      }
    })
  }, [name, props.categories])

  React.useEffect(() => {
    if (!isNameValid) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [isNameValid, props.isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onCategoryAdd({
      title: name,
      categoryCode: name,
      image: home,
      _id: props.categoryLength
    })

    props.onClose();
    setName('')
  }

  return (
      <Popup
          isOpen={props.isOpen}
          onClose={props.onClose}
          popupName={'Добавить новую категорию'}
          formName={'category-creator'}
          isAddTask={false}
          isValid={isFormValid}
          onSubmit={handleSubmit}
      >
        <label className="form__label" htmlFor="input-task-name">Назовите новую категорию</label>
        <input className={`form__input ${isNameValid ? 'form__input_valid' : '' }`}
               type="text"
               id="input-task-name"
               name="taskName"
               required
               maxLength="30"
               minLength="2"
               onChange={handleNameChange}
               value={name || ''}
        />
        <FormErrors isValid={isNameValid} errorsMassage={nameErrorMassage} />
      </Popup>
  );
}

export default AddCategoryPopup