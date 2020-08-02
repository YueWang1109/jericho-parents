import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <NavBar />
      <div
        className={
          pathname.toLowerCase() === '/home' ||
          pathname.toLowerCase() === '/home/'
            ? 'header long'
            : 'header'
        }
      >
        <div className="title">Jericho Parents</div>
      </div>
    </>
  );
};

export default Header;
