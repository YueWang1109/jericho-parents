import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_invert.png';

import './nav-bar.styles.scss';

const NavBar = () => (
  <nav className="nav-bar">
    <ul>
      <li>
        {/* <img src={logo} alt="Jericho Parents" className="logo" /> */}
        <div className="logo">
          <div className="upper-name">Jericho</div>
          <div className="lower-name">Parents</div>
        </div>
      </li>
      <li>
        <NavLink exact to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about/">About</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
