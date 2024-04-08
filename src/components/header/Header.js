import React from "react";
import "./header.css";
import {ascLogo} from '../../assests/images/images';
import Resume from '../../assests/Anant\'s_Resume_Apr24.pdf';

export default function Header() {
  return (
    <header className="portfolioHeader">
      <a className="ascLogo">
        <img src={ascLogo} alt="ascLogo" className="ascLogo"/>
      </a>
      <div className="routesDiv">
        <a className="routes"  href={Resume} down
          target="_blank">Resume</a>
        <a className="routes">Contact</a>
      </div>
    </header>
  );
}
