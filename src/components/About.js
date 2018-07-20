import React from 'react';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="About">
      <section className="About">
        <div className="heading-box">
          <h2>About</h2>
        </div>

        <div className="content-box">
          <p className="about-me">
            Hi, I'm Catherine Lin, a Frontend Web Developer with a passion for
            designing and developing beautiful, modern, and responsive web apps.
            I majored in Economics at UCLA but discovered a knack for
            programming after graduating and ran with it. I love all things
            related to computer technologies and I'm constantly learning,
            innovating, and problem solving.
          </p>
          <br />
          <p className="about-me">
            I am currently seeking a Front-End Developer role in the greater Los
            Angeles area so feel free to contact me if you are looking to hire!
            I am adaptable, a fast learner and I work well in a team
            environment.
          </p>
          <br />
          <br />
          <p className="about-me">
            <strong>Proficient:</strong> JavaScript, ES6, React, Redux, jQuery,
            HTML5/CSS3, SASS, Bootstrap, npm, responsive design, version
            control/Git, Photoshop
          </p>
          <p className="about-me">
            <strong>Skilled:</strong> Angular, Node, Express, MongoDB, Passport,
            Jest, Gulp
          </p>
        </div>
      </section>
    </Element>
  );
};

export default About;
