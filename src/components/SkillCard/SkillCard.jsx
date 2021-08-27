import React from 'react';
import "./SkillCard.css"

function SkillCard(props) {
    return (
        <div className="skill-item">
            <div className="skill-image-wrapper">
                <p><i className={`fab ${props.icon} skill-icon`}></i></p>
            </div>
            <div className="skill-body">
                <h3 className="skill-title">{props.title}</h3>
                    <div className="skill-rating rating">
                        <div className={`rate ${props.rate}`}></div>
                    </div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default SkillCard


