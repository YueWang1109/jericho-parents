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
        1. A <span>petition</span> has been formed, click{' '}
        <a
          href="http://chng.it/2GyBX6sZpC"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>{' '}
        or scan the below QR code.
      </div>
      <img src={petition} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        2. <span>Donate</span> on GoFundMe, click{' '}
        <a
          href="https://www.gofundme.com/f/stop-the-homeless-shelter-in-jericho
"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>{' '}
        or scan the below QR code.
      </div>
      <img src={donation} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        3. Join in <span>Skype</span> Discussion Group, click{' '}
        <a
          href="https://join.skype.com/sDK6CLjJg4GW

"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>{' '}
        or scan the below QR code.
      </div>
      <img src={skype} alt="Logo" />
    </Grid>
    <Grid container justify="center" alignItems="center" direction="column">
      <div>
        4.<span>Email</span>{' '}
        <a
          href="mailto: 516Jericho@gmail.com

"
          rel="noopener noreferrer"
          target="_blank"
        >
          516jericho@gmail.com
        </a>{' '}
        or scan the below QR code to join in mailing list for update and free
        yard signs. (Send us your address to get signs delivered to you.)
      </div>
      <img src={sign} alt="Logo" />
    </Grid>
  </Grid>
);

export default LinkArea;
