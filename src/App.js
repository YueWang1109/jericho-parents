import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index.page';
import MyRoute from './pages/route/route.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route component={MyRoute} />
        </Switch>
      </Router>
      {/* <Copyright /> */}
    </div>
  );
}

export default App;
