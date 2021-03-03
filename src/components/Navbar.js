import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-home">
      <ul className="navbar-home-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz App</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vigilant-swirles-176bbb.netlify.app/"
          >
            Planet Finder
          </a>
        </li>
        <li>
          <Link to="/moviesfinder">Movies Finder</Link>
        </li>
        <li>
          <Link to="/hackernews">Hacker News</Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nervous-gates-fbf1c2.netlify.app/"
          >
            ToDo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
