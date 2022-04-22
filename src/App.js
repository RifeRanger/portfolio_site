import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Skills from './components/pages/skills/Skills';
import Experience from './components/pages/experience/Experience';
import Education from './components/pages/education/Education';
import Portfolio from './components/pages/portfolios/Portfolio';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Routes>
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
