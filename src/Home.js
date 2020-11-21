import React from "react"
import './Home.css';
import Contact from './Contact';
import personalPicture from "./images/me.jpg";

function Home(props) {
    return (
        <div className="content-container">
            <div className="personal-picture">
                <img src={personalPicture} alt="Me!" height="400px"/>
            </div>
            <h1>Hi, I'm Jenny!</h1>
            <div className="page-content">
                <p>
                    I'm a 4th year Math student at the University of Waterloo who is also a software
                    developer! Thanks to my co-op program, I already have over 1.5 years of work
                    experience from 5 different internships in the field! Before I finish my undergrad,
                    I'd like to get one more work term under my belt, so
                    <strong>
                        &nbsp;I'm currently looking for internship opportunities starting Spring 2021.
                    </strong>
                </p>
                <p>
                    I'm an enthusiastic and diligent individual born and raised in Toronto, Ontario, and
                    I'm passionate about helping people by problem solving through software development.
                    I'm in the process of earning my Bachelors of Mathematics at the University of Waterloo
                    and expecting to graduate by the end of 2021. I major in Computational Mathematics and
                    plan to graduate with minors in both Computing and Combinatorics & Optimization.
                </p>
                <p>
                    In my free time, I like to learn about UI/UX Design through online workshops and webinars.
                    I also find joy in creative expressions such as bullet journaling, calligraphy,
                    embroidery, and painting. Don't get me wrong, finding joy in it doesn't mean I'm a pro!
                    I'm also an avid badminton player, and am always up for a match of foosball.
                </p>
                <Contact />
            </div>
        </div>
    )
}

export default Home;