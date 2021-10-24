import React from 'react';
import avatar from '../../images/avatar.jpg'
import FormErrors from "../Popups/FormErrors";

function UserProfile(props) {
  const [name, setName] = React.useState(''),
      [isNameValid, setIsNameValid] = React.useState(false),
      [nameErrorMassage, setNameErrorMassage] = React.useState(''),
      [email, setEmail] = React.useState(''),
      [isEmailValid, setIsEmailValid] = React.useState(false),
      [emailErrorMassage, setEmailErrorMassage] = React.useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
    handleNameValidity(e.target)
  }

  const handleNameValidity = (input) => {
    if (!input.validity.valid) {
      setIsNameValid(false);
      setNameErrorMassage(input.validationMessage);
    } else {
      setIsNameValid(true);
      setNameErrorMassage('');
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    handleEmailValidity(e.target)
  }

  const handleEmailValidity = (input) => {
    if (!input.validity.valid) {
      setIsEmailValid(false);
      setEmailErrorMassage(input.validationMessage);
    } else {
      setIsEmailValid(true)
      setEmailErrorMassage('')
    }
  }

  return (
      <article className={`container ${props.isThemeDark && 'container_theme_dark'} main__container`}>
        <div className="user-profile">
          <div className="user-profile__menu">
            <img src={avatar} alt="Ваша аватарка" className={'user-profile__avatar'}/>
            <p className="user-profile__link">изменить фото</p>
          </div>
          <div className="user-profile__menu">
            <form className="form user-profile__form">
              <div className='user-profile__form-container'>
                <label htmlFor="" className={`form__label ${props.isThemeDark && 'form__label_theme_dark'}`}>Ваш никнейм:</label>
                <input
                    type="text"
                    className="form__input"
                    minLength={3}
                    required
                    value={name}
                    onChange={handleNameChange}
                />
                {nameErrorMassage.length > 0 && <FormErrors isValid={isNameValid} errorsMassage={nameErrorMassage} />}
              </div>
              <div className='user-profile__form-container'>
                <label htmlFor="" className={`form__label ${props.isThemeDark && 'form__label_theme_dark'}`}>Ваша почта:</label>
                <input
                    type="email"
                    className="form__input"
                    required
                    value={email}
                    onChange={handleEmailChange}
                />
                {emailErrorMassage.length > 0 && <FormErrors isValid={isEmailValid} errorsMassage={emailErrorMassage} />}
              </div>
              <div className="form__controller form__controller_arrange_closer">
                <button className="button form__button form__button_type_submit">Сохранить изменения</button>
              </div>
            </form>
          </div>
        </div>
      </article>
  );
}

export default UserProfile;