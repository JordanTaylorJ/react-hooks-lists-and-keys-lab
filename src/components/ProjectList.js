import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projItems = projects.map((project) => (
    <ProjectItem 
      key={project.id} 
      name={project.name}
      about={project.about}
      techologies={project.techologies}
    />
   ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projItems}</div>
    </div>
  );
}

export default ProjectList;
