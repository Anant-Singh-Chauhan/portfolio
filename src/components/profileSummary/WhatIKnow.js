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
import { ReactComponent as MongoLogo } from "../../assests/images/tech_icons_svg/mongoLogo.svg";
import { ReactComponent as SqlServerLogo } from "../../assests/images/tech_icons_svg/sqlServerLogo.svg";
import SectionTitleWrapper from "../helper/SectionTitleWrapper";
export default function WhatIKnow() {
  return (
    <>
      <div className="whatIKnow" id="whatIKnow"></div>
      <SectionTitleWrapper titleText={"What I'm good at!..."} />
      <div className="wrapper">
        <div className="cols">
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <HtmlLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <CssLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <JsLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <ReactLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>ReactJs</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <NodeLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>NodeJs</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <DotNetLLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>.NET</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <CsLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>C#</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <AspLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>ASP .NET</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <FlutterLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Flutter</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <DartLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Dart</p>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <ExpressLogo className="techIconsSvg" id="expressLogo" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>ExpressJS</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            onTouchStart={() => this.classList.toggle("hover")}
          >
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <MongoLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart={() => this.classList.toggle("hover")}>
            <div className="container">
              <div className="front" style={{ backgroundColor: "black" }}>
                <div className="inner">
                  <SqlServerLogo className="techIconsSvg" />
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>MS SQL Server</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
