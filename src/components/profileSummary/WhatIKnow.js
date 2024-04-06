import React from "react";
import {
  html_logo,
  css_logo,
  js_logo,
  csharp_logo,
  react_logo,
  node_logo,
  express_logo,
  flutter_logo,
  dotNet_logo,
  dart_logo,
} from "../../assests/images/images";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";
export default function WhatIKnow() {
  return (
    <>
      <SectionTitleWrapper titleText={"What I'm good at!..."}/>
      <div className="whatIKnow">
        <img src={html_logo} alt="html_logo" />
        <img src={css_logo} alt="css_logo" />
        <img src={js_logo} alt="js_logo" />
        <img src={csharp_logo} alt="csharp_logo" />
        <img src={react_logo} alt="react_logo" />
        <img src={node_logo} alt="node_logo" />
        <img src={express_logo} alt="express_logo" />
        <img src={flutter_logo} alt="flutter_logo" />
        <img src={dotNet_logo} alt="dotNet_logo" />
        <img src={dart_logo} alt="dart_logo" />
      </div>
    </>
  );
}
