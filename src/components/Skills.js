// src/components/Skills.js
import React from 'react';

const skills = [
  { name: 'Network Security', icon: '🛡️' },
  { name: 'Incident Response', icon: '🚨' },
  { name: 'SIEM (Splunk, ELK)', icon: '🔍' },
  { name: 'Cloud Security (AWS, Azure)', icon: '☁️' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span>{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
