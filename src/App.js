import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/tech" component={Contact} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
