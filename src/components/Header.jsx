import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const [isHoveredProjects, setIsHoveredProjects] = useState(false);

  return (
    <header className="bg-pink-500 p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/home"
              className="relative inline-block"
              onMouseEnter={() => setIsHoveredHome(true)}
              onMouseLeave={() => setIsHoveredHome(false)}
            >
              <span
                className={`absolute inset-0 bg-gray-200 opacity-0 transition-opacity duration-300 ${
                  isHoveredHome ? 'opacity-100' : ''
                }`}
              ></span>
              <span
                className={`relative z-10 ${isHoveredHome ? 'text-gray-300' : 'text-white'}`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative inline-block"
              onMouseEnter={() => setIsHoveredAbout(true)}
              onMouseLeave={() => setIsHoveredAbout(false)}
            >
              <span
                className={`absolute inset-0 bg-gray-200 opacity-0 transition-opacity duration-300 ${
                  isHoveredAbout ? 'opacity-100' : ''
                }`}
              ></span>
              <span
                className={`relative z-10 ${isHoveredAbout ? 'text-gray-300' : 'text-white'}`}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="relative inline-block"
              onMouseEnter={() => setIsHoveredProjects(true)}
              onMouseLeave={() => setIsHoveredProjects(false)}
            >
              <span
                className={`absolute inset-0 bg-gray-200 opacity-0 transition-opacity duration-300 ${
                  isHoveredProjects ? 'opacity-100' : ''
                }`}
              ></span>
              <span
                className={`relative z-10 ${isHoveredProjects ? 'text-gray-300' : 'text-white'}`}
              >
                Projects
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
