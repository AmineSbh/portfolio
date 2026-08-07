import PropTypes from 'prop-types';
import { FaEye, FaCode } from 'react-icons/fa';

// Un lien vide ou réduit à "#" ne doit pas produire de bouton cliquable.
const isUsable = (link) => Boolean(link) && link !== '#';

function Card({
  Icon,
  title,
  description,
  tags = [],
  viewLink = null,
  codeLink = null,
  viewLabel = 'Voir',
  codeLabel = 'Code',
  animationDelay = 0,
}) {
  return (
    <article
      className="box"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay={animationDelay}
    >
      <div className="card-icon" aria-hidden="true">
        {Icon ? <Icon size={64} /> : null}
      </div>

      <div className="content-card">
        <div className="tag">
          <h3>{title}</h3>
        </div>
        <div className="desc">
          <p>{description}</p>

          {tags.length > 0 && (
            <ul className="card-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          {(isUsable(viewLink) || isUsable(codeLink)) && (
            <div className="btns">
              {isUsable(viewLink) && (
                <a
                  href={viewLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEye aria-hidden="true" /> {viewLabel}
                  <span className="sr-only"> — {title}</span>
                </a>
              )}
              {isUsable(codeLink) && (
                <a
                  href={codeLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode aria-hidden="true" /> {codeLabel}
                  <span className="sr-only"> — {title}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  Icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  viewLink: PropTypes.string,
  codeLink: PropTypes.string,
  viewLabel: PropTypes.string,
  codeLabel: PropTypes.string,
  animationDelay: PropTypes.number,
};

export default Card;
