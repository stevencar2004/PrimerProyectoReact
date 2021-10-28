import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Signup from '../pages/signup';
import Coderepos from '../pages/coderepos';
import Global from './Global';

function App() {
  return (
    <BrowserRouter>
      <Global>
        <Switch>
          <Route exact path="/Coderepos" component={Coderepos} />
          <Route exact path="/Sign-Up" component={Signup} />
        </Switch>
      </Global>
    </BrowserRouter>
  );
}

export default App;
