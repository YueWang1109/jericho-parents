import React from 'react';
import poster from '../../assets/poster.png';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
const Poster = () => {
  return (
    <Grid container className="poster-container">
      {poster && (
        <Grid item xs={12}>
          <img src={poster} alt="Logo" className="poster" />
        </Grid>
      )}
      {/* <Grid item xs={12} className="title">
        Let's STOP the illegal Homeless Shelter!!
      </Grid> */}
    </Grid>
  );
};

export default Poster;
