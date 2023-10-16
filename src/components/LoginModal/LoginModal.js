import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onRegisterModal, onSubmit, isLoading }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleEmailChange = (evt) => setEmailValue(evt.target.value);
  const handlePasswordChange = (evt) => setPasswordValue(evt.target.value);

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
      buttonText={isLoading ? "Signing in..." : "Sign in"}
      hasRedirectButton={true}
      redirectButtonText=" Sign up"
      redirectButtonClick={onRegisterModal}
    >
      <div>
        <label className="form__label">
          Email
          <input className="form__input-text" name="email" type="email" required placeholder="Enter Email" value={emailValue} onChange={handleEmailChange} />
        </label>
        <label className="form__label">
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
    </PopupWithForm>
  );
}

export default LoginModal;
