import React from 'react';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery('(max-width:800px)');

  let classStr =
    pathname.toLowerCase() === '/home' || pathname.toLowerCase() === '/home/'
      ? 'header long'
      : 'header';
  classStr += matches ? ' small' : '';
  return (
    <>
      <NavBar />
      <div className={classStr}>
        <div className={matches ? 'title small' : 'title'}>Jericho Parents</div>
      </div>
    </>
  );
};

export default Header;
