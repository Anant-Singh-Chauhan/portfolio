import React from "react";
import "./header.css";
import {ascLogo} from '../../assests/images/images';
import Resume from '../../assests/Anant\'s_Resume_Oct24.pdf';
import { Profile } from "../../commons/masterData/masterData";

export default function Header() {
  const email = Profile.mail;
  return (
    <header className="portfolioHeader">
      <a className="ascLogo" href="#">
        <img src={ascLogo} alt="ascLogo" className="ascLogo"/>
      </a>
      <div className="routesDiv">
        <a className="routes"  href={Resume} down={"true"}
          target="_blank">Resume</a>
        <a className="routes" href={"mailto:"+email} target="_blank">Contact</a>
      </div>
    </header>
  );
}
