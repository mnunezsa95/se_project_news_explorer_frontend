// react imports
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// css styles
import "./App.css";

// components
import Header from "../Header/Header";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// constants, api functions
import { getNewsArticles } from "../../utils/api";
import { signUp, signIn, authorizeToken } from "../../utils/auth.js";
import { bookmarkArticle } from "../../utils/MainApi.js";

function App() {
  // states
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false); //! Will use setIsModalLoading for login/register modals
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [token, setToken] = React.useState("");

  // functions
  const handleSignUpModal = () => setActiveModal("signUp");
  const handleSignInModal = () => setActiveModal("signIn");
  const handleCloseModal = () => setActiveModal(null);

  const handleSignUp = (values) => {
    setIsModalLoading(true);
    signUp({ email: values.email, password: values.password, name: values.name })
      .then(() => {
        setIsLoggedIn(true);
        handleCloseModal();
        setActiveModal("success");
      })
      .catch((err) => console.error(err))
      .finally(() => setIsModalLoading(false));
  };

  const handleSignIn = (values) => {
    setIsModalLoading(true);
    signIn({ email: values.email, password: values.password })
      .then((res) => {
        localStorage.setItem("jsonwebtoken", res.token);
        setToken(localStorage.getItem("jsonwebtoken"));
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsModalLoading(false));
  };

  const handleSignOut = () => {
    // delete token
    //! add redirection at some point
    setCurrentUser(false);
    setIsLoggedIn(false);
  };

  const handleNewsArticleSearch = (userInput) => {
    setIsPageLoading(true);
    const searchNews = getNewsArticles(userInput);
    searchNews
      .then((data) => {
        setIsSearching(true);
        setSearchResults(data.articles);
        setIsPageLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const saveNewsArticle = (newsArticle, keyword = "keyword n/a") => {
    bookmarkArticle(newsArticle, keyword);
    setSavedNews([...savedNews, newsArticle]);
  };

  const removeNewsArticle = (newsArticle) => setSavedNews(savedNews.filter((article) => article.url !== newsArticle.url));

  // useFffects
  useEffect(() => {
    const jwt = localStorage.getItem("jsonwebtoken");
    if (jwt) {
      setToken(jwt);
      authorizeToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error("Invalid token: ", err));
    }
  }, [token]);

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
          <Header
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            onSignInModal={handleSignInModal}
            onSignUpModal={handleSignUpModal}
            onLogout={handleSignOut}
            onSubmit={handleNewsArticleSearch}
          />
          <Main
            isLoggedIn={isLoggedIn}
            isSearching={isSearching}
            searchResults={searchResults}
            isPageLoading={isPageLoading}
            savedNews={savedNews}
            saveNewsArticle={saveNewsArticle}
            removeNewsArticle={removeNewsArticle}
          />
        </Route>
        <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-news">
          <Route path="/saved-news">
            <SavedNewsHeader isLoggedIn={isLoggedIn} currentUser={currentUser} onLogout={handleSignOut} />
            <SavedNews isLoggedIn={isLoggedIn} savedNews={savedNews} />
          </Route>
        </ProtectedRoute>
      </Switch>
      <Footer />
      {activeModal === "signIn" && (
        <SignInModal
          isOpen={activeModal === "signIn"}
          onSignInModal={handleSignInModal}
          onSignUpModal={handleSignUpModal}
          handleCloseModal={handleCloseModal}
          isModalLoading={isModalLoading}
          onSubmit={handleSignIn}
        />
      )}
      {activeModal === "signUp" && (
        <SignUpModal
          isOpen={activeModal === "signUp"}
          onSignUpModal={handleSignUpModal}
          onSignInModal={handleSignInModal}
          handleCloseModal={handleCloseModal}
          isModalLoading={isModalLoading}
          onSubmit={handleSignUp}
        />
      )}
      {activeModal === "success" && (
        <SuccessModal modalName="success" isOpen={activeModal === "success"} handleCloseModal={handleCloseModal} onSignInModal={handleSignInModal} />
      )}
    </div>
  );
}

export default App;
