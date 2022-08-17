import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Dismatch from './components/Dismatch';

function App() {
  return (    
    <div className="App">      
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Dismatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
