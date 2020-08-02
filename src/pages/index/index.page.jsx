import React from 'react';
import { Link } from 'react-router-dom';

import './index.styles.scss';

const Index = () => (
  <div className="index-page">
    <div className="title-container">
      <div className="title">Jericho Parents</div>
      <div className="sub-title">We are all together! Jericho Strong!</div>
      <Link to="/main" className="custom-link">
        Click in
      </Link>
    </div>
  </div>
);

export default Index;
