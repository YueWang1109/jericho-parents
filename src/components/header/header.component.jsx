import React from 'react';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <>
      {/* <NavBar /> */}
      <div className={matches ? 'header small' : 'header'}>
        <div className="cover-layer">
          <div className={matches ? 'title small' : 'title'}>
            Concerned Jericho Parents
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
