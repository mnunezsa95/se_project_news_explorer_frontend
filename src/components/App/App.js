import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleRegisterModal = () => setActiveModal("register");
  const handleLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal(null);

  const handleLogin = ({ emailValue, passwordValue }) => {
    console.log(emailValue, passwordValue);
    handleCloseModal();
  };

  const handleRegistration = ({ emailValue, passwordValue, usernameValue }) => {
    console.log(emailValue, passwordValue, usernameValue);
    handleCloseModal();
    setActiveModal("success");
  };

  // Close modal via escape key
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") handleCloseModal();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [activeModal]);

  return (
    <div className="page">
      <Header onLoginModal={handleLoginModal} onRegisterModal={handleRegisterModal} />
      <Main />
      <About />
      <Footer />
      {activeModal === "login" && (
        <LoginModal
          isOpen={activeModal === "login"}
          onLoginModal={handleLoginModal}
          onRegisterModal={handleRegisterModal}
          handleCloseModal={handleCloseModal}
          isLoading={isLoading}
          onSubmit={handleLogin}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          isOpen={activeModal === "register"}
          onRegisterModal={handleRegisterModal}
          onLoginModal={handleLoginModal}
          handleCloseModal={handleCloseModal}
          isLoading={isLoading}
          onSubmit={handleRegistration}
        />
      )}
      {activeModal === "success" && (
        <SuccessModal modalName="success" isOpen={activeModal === "success"} handleCloseModal={handleCloseModal} onLoginModal={handleLoginModal} />
      )}
    </div>
  );
}

export default App;
