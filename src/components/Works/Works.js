import React from 'react'
import WorkCard from '../WorkCard/WorkCard';
import "./Works.css";

function Works() {
    return (
        <section className="works-section section" id="works-section">
            <div className="inner">
                <div className="section-heading">
                    <h2 className="heading-primary">WORKS</h2>
                </div>
                <div className="section-lead">
                    <p>A record of web (design and coding) production.<br/>This is a group-created projects and an individual-created project as part of the class.</p>
                </div>
                <div className="section-body works">
                    <div className="works-list js-my-gallery">

                        <WorkCard title={"Vancouver Ramen Info"} text={"Design / Javascript / Coding(Responsive)"} date={"First Project 2020.01.08 ~ 1.12"} url={"https://amiyamanouchi.github.io/VanRamen/"} photoUrl={"VanRamenInfo"}/>
                        <WorkCard title={"Mr. Ramen"} text={"Design / Javascript / Coding(Responsive)"} date={"Second Project 2020.01.08 ~ 1.12"} url={"https://boring-hodgkin-12bdfa.netlify.app/"} photoUrl={"RamenMan"}/>
                        <WorkCard title={"My Blog Site"} text={'Design / Next.js / Coding(Responsive) '} date={"Third Project 2020.01.08 ~ 1.12"} url={"https://amiyamanouchi-blog.vercel.app/"} photoUrl={"myBlog"}/>
                        <WorkCard title={"We Co-op"} text={'React / Javascript / Coding(Responsive)'} date={'Fourth Project 2020.05.01 ~ 5.12'} url={"https://we-coop.netlify.app/"} photoUrl={"WeCoop"}/>

             
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works
