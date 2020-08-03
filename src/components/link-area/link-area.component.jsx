import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import petition from '../../assets/QR_petition.png';
import sign from '../../assets/QR_freesign.png';
import info from '../../assets/QR_info.png';
import skype from '../../assets/QR_skype.png';
import donation from '../../assets/QR_donation.png';

import './link-area.styles.scss';
const LinkArea = () => (
  <Grid container className="link-area">
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        1. <span>Petition</span> (“Stop the Housing Site for Homeless Shelter in
        Jericho”){' '}
        <a
          href="http://chng.it/KGNFGb5YNd"
          rel="noopener noreferrer"
          target="_blank"
        >
          http://chng.it/KGNFGb5YNd
        </a>
        <div className="detail">
          Over 1,500 supporters have signed the petition within 22 hours.
        </div>
      </div>
      <img src={petition} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        2. <span>GoFundMe</span> (“Stop the Homless Shelter in Jerihco”){' '}
        <a
          href="https://gf.me/u/yjzhvw"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://gf.me/u/yjzhvw
        </a>
        <div className="detail">
          More than $75K has been raised within 24 hours. This money will be
          strictly used for all legal services necessary to fight the homeless
          shelter location on behalf of the community.
        </div>
      </div>
      <img src={donation} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        3. <span>Jericho Strong on Skype</span>{' '}
        <a
          href="https://join.skype.com/sDK6CLjJg4GW

"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://join.skype.com/sDK6CLjJg4GW
        </a>
        <div className="detail">
          Approximately 130 participants has joined within 48 hours.
        </div>
      </div>
      <img src={skype} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        4.{' '}
        <a
          href="mailto: 516Jericho@gmail.com

"
          rel="noopener noreferrer"
          target="_blank"
        >
          516jericho@gmail.com
        </a>
        <div className="detail">
          An information inbox was created to collect emails and circulate needs
          from the community.
        </div>
      </div>
      <img src={sign} alt="Logo" />
    </Grid>
  </Grid>
);

export default LinkArea;
