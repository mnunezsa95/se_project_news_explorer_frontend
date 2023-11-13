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
import { saveArticle, getSavedArticles, removeArticle } from "../../utils/MainApi.js";
import { capitalizeFirstLetter } from "../../utils/constants.js";

function App() {
  // states
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [token, setToken] = React.useState("");
  const [serverErrors, setServerErrors] = useState({});

  // functions
  const handleSignUpModal = () => {
    setActiveModal("signUp");
    setServerErrors({
      ...serverErrors,
      conflictError: "",
    });
  };
  const handleSignInModal = () => setActiveModal("signIn");
  const handleCloseModal = () => setActiveModal(null);

  const handleSignUp = (values) => {
    setIsModalLoading(true);
    signUp({ email: values.email, password: values.password, name: values.name })
      .then(() => {
        handleCloseModal();
        setActiveModal("success");
      })
      .catch((err) => {
        if (err.includes("409")) {
          setServerErrors({
            ...serverErrors,
            conflictError: "This email is already in use",
          });
        }
      })
      .finally(() => {
        setIsModalLoading(false);
      });
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
    localStorage.removeItem("jsonwebtoken");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleNewsArticleSearch = (userInput) => {
    setIsPageLoading(true);
    const searchNews = getNewsArticles(userInput);
    searchNews
      .then((data) => {
        data.articles.forEach((item) => (item.keyword = capitalizeFirstLetter(userInput)));
        setIsSearching(true);
        setSearchResults(data.articles);
        setIsPageLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleSaveArticle = (newsItem, keyword = "Keyword N/A") => {
    saveArticle(newsItem, keyword).then((data) => {
      setSavedNews([...savedNews, data]);
    });
  };

  const handleRemoveArticle = (newsItem) => {
    console.log(newsItem.url);
    setSavedNews(
      savedNews.filter((article) => {
        removeArticle(article._id);
        return article.link !== newsItem.url;
      })
    );
  };

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

  useEffect(() => {
    if (isLoggedIn) {
      getSavedArticles()
        .then((data) => {
          setSavedNews(data);
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn]);

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
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
          />
        </Route>
        <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-news">
          <Route path="/saved-news">
            <SavedNewsHeader isLoggedIn={isLoggedIn} currentUser={currentUser} savedNews={savedNews} onLogout={handleSignOut} />
            <SavedNews isLoggedIn={isLoggedIn} savedNews={savedNews} handleSaveArticle={handleSaveArticle} handleRemoveArticle={handleRemoveArticle} />
          </Route>
        </ProtectedRoute>
      </Switch>
      <Footer />
      {activeModal === "signUp" && (
        <SignUpModal
          isOpen={activeModal === "signUp"}
          onSignUpModal={handleSignUpModal}
          onSignInModal={handleSignInModal}
          handleCloseModal={handleCloseModal}
          isModalLoading={isModalLoading}
          onSubmit={handleSignUp}
          serverErrors={serverErrors}
        />
      )}
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
      {activeModal === "success" && (
        <SuccessModal modalName="success" isOpen={activeModal === "success"} handleCloseModal={handleCloseModal} onSignInModal={handleSignInModal} />
      )}
    </div>
  );
}

export default App;
