import React from 'react';
import Project from './Project';

const projects = [
  { title: 'Project 1', img: 'path/to/image1.jpg', live: 'https://live1.com', repo: 'https://github.com/repo1' },
  { title: 'Project 2', img: 'path/to/image2.jpg', live: 'https://live2.com', repo: 'https://github.com/repo2' },
  // Add more projects as needed
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;
