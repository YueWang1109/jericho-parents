import React from 'react';
import Logo from '../../assets/logo.jpg';

import './mission.styles.scss';

const Mission = () => (
  <div className="mission">
    <div className="mission-content">
      <h1>OUR MISSION</h1>
      <p>
        Our mission is to stop an illegal shelter that was done in secrecy and
        lack of transparency, that the citizens and taxpayers deserve to have.
        We object to any plans put by the government without any community input
        or hearings. ​
      </p>
    </div>
    <img src={Logo} alt="Concerned Jericho Parents" />
  </div>
);

export default Mission;
