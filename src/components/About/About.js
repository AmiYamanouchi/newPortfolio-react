import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about-section section" id="about-section">
            <div className="inner">
                <div className="section-heading">
                    <h2 className="heading-primary">ABOUT ME</h2>
                </div>
                <div className="section-lead">
                    <p>
                        Welcome to My portfolio!
                    </p>
                </div>
                <div className="section-body about">
                    <div className="about-item">
                        <div className="about-image-wrapper">
                            <img className="about-image lazyload fadein" data-src="img/about/ami.png" alt="" />
                            {/* <!-- <img className="about-image lazyload fadein" data-src="img/about/aboutme2.jpg" alt=""> --> */}
                        </div>
                        <div className="about-body">
                            <p>
                                Hello, I'm Ami Yamanouchi. I was born in Aichi prefecture and raised in Tokyo. When I was a high school student on the way, I lived in Kentucky, USA for three years. After graduating from university in Japan, I worked for the Japan Softball Association for four years as a member of society, and then came to Vancouver, Canada last August. I am currently taking a web development course at Cornerston College in Vancouver.
                            </p>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
