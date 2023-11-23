import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header className="bg-blue-500 p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;