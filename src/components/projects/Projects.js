import { React, useState } from "react";
import ProjectsMenu from "./ProjectsMenu";
import ProjectDetails from "./ProjectDetails";
import { ProjectContext } from "../../store/projects-context";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";

import "./projects.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(1);

  const projectCtxValue = {
    selectedProjectId: selectedProject,
    handleProjectSelection: setSelectedProject,
  };
  return (
    <>
      <SectionTitleWrapper titleText={"What else I've worked on!..."} />
      <ProjectContext.Provider value={projectCtxValue}>
        <div className=" m1p1 projectsDiv d-flex-row">
          <ProjectDetails />
          <ProjectsMenu />
        </div>
      </ProjectContext.Provider>
    </>
  );
}
