import React from 'react';
import './Skills.css';
import { skills } from '../../data/Skills';

const Skills = () => {
  return (
    <section id="skills" className="SkillsContainer">
      <h2 className="SkillsTitle">Skills</h2>

      <div className="SkillsGrid">
        {skills.map((skill) => (
          <div key={skill.name} className="SkillCard">
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
