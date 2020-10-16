import React from "react"
import resume from './images/Resume.svg';
import './Resume.css';

function Resume(props) {
    return (
        <div className="content-container">
            <h1>Resume</h1>
            <p><a download="JennyGuanResume.pdf" href="/images/Resume.pdf">Download PDF</a></p>
            <div className="resume-container">
                <img src={resume} className="resume" alt="Resume"/>
            </div>
        </div>
    )
}

export default Resume;