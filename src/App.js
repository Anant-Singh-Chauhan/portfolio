import './App.css';
import { PortfolioColors } from './commons/portfolioColors';
import Header from './components/header/Header';
import ProfileSummary from './components/profileSummary/ProfileSummary';

function App() {
  return (
    <div className="App" >
      <Header/>
      <ProfileSummary/>
    </div>
  );
}

export default App;
