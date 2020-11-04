import React from "react";
import emailIcon from './images/email-icon.svg';
import phoneIcon from './images/phone-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import './Contact.css';

function getContactCard(icon, header, hrefLink, displayedLink) {
    return (
        <div className="contact-card">
            <div className="contact-card-column">
                <img className="contact-card-icon" src={icon} alt={header + " Icon"}/>
            </div>
            <div className="contact-card-column">
                <h3>{header}</h3>
                <a className="contact-card-link" href={hrefLink} target="_blank">
                    {displayedLink}
                </a>
            </div>
        </div>
    )
}

function Contact(props) {
    return (
        <div className="content-container">
            <div className="header-animation"><h1>Contact</h1></div>
            <div className="contact-info">
                {getContactCard(
                    linkedinIcon,"LinkedIn",
                    "https://www.linkedin.com/in/jzhguan/","www.linkedin.com/in/jzhguan/"
                )}
                {getContactCard(
                    emailIcon, "Email",
                    "mailto: jennyzhguan@gmail.com", "jennyzhguan@gmail.com"
                )}
                {getContactCard(
                    phoneIcon, "Phone",
                    "tel:647-986-7280", "(647) 986 - 7280"
                )}
            </div>
        </div>
    )
}

export default Contact;