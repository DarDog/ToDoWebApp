import React from 'react';

function SignPage(props) {
  return (
      <>
        <h1 className="auth__title">{props.title}</h1>
        <form noValidate className="auth__form form" name={props.formName}>
          <input type="email" className={'form__input'} name={'email'} placeholder={'Email'} required/>
          <input type="password" className={'form__input'} name={'password'} placeholder={'Пароль'} required minLength={6}/>
          <button type={'submit'} className={'button form__button form__button_type_submit'}>{props.buttonText}</button>
        </form>
      </>
  );
}

export default SignPage