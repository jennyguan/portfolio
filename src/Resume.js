import React from "react"
import resume from './images/Resume.svg';
import downloadResume from './images/Resume.pdf';
import scrollDownIcon from './images/scroll-down-icon.svg'
import scrollUpIcon from './images/scroll-up-icon.svg'
import downloadIcon from './images/download-icon.svg';
import './Resume.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

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

function Resume(props) {
    return (
        <div className="page-container">

            <div className="resume-container">
                <div className="header-container">
                    <h1>Resume</h1>
                    <div className="scroll-btn">
                        Scroll to PDF
                        <a className="scroll-icon" onClick={scrollToResume}>
                            <img src={scrollDownIcon} alt="Scroll to PDF" height="45px"/>
                        </a>
                    </div>
                </div>
                <div className="resume-text">
                    <div className="resume-section">
                        <h2>Summary of Skills</h2>
                        <div className="summary">
                            <li>Diligently learns new material while openly accepting feedback</li>
                            <li>Proven leader with exceptional communication and teamwork skills</li>
                            <li>Extremely responsible and organized even in a fast-paced environment</li>
                            <hr />
                            <div className="resume-flex-row">
                                <div className="resume-col">
                                    <strong>Languages:</strong>
                                </div>
                                <div className="resume-col">
                                    Proficient: Python, JavaScript, CSS, HTML, Bash, SQL<br />
                                    Familiar: Swift, C#, Java, C++, C, VBA
                                </div>
                            </div>
                            <hr />
                            <div className="resume-flex-row">
                                <div className="resume-col">
                                    <strong>Technologies:</strong>
                                </div>
                                <div className="resume-col">
                                    React, Django, Redux, Git, JIRA, AWS Serverless, Xcode
                                    (Simulator, Instruments), Charles, Postman
                                </div>
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
                    <a className="download-btn" download="JennyGuanResume.pdf" href={downloadResume}>
                        <img src={downloadIcon} alt="Download" height="65px"/>
                    </a>
                </div>
                <div className="resume-img-container">
                    <img className="resume-img" src={resume} alt="Resume"/>
                </div>
            </div>

            <div className="footer-container">
                <div className="scroll-btn">
                    <a className="scroll-icon" onClick={scrollToTop}>
                        <img src={scrollUpIcon} alt="Scroll to Top" height="45px"/>
                    </a>
                    Scroll to Top
                </div>
            </div>
        </div>
    )
}

const ExperiencesAccordion = (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Full Stack Web Developer at Polar
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Remote // Sept. – Dec. 2020</strong>
                <p>
                    For my first fully-remote internship, I developed client-facing features
                    on virtual machine environments and effectively traced and debugged code
                    using VSCode and Chrome DevTools. The features I implemented improved
                    usability of the web product by enhancing UI (JavaScript, CSS, React),
                    and expanded client functionality in Django admin (Python) with database migrations.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    iOS Computer Engineer at Flybits
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Jan. – Mar. 2020</strong>
                <p>
                    As a new iOS developer, I completed Stanford's iOS App Development (CS193P) course
                    lectures. I used Swift in Xcode to develop features for SDK releases involving UI
                    changes, caching, HTTP requests, and more. Prior to every release, all-hands would
                    prepare and manually execute a detailed test plan using Xcode Simulator, Instruments,
                    and Charles to ensure quality. All tasks were documented appropriately in JIRA, and
                    I engaged in agile scrum meetings such as daily stand-up, sprint planning, and retrospective.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Full Stack Web Developer at Properly
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // May – Aug. 2019</strong>
                <p>
                    I worked at Properly when they were a team of about 15 located in the start-up
                    hub in downtown Toronto, OneEleven. Working collaboratively with the designer
                    and the small dev team, I developed the front-end of an active listing site (JavaScript,
                    CSS, React, Redux) for beta release. I also implemented back-end (Python) systems
                    and APIs with AWS Serverless architecture (Lambda, S3, DynamoDB, CloudFormation)
                    to fetch and pull data powering the listing site and operations web portal.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Software Developer at BAML
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Sept. – Dec. 2018</strong>
                <p>
                    At Bank of America Merrill Lynch, I worked alone on reimplementing a report generator feature on
                    the front-office trading system to fix a database security issue. I designed
                    the UI in C# with WinForms. The client activity data was fetched from SQL
                    queries and procedures that would be returned through Java endpoints that
                    I created and tested with Postman.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Software Developer at KPMG
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Jan. – Apr. 2018</strong>
                <p>
                    For my first internship, I joined the Tax Transformation & Technology
                    Team where I worked in a unique start-up culture that was hosted within
                    a well-established firm. I worked in an agile environment to streamline tax
                    compliance processes by developing VBA scripts to push and pull data between
                    Excel, tax software (TaxPrep), and forms (Adobe Acrobat).
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)

const ProjectsAccordion = (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Personal Website
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    I started this personal website you're on in September 2020 and it is ever-changing.
                    This is a React app coded in JavaScript and HTML. It is designed by yours truly
                    and styled with CSS and the Flexbox layout model.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Quadris, UWaterloo CS246 Final Project
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Waterloo, ON // July 2018</strong>
                <p>
                    In a team of 3 for a final project, we developed a Tetris-like tile-matching
                    puzzle game. I was in charge of block creation and handling levels with
                    varying obstacles and block-shape rarities. I also tested all commands and
                    aspects of the code including block movements, queued blocked, levels, the
                    point system, and game reset.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Predictive Bot, KPMG LLP
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Jan. – Apr. 2018</strong>
                <p>
                    As part of a project with my work team that became the Sky AI Team off-hours,
                    we came up with a ML project idea to predict NBA game outcomes. I organized and
                    facilitated a meeting to align everyone's visions and set reachable task
                    goals. For this project, I experimented with Python's Beautiful Soup package
                    to web scrape historical game data into the database.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)

const EducationAccordion = (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="education-header">
                        Candidate for Bachelor of Mathematics<br />
                        <div className="university-text">
                            University of Waterloo, Sept. 2016 - Expected 2021
                        </div>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Major:</strong> (Honours, Co-op) Computational Mathematics<br />
                <strong>Minors:</strong> Computing, Combinatorics & Optimization
                <hr />
                <div className="courses resume-flex-row">
                    <div className="resume-col">
                        Relevant Courses:
                    </div>
                    <div className="resume-col">
                        Object-Oriented Software Dev. (C++, Bash), <br />
                        Algorithm Design & Data Abstraction (C), <br />
                        Functional Programming (Racket),
                    </div>
                    <div className="resume-col">
                        Data Types & Structures, <br />
                        Management Info. Systems, <br />
                        Logic & Computation
                    </div>
                </div>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)

export default Resume;