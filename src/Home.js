import React from "react"
import './Home.css';
import Contact from './Contact';
import personalPicture from "./images/me.jpg";

const personalPic = (
    <img src={personalPicture} alt="Me!" height="400px"/>
)

function Home(props) {
    return (
        <div className="page-container">
            <div className="about-container">
                <div className="personal-picture-regular-layout">
                    {personalPic}
                </div>
                <div className="about-text">
                    <h1>Hi, I'm Jenny!</h1>
                    <p>
                        I'm a 4th year Math student at the University of Waterloo and a software
                        developer! Thanks to my co-op program, I have over 1.5 years of work experience
                        from 5 different internships across FinTech, PropTech, and AdTech fields!
                        I'd like to get one more work term under my belt before I finish my undergrad, so
                        <strong>
                            &nbsp;I'm currently looking for internship opportunities starting Spring 2021.
                        </strong>
                        &nbsp;Check out my
                        <a href="/#/resume"> resume here.</a>
                    </p>
                    <p>
                        I'm an enthusiastic and diligent individual born and raised in Toronto, and
                        I'm passionate about helping people by problem solving through software development.
                        I'm in the process of earning my B. Math at the University of Waterloo
                        and expecting to graduate by the end of 2021. I major in Computational Math and
                        minor in both Computing and Combinatorics & Optimization.
                    </p>
                    <p>
                        In my free time, I like to learn about UI/UX Design and express myself creatively
                        through bullet journaling, calligraphy, and painting. I'm also an avid badminton player,
                        and am always up for a match of foosball.
                    </p>
                </div>
            </div>
            <div className="row-medium-layout">
                <div className="personal-picture-medium-layout">
                    {personalPic}
                </div>
                {Contact}
            </div>
        </div>
    )
}

export default Home;