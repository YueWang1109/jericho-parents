import React from 'react';
import { Link } from 'react-router-dom';
import petition from '../../assets/QR_petition.png';
import sign from '../../assets/QR_freesign.png';
import info from '../../assets/QR_info.png';
import skype from '../../assets/QR_skype.png';
import donation from '../../assets/QR_donation.png';

import './link-area.styles.scss';
const LinkArea = () => (
  <div className="link-area">
    <div className="main-container">
      <h2>Some easy ways to show your support</h2>
      <div className="link-container">
        <img src={petition} alt="Logo" />
        <div>
          1.{' '}
          <a
            href="http://chng.it/KGNFGb5YNd"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Petition</span>
          </a>{' '}
          (“Stop the Housing Site for Illegal Homeless Shelter in Jericho”){' '}
          <div className="detail">
            Over 1,500 supporters have signed the petition within 22 hours.
          </div>
        </div>
      </div>
      <div className="link-container">
        <img src={donation} alt="Logo" />
        <div>
          2.{' '}
          <a
            href="https://www.gofundme.com/f/stop-the-homeless-shelter-in-jericho
          "
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>GoFundMe</span>
          </a>{' '}
          (“Stop the Illegal Homeless Shelter in Jerihco”){' '}
          <div className="detail">
            More than $75K has been raised within 24 hours. This money will be
            strictly used for all legal services necessary to fight the homeless
            shelter location on behalf of the community.
          </div>
        </div>
      </div>
      <div className="link-container">
        <img src={skype} alt="Logo" />
        <div>
          3.{' '}
          <a
            href="https://join.skype.com/sDK6CLjJg4GW

"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Jericho Strong on Skype</span>
          </a>
          <div className="detail">
            Approximately 130 participants has joined within 48 hours.
          </div>
        </div>
      </div>
      <div className="link-container">
        <img src={info} alt="Logo" />
        <div>
          4.{' '}
          <a
            href="mailto: support@jerichoparents.com

"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Contact Us</span>
          </a>
          <div className="detail">
            An information inbox was created to collect emails and circulate
            needs from the community.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LinkArea;
