import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useForm";

import "./SignUpModal.css";

function SignUpModal({ handleCloseModal, isOpen, onSignInModal, onSubmit, isModalLoading }) {
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({ email: "", password: "", name: "" });
  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };

  return (
    <PopupWithForm
      title="Sign up"
      modalName="SignUp"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText={isModalLoading ? "Signing up..." : "Sign up"}
    >
      <div>
        <label className="form__label" htmlFor="email">
          Email
          <input
            className="form__input-text"
            id="email-input"
            name="email"
            type="email"
            required
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
            autoFocus
          />
        </label>
        <span className="form__error" id="email-input-error">
          {errors.email}
        </span>
        <label className="form__label" htmlFor="password">
          Password
          <input
            className="form__input-text"
            id="password-input"
            name="password"
            type="text"
            required
            minLength="1"
            maxLength="8"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <span className="form__error" id="password-input-error">
          {errors.password}
        </span>
        <label className="form__label" htmlFor="name">
          Username
          <input
            className="form__input-text"
            id="name-input"
            name="name"
            type="text"
            required
            placeholder="Enter your username"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <span className="form__error" id="name-input-error">
          {errors.name}
        </span>
      </div>
      <button className="modal__submit-button" type="submit" disabled={!isValid}>
        Sign up
      </button>
      <button className="modal__redirect-button" onClick={onSignInModal} type="button">
        <span className="modal__redirect-button-text-alt">or</span> Sign in
      </button>
    </PopupWithForm>
  );
}

export default SignUpModal;
