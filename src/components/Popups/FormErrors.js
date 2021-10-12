import React from 'react';

function FormErrors({ errorsMassage, isValid }) {
  return (
      <span className={`form__input-error ${!isValid ? 'form__input-error_active' : ''}`}>{errorsMassage}</span>
  )
}

export default FormErrors