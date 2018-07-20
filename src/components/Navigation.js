import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav className="Navigation__container">
        <ul className="Navigation__list">
          <li className="Navigation__list-item">
            <Link
              to="Header"
              smooth={true}
              duration={500}
              className="list-item-link top-link-hover"
            >
              Home
            </Link>
          </li>
          <li className="Navigation__list-item">
            <Link
              to="About"
              smooth={true}
              duration={500}
              className="list-item-link top-link-hover"
            >
              About
            </Link>
          </li>
          <li className="Navigation__list-item">
            <Link
              to="Work"
              smooth={true}
              duration={600}
              className="list-item-link top-link-hover"
            >
              Work
            </Link>
          </li>
          <li className="Navigation__list-item">
            <Link
              to="Contact"
              smooth={true}
              duration={800}
              className="list-item-link top-link-hover"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
