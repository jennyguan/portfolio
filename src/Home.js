import React from "react"
import './Home.css';

function Home(props) {
    return (
        <div className="content-container">
            <div className="header-animation"><h1>Hi, I'm Jenny!</h1></div>
            <div className="page-content">
                <p>I'm a 4th year Computational Math student at the University of Waterloo
                    who is pursuing software development!</p>
                <p>I'm currently looking for internship opportunities starting Spring 2021.</p>
                {/*<p>Fun fact: all the text you're reading on my website is made from my own*/}
                {/*    handwriting. </p>*/}
            </div>
        </div>
    )
}

export default Home;