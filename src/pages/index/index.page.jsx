import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import './index.styles.scss';

const Index = () => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div className="index-page">
      <div className="title-container">
        <div className={matches ? 'title small' : 'title'}>
          Concerned Jericho Parents
        </div>
        <div className={matches ? 'sub-title small' : 'sub-title'}>
          We are all together! Jericho Strong!
        </div>
        <Link to="/home" className="custom-link">
          Visit Now
        </Link>
      </div>
    </div>
  );
};

export default Index;
