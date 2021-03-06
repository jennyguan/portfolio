import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import banner from './images/banner.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Home from './Home';
import Resume from './Resume';
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar id="navbar">
          <Navbar.Brand>
            <a href="/">
              <img src={banner} alt="Name Gif" height="120px"/>
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#/resume">Résumé</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
      </div>
    </HashRouter>
  );
}

export default App;
