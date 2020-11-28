import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import logo from './images/coder-girl.png';
import banner from './images/banner.gif';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Home from './Home';
import Resume from './Resume';
import './App.css';

const homePath = process.env.PUBLIC_URL + "/";
const resumePath = process.env.PUBLIC_URL + "/resume";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar id="navbar">
          <Navbar.Brand>
            <a href={homePath}>
              <img src={logo} className="logo" alt="Logo" height="120px"/>
              <img src={banner} alt="Name Gif" height="120px"/>
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href={homePath}>Home</Nav.Link>
            <Nav.Link href={resumePath}>Resume</Nav.Link>
          </Nav>
        </Navbar>

        <Route exact path={homePath} component={Home}/>
        <Route exact path={resumePath} component={Resume}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
