import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Resources from '../../components/resources/resources.component';

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
const ResourcesPage = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainPage} justify="center">
      <Grid item xs={12} sm={6} className={classes.bodyLeft}>
        <Resources />
      </Grid>
      {/* <Grid item xs={12} sm={4}>
        <div className={classes.bodyRight}>
          <LinkArea />
        </div>
      </Grid> */}
    </Grid>
  );
};

export default ResourcesPage;
