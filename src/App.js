import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index.page';
import Checkout from './components/email/checkout.component';
import Copyright from './components/copyright/copyright.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contact" component={Checkout} />
        </Switch>
      </Router>
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
