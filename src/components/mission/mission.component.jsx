import React from 'react';
import Logo from '../../assets/logo.png';

import './mission.styles.scss';

const Mission = () => (
  <div className="mission">
    <div className="mission-content">
      <h1>OUR MISSION</h1>
      <p>
        We want to STOP an illegal shelter from being placed in Nassau County
        that would supersede all local zoning laws. This Shelter was agreed to
        in secrecy and with a complete lack of transparency, without the
        appropriate impact studies and public input and hearings.
      </p>
    </div>
    <img src={Logo} alt="Concerned Jericho Parents" />
  </div>
);

export default Mission;
