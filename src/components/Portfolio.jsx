import Project from './Project';

const projects = [
  { title: 'Note Taker', img: '/img/NoteTaker.JPG', live: 'https://note-list-page.onrender.com/', repo: 'https://github.com/SleekWingX/note-list-page' },
  { title: 'Nest Cast', img: '/img/NestCast.JPG', live: 'https://mpredelus3.github.io/nest-cast/home.html', repo: 'https://github.com/mpredelus3/nest-cast'},
  { title: 'Progressive Web Application - Jate', img: '/img/jate.png', live: 'https://progressive-web-application-jate.onrender.com/', repo: 'https://github.com/SleekWingX/progressive-web-application' },
  { title: 'Task Board', img: '/img/TaskBoard.JPG', live: 'https://sleekwingx.github.io/week-5-challenge-task-board/', repo: 'https://github.com/SleekWingX/week-5-challenge-task-board' },
  { title: 'Weather Dashboard', img: '/img/WeatherDashboard.JPG', live: 'https://sleekwingx.github.io/week-6-weather-dashboard/', repo: 'https://github.com/SleekWingX/week-6-weather-dashboard' },
  { title: 'Employee Payroll Tracker', img: '/img/EmployeePayrollTracker.jpg', live: 'https://sleekwingx.github.io/week-3-javascript-project-jack-yazzie/', repo: 'https://github.com/SleekWingX/week-3-javascript-project-jack-yazzie' }
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </section>
);

export default Portfolio;
