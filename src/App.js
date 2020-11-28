import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import logo from './images/coder-girl.png';
import banner from './images/banner.gif';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Home from './Home';
import Resume from './Resume';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar id="navbar">
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" alt="Logo" height="120px"/>
              <img src={banner} alt="Name Gif" height="120px"/>
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar>

        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
