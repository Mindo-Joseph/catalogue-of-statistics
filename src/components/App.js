import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error from './Error';
import Home from '../containers/Home';
import More from '../containers/More';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/more" component={More} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
