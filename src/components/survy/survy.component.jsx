import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import petition from '../../assets/QR_petition.png';
import sign from '../../assets/QR_freesign.png';
import info from '../../assets/QR_info.png';
import skype from '../../assets/QR_skype.png';
import donation from '../../assets/QR_donation.png';

import './survy.styles.scss';
const LinkArea = () => (
  <Grid container className="link-area">
    <Grid container justify="center" alignItems="center" direction="column">
      <h1>Please Join Us</h1>
      <p>Dear Fellow Neighbors, </p>
      <p>
        Lawsuit against the Illegal Homeless Housing Plan. Concerned Jericho
        Parents is a group of parents and residents of the Jericho School
        District who formed together as a result of the circumvention of
        community input and involvement in the decision making process
        concerning the proposed use and zoning of 120 Jericho Turnpike, Jericho,
        New York, 11753.
      </p>
      <p>
        Attorneys have been retained to file a lawsuit against this illegal
        homeless housing plan. By filing this form, you will give the consent to
        the attorney representing the group of “Concerned Jericho Parents” to
        list your name and information as a part of the plaintiff of the case
        “Concerned Jericho Parents” vs. “120 westend LLC” (the developer at 120
        Jericho Turnpike, the former Hampton Inn). Attorney-client privilege is
        ensured, so your information will be confidential and solely used by the
        attorney for this case ONLY!
      </p>
      <p>Concerned Parents of Jericho</p>

      <a
        className="contact-btn"
        href="https://forms.gle/X3yiHkfhmAcoH8zK8"
        rel="noopener noreferrer"
        target="_blank"
      >
        Join Now
      </a>
    </Grid>
  </Grid>
);

export default LinkArea;
