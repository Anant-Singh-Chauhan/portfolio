import React, { useState } from "react";
import OnJobProject from "./OnJobProject";

export default function WorkDetails({ job }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  function onClickNext() {
    let maxLength = job.workContributions.length;
    if (activeProjectIndex < maxLength - 1)
      setActiveProjectIndex(activeProjectIndex + 1);
  }

  function onClickPrevious() {
    if (activeProjectIndex > 0) setActiveProjectIndex(activeProjectIndex - 1);
  }

  // need to reset {activeProjectIndex} on builds
  // of this component
  return (
    <div className="workDetails whiteRoundedBorder m1p1">
      <div className="workTitle">
        <h2 className="workTitle_designation">{job.designation}</h2>
        <h4 className="workTitle_company">{" @ " + job.companyName}</h4>
      </div>
      <h4 className="workDuration">{job.duration}</h4>
      <div>
        <h4 id="onJobHeading">On-Job Projects</h4>

        <OnJobProject project={job.workContributions[activeProjectIndex]} />

        {/* on Job Project Navigation  */}
        <div className="onJob_nav">
          {/* Prev Btn  */}

          <div
            className="onJob_nav_btns"
            onClick={() => {
              onClickPrevious();
            }}
          >
            <p>&larr;</p>
          </div>
          <div className="navChilds">
            {job.workContributions.map((e, index) => (
              <div
                key={e.projectTitle}
                className={
                  index === activeProjectIndex
                    ? "onJob_nav_child active"
                    : "onJob_nav_child"
                }
              ></div>
            ))}
          </div>
          {/* next Btn  */}

          <div
            className="onJob_nav_btns"
            onClick={() => {
              onClickNext();
            }}
          >
            <p>&rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
