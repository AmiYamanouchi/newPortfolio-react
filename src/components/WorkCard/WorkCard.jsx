import React from 'react';
import './WorkCard.css';

function WorkCard(props) {
    return (
        <figure className="works-item">
        <a href={`img/works/${props.photoUrl}.png`} data-size="960x720" className="works-image-wrapper works-link hover-action">
          <img className="works-image lazyload fadein" src="img/placeholder4x3.png" data-src={`img/works/${props.photoUrl}.png`}
            alt="" />
        </a>
        <figcaption className="works-body">
          <div className="works-title">{props.title}</div>
          <div className="works-text">{props.text}</div>
          <div className="works-text">{props.date}</div>

          <div className="works-url"><a className="works-url-link" href={props.url} target="_blank" rel="noopener noreferrer">Link</a></div>
        </figcaption>
      </figure>
    )
}

export default WorkCard
