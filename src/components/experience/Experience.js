import React, { useState } from "react";
import WorkAlert from "./WorkAlert";
import "./experience.css";
import WorkTimeline from "./WorkTimeline";
import WorkDetails from "./WorkDetails";
import { Experiences } from "../../commons/masterData/masterData";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";

export default function Experience() {
  const [activeJob, setActiveJob] = useState(3);

  function onChangeActiveJob(aj) {
    console.log(aj);

    setActiveJob(aj);
  }
  return (
    <>
      {/* //TODO :  WORK ALERT BANNER */}
      {/* <WorkAlert/> */}
      <SectionTitleWrapper titleText={"Where I've Worked!..."}/>
      <div className="work">

        <div className="d-flex-row">
          <WorkTimeline
            experiences={Experiences}
            activeJob={activeJob}
            onChangeActiveJob={onChangeActiveJob}
          />
          <WorkDetails
            job={Experiences.filter((elem) => elem.jobId == activeJob)[0]}
          />
        </div>
      </div>
    </>
  );
}
