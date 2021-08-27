import React from 'react';
import SkillCard from '../SkillCard/SkillCard';
import "./Skills.css"


function Skills() {
    return (
        <section className="skill-section section" id="skill-section">
            <div className="inner">
                <div className="section-heading">
                    <h2 className="heading-primary">SKILLS</h2>
                </div>
                <div className="section-lead">
                <p>My skills of Programing</p>
            </div>
            <div className="section-body skill">
                <div className="skill-list">
                    <SkillCard 
                        icon={"fa-html5"} 
                        title={"HTML5/CSS3"} 
                        rate={"rate5"} 
                        text={"can do basic coding, including responsive and Sass."}
                    />
                    <SkillCard 
                        icon={"fa-js"} 
                        title={"JavaScript"} 
                        rate={"rate4"} 
                        text={"Except for complicated code, basic code can be written without any problem."}
                    />
                    <SkillCard 
                        icon={"fa-java"} 
                        title={"Java"} 
                        rate={"rate3"} 
                        text={"Basic writing and reading is possible"}
                    />
                    <SkillCard 
                        icon={"fa-react"} 
                        title={"React.js"} 
                        rate={"rate3"}  
                        text={"I have the basics. It is also possible to rewrite a site made with Html to a site using React"}
                    />
                    
                </div>
            </div>
          </div>
        </section>
    )
}

export default Skills
