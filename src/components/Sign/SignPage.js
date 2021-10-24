import React from 'react';
import FormErrors from "../Popups/FormErrors";

function SignPage(props) {
  const [email, setEmail] = React.useState(''),
      [isEmailValid, setIsEmailValid] = React.useState(false),
      [emailErrorMassage, setEmailErrorMassage] = React.useState(''),
      [password, setPassword] = React.useState(''),
      [isPasswordValid, setIsPasswordValid] = React.useState(false),
      [passwordErrorMassage, setPasswordErrorMassage] = React.useState(''),
      [isFormValid, setIsFormValid] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    handleEmailValidity(e.target)
  }

  const handleEmailValidity = (input) => {
    if (!input.validity.valid) {
      setIsEmailValid(false);
      setEmailErrorMassage(input.validationMessage);
    } else {
      setIsEmailValid(true);
      setEmailErrorMassage('');
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    handlePasswordValidity(e.target)
  }

  const handlePasswordValidity = (input) => {
    if (!input.validity.valid) {
      setIsPasswordValid(false);
      setPasswordErrorMassage(input.validationMessage);
    } else {
      setIsPasswordValid(true);
      setPasswordErrorMassage('');
    }
  }

  React.useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false)
    }
  }, [isEmailValid, isPasswordValid])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsFormValid(false)
    setPassword('')
    setEmail('')
    props.onSubmit()
  }

  return (
      <>
        <h1 className="auth__title">{props.title}</h1>
        <form noValidate className="auth__form form" name={props.formName}>
          <input
              type="email"
              className={'form__input'}
              name={'email'}
              placeholder={'Email'}
              required
              value={email}
              onChange={handleEmailChange}
          />
          {emailErrorMassage.length > 0 && <FormErrors isValid={isEmailValid} errorsMassage={emailErrorMassage} />}
          <input
              type="password"
              className={'form__input'}
              name={'password'}
              placeholder={'Пароль'}
              required
              minLength={6}
              value={password}
              onChange={handlePasswordChange}
          />
          {passwordErrorMassage.length > 0 && <FormErrors isValid={isPasswordValid} errorsMassage={passwordErrorMassage} />}
          <button
              type={'submit'}
              className={`button form__button ${isFormValid && 'form__button_type_submit'}`}
              onSubmit={handleSubmit}
          >{props.buttonText}</button>
        </form>
      </>
  );
}

export default SignPage