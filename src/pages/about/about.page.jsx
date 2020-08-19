import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/header/header.component';
import HomeArticle from '../../components/home-article/home-article.component';
import AboutArticle from '../../components/about-article/about-article.component';
import LinkArea from '../../components/link-area/link-area.component';
import Copyright from '../../components/copyright/copyright.component';

import './about.styles.scss';
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
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <Grid container className={classes.mainPage}>
        <Grid item xs={12} sm={8} className={classes.bodyLeft}>
          <AboutArticle />
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.bodyRight}>
            <LinkArea />
          </div>
        </Grid>
      </Grid>
      {/* <AboutArticle /> */}
    </>
  );
};

export default HomePage;
