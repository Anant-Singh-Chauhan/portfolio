import React from "react";
import { hancock_logo, siemens_logo } from "../../assests/images/images";
import "./footer.css";

export default function Footer() {
  return (
    <div className="half-a-border-on-top m1p1 footerDiv">
      <div className="footer_text">
        During my career, I also had the chance to collaborate in different capacities with these great companies.
      </div>
      <div className="footer_images d-flex-row">
        <img src={hancock_logo} alt="Hancock Claims Logo" />
        <img src={siemens_logo} alt="Siemens Logo" />
      </div>
    </div>
  );
}
