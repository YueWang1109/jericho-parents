import React from 'react';
import Logo from '../../assets/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
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
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Jericho Parents" />
      </div>
      <div className="left-side">
        <NavLink to="/home" activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
          ABOUT
        </NavLink>
        {/* <NavLink to="/contact" activeClassName="selected">
          CONTACT US
        </NavLink> */}
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
