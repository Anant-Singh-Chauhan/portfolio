import React, { useState, useEffect } from "react";
import { Profile } from "../../commons/masterData/masterData";
import { ReactComponent as GithubLogo } from "../../assests/images/svgs/githubLogo.svg";
import { ReactComponent as LinkedInLogo } from "../../assests/images/svgs/linkedInLogo.svg";
export default function Summary() {
  const [buildIsWeb, setBuildIsWeb] = useState(true);

  useEffect(() => {
    const buildSwicthInterval = setInterval(() => {
      setBuildIsWeb((prevState) => {
        return !prevState;
      });
    }, 3000);

    return () => {
      clearInterval(buildSwicthInterval);
    };
  }, []);
  return (
    <div className="summary">
      <p>Hi, My name is</p>
      <h1 className="profileName">{Profile.profileName}</h1>
      <h2 className="profileTagline">
        I build things for{" "}
        <span>
          {buildIsWeb ? Profile.buildThingsFor[0] : Profile.buildThingsFor[1]}
        </span>
      </h2>
      <p className="profileDescription">{Profile.profileSummary}</p>
      <div className="d-flex-row profile_actions">
        <a id="knowMore" href="#whatIKnow">
          Interested to know more?
        </a>
        <div className="d-flex-row project_action_div">
          {Profile.linkedIn.length != 0 && (
            <a
              className="project_action_item"
              href={Profile.linkedIn}
              target="_blank"
            >
              <LinkedInLogo />
            </a>
          )}
          {Profile.github.length != 0 && (
            <a
              className="project_action_item"
              href={Profile.github}
              target="_blank"
            >
              <GithubLogo />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
