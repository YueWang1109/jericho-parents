import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FictionFact from '../../components/fiction-fact/fiction-fact.component';

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

const FictionFactPage = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header /> */}
      <Grid container className={classes.mainPage}>
        <Grid item sm={12} md={8} className={classes.body}>
          <FictionFact />
        </Grid>
      </Grid>
    </>
  );
};

export default FictionFactPage;
