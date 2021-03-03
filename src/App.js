import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Tech from './pages/tech';
import Art from './pages/art';
import Research from './pages/research';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/tech" component={Tech} />
          <Route path="/art" component={Art} />
          <Route path="/research" component={Research} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
