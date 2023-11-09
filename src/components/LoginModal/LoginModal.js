import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../../hooks/useForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onRegisterModal, onSubmit, isModalLoading }) {
  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({ email: "", password: "" });
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
    <PopupWithForm title="Sign in" modalName="Login" isOpen={isOpen} onClose={handleCloseModal} onSubmit={handleSubmit}>
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
      </div>
      <button className="modal__submit-button" type="submit" disabled={!isValid}>
        {isModalLoading ? "Signing in..." : "Sign in"}
      </button>
      <button className="modal__redirect-button" onClick={onRegisterModal} type="button">
        <span className="modal__redirect-button-text-alt">or</span> Sign up
      </button>
    </PopupWithForm>
  );
}

export default LoginModal;
