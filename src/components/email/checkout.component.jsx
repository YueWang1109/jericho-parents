import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './address-form.component';
import PaymentForm from './payment-form.component';
import Review from './review.component';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.jerichoparents.com/">
        Jericho Parents
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Personal Information', 'Comments', 'Review'];

export default function Checkout({ handleClose }) {
  const [info, setInfo] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    content: '',
  });
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      height: '80%',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      height: '80%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    content: {
      height: 'calc(100% - 200px)',
      overflow: 'scroll',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    buttonLeft: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginRight: 'auto',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    console.log(info);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const getStepContent = (step, info, setInfo) => {
    switch (step) {
      case 0:
        return <AddressForm info={info} setInfo={setInfo} />;
      case 1:
        return <PaymentForm info={info} setInfo={setInfo} />;
      case 2:
        return <Review info={info} setInfo={setInfo} />;
      default:
        console.log(info);
        setTimeout(handleClose, 1000);
        return <div>Uploading...</div>;
    }
  };
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contact Us
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            <React.Fragment>
              <div className={classes.content}>
                {getStepContent(activeStep, info, setInfo)}
              </div>
              <div className={classes.buttons}>
                <Button onClick={handleClose} className={classes.buttonLeft}>
                  Cancel
                </Button>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
