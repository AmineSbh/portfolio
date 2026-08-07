import React from 'react';
import PropTypes from 'prop-types';

function Card({ image, title, description, viewLink, codeLink, animationDelay }) {
  return (
    <div 
      className="box tilt"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={animationDelay}
    >
      <img 
        draggable="false" 
        src={image} 
        alt={title} 
        className="project-image" 
      />
      <div className="content-card">
        <div className="tag">
          <h3>{title}</h3>
        </div>
        <div className="desc">
          <p>{description}</p>
          <div className="btns">
            <a
              href={viewLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-eye"></i> Voir
            </a>
            <a
              href={codeLink}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  viewLink: PropTypes.string,
  codeLink: PropTypes.string,
  animationDelay: PropTypes.number,
};

Card.defaultProps = {
  viewLink: '#',
  codeLink: '#',
  animationDelay: 0,
};

export default Card;
