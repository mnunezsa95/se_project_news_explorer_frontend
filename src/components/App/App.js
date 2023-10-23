import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import About from "../About/About";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import "./App.css";
import { getNewsArticles } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = React.useState("");

  const handleRegisterModal = () => setActiveModal("register");
  const handleLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal(null);

  //! Placeholder
  getNewsArticles();

  const handleRegistration = ({ emailValue, passwordValue, usernameValue }) => {
    console.log(emailValue, passwordValue, usernameValue);
    handleCloseModal();
    setActiveModal("success");
  };

  const handleLogin = ({ emailValue, passwordValue }) => {
    console.log(emailValue, passwordValue);
    handleCloseModal();
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    // delete token
    setCurrentUser(false);
    setIsLoggedIn(false);
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
      <Switch>
        <Route exact path="/">
          <Header isLoggedIn={isLoggedIn} onLoginModal={handleLoginModal} onRegisterModal={handleRegisterModal} />
          <Main isLoggedIn={isLoggedIn} />
          <About />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader isLoggedIn={isLoggedIn} inSavedNews={true} />
          <SavedNews isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
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
