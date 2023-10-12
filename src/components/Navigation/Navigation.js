import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="logo-container">
        <h1 className="logo-name">NewsExplorer</h1>
      </div>
      <div className="nav__container">
        <ul className="nav__container-links">
          <li>
            <button className="nav__button">Home</button>
          </li>
          <li>
            <button className="nav__button nav__button-signin">Sign in</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
