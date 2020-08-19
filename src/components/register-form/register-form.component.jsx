import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import firebase from '../../util/firestore';

const RegisterForm = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [warning, setWarning] = useState('');
  const matches = useMediaQuery('(max-width:800px)');
  const useStyles = makeStyles((theme) => ({
    registerFormContainer: {
      width: '100vw',
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(1),
        width: matches ? '80vw' : '500px',
      },
    },
    warning: {
      height: 20,
      color: 'red',
    },
  }));
  const classes = useStyles();

  const handleChange = (id, value) => {
    setInfo({ ...info, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setWarning('');
    let fieldList = [];
    for (const element in info) {
      console.log(element);
      if (info[element].length === 0) {
        if (element == 'name' || element == 'email') fieldList.push(element);
      }
    }
    if (fieldList.length > 0) {
      setWarning(`fields: (${fieldList.join(',')}) can't be empty`);
      return;
    }
    // const db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true,
    // });
    // const userRef = db.collection('emailList').add(info);
    setInfo({
      name: '',
      email: '',
      address: '',
      phone: '',
    });
  };
  const { name, email, address, phone } = info;
  return (
    <div className={classes.registerFormContainer}>
      <h1>Join us</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className={classes.warning}>{warning.length > 0 && warning}</div>
        <TextField
          id="name"
          label="Name"
          value={name}
          required
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <TextField
          id="email"
          label="Email"
          value={email}
          required
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <TextField
          id="phone"
          label="Phone"
          value={phone}
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <TextField
          id="address"
          label="Address"
          value={address}
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3P6DYm00-SR-u-tpc_LSRwFRG00_aJUMrpd5acONlapSOyg/viewform?usp=sf_link"
        title="Survy"
        height="1200"
        width="500" */}
      />
    </div>
  );
};

export default RegisterForm;
