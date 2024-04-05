import { React, useContext } from "react";
import { ProjectContext } from "../../store/projects-context";
import { SelfProjects as PROJECTS } from "../../commons/masterData/masterData";

export default function ProjectDetails() {
  const { selectedProjectId } = useContext(ProjectContext);
  return (
    <div className="project_details">
      {PROJECTS.filter((element) => element.id == selectedProjectId).map(
        (prj) => (
          <div key={prj.id}>
            <h2 className="project_title">{prj.title}</h2>
            <ul className="project_description">
              {prj.description.map((desc) => (
                <li key={prj.id + Math.random() * 1000}>{desc}</li>
              ))}
            </ul>

            <div className="toolsUsed">
              Tools Used:{" "}
              {prj.toolsUsed.map((tool) => (
                <span key={prj.id+tool}>{tool}, </span>
              ))}
            </div>

            <div className="d-flex-row project_action_div">
              {prj.liveLink.length != 0 && (
                <a
                  className="project_action_item"
                  href={prj.liveLink}
                  target="blank"
                >
                  Visit Project
                </a>
              )}
              {prj.githubLink.length != 0 && (
                <a
                  className="project_action_item"
                  href={prj.githubLink}
                  target="blank"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
