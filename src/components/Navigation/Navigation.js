import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginModal, inSavedNewsRoute }) {
  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className={`nav__logo ${inSavedNewsRoute && "nav__logo-saved-news"}`}>NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <div className="nav__container-links">
          <button className={`nav__button ${inSavedNewsRoute && "nav__button-saved-news"}`}>Home</button>
          <button
            className={`nav__button nav__button-signin  ${inSavedNewsRoute && "nav__button-saved-news nav__button-signin-saved-news"}`}
            onClick={onLoginModal}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
