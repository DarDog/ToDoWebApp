import React from 'react';
import avatar from '../../images/avatar.jpg'

function UserProfile(props) {
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
                <label htmlFor="" className="form__label">Ваш никнейм:</label>
                <input type="text" className="form__input"/>
              </div>
              <div className='user-profile__form-container'>
                <label htmlFor="" className="form__label">Ваша почта:</label>
                <input type="text" className="form__input"/>
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