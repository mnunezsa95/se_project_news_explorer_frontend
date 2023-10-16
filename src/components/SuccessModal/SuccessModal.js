import React from "react";
import "./SuccessModal.css";

function SuccessModal({ modalName, handleCloseModal, onLoginModal }) {
  return (
    <div className={`modal modal__type-${modalName}`}>
      <div className={`modal__content-success`}>
        <button className="modal__close-button" type="button" onClose={handleCloseModal}></button>
        <h3 className={`modal__title-success`}>Registration successfully completed!</h3>
        <button className={`modal__redirect-button-success`} type="button" onClick={onLoginModal}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
