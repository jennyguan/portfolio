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
                    and expanded client functionality in Django admin (Python) with database migrations.
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
                    Full Stack Web Developer at Properly [2019]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // May – Aug. 2019</strong>
                <p>
                    I worked at Properly when the company was still located in the start-up
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
                    Software Developer at BAML [2018]
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <strong>Toronto, ON // Sept. – Dec. 2018</strong>
                <p>
                    At Bank of America Merrill Lynch, I worked alone on reimplementing a report generator feature on
                    the front-office trading system to fix a database security issue. I designed
                    the UI in C# with WinForms, and the client activity data was fetched from SQL
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
                I started this personal website you're currently on in September 2020 and it is ever-changing.
                This is a React app coded in JavaScript and HTML. It is responsively designed
                and styled with CSS and the Flexbox layout model.
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
                    I developed a Tetris-like tile-matching puzzle game in a team of 3 for a school
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
                    With my work team that became the Sky AI Team off-hours, we collaboratively
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