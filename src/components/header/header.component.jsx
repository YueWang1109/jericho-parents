import React from 'react';
import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => {
  return (
    <>
      <NavBar inView={false} />
      <div className="header">
        <div className="cover-layer">
          <div className="title">Concerned Jericho Parents</div>
        </div>
      </div>
    </>
  );
};

export default Header;
