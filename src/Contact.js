import React from "react";
import emailIcon from './images/email-icon.svg';
import phoneIcon from './images/phone-icon.svg';
import linkedinIcon from './images/linkedin-icon.svg';
import './Contact.css';

function getContactCard(icon, header, hrefLink, displayedLink) {
    return (
        <div className="contact-card">
            <img className="contact-card-icon" src={icon} alt={header + " Icon"} width="40px"/>
            <div className="contact-card-text">
                <strong>{header}</strong>
                <br />
                <a className="contact-card-link" href={hrefLink} target="_blank">
                    {displayedLink}
                </a>
            </div>
        </div>
    )
}

const Contact = (
    <div className="contact-container">
        {getContactCard(
            phoneIcon, "Phone",
            "tel:647-986-7280", "(647) 986 - 7280"
        )}
        {getContactCard(
            emailIcon, "Email",
            "mailto: jennyzhguan@gmail.com", "jennyzhguan@gmail.com"
        )}
        {getContactCard(
            linkedinIcon, "LinkedIn",
            "https://www.linkedin.com/in/jzhguan/","linkedin.com/in/jzhguan/"
        )}
    </div>
)

export default Contact;