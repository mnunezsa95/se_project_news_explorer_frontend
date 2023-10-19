import "./Navigation.css";

function Navigation({ onLoginModal }) {
  return (
    <div className="nav">
      <div className="nav__left-container">
        <h1 className="nav__logo-name">NewsExplorer</h1>
      </div>
      <div className="nav__right-container">
        <ul className="nav__container-links">
          <li>
            <button className="nav__button">Home</button>
          </li>
          <li>
            <button className="nav__button nav__button-signin" onClick={onLoginModal}>
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
