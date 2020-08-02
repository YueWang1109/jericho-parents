import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1, 0),
    textAlign: 'left',
  },
  title: {
    fontWeight: 700,
    padding: theme.spacing(1, 0),
    textAlign: 'left',
  },
}));

export default function Review({ info }) {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    content,
  } = info;
  const fullAddr =
    (address1 && address1 + ', ') +
    (address2 && address2 + ', ') +
    (city && city + ', ') +
    (state && state + ', ') +
    zip;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>

      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={3}
          alignContent="flex-start"
          className={classes.title}
        >
          Name:
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          alignContent="flex-start"
          className={classes.item}
        >
          {`${firstName} ${lastName}`}
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          alignContent="flex-start"
          className={classes.title}
        >
          Address:
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          alignContent="flex-start"
          className={classes.item}
        >
          {fullAddr}
        </Grid>

        <Grid item xs={12} alignContent="flex-start" className={classes.title}>
          Message:
        </Grid>
        <Grid item xs={12} alignContent="flex-start" className={classes.item}>
          {content.length > 800 ? content.slice(0, 800) + '...' : content}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
