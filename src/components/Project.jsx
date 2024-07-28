import React from 'react';

const Project = ({ title, img, live, repo }) => (
  <div className="project">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <a href={live} target="_blank" rel="noopener noreferrer">Live Site</a>
    <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
