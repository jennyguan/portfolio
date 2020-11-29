import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import React from "react";
import './Accordion.css';

export const ExperiencesAccordion = (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Full Stack Web Developer at Polar [2020]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Remote // Sept. – Dec. 2020</strong>
                <p>
                    For my first fully-remote internship, I developed client-facing features
                    on virtual machine environments and effectively traced and debugged code
                    using VSCode and Chrome DevTools. The features I implemented improved
                    usability of the web product by enhancing UI (JavaScript, CSS, React),
                    and expanded client functionality in Django admin (Python) with database
                    migrations. I also gained further familiarity with Git and JIRA.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    iOS Computer Engineer at Flybits [2020]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Jan. – Apr. 2020</strong> (Remote halfway through)
                <p>
                    As a new iOS developer on the Consumer Experience team, I started this internship by
                    completing Stanford's iOS App Development course lectures. I then developed SDK features in Swift
                    involving UI changes, caching, HTTP requests, and more. Prior to every release, all-hands prepared
                    and manually executed a detailed test plan using Xcode Simulator, Instruments, and Charles.
                    I documented all tasks in JIRA, and engaged in agile scrum meetings such as daily
                    stand-up, sprint planning, and retrospective.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Full Stack Web Developer at Properly [2019]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // May – Aug. 2019</strong>
                <p>
                    I worked at Properly when the company was located in downtown Toronto's start-up
                    hub, OneEleven. Working collaboratively with the designer and the small dev team,
                    I developed the front-end of an active listing site (JavaScript,
                    CSS, React, Redux) for beta release. I also implemented back-end (Python) systems
                    and APIs with AWS Serverless architecture (Lambda, S3, DynamoDB, CloudFormation)
                    to fetch and pull data powering the listing site and operations web portal.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Software Developer at BAML [2018]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Sept. – Dec. 2018</strong>
                <p>
                    At Bank of America Merrill Lynch, I worked alone on reimplementing a report generator feature on
                    the front-office trading system to fix a database security issue. I designed
                    the UI in C# with WinForms, and the client activity data was fetched using complex SQL
                    queries and procedures. This data was then returned through Java endpoints that
                    I created and tested with Postman.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Software Developer at KPMG [2018]
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

export const ProjectsAccordion = (
    <Accordion allowMultipleExpanded allowZeroExpanded>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Personal Website
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Sept. 2020</strong>
                <p>
                    This website was started in September 2020 and it's ever-changing.
                    It's a React app coded in JavaScript and HTML, while responsively
                    designed and styled with CSS and the Flexbox layout model.
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
                    In a team of 3, I developed a Tetris-like tile-matching puzzle game for a school
                    project. I was in charge of block creation and handling levels with
                    varying obstacles and block-shape rarities. I also tested all commands and
                    aspects of the code including block movements, queued blocked, levels, the
                    point system, and game reset.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Predictive Bot, KPMG
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Jan. – Apr. 2018</strong>
                <p>
                    My team, that became the Sky AI Team off-hours, collaboratively
                    came up with a ML project idea to predict NBA game outcomes. I organized and
                    facilitated a meeting to align everyone's visions and set reachable task
                    goals. For this project, I experimented with Python's Beautiful Soup package
                    to web scrape historical game data into the database.
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)

export const EducationAccordion = (
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
                        Functional Programming (Racket),<br />
                    </div>
                    <div className="resume-col">
                        Computers & Computer Systems, <br />
                        Management Info. Systems, <br />
                        Data Types & Structures
                    </div>
                </div>
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>
)