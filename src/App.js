import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Routes>

        </Routes>
      </>
    </Router>
  );
}

export default App;
