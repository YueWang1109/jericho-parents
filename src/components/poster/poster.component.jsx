import React from 'react';
import poster from '../../assets/poster.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
const Poster = ({ handleClose }) => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <Grid container className="poster-container">
      <button
        className={matches ? 'close-btn small' : 'close-btn'}
        onClick={handleClose}
      >
        Close
      </button>
      {poster && (
        <img
          src={poster}
          alt="Logo"
          className={matches ? 'poster small' : 'poster'}
        />
      )}
      {/* <Grid item xs={12} className="title">
        Let's STOP the illegal Homeless Shelter!!
      </Grid> */}
    </Grid>
  );
};

export default Poster;
