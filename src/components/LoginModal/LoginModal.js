import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./LoginModal.css";

function LoginModal({ handleCloseModal, isOpen, onLogin, onRegisterModal, onSubmit, isLoading }) {
  return (
    <PopupWithForm
      title="Sign in"
      modalName="Login"
      isOpen={isOpen}
      onClose={handleCloseModal}
      // onSubmit={handleSubmit}
      buttonText={isLoading ? "Signing in..." : "Sign in"}
      hasRedirectButton={true}
      redirectButtonText=" Sign up"
      redirectButtonClick={onRegisterModal}
    >
      <div>
        <label className="form__label">
          Email
          <input className="form__input-text" name="email" type="email" required placeholder="Enter Email" /> {/*! //! Add value and onChange*/}
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
            // value={""}
            // onChange={""}
          />
        </label>
      </div>
    </PopupWithForm>
  );
}

export default LoginModal;
