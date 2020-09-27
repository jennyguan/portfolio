import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import logo from './images/banner.gif';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>

        <Navbar>
          <Navbar.Brand>
            <img src={logo} className="logo" alt="Logo Image" height="120px"/>
          </Navbar.Brand>
          <Nav>
            <Nav.Link active href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
