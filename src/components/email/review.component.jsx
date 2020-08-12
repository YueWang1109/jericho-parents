import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1, 0),
    textAlign: 'left',
    wordBreak: 'break-all',
    color: '#555555',
  },
  title: {
    fontWeight: 700,
    padding: theme.spacing(1, 0),
    textAlign: 'left',
  },
}));

export default function Review({ info }) {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:800px)');
  const textLen = matches ? 400 : 800;
  const {
    firstName,
    lastName,
    email,
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
          Email:
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          alignContent="flex-start"
          className={classes.item}
        >
          {email}
        </Grid>

        <Grid item xs={12} alignContent="flex-start" className={classes.title}>
          Message:
        </Grid>
        <Grid item xs={12} alignContent="flex-start" className={classes.item}>
          {content.length > textLen
            ? content.slice(0, textLen) + '...'
            : content}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
