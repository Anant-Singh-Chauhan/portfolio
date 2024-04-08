import React from "react";
import "./header.css";
import {ascLogo} from '../../assests/images/images';

export default function Header() {
  return (
    <header className="portfolioHeader">
      <a className="ascLogo">
        <img src={ascLogo} alt="ascLogo" className="ascLogo"/>
      </a>
      <div className="routesDiv">
        <div className="routes">Resume</div>
        <div className="routes">Contact</div>
      </div>
    </header>
  );
}
