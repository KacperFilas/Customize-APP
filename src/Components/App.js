import './app.css';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Customizer from './Customizer';
import Savedlist from './saved-list';
import CreateNew from './create-new';

const App = () => {
  return (
    <div className="app-container">
      <HashRouter>
        <Switch>
          <Route path="/customizer">
            <Customizer />
          </Route>
          <Route path="/">
            <div className="list-container">
              <Savedlist />
            </div>
            <CreateNew />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
