import React from "react"
import resume from './images/Resume.svg';
import downloadResume from './images/Resume.pdf';
import scrollDownIcon from './images/scroll-down-icon.svg'
import scrollUpIcon from './images/scroll-up-icon.svg'
import downloadIcon from './images/download-icon.svg';
import './Resume.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

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
                    <h2>Summary of Skills</h2>
                    <ul>
                        <li>Diligently learns new material while openly accepting feedback</li>
                        <li>Proven leader with exceptional communication and teamwork skills</li>
                        <li>Extremely responsible and organized even in a fast-paced environment</li>
                    </ul>
                        <strong>Languages: </strong>
                        <li>Proficient: Python, JavaScript, CSS, HTML, Bash, SQL</li>
                        <li>Familiar with: Swift, C#, Java, C++, C, VBA</li>
                        <strong>Technologies: </strong>
                            React, Django, Git, JIRA, Redux, AWS Serverless, Xcode
                            (Simulator, Instruments), Charles, Postman


                    <h2>Experience</h2>
                    {ExperienceTimeline}

                    <h2>Education</h2>
                    <p><strong>Candidate for Bachelor of Mathematics</strong><br/>
                        University of Waterloo, Sept. 2016 - Expected 2021</p>
                    <ul>
                        <li>Major: (Honours, Co-op) Computational Mathematics<br />
                            Minors: Computing, Combinatorics & Optimization</li>
                        <li>Relevant Courses: Object-Oriented Software Dev. (C++, Bash), Algorithm
                            Design & Data Abstraction (C), Functional Programming (Racket), Data
                            Types & Structures, Management Info. Systems, Logic & Computation</li>
                    </ul>
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

const ExperienceTimeline = (
    <Timeline>
        <TimelineItem
            classname="work-exp"
            dateText="Sept. – Dec. 2020"
        >
            <h3>Full Stack Web Developer, Polar</h3>
            <h4>Toronto, ON</h4>
            <ul>
                <li>Developed on virtual machine environments for all JIRA tickets, and
                    deployed Git branches to VMs for QA testing</li>
                <li>Improved usability of client-facing web app by adding features and
                    changing UI in JavaScript, CSS, and React</li>
                <li>Expanded client functionality in Django admin with database
                    migration files in Python</li>
                <li>Upheld code stability standards by creating unit tests and used Jenkins
                    to check and compare pipelines regularly</li>
            </ul>
        </TimelineItem>

        <TimelineItem
            classname="work-exp"
            dateText="Jan. – Mar. 2020"
        >
            <h3>iOS Engineer, Flybits Inc.</h3>
            <h4>Toronto, ON</h4>
            <ul>
                <li>Completed iOS app development training via Stanford’s CS193P
                    online course lectures while actively working through demos</li>
                <li>Developed features for SDK releases involving UI changes, HTTP
                    requests, JWTs, caching, and more using Swift in Xcode</li>
                <li>Prepared and manually executed detailed test plans before release
                    using Xcode Simulator, Instruments, and Charles, and performed
                    exploratory testing</li>
                <li>Documented tasks with JIRA, and engaged in agile scrum meetings
                    including daily stand-up, sprint planning, and retrospective</li>
            </ul>
        </TimelineItem>

        <TimelineItem
            classname="work-exp"
            dateText="May – Aug. 2019"
        >
            <h3>Full Stack Web Developer, Properly Inc.</h3>
            <h4>Toronto, ON</h4>
            <ul>
                <li>Developed front-end of active listing site in JavaScript and CSS
                    with React/Redux, and set up website behaviour tracking with
                    Google Analytics</li>
                <li>Implemented and tested back-end systems in Python using AWS Serverless
                    architecture (Lambda, DynamoDB, CloudFormation, CloudWatch)</li>
                <li>Built an end-to-end Python system and API for fetching data on
                    problematic homes, and displayed it in an operations web portal</li>
                <li>Pulled Multiple Listing Service data powering the active listing site
                    using the Real Estate Transaction Standard system framework in Python</li>
            </ul>
        </TimelineItem>

        <TimelineItem
            classname="work-exp"
            dateText="Sept. – Dec. 2018"
        >
            <h3>Software Developer, Bank of America Merrill Lynch</h3>
            <h4>Toronto, ON</h4>
            <ul>
                <li>Implemented report generator feature for front-office trading system
                    to improve database security</li>
                <li>Designed user interface in C# to select report parameters and display
                    results with data filtering and Excel export options using the Windows
                    Forms library</li>
                <li>Formulated complex SQL parameterized queries and stored procedures to
                    retrieve specific client activity data for Jasper Report and UI</li>
                <li>Created endpoints for Java backend server and tested them by sending
                    HTTP requests through Postman</li>
            </ul>
        </TimelineItem>

        <TimelineItem
            classname="project"
            dateText="July 2018"
        >
            <h3>Quadris, University of Waterloo CS246 Final Project</h3>
            <h4>Waterloo, ON</h4>
            <ul>
                <li>Developed a tile-matching puzzle game (similar to Tetris) in a team
                    of 3</li>
                <li>Handled levels and block creation with varying obstacles and block-shape
                    rarities per level</li>
                <li>Unit tested all aspects and commands including block movements, block-shape
                    requests, queued blocks, levels, point system, and game reset</li>
            </ul>

        </TimelineItem>

        <TimelineItem
            classname="work-exp"
            dateText="Jan. – Apr. 2018"
        >
            <h3>Software Developer, KPMG LLP</h3>
            <h4>Toronto, ON</h4>
            {/*<p>For my first internship, I joined the Tax Transformation & Technology*/}
            {/*    Team where I worked in a unique start-up culture that was hosted within*/}
            {/*    a well-established firm. I worked in an agile environment to streamline tax*/}
            {/*    compliance processes by developing VBA scripts to push and pull data between*/}
            {/*    Excel, tax software (TaxPrep), and forms (Adobe Acrobat).*/}
            {/*</p>*/}
            <ul>
                <li>Streamlined bulk tax compliance processes by developing <strong>VBA</strong>
                    scripts to push and pull data between Excel, tax software
                    (<strong>TaxPrep</strong>), & forms (<strong>Adobe Acrobat</strong>)</li>
                <li>Implemented and tested web-based questionnaire for managing transfers
                    of property from shareholders to corporations</li>
                <li>Automated the navigation and completion of tax-related forms in
                    multiple applications using BluePrism</li>
                <li>Time-managed and documented all tasks with team's agile project
                    management tools to ensure deadlines were always met and projects
                    could be passed on</li>
            </ul>
        </TimelineItem>

        <TimelineItem
            classname="project"
            dateText="Jan. – Apr. 2018"
        >
            <h3>Predictive Bot, KPMG LLP</h3>
            <h4>Toronto, ON</h4>
            <ul>
                <li>Organized and facilitated Sky AI Team meeting to align vision and set task
                    goals for a ML project to predict NBA game outcomes with a binary classifier</li>
                <li>Experimented with Python's Beautiful Soup package to web scrape historical
                    game data into a database as input for algorithm</li>
            </ul>

        </TimelineItem>
    </Timeline>
)

export default Resume;