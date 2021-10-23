import React from 'react';
import {Link} from 'react-router-dom'
import SignPage from "./SignPage";

function SignIn(props) {
  return (
      <section className='auth'>
        <article className="auth__main">
          <SignPage
            title={'Вход в аккаунт'}
            formName={'sign-in'}
            buttonText={'Войти'}
          />
          <p className="auth__paragraph">Еще нет аккаунта? <Link to={'/sign-up'} className={'auth__link'}>Регистрация</Link></p>
        </article>
        <article className="footer auth__footer">
          <p className="footer__paragraph">&#169;</p>
          <p className="footer__paragraph">copyright 2021</p>
          <p className="footer__paragraph footer__paragraph_type_underline">Политика конфиденциальности</p>
        </article>
      </section>
  );
}

export default SignIn