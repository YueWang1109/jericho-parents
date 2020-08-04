import React from 'react';
import poster from '../../assets/poster.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import './poster.styles.scss';
const Poster = () => {
  const matches = useMediaQuery('(max-width:800px)');
  return (
    <div className="poster-container">
      {poster && (
        <>
          <img
            src={poster}
            alt="Logo"
            className={matches ? 'poster full' : 'poster'}
          />
          <div>
            <div>Leave your Information to get more detail</div>
            <div>Not Now</div>
          </div>
        </>
      )}
      {/* <Grid item xs={12} className="title">
        Let's STOP the illegal Homeless Shelter!!
      </Grid> */}
    </div>
  );
};

export default Poster;
