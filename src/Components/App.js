import './app.css';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Customizer from './Customizer';
import Savedlist from './saved-list';
import CreateNew from './create-new';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route path="/customizer">
            <Customizer />
          </Route>
          <Route path="/">
            <div className="list-container">
              <Savedlist />
              <CreateNew />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
