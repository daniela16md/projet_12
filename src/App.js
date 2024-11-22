import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projets from './pages/Projects/Projets';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element= {<Home />}/>
        <Route path="/projets" element= {<Projets />}/>
        <Route path="/dashboard" element= {<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
