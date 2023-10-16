import { React } from "react";
import placeholder_image from "../../images/placeholder_image.svg";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img className="about__image-author" src={placeholder_image} alt="author avatar"></img>
      </div>
      <div className="about__info-container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This web-app was created by Marlon Nunez as part of TripleTen's graduation project. I am current project manager and aspirinng full-stack software
          engineer based in Boston, MA. <br></br>
          <br></br>
          Over the last eight months, I have been working towards my goal of breaking into the tech industry as an engineer. During my time at triple ten, I had
          the opportunity of working with many different languages, frameworks, and tools such as, but not limited to: HTML, CSS, JavaScript, React.js, Node.js,
          Express.js, MongoDB, Google Cloud, Babel, NPM, and Webpack. I also have some knowledge of other tools and languages such as SQL, Python, Parcel and
          more.
        </p>
      </div>
    </section>
  );
}

export default About;
