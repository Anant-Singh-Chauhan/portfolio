import React from "react";
import ascLogo from "../../assests/asc_logo_1024x682.jpg";
import "./header.css";

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
