import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/HomePage/Home'
import HeaderDM from './components/HeaderDM/HeaderDM';
import Footer from './components/Footer/Footer';
import Apropos from './pages/AproposPage/Apropos'

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
       <ScrollToTop />
      <HeaderDM />
      <Routes> 
        <Route path="/" element= {<Home />}/>
        <Route path="apropos" element= {<Apropos />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
