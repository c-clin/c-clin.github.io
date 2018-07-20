import React from 'react';
import { Element } from 'react-scroll';
import icon from '../assets/icon.jpg';

const Contact = () => {
  return (
    <Element name="Contact">
      <section className="Contact">
        <div className="heading-box">
          <h2>Contact</h2>
        </div>

        <div className="content-box">
          <div className="contact-photo">
            <img src={icon} alt="icon of me" className="contact-photo--icon" />
            <div className="contact-photo--back">
              <p>
                feel free to say hi!
                <i className="fa fa-smile-o smile-icon" aria-hidden="true" />
              </p>
            </div>
          </div>
          <div className="contact-links">
            <a
              href="mailto:catherine.lin.93@gmail.com"
              className="contact-links__container contact-links__container--1"
            >
              <i
                className="fa fa-envelope-o contact-icon previous"
                aria-hidden="true"
              />
              <p>catherine.lin.93@gmail.com</p>
            </a>
            <a
              href="https://linkedin.com/in/catherine-lin-81545896"
              className="contact-links__container contact-links__container--2"
            >
              <i
                className="fa fa-linkedin contact-icon previous"
                aria-hidden="true"
              />
              <p>/catherinelin93</p>
            </a>
            <a
              href="https://github.com/c-clin"
              className="contact-links__container contact-links__container--3"
            >
              <i className="fa fa-github contact-icon" aria-hidden="true" />
              <p>/c-clin</p>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
