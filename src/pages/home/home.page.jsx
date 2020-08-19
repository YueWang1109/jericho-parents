import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeArticle from '../../components/home-article/home-article.component';
import AboutArticle from '../../components/about-article/about-article.component';
import LinkArea from '../../components/link-area/link-area.component';
import Survy from '../../components/survy/survy.component';
import Copyright from '../../components/copyright/copyright.component';

import './home.styles.scss';
import Poster from '../../components/poster/poster.component';

const useStyles = makeStyles((theme) => ({
  mainPage: {
    minHeight: '100vh',
    width: '100vw',
  },
  header: {
    height: 130,
    marginBottom: 20,
  },
  bodyLeft: {
    minHeight: 'calc(100vh - 200px)',
    // padding: 30,
  },
  bodyRight: {
    // minHeight: 'calc(100vh - 200px)',
    margin: 30,
    padding: 30,
    // marginRight: 30,
    backgroundColor: '#eeeeee75',
    border: '1px #cccccc solid',
    borderRadius: 10,
  },
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    height: 50,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <Grid container className={classes.mainPage}>
        <Grid item xs={12} sm={8} className={classes.bodyLeft}>
          <HomeArticle />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.bodyRight}>
            <Survy />
          </div>
        </Grid>
      </Grid>
      {/* <HomeArticle /> */}
    </>
  );
};

export default HomePage;
