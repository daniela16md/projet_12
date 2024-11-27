import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projets from './pages/Projets/Projets';
import Contact from './pages/Contact/Contact';
import HeaderDM from './components/HeaderDM/HeaderDM';
import Footer from './components/Footer/Footer';
import SoftSkills from './pages/Softskills/Softskills';

function App() {
  return (
    <Router>
      <HeaderDM />
      <Routes> 
        <Route path="/" element= {<Home />}/>
        <Route path="/projets" element= {<Projets />}/>
        <Route path="/dashboard" element= {<Contact/>}/>
        <Route path="/softskills" element= {<SoftSkills/>}/>
        <Route path="/contact" element= {<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
