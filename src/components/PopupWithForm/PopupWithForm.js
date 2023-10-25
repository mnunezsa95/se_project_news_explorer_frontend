import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  children,
  modalName,
  title,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
  hasRedirectButton,
  redirectButtonText,
  redirectButtonClick,
  isFormValid,
}) {
  return (
    <div className={`modal modal__type-${modalName}`}>
      <div className="modal__content">
        <h3 className="modal__title">{title}</h3>
        <button className="modal__close-button " type="button" onClick={onClose} />
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit" disabled={!isFormValid}>
            {buttonText}
          </button>
          {hasRedirectButton && (
            <button className="modal__redirect-button" onClick={redirectButtonClick} type="button">
              <span className="modal__redirect-button-text-alt">or</span>
              {redirectButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
