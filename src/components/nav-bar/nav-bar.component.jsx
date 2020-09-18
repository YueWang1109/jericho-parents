import React from 'react';
import Logo from '../../assets/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { NavLink } from 'react-router-dom';

import './nav-bar.styles.scss';
const NavBar = ({ inView }) => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={`${inView ? 'nav-bar' : 'nav-bar reverse'}`}>
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Jericho Parents" />
      </div>
      <div className="left-side">
        <NavLink to="/home" activeClassName="selected" onClick={toTop}>
          HOME
        </NavLink>
        <NavLink to="/about" activeClassName="selected" onClick={toTop}>
          ABOUT
        </NavLink>
        <NavLink to="/resources" activeClassName="selected" onClick={toTop}>
          RESOURCES
        </NavLink>
      </div>
      <div className="right-side">
        <a
          href="https://www.facebook.com/jerichoparents/"
          title="check our facebook page"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/jerichoparents/"
          title="check our instagram page"
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        {/* <a
          href="https://www.google.com"
          title="check our twitter feed"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon />
        </a> */}
      </div>
    </div>
  );
};

export default NavBar;
