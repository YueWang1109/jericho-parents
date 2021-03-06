import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AboutArticle from '../../components/about-article/about-article.component';

const useStyles = makeStyles((theme) => ({
  mainPage: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  body: {
    minHeight: 'calc(100vh - 200px)',
  },
}));

const AboutPage = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.mainPage}>
        <Grid item sm={12} md={8} className={classes.body}>
          <AboutArticle />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
