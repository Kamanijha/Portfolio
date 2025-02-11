import React from 'react';
import weatherApp from "../../public/weatherApp.png"
import focusOnToday from "../../public/focus-on-today.png"
import portfolio from "../../public/portfolio.png"
function Projects() {
  const projects = [
    {
      id: 1,
      title: ` weather app Developed a real-time weather application that detects the user’s location and displays current
weather a 5-day forecast.Integrated OpenWeatherMap API to fetch live weather data with search functionality
for any city.Implemented a responsive UI, dynamic weather icons, and geolocation-based weather updates.`,
      img: weatherApp,
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: `Focus On Today Focus On Today app Set and Track 3 Goals Per Day. Local Storage Support Responsive Design Motivational
       Quote Display`,
      img: focusOnToday,
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: `Portfolio Website – Built with React.js, Tailwind CSS & 
               different Libraries `,
      img: portfolio,
      link: 'https://example.com/project3',
    },
    

  ];

  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-4xl font-bold text-center mb-10'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group'
          >
            <div className='relative bg-gray-200 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300'>
              {/* Laptop Frame */}
              <div className='p-4 bg-gray-900 rounded-t-lg'>
                <div className='w-full h-1 bg-gray-500 rounded-full'></div>
              </div>
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className='w-full h-32 object-contain'
              />
              {/* Project Title */}
              <div className='p-4 bg-white'>
                <h3 className='text-xs font-semibold text-gray-800'>
                  {project.title}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;

