import React from 'react';
import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link');

const Navigation = () => {
  return (
    <nav className="mt-8">
      <ul className="flex flex-wrap justify-center gap-8">
        <li><NavLink to="/" end className={linkClass}>About</NavLink></li>
        <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
        <li><NavLink to="/interests" className={linkClass}>Interests</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
