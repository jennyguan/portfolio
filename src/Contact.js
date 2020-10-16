import React from "react";
import emailIcon from './images/email-icon.png';
import phoneIcon from './images/phone-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import './Contact.css';

function Contact(props) {
    return (
        <div className="content-container">
            <h1>Contact</h1>
            <div className="contact-info">
                <div className="contact-card">
                    <h3>LinkedIn</h3>
                    <a className="contact-card-link" href="https://www.linkedin.com/in/jzhguan/" target="_blank">
                        www.linkedin.com/in/jzhguan/
                    </a>
                </div>
                <div className="contact-card">
                    <h3>Email</h3>
                    <a className="contact-card-link" href="mailto: jennyzhguan@gmail.com">
                       jennyzhguan@gmail.com
                    </a>
                </div>
                <div className="contact-card">
                    <h3>Phone</h3>
                    <a className="contact-card-link" href="tel:647-986-7280">
                        (647) 986 - 7280
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;