import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import moviedeets from '../assets/moviedeets.jpg';
import bars2nite from '../assets/bars2nite.jpg';
import prickles from '../assets/prickles.jpg';

const Work = () => {
  return (
    <Element name="Work">
      <section className="Work">
        <div className="heading-box">
          <h2>Work</h2>
        </div>
        <div className="content-box">
          <div className="container">
            <div className="project-box">
              <div className="project project--1">
                <img src={moviedeets} alt="MovieDeets" />
                <div className="overlay-text">
                  <h3>MovieDeets</h3>
                  <p className="links">
                    <a
                      href="https://moviedeets.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/moviedeets"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project project--2">
                <img src={bars2nite} alt="Bars2Nite" />
                <div className="overlay-text">
                  <h3>Bars2Nite</h3>
                  <p className="links">
                    <a
                      href="https://nightlife-28.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/bars2nite"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project project--3">
                <img src={prickles} alt="Prickles" />
                <div className="overlay-text">
                  <h3>Prickles</h3>
                  <p className="links">
                    <a
                      href="http://prickles.surge.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/prickles"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/projects" className="more-projects">
            See more projects
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Work;
