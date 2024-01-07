import React from "react";
import "./header.css";
import {ascLogo} from '../../assests/images/images';

export default function Header() {
  return (
    <header className="portfolioHeader">
      <div className="ascLogo">
        <img src={ascLogo} alt="ascLogo" className="ascLogo"/>
      </div>
      <div className="routesDiv">
        <button className="routes">About</button>
        <button className="routes">Work</button>
        <button className="routes">Contact</button>
      </div>
    </header>
  );
}
