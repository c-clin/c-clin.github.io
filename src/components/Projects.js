import React, { Component } from 'react';
import Footer from './Footer';
import moviedeets from '../assets/moviedeets.jpg';
import bars2nite from '../assets/bars2nite.jpg';
import prickles from '../assets/prickles.jpg';
import bookclub from '../assets/book-club.jpg';
import votenow from '../assets/votenow.jpg';
import neightborhoodMap from '../assets/neighborhood-map.jpg';
import simonGame from '../assets/simon-game.jpg';
import angularTask from '../assets/angular-task-manager.jpg';
import weatherApp from '../assets/weather-app.jpg';
import douliuPomelo from '../assets/douliu-pomelo.jpg';

class Projects extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <Footer />
        <div className="Projects" style={{ padding: '9rem 0 0 0' }}>
          <div className="heading-box">
            <h2>Freelance Work</h2>
          </div>
          <div className="content-box">
            <div className="project-box">
              <div className="project">
                <img src={douliuPomelo} alt="Douliu Pomelo" />
                <div className="overlay-text">
                  <h3>Douliu Pomelo</h3>
                  <p className="links">
                    <a
                      href="http://www.douliu-pomelo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/douliu-pomelo"
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
        </div>

        <div className="Projects">
          <div className="heading-box">
            <h2>Personal Projects</h2>
          </div>
          <div className="content-box">
            <div className="project-box">
              <div className="project">
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
              <div className="project">
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
              <div className="project">
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
              <div className="project">
                <img src={bookclub} alt="Book Club" />
                <div className="overlay-text">
                  <h3>Book Club</h3>
                  <p className="links">
                    <a
                      href="https://bookclub28.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/book-club"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project">
                <img src={votenow} alt="Vote Now" />
                <div className="overlay-text">
                  <h3>Vote Now</h3>
                  <p className="links">
                    <a
                      href="https://votenow28.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/voting-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project">
                <img src={neightborhoodMap} alt="Neighborhood Map" />
                <div className="overlay-text">
                  <h3>Neighborhood Map</h3>
                  <p className="links">
                    <a
                      href="https://c-clin.github.io/neighborhood-map/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/neighborhood-map"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project">
                <img src={simonGame} alt="Simon Game" />
                <div className="overlay-text">
                  <h3>Simon Game</h3>
                  <p className="links">
                    <a
                      href="https://c-clin.github.io/simon-game/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/simon-game"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="project">
                <img src={angularTask} alt="Angular Task Manager" />
                <div className="overlay-text">
                  <h3>Angular Task Manager</h3>
                  <p className="links">
                    <a
                      href="https://c-clin-angular-todo.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/angular-task-manager"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>

              <div className="project">
                <img src={weatherApp} alt="Weather App" />
                <div className="overlay-text">
                  <h3>Weather App</h3>
                  <p className="links">
                    <a
                      href="https://c-clin.github.io/show-local-weather/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      website
                    </a>
                    <a
                      href="https://github.com/c-clin/show-local-weather"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>

              {/* cut */}
            </div>
          </div>
        </div>
        <button className="go-back-btn" onClick={this.props.history.goBack}>
          <span>&larr;</span> Go back
        </button>
        <Footer />
      </div>
    );
  }
}

export default Projects;
