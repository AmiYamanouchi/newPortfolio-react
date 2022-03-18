import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <section className="contact-section section" id="contact-section">
            <div className="inner">
                <div className="section-heading">
                    <h2 className="heading-primary">CONTACT</h2>
                 </div>
            <div className="section-lead">
                <p>contact me by <br className="sp-only"/>E-mail or SNS</p>
            </div>
            <div className="section-body contact">
                <ul className="contact-list">
                    <li className="contact-item">
                        <a className="contact-link" href="https://twitter.com/" target="_blank" rel="noreferrer"><img className="contact-image"
                            src="img/contact/icon_tw.png" alt="" /></a>
                    </li>
                    <li className="contact-item">
                        <a className="contact-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img className="contact-image"
                            src="img/contact/icon_fb.png" alt=""/></a>
                    </li>
                </ul>
            <div className="contact-text">amiyamanouchi@gmail.com *it's not real!</div>
          </div>
        </div>
      </section>
    )
}

export default Contact
