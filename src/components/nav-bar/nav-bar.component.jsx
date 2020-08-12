import React from 'react';
import Logo from '../../assets/logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NavLink } from 'react-router-dom';

import './nav-bar.styles.scss';
const NavBar = ({ inView }) => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div
      className={`${inView ? 'nav-bar' : 'nav-bar reverse'} ${
        matches ? 'small' : ''
      }`}
    >
      <div>
        <img className="logo" src={Logo} alt="Jericho Parents" />
      </div>
      <div className="left-side">
        <NavLink to="/home" activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          ABOUT
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          CONTACT US
        </NavLink>
      </div>
      <div className="right-side">
        <div>
          <i class="fab fa-facebook-square"></i>
        </div>
        <div>
          <i class="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
