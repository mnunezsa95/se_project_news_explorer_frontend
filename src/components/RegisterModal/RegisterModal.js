import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./RegisterModal.css";

function RegisterModal({ handleCloseModal, isOpen, onRegisterModal, onSubmit, isLoading }) {
  return (
    <PopupWithForm
      title="Sign up"
      modalName="Register"
      isOpen={isOpen}
      onClose={handleCloseModal}
      // onSubmit={handleSubmit}
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      hasRedirectButton={true}
      redirectButtonText=" Sign in"
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
        <label className="form__label">
          Username
          <input className="form__input-text" name="username" type="text" required placeholder="Enter your username" /> {/*! //! Add value and onChange*/}
        </label>
      </div>
    </PopupWithForm>
  );
}

export default RegisterModal;
