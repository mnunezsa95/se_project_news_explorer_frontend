import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({ children, modalName, title, onClose, onSubmit }) {
  return (
    <div className={`modal modal__type-${modalName}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button " type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
