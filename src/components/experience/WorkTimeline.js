import React from "react";
import { ReactComponent as SelectionLogo } from "../../assests/images/svgs/selectionLogo.svg";

export default function WorkTimeline({
  experiences,
  activeJob,
  onChangeActiveJob,
}) {
  return (
    <div className="workTimeline">
      {experiences.map((element) => (
        <div
          key={element.jobId}
          className={
            activeJob === element.jobId
              ? "timeline_detail active"
              : "timeline_detail"
          }
          onClick={() => {
            onChangeActiveJob(element.jobId);
          }}
        >
          <div className="d-flex-row timeline_detail_title">
            <h5>{element.companyName}</h5>
            <SelectionLogo className="selectionLogo" />
          </div>
        </div>
      ))}
    </div>
  );
}
