import React from "react";
import emailIcon from './images/email-icon.svg';
import phoneIcon from './images/phone-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import './Contact.css';

function Contact(props) {
    return (
        <div className="content-container">
            <h1>Contact</h1>
            <div className="contact-info">

                <div className="contact-card">
                    <div className="contact-card-column">
                        <img className="contact-card-icon" src={linkedinIcon} alt="LinkedIn Icon"/>
                    </div>
                    <div className="contact-card-column">
                        <h3>LinkedIn</h3>
                        <a className="contact-card-link" href="https://www.linkedin.com/in/jzhguan/" target="_blank">
                            www.linkedin.com/in/jzhguan/
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-card-column">
                        <img className="contact-card-icon" src={emailIcon} alt="Email Icon"/>
                    </div>
                    <div className="contact-card-column">
                        <h3>Email</h3>
                        <a className="contact-card-link" href="mailto: jennyzhguan@gmail.com">
                            jennyzhguan@gmail.com
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="contact-card-column">
                        <img className="contact-card-icon" src={phoneIcon} alt="Phone Icon"/>
                    </div>
                    <div className="contact-card-column">
                        <h3>Phone</h3>
                        <a className="contact-card-link" href="tel:647-986-7280">
                            (647) 986 - 7280
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;