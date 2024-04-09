import React from "react";

export default function OnJobProject({ project }) {
  return (
    <div className="onJob_project">
      <h3 className="onJob_project_title">{project.projectTitle}</h3>
      <ul className="onJob_project_details">
        {project.projectContributions.map((cntrbtn) => (
          <li key={project.projectTitle+(Math.random()*100)}>{cntrbtn}</li>
        ))}
      </ul>
    </div>
  );
}
