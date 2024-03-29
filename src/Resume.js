import React from "react";
import resume from './images/Resume.svg';
import downloadResume from './images/Resume.pdf';
import scrollDownIcon from './images/scroll-down-icon.svg';
import scrollUpIcon from './images/scroll-up-icon.svg';
import downloadIcon from './images/download-icon.svg';
import {ExperiencesAccordion, ProjectsAccordion, EducationAccordion} from './Accordion.js';
import './Resume.css';

function scrollToResume() {
    const resumeElement = document.getElementById("resumePDF")
    const navbarElement = document.getElementById("navbar")
    const resumeTop = resumeElement.offsetTop-navbarElement.offsetHeight-15;
    window.scroll({
        top: resumeTop,
        behavior: 'smooth'
    })
}

function scrollToTop() {
    const navbarElement = document.getElementById("navbar")
    window.scroll({
        top: navbarElement,
        behavior: 'smooth'
    })
}

const downloadResumeBtn = (
    <a className="download-btn" download="JennyGuanResume.pdf" href={downloadResume}>
        <div className="vertical-center">
            <img src={downloadIcon} alt="Download" height="40px"/>
        </div>
        <div className="vertical-center">
            Download PDF
        </div>
    </a>
);

function Resume(props) {
    return (
        <div className="page-container">

            <div className="resume-container">
                <div className="header-container">
                    <h1>Résumé</h1>
                    <div className="scroll-container" onClick={scrollToResume}>
                        <div className="scroll-icon">
                            Scroll to PDF
                            <img src={scrollDownIcon} alt="Scroll to PDF" height="35px"/>
                        </div>
                    </div>
                </div>
                <div className="resume-text">
                    <div className="resume-section">
                        <h2>Summary of Skills</h2>
                        <div className="summary">
                            <li>
                                Diligently learns new material while openly accepting feedback as
                                documented in positive internship evaluations
                            </li>
                            <li>
                                Possesses exceptional communication and teamwork skills showcased
                                by successful projects completed in cross-functional agile teams
                            </li>
                            <li>
                                Extremely responsible and organized even in a fast-paced environment
                                demonstrated through personal management and up to date documentation
                            </li>
                            <hr />
                            <div className="resume-col">
                                <strong>Languages:</strong>
                                <br />
                                <i>Proficient:&nbsp;&nbsp;</i>Python, JavaScript, CSS, HTML, SQL, Bash<br />
                                <i>Familiar:&nbsp;&nbsp;</i>Swift, C#, Java, C++, C, VBA
                            </div>
                            <div className="resume-flex-row">
                                <strong>Frameworks & Libraries:&nbsp;&nbsp;</strong>
                                React, Redux, Django, Unittest, Flexbox, Bootstrap, AWS
                            </div>
                            <div className="resume-flex-row">
                                <strong>Tools:&nbsp;&nbsp;</strong>
                                Git, JIRA, DevTools, Jenkins, Charles, Postman, Google Analytics
                            </div>
                        </div>
                    </div>
                    <div className="resume-section">
                        <h2>Experience</h2>
                        {ExperiencesAccordion}
                    </div>
                    <div className="resume-section">
                        <h2>Projects</h2>
                        {ProjectsAccordion}
                    </div>
                    <div className="resume-section">
                        <h2>Education</h2>
                        {EducationAccordion}
                    </div>
                </div>
            </div>
            <div className="resume-pdf-container">
                <div className="header-container" id="resumePDF">
                    <h1>PDF Version</h1>
                    {downloadResumeBtn}
                </div>
                <div className="resume-img-container">
                    <img className="resume-img" src={resume} alt="Resume"/>
                </div>
            </div>
            <div className="footer-container">
                <div className="scroll-container" onClick={scrollToTop}>
                    <div className="scroll-icon">
                        <img src={scrollUpIcon} alt="Scroll to Top" height="35px"/>
                        Scroll to Top
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;