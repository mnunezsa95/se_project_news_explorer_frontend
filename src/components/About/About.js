import { React } from "react";
import authorImage from "../../images/authorImage.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img className="about__image-author" src={authorImage} alt="author avatar"></img>
      </div>
      <div className="about__info-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This web-app was created by Marlon Nunez as part of TripleTen's graduation project. I am current project manager and aspirinng full-stack software
          engineer based in Boston, MA.
        </p>
        <p className="about__text">
          In the past nine months, I've actively pursued my aspiration of entering the tech industry as an engineer. My experience at TripleTen has been
          instrumental in honing my skills across a diverse array of languages, frameworks, and tools. Notably, I've adeptly worked with HTML, CSS, JavaScript,
          React.js, Node.js, Express.js, MongoDB, Google Cloud, Babel, NPM, and Webpack. Additionally, I possess proficiency in other tools and languages,
          including SQL, Python, Parcel, and more.
        </p>
      </div>
    </section>
  );
}

export default About;
