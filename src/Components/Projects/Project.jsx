import React from 'react';
import './Project.css';
import { projects } from '../../data/Projects';

const Project = () => {
  return (
    <section id="projects" className="ProjectContainer">
      <h2 className="ProjectTitle">Projects</h2>

      <div className="ProjectGrid">
        {projects.map((project) => (
          <div key={project.title} className="ProjectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="ProjectTech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a href={project.link} target="_blank">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
