import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Coderepos from '../pages/coderepos';
import Global from './Global';

function App() {
  return (
    <BrowserRouter>
      <Global>
        <Switch>
          <Route exact path="/" component={Coderepos} />
        </Switch>
      </Global>
    </BrowserRouter>
  );
}

export default App;
