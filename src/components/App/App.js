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
import { getNewsArticles } from "../../utils/api";

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
  // const [token, setToken] = React.useState(""); //! Will use for authentication

  // functions
  const handleSignUpModal = () => setActiveModal("signUp");
  const handleSignInModal = () => setActiveModal("signIn");
  const handleCloseModal = () => setActiveModal(null);
  const saveNewsArticle = (newsArticle) => setSavedNews([...savedNews, newsArticle]);
  const removeNewsArticle = (newsArticle) => setSavedNews(savedNews.filter((article) => article.url !== newsArticle.url));

  const handleSignUp = (values) => {
    // setIsModalLoading(true); //! To use when auth api call is set up
    console.log(values);
    handleCloseModal();
    setActiveModal("success");
    setIsModalLoading(false);
  };

  const handleSignIn = (values) => {
    // setIsModalLoading(true); //! To use when auth api call is set up
    console.log(values);
    handleCloseModal();
    setIsLoggedIn(true);
    setIsModalLoading(false);
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

  // effects
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
        <Route path="/saved-news">
          <SavedNewsHeader isLoggedIn={isLoggedIn} onLogout={handleSignOut} />
          <SavedNews isLoggedIn={isLoggedIn} savedNews={savedNews} />
        </Route>
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
