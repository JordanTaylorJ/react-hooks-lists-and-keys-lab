import React from "react";

function ProjectItem({ name, about, technologies }) {
  const listTech = technologies && technologies.length ? technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  )) : null
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{listTech}</div>
    </div>
  );
}

export default ProjectItem;
