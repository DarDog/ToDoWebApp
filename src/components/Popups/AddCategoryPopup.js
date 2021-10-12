import React from 'react';
import Popup from "./Popup";

function AddCategoryPopup(props) {
  return (
      <Popup
          isOpen={props.isOpen}
          onClose={props.onClose}
      >
        <label className="form__label" htmlFor="input-task-name">Что нужно сделать?</label>
        <input className={`form__input`}
               type="text"
               id="input-task-name"
               name="taskName"
               required
               maxLength="100"
               minLength="2"
        />
      </Popup>
  );
}

export default AddCategoryPopup