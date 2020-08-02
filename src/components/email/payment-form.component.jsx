import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
  textArea: {
    width: '100%',
  },
}));

export default function PaymentForm({ info, setInfo }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const { value } = e.target;
    setInfo({ ...info, content: value });
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Comments (required)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextareaAutosize
            rowsMin={20}
            rowsMax={20}
            placeholder="leave your comment here"
            className={classes.textArea}
            value={info.content}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
