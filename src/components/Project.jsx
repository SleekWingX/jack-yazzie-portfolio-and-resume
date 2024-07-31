import PropTypes from 'prop-types';

const Project = ({ title, img, live, repo }) => (
  <div className="project">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <a href={live} target="_blank" rel="noopener noreferrer">Live Site</a>
    <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default Project;