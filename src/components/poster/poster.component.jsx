import React from 'react';
import poster from '../../assets/AllyPoster.jpeg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
const Poster = ({ handleClose }) => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <Grid container className="poster-container">
      <button className="close-btn" onClick={handleClose}>
        Close
      </button>
      {poster && (
        <img
          src={poster}
          alt="Logo"
          className={matches ? 'poster full' : 'poster'}
        />
      )}
      {/* <Grid item xs={12} className="title">
        Let's STOP the illegal Homeless Shelter!!
      </Grid> */}
    </Grid>
  );
};

export default Poster;
