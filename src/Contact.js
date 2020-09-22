import React from "react"

function Contact(props) {
    return (
        <div className="content-container">
            <h1>Contact</h1>
            <div>
                <p>Email: <a href="mailto: jennyzhguan@gmail.com">jennyzhguan@gmail.com</a></p>
                <p>Phone: <a href="tel:647-986-7280">(647) 986 - 7280</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jzhguan/" target="_blank">www.linkedin.com/in/jzhguan/</a></p>
            </div>
        </div>
    )
}

export default Contact;