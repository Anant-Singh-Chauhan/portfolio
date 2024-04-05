import {React, useState} from "react";
import ProjectsMenu from "./ProjectsMenu";
import ProjectDetails from "./ProjectDetails";
import { ProjectContext } from "../../store/projects-context";
import "./projects.css";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(1);

  const projectCtxValue = {
    selectedProjectId : selectedProject,
    handleProjectSelection : setSelectedProject
}
  return (
    <ProjectContext.Provider value={projectCtxValue}>
      <h3>What else I've worked on!</h3>
      <div className="whiteRoundedBorder m1p1 projectsDiv d-flex-row">
        <ProjectDetails />
        <ProjectsMenu />
      </div>
    </ProjectContext.Provider>
  );
}
