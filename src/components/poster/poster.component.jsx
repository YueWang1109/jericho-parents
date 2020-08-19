import React from 'react';
import poster from '../../assets/poster.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
import { red } from '@material-ui/core/colors';
const Poster = ({ handleClose }) => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div container className="poster-container">
      <div className="message-container">
        <h1>Action Now!</h1>
        <p>Dear Fellow Neighbors, </p>
        <p>
          As you may have already heard, the Hampton Inn, located on 120 Jericho
          Turnpike, Jericho, New York, 11753, was recently purchased by a
          developer, 120 Westend LLC. The developer, in partnership with
          Community Housing Innovations and with the support of Nassau County
          Executive Laura Curran and the Department of Social Services, intends
          to convert the property into a transitional housing facility that will
          accommodate 80 homeless families. This property, which is located less
          than a mile from the Cantiague Elementary School, is not zoned for
          stays longer than 30 days and is being pushed forward by the developer
          and the county illegally.{' '}
        </p>
        <p>
          The Town of Oyster Bay agrees with our position and has taken legal
          action to protect the integrity of our zoning ordinances. The New York
          State Supreme Court granted the Town’s request and issued a temporary
          restraining order against 120 Westend LLC. This order was further
          upheld as the Court denied the developer’s appeal earlier this week.{' '}
        </p>
        <p>
          We have also retained attorneys to file a lawsuit against this illegal
          housing plan. By filling out the attached form, you will give consent
          to the group “Concerned Jericho Parents” to list your name and
          information as a part of the plaintiff of the case “Concerned Jericho
          Parents” vs. “120 Westend LLC” (developer at 120 Jericho Turnpike,
          former Hampton Inn).{' '}
        </p>
        <p>
          We urge you to please join us and to support our efforts to force
          local officials to{' '}
          <span style={{ color: 'red', fontWeight: 799 }}>STOP</span> this
          facility from opening in order to help preserve the safety and well
          being of our families and neighborhood.
        </p>
        <p>Concerned Parents of Jericho</p>

        <a
          className="contact-btn"
          href="https://forms.gle/X3yiHkfhmAcoH8zK8"
          rel="noopener noreferrer"
          target="_blank"
          onClick={() => handleClose(false)}
        >
          Count Me In!
        </a>
        <div className="skip" onClick={() => handleClose(true)}>
          Remind me later.
        </div>
        <div className="skip" onClick={() => handleClose(false)}>
          sorry, I can't help.
        </div>
        {/* <button
          className={matches ? 'close-btn small' : 'close-btn'}
          onClick={handleClose}
        >
          Close
        </button> */}
      </div>
      {/* {poster && (
        <img
          src={poster}
          alt="Logo"
          className={matches ? 'poster small' : 'poster'}
        />
      )} */}
    </div>
  );
};

export default Poster;
