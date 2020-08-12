import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/header/header.component';
import HomePage from '../home/home.page';
import AboutPage from '../about/about.page';
import Checkout from '../../components/email/checkout.component';
import Copyright from '../../components/copyright/copyright.component';
// import Copyright from './components/copyright/copyright.component';

const MyRoute = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={Checkout} />
      </Switch>
      <br />
      <Copyright />
      <br />
    </>
  );
};

export default MyRoute;
