import Project from './Project';

const projects = [
  { title: 'Progressive Web Application - Jate', img: 'src/assets/img/jate.png', live: 'https://progressive-web-application-jate.onrender.com/', repo: 'https://github.com/SleekWingX/progressive-web-application' },
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
