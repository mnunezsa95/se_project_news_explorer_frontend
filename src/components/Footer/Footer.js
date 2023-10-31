import React from "react";
import "./Footer.css";

function Footer() {
  const handleGitHubLink = () => window.open("https://github.com/mnunezsa95");
  const handleLinkedinLink = () => window.open("https://www.linkedin.com/in/marlon-nunez-35ba43b4/");
  const handleTripleTenLink = () => window.open("https://tripleten.com/");

  return (
    <footer className="footer">
      <p className="footer__copyright"> © 2023 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li>
            <button className="footer__button">Home</button>
          </li>
          <li>
            <button className="footer__button" onClick={handleTripleTenLink}>
              TripleTen
            </button>
          </li>
        </ul>
        <ul className="footer__icons">
          <li>
            <button className="footer__link-icon footer__link-icon-github" onClick={handleGitHubLink}></button>
          </li>
          <li>
            <button className="footer__link-icon footer__link-icon-linkedin" onClick={handleLinkedinLink}></button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
