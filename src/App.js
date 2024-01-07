import './App.css';
import Header from './components/header/Header';
import ProfileSummary from './components/profileSummary/ProfileSummary';
import Experience from './components/experience/Experience';
import './commons/common.css';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" >
      <Header/>
      <ProfileSummary/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
