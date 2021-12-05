import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import TestComponent from './components/TestComponent';
import TestText from './components/TestText';

import './App.css';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        {seaRoutes}
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
