import { React, useEffect } from "react";
import { logClientInfo } from "./loggerService";
import "./App.css";
import Header from "./components/header/Header";
import ProfileSummary from "./components/profileSummary/ProfileSummary";
import Experience from "./components/experience/Experience";
import "./commons/common.css";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    logClientInfo("info", "Portfolio accessed.");
  }, []);
  return (
    <div className="App border-1-1-solid">
      <Header />
      <ProfileSummary />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
