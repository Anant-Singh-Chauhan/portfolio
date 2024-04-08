import React from "react";
import { ReactComponent as HtmlLogo } from "../../assests/images/tech_icons_svg/htmlLogo.svg";
import { ReactComponent as CssLogo } from "../../assests/images/tech_icons_svg/cssLogo.svg";
import { ReactComponent as JsLogo } from "../../assests/images/tech_icons_svg/jsLogo.svg";
import { ReactComponent as DotNetLLogo } from "../../assests/images/tech_icons_svg/dotNetLogo2.svg";
import { ReactComponent as CsLogo } from "../../assests/images/tech_icons_svg/csLogo.svg";
import { ReactComponent as AspLogo } from "../../assests/images/tech_icons_svg/aspLogo2.svg";
import { ReactComponent as FlutterLogo } from "../../assests/images/tech_icons_svg/flutterLogo.svg";
import { ReactComponent as DartLogo } from "../../assests/images/tech_icons_svg/dartLogo.svg";
import { ReactComponent as ReactLogo } from "../../assests/images/tech_icons_svg/reactLogo.svg";
import { ReactComponent as NodeLogo } from "../../assests/images/tech_icons_svg/nodeLogo.svg";
import { ReactComponent as ExpressLogo } from "../../assests/images/tech_icons_svg/expressLogo.svg";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";
export default function WhatIKnow() {
  return (
    <>
      <SectionTitleWrapper titleText={"What I'm good at!..."} />
      <div className="whatIKnow">
        <HtmlLogo className="techIconsSvg" />
        <CssLogo className="techIconsSvg" />
        <JsLogo className="techIconsSvg" />
        <ReactLogo className="techIconsSvg" />
        <NodeLogo className="techIconsSvg" />
        <DotNetLLogo className="techIconsSvg" />
        <CsLogo className="techIconsSvg" />
        <AspLogo className="techIconsSvg" />
        <FlutterLogo className="techIconsSvg" />
        <DartLogo className="techIconsSvg" />
        <ExpressLogo className="techIconsSvg" id="expressLogo"/>
      </div>
    </>
  );
}
