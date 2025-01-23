import React from 'react';

import Navbar from '../../component/Navbar';


import styles from './projects.module.css';

const projects = [
  {
    name: 'Project 1',
    description: 'Dit is een website gemaakt met wordpress.',
    link: 'https://alibnayantowers.com',
    images: ['/img/img1.png', '/img/img2.png', '/img/img3.png'],
  },
  {
    name: 'Project 2',
    description: 'Dit is een website gemaakt met wordpress.',
    link: 'https://alibnayantowers.com',
    images: ['/img/img1.png', '/img/img2.png', '/img/img3.png'],
  }
  
];

const ProjectsPage = () => {
  return (

    <div className={styles.projectsContainer}>
        <Navbar />
    
      <h1>Onze Projecten</h1>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Bekijk het project
            </a>
            <div className={styles.imagesContainer}>
              {project.images.map((image, idx) => (
                <img key={idx} src={image} alt={`${project.name} foto ${idx + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
