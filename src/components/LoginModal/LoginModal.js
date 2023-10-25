import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onRegisterModal, onSubmit, isModalLoading }) {
  const [emailValue, setEmailValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (evt) => {
    setIsEmailValid(evt.target.validity.valid);
    setEmailValue(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setIsPasswordValid(evt.target.validity.valid);
    setPasswordValue(evt.target.value);
  };

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ emailValue, passwordValue });
  };

  return (
    <PopupWithForm
      title="Sign in"
      modalName="Login"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={isModalLoading ? "Signing in..." : "Sign in"}
    >
      <div>
        <label className="form__label" htmlFor="email">
          Email
          <input className="form__input-text" name="email" type="email" required placeholder="Enter Email" value={emailValue} onChange={handleEmailChange} />
        </label>
        <span className="form__input-error-disabled">Invalid email address</span>
        <label className="form__label" htmlFor="password">
          Password
          <input
            className="form__input-text"
            name="password"
            type="text"
            required
            minLength="1"
            maxLength="8"
            placeholder="Enter Password"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <button className="modal__submit-button" type="submit" disabled={!isFormValid}>
        Sign in
      </button>
      <button className="modal__redirect-button" onClick={onRegisterModal} type="button">
        <span className="modal__redirect-button-text-alt">or</span> Sign up
      </button>
    </PopupWithForm>
  );
}

export default LoginModal;
