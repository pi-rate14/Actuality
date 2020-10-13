import React from 'react';
import PageWrapper from './components/PageaWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//Pages
import Home from './components/pages/home'
import About from './components/pages/About'


function App() {
  return (
    <Router>
      <PageWrapper>
        
        <Route
          exact={true}
          path = "/"
          component = {Home}
        />
        <Route
         path = "/about"
         component = {About}
        />



        </PageWrapper>
    </Router>
    
  );
}

export default App;
