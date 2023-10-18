import React from "react";
import "./Footer.css";

function Footer() {
  const handleGitHubLink = () => window.open("https://github.com/mnunezsa95");
  const handleLinkedinLink = () => window.open("https://www.linkedin.com/in/marlon-nunez-35ba43b4/");

  return (
    <footer className="footer">
      <p className="footer__copyright"> © 2023 Supersite, Powered by News API</p>
      <div className="footer__nav">
        <div className="footer__links">
          <button className="footer__button">Home</button>
          <button className="footer__button" href="https://tripleten.com/">
            TripleTen
          </button>
        </div>
        <div className="footer__icons">
          <button className="footer__link footer__link-github-icon" onClick={handleGitHubLink}></button>
          <button className="footer__link footer__link-linkedin-icon" onClick={handleLinkedinLink}></button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
