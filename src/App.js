import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index.page';
import MyRoute from './pages/route/route.page';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router
        onChange={() => {
          console.log('changed');
        }}
      >
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
