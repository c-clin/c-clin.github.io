import React from 'react';
import { Element } from 'react-scroll';

const Header = () => {
  return (
    <Element name="Header">
      <section className="Header">
        <div className="Header__text-box">
          <div className="Header__text-box--primary">
            <h1>Catherine Lin</h1>
          </div>
          <div className="Header__text-box--secondary">
            <p>Frontend Web Developer</p>
          </div>
          <hr />
          <div className="Header__social-links">
            <a
              href="mailto:catherine.lin.93@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fa fa-envelope-o icon previous"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://linkedin.com/in/catherine-lin-81545896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin icon previous" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/c-clin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Header;
