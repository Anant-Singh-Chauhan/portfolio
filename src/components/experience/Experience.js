import React, { useState } from "react";
import WorkAlert from "./WorkAlert";
import "./experience.css";
import WorkTimeline from "./WorkTimeline";
import WorkDetails from "./WorkDetails";
import { Experiences } from "../../commons/masterData/masterData";
import { ExperienceContext } from "../../store/experience-context";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";

export default function Experience() {
  const [activeJob, setActiveJob] = useState(3);

  const experienceCtxValue = {
    selectedExperienceId: activeJob,
    handleExperienceSelection: setActiveJob,
  };
  return (
    <>
      {/* //TODO :  WORK ALERT BANNER */}
      {/* <WorkAlert/> */}
      <SectionTitleWrapper titleText={"Where I've Worked!..."} />
      <ExperienceContext.Provider value={experienceCtxValue}>
        <div className="work">
          <div className="d-flex-row">
            <WorkTimeline />
            <WorkDetails
              job={Experiences.filter((elem) => elem.jobId == activeJob)[0]}
            />
          </div>
        </div>
      </ExperienceContext.Provider>
    </>
  );
}
