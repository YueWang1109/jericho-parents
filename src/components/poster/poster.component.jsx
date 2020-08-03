import React from 'react';
import poster from '../../assets/poster.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
const Poster = () => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div>
      <Grid container className="poster-container">
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
    </div>
  );
};

export default Poster;
