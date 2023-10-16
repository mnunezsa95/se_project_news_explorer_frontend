import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleRegisterModal = () => setActiveModal("register");
  const handleLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal(null);

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
      <About />
      <Footer />
      {activeModal === "login" && (
        <LoginModal
          isOpen={activeModal === "login"}
          onLoginModal={handleLoginModal}
          onRegisterModal={handleRegisterModal}
          handleCloseModal={handleCloseModal}
          isLoading={isLoading}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          isOpen={activeModal === "register"}
          onRegisterModal={handleRegisterModal}
          onLoginModal={handleLoginModal}
          handleCloseModal={handleCloseModal}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
