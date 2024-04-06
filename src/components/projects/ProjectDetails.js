import { React, useContext } from "react";
import { ProjectContext } from "../../store/projects-context";
import { SelfProjects as PROJECTS } from "../../commons/masterData/masterData";
import { ReactComponent as GithubLogo } from "../../assests/images/tech_icons/githubLogo.svg";
import { ReactComponent as LiveLogo } from "../../assests/images/tech_icons/liveLogo.svg";

export default function ProjectDetails() {
  const { selectedProjectId } = useContext(ProjectContext);
  return (
    <div className="project_details whiteRoundedBorder">
      {PROJECTS.filter((element) => element.id == selectedProjectId).map(
        (prj) => (
          <div key={prj.id}>
            <div className="d-flex-row project_title">
              <h2 className="">{prj.title}</h2>
              <div className="d-flex-row project_action_div">
                {prj.liveLink.length != 0 && (
                  <a
                    className="project_action_item"
                    href={prj.liveLink}
                    target="blank"
                  >
                    <LiveLogo/>
                  </a>
                )}
                {prj.githubLink.length != 0 && (
                  <a
                    className="project_action_item"
                    href={prj.githubLink}
                    target="blank"
                  >
                    <GithubLogo/>

                  </a>
                )}
              </div>
            </div>
            <ul className="project_description">
              {prj.description.map((desc) => (
                <li key={prj.id + Math.random() * 1000}>{desc}</li>
              ))}
            </ul>

            <div className="toolsUsed">
              Tools Used:{" "}
              {prj.toolsUsed.map((tool) => (
                <span key={prj.id + tool}>{tool}, </span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
