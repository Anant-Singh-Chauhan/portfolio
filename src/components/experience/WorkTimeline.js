import React, {useContext} from "react";
import { ReactComponent as SelectionLogo } from "../../assests/images/svgs/selectionLogo.svg";
import { Experiences as experiences } from "../../commons/masterData/masterData";
import { ExperienceContext } from "../../store/experience-context";

export default function WorkTimeline({

}) {
  const {selectedExperienceId,handleExperienceSelection} = useContext(ExperienceContext);
  return (
    <div className="workTimeline">
      {experiences.map((element) => (
        <div
          key={element.jobId}
          className={
            selectedExperienceId === element.jobId
              ? "timeline_detail active"
              : "timeline_detail"
          }
          onClick={() => {
            handleExperienceSelection(element.jobId);
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
