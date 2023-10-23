import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./RegisterModal.css";

function RegisterModal({ handleCloseModal, isOpen, onLoginModal, onSubmit, isModalLoading }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const handleEmailChange = (evt) => setEmailValue(evt.target.value);
  const handlePasswordChange = (evt) => setPasswordValue(evt.target.value);
  const handleUsernameChange = (evt) => setUsernameValue(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ emailValue, passwordValue, usernameValue });
  };

  return (
    <PopupWithForm
      title="Sign up"
      modalName="Register"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={isModalLoading ? "Signing up..." : "Sign up"}
      hasRedirectButton={true}
      redirectButtonText=" Sign in"
      redirectButtonClick={onLoginModal}
    >
      <div>
        <label className="form__label" htmlFor="email">
          Email
          <input className="form__input-text" name="email" type="email" required placeholder="Enter Email" value={emailValue} onChange={handleEmailChange} />
        </label>
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
        <label className="form__label" htmlFor="username">
          Username
          <input
            className="form__input-text"
            name="username"
            type="text"
            required
            placeholder="Enter your username"
            value={usernameValue}
            onChange={handleUsernameChange}
          />
        </label>
        <span className="form__error-disabled">This email is not available</span>
      </div>
    </PopupWithForm>
  );
}

export default RegisterModal;
