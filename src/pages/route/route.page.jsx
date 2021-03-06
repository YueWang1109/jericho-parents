import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '../../components/header/header.component';
import HomePage from '../home/home.page';
import AboutPage from '../about/about.page';
import ResourcesPage from '../resources/resources.page';
import PageNotFound from '../page-not-found/page-not-found.page';
import Modal from '@material-ui/core/Modal';
import Checkout from '../../components/email/checkout.component';
import Copyright from '../../components/copyright/copyright.component';
import RegisterForm from '../../components/register-form/register-form.component';
import Poster from '../../components/poster/poster.component';
// import Copyright from './components/copyright/copyright.component';
import '../../App.scss';
import FictionFactPage from '../fiction-fact/fiction-fact.page';

const MyRoute = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (isSkipped) => {
    if (isSkipped) {
      const date = new Date();
      const ts = date.getTime();
      localStorage.setItem('ts', ts);
    } else {
      localStorage.setItem('ts', 2597858776282);
    }
    setIsOpen(false);
  };
  // useEffect(() => {
  //   // setIsOpen(true);
  //   const date = new Date();
  //   const ts = date.getTime();
  //   const last_ts = localStorage.getItem('ts');

  //   if (!last_ts || ts - last_ts > 1000 * 60 * 60) {
  //     setIsOpen(true);
  //   }
  //   // console.log(isOpen);
  //   // setTimeout(() => setIsOpen(false), 10000);
  // });
  return (
    <>
      <Modal
        open={isOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <Poster handleClose={handleClose} />
        </div>
      </Modal>
      <Header />
      <Route
        path="/"
        onChange={() => {
          console.log('changed');
        }}
      >
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/fact" component={FictionFactPage} />
          <Route exact path="/resources" component={ResourcesPage} />
          {/* <Route exact path="/contact" component={RegisterForm} /> */}
          <Route component={PageNotFound} />
        </Switch>
      </Route>
      <br />
      <Copyright />
      <br />
    </>
  );
};

export default MyRoute;
