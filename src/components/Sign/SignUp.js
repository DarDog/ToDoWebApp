import React from 'react';
import SignPage from "./SignPage";

function SignUp(props) {
  return (
      <section className='auth'>
        <article className="auth__main">
          <SignPage
              title={'Регистрация на сайте'}
              formName={'sign-up'}
              buttonText={'Зарегистрироваться'}
              onSubmit={props.onSubmit}
          />
        </article>
        <article className="footer auth__footer">
          <p className="footer__paragraph">&#169;</p>
          <p className="footer__paragraph">copyright 2021</p>
          <p className="footer__paragraph footer__paragraph_type_underline">Политика конфиденциальности</p>
        </article>
      </section>
  );
}

export default SignUp