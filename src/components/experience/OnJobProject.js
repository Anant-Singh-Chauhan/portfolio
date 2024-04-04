import React from "react";

export default function OnJobProject({ project }) {
  return (
    <div className="onJob_project">
      <div>{project.projectTitle}</div>
      <ul>
        {project.projectContributions.map((cntrbtn) => (
          <li>{cntrbtn}</li>
        ))}
      </ul>
    </div>
  );
}
